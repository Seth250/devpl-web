import Vue from 'vue'
import Vuex from 'vuex'
import { axiosBase } from '@/api'
import countries from '@/data/countries.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		title: null,
		users: [],
		currentUser: JSON.parse(localStorage.getItem('currentUser')) || {},
		countries,
		searchItem: '',
		showCountries: localStorage.getItem('showCountries') !== 'false'
	},
	getters: {
		getPageUsers: state => state.users
	},
	mutations: {
		setUsers: (state, { results, filterBy }) => { state.users = filterBy ? results.filter(user => user.gender === filterBy).slice(0, 3) : results },
		setTitle: (state, title) => { state.title = title },
		setShowCountries: (state, showCountries) => { state.showCountries = showCountries },
		setCurrentUser: (state, index) => {
			localStorage.setItem('currentUser', JSON.stringify(state.users[index]))
			state.currentUser = state.users[index]
		},
		setSearchItem: (state, item) => { state.searchItem = item }
	},
	actions: {
		async fetchPageUsers({ commit }, { gender, pageNumber, nat }) {
			const params = {}
			// let url = 'https://randomuser.me/api/?seed=default&exc=login,coordinates,timezone'
			let title = 'all users'
			if (pageNumber > 1) {
				params.page = pageNumber
				// url += `&page=${pageNumber}`
			}
			if (gender) {
				title = `${gender} users`
				params.results = 12
				// url += `&gender=${gender}&result=3`
				// url += '&results=12'
			} else {
				params.results = 3
				// url += '&results=3'
			}
			if (nat && nat !== 'all') {
				// url += `&nat=${nat}`
				params.nat = nat
			}

			const { data } = await axiosBase.get('', { params })
			data.filterBy = gender
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
	}
	// modules: {
	// }
})
