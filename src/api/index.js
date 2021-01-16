import _ from 'lodash'
import axios from 'axios'
import axiosRetry from 'axios-retry'

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

instance.interceptors.request.use(config => {
	config.params = {
		seed,
		exc: 'login,coordinates,timezone',
		...config.params
	}
	return config
})

axiosRetry(instance, { retries: 5, retryDelay: axiosRetry.exponentialDelay })

export const axiosBase = instance