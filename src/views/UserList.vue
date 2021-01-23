<template>
	<div class="user-list">
		<div class="user-list__head" @click="$router.go(-1)">
			<i class="fas fa-arrow-left"></i>
			<p>results</p>
		</div>
		<div class="user-list__main">
			<div class="user-list__image-container">
				<img :src="currentUser.picture.large" alt="User Image" class="user-list__image">
			</div>
			<div class="user-list__info">
				<div class="user-list__name">
					<h2>{{ currentUser.name.title }}. {{ currentUser.name.first }} {{ currentUser.name.last }}</h2>
					<p>{{ currentUser.dob.age }}</p>
				</div>
				<p class="user-list__address">
					{{ currentUser.location.street.number }} {{ currentUser.location.street.name }}, {{ currentUser.location.city }},
					{{ currentUser.location.state }}<span v-if="showCountries" class="country"> {{ currentUser.location.country }}</span>
				</p>
				<div class="user-list__email">
					<i class="far fa-envelope"></i>
					<p>{{ currentUser.email }}</p>
				</div>
				<div>
					<div class="user-list__date-joined">
						<p>JOINED: {{ registeredDate }}</p>
					</div>
					<div class="user-list__phone">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M3.59 1.322l2.844-1.322 4.041 7.89-2.725 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.861 3.591-19.101-18.258-11.384-22.281zm1.93 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398zm7.832 7.649l2.917.87c.223-.747.16-1.579-.24-2.317-.399-.739-1.062-1.247-1.808-1.469l-.869 2.916zm1.804-6.059c1.551.462 2.926 1.516 3.756 3.051.831 1.536.96 3.263.498 4.813l-1.795-.535c.325-1.091.233-2.306-.352-3.387-.583-1.081-1.551-1.822-2.643-2.146l.536-1.796zm.95-3.186c2.365.705 4.463 2.312 5.729 4.656 1.269 2.343 1.466 4.978.761 7.344l-1.84-.548c.564-1.895.406-4.006-.608-5.882-1.016-1.877-2.696-3.165-4.591-3.729l.549-1.841z"/>
						</svg>
						<p class="user-list__contact">{{ currentUser.phone }}</p>
					</div>
					<div class="user-list__cell">
						<i class="fas fa-mobile-alt"></i>
						<p class="user-list__contact">{{ currentUser.cell }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'UserList',
	computed: {
		...mapState(['currentUser', 'showCountries']),
		registeredDate() {
			return this.currentUser.registered.date.slice(0, 10)
		}
	}
}
</script>
