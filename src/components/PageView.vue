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
				<div class="slider" :class="sliderStyle">
					<input
						type="checkbox"
						class="slider__box"
						:checked="showCountries"
						@click="updateCountriesChoice(!showCountries)"
					>
				</div>
				Show Country
			</div>
		</div>
		<router-view />
	</main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
	computed: {
		...mapState(['countries', 'showCountries', 'title']),
		sliderStyle() {
			return {
				'slider-active': this.showCountries
			}
		}
	},
	methods: mapActions(['updateCountriesChoice']),
	mounted() {
		this.titleElem = document.getElementById('title')
	}
}
</script>
