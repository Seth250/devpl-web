<template>
	<section>
		<UserItem v-for="(user, index) in getPageUsers" :key="index" :user="user" :index="index" />
	</section>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import UserItem from '@/components/UserItem.vue'

export default {
	name: 'Home',
	components: {
		UserItem
	},
	computed: {
		...mapGetters(['getPageUsers'])
		// ...mapGetters(['getAllUsers', 'getMaleUsers', 'getFemaleUsers']),
		// getUsers() {
		// 	const gender = this.$route.query.gender
		// 	if (gender === 'male') {
		// 		return this.getMaleUsers
		// 	} else if (gender === 'female') {
		// 		return this.getFemaleUsers
		// 	} else {
		// 		return this.getAllUsers
		// 	}
		// }
	}
}
</script>
