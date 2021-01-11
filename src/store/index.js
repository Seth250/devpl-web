import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import countries from '../data/countries.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		users: [],
		countries,
		showCountries: true
	},
	// getters: {
	//   getUsers: (state) => state.users
	// },
	mutations: {
		setAllUsers: (state, { results }) => { state.users = results }
	},
	actions: {
		async fetchAllUsers({ commit }) {
			const { data } = await axios.get('https://randomuser.me/api/')
			console.log(data)
			commit('setUsers', data)
		}
	},
	modules: {
	}
})
