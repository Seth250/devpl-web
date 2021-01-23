import _ from 'lodash'
import axios from 'axios'
import axiosRetry from 'axios-retry'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const seed = _.sample(['default', 'defaultseed', 'eee55e22'])

const baseURL = 'https://randomuser.me/api/'

export const defaultUrl = `${baseURL}?seed=${seed}&exc=login,coordinates,timezone`

const instance = axios.create({
	baseURL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-type': 'application/json'
	}
})

// before the request is made
instance.interceptors.request.use(config => {
	config.params = {
		seed,
		exc: 'login,coordinates,timezone',
		...config.params
	}
	NProgress.start()
	return config
})

// before a response is returned
instance.interceptors.response.use(response => {
	NProgress.done()
	return response
})

// axiosRetry(instance, { retries: 5, retryDelay: axiosRetry.exponentialDelay })
axiosRetry(instance, { retries: 5 })

export const axiosBase = instance
