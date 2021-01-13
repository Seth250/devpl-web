import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import countries from '../data/countries.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		title: null,
		users: [],
		countries,
		showCountries: localStorage.getItem('showCountries') !== 'false'
	},
	// getters: {
	//   getUsers: (state) => state.users
	// },
	mutations: {
		setUsers: (state, { results }) => { state.users = results },
		setTitle: (state, title) => { state.title = title },
		setShowCountries: (state, showCountries) => { state.showCountries = showCountries }
	},
	actions: {
		async fetchUsers({ commit }, gender = null) {
			let url = 'https://randomuser.me/api/?results=20'
			let title = 'all users'
			if (gender === 'male' || gender === 'female') {
				url += `&gender=${gender}`
				title = `${gender} users`
			}
			const { data } = await axios.get(url)
			commit('setTitle', title)
			commit('setUsers', data)
		},
		updateCountriesChoice({ commit }, value) {
			localStorage.setItem('showCountries', value)
			commit('setShowCountries', value)
		}
	},
	modules: {
	}
})
