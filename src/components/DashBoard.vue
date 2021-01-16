	<template>
	<div class="dashboard">
		<div class="dashboard__heading">
			<p class="hello">Hello, <span>Emerald</span></p>
			<p class="welcome">Welcome to your dashboard, kindly sort through the user base</p>
		</div>
		<div class="dashboard__search search">
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill-rule="evenodd" clip-rule="evenodd" class="dashboard__search-icon">
				<path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/>
			</svg>
			<input
				type="text"
				placeholder="Find a user"
				class="dashboard__search-input search-input"
				@keyup="setSearchItem($event.target.value.toLowerCase())"
			>
		</div>
		<div class="user-select">
			<p>Show Users</p>
			<ul class="user-select__list">
				<li class="user-select__item">
					<button
						type="button"
						class="user-select__btn btn-all"
						:class="{ 'btn-active': genderParam === undefined }"
						@click="getUsers()"
					>
						<i class="fas fa-users"></i>
					</button>
					<p>All users</p>
				</li>
				<li class="user-select__item">
					<button
						type="button"
						class="user-select__btn btn-male"
						:class="{ 'btn-active': genderParam === 'male' }"
						@click="getUsers('male')"
					>
						<i class="fas fa-male"></i></button>
					<p>Male users</p>
				</li>
				<li class="user-select__item">
					<button
						type="button"
						class="user-select__btn btn-female"
						:class="{ 'btn-active': genderParam === 'female' }"
						@click="getUsers('female')"
					>
						<i class="fas fa-female"></i>
					</button>
					<p>Female users</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
	name: 'DashBoard',
	watch: {
		$route: {
			immediate: true,
			handler(newRoute, oldRoute) {
				const genderQuery = newRoute.query.gender
				const gender = genderQuery === 'male' || genderQuery === 'female' ? genderQuery : null
				if (newRoute.name === 'Home') {
					if (!oldRoute || oldRoute.name !== 'UserList') {
						const payload = {
							pageNumber: newRoute.query.page > 1 ? newRoute.query.page : 1,
							gender,
							nat: newRoute.query.nat
						}
						try {
							this.fetchPageUsers(payload)
						} catch (err) {
							if (err.response.status !== 200) {
								throw new Error(`API call failed with status code: ${err.response.status} after 5 retry attempts`)
							}
						}
					} else {
						this.setTitle(`${gender || 'all'} users`)
					}
				}
			}
		}
	},
	methods: {
		...mapActions(['fetchPageUsers']),
		...mapMutations(['setTitle', 'setSearchItem']),
		getUsers(gender = null) {
			const routerInfo = {
				name: 'Home',
				query: {
					page: this.$route.query.page,
					nat: this.$route.query.nat
				}
			}
			routerInfo.query.gender = gender !== null ? gender : undefined
			// const routerInfo = { name: 'Home' }
			// if (gender) {
			// 	routerInfo.query = { gender }
			// }
			this.$router.push(routerInfo)
		}
	},
	computed: {
		genderParam() {
			return this.$route.query.gender
		}
	}
}
</script>
