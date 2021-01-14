import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import countries from '../data/countries.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		title: null,
		users: [],
		currentUser: {},
		countries,
		showCountries: localStorage.getItem('showCountries') !== 'false'
	},
	getters: {
		getPageUsers: state => state.users
	},
	mutations: {
		setUsers: (state, { results }) => { state.users = results },
		setTitle: (state, title) => { state.title = title },
		setShowCountries: (state, showCountries) => { state.showCountries = showCountries },
		setCurrentUser: (state, index) => { state.currentUser = state.users[index] }
	},
	actions: {
		async fetchPageUsers({ commit }, gender, pageNumber = 1) {
			let url = 'https://randomuser.me/api/?results=3'
			let title = 'all users'
			if (pageNumber > 1) {
				url += `&page=${pageNumber}`
			}
			if (gender) {
				url += `&gender=${gender}`
				title = `${gender} users`
			} else {
				url += '&seed=default'
			}
			const { data } = await axios.get(url)
			commit('setTitle', title)
			commit('setUsers', data)
		},
		updateCountriesChoice({ commit }, value) {
			localStorage.setItem('showCountries', value)
			commit('setShowCountries', value)
		},
		updateCurrentUser({ commit }, index) {
			commit('setTitle', 'user list')
			commit('setCurrentUser', index)
		}
	},
	modules: {
	}
})
