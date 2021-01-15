<template>
	<section>
		<UserItem v-for="(user, index) in getPageUsers" :key="index" :user="user" :index="index"/>
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
	computed: mapGetters(['getPageUsers'])
}
</script>
