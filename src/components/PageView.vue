<template>
	<div>
		<div>
			<h2>{ title }</h2>
			<p>Filter by</p>
			<div>
				<input type="search" placeholder="Find in list">
			</div>
			<div>
				<select v-model="country">
					<option value="" disabled>Country</option>
					<option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
				</select>
			</div>
		</div>
		<router-view />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
	name: 'PageView',
	data() {
		return {
			country: ''
		}
	},
	computed: mapState(['countries'])
}
</script>
