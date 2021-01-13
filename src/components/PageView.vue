<template>
	<main role="main" class="main">
		<div class="main__head">
			<h1 id="title">{{ title }}</h1>
			<p>Filter by</p>
			<div class="main__facet">
				<div class="main__search search">
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill-rule="evenodd" clip-rule="evenodd" class="main__search-icon">
						<path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/>
					</svg>
					<input type="search" class="main__search-input search-input" placeholder="Find in list">
				</div>
				<select v-model="country" class="main__select">
					<option class="main__option" value="" disabled>Country</option>
					<option class="main__option" v-for="country in countries" :key="country" :value="country">{{ country }}</option>
				</select>
				<div class="main__toggle">
					<div class="slider" :class="sliderStyle">
						<input
							type="checkbox"
							class="slider__box"
							:checked="showCountries"
							@click="updateCountriesChoice(!showCountries)"
						>
					</div>
					<p>Show Country</p>
				</div>
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
