<template>
	<div>
		<li v-for="user in users" :key="user.username">{{ user.email }}</li>
	</div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
	name: 'Home',
	computed: {
		...mapState(['users'])
	}
}
</script>
