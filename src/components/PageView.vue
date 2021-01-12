<template>
	<main role="main" class="main">
		<div class="main__head">
			<h1 id="title">{{ title }}</h1>
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
			<div class="">
				<input type="checkbox" :checked="showCountries">
			</div>
		</div>
		<router-view />
	</main>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'PageView',
	watch: {
		title() {
			this.titleElem.style.opacity = '0.7'
			setTimeout(() => {
				this.titleElem.style.opacity = '1'
			}, 150)
		}
	},
	data() {
		return {
			country: '',
			titleElem: null
		}
	},
	computed: mapState(['countries', 'showCountries', 'title']),
	mounted() {
		this.titleElem = document.getElementById('title')
	}
}
</script>
