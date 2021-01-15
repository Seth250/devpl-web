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
					<div class="slider" :class="{ 'slider-active': showCountries }">
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
		<div class="main__footer">
			<a class="main__download" :href="downloadLink" target="_blank" :disabled="!isHomePage">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="main__download-icon" version="1.1" id="Capa_1" width="30" height="30" x="0px" y="0px" viewBox="0 0 452.168 452.168" xml:space="preserve" style="enable-background:new 0 0 452.168 452.168;">
					<g>
						<polygon points="140.446,344.424 226.096,430.075 311.739,344.424 294.352,327.037 238.395,383.002      238.395,216.212 213.798,216.212 213.798,383.002 157.841,327.037    "/>
					</g>
					<g>
						<path d="M357.34,105.037c-4.072,0-8.185,0.268-12.282,0.797c-20.809-30.458-58.688-46.837-95.681-40.025     c-17.428-27.109-47.536-43.715-79.985-43.715c-49.064,0-89.414,36.896-94.576,85.139C31.084,116.613,0,154.727,0,200.207     c0,52.47,42.691,95.161,95.161,95.161h95.031v-24.386H95.169c-39.025,0-70.775-31.75-70.775-70.776     c0-36.351,27.231-66.606,63.33-70.377l10.909-2.471v-10.12c0-39.017,31.742-70.767,70.767-70.767     c26.743,0,50.909,14.867,63.07,38.798l4.576,8.998l9.689-2.812c32.051-9.291,65.972,5.406,81.635,33.693l4.406,7.958l8.893-1.951     c5.202-1.146,10.461-1.731,15.664-1.731c38.855,0,70.467,31.75,70.467,70.775c0,39.017-31.75,70.776-70.776,70.776h-95.698     v24.386h95.681c52.47,0,95.161-42.691,95.161-95.161C452.168,147.729,409.631,105.037,357.34,105.037z"/>
					</g>
				</svg>
				<p>Download results</p>
			</a>
			<div class="main__pagination" :disabled="!isHomePage">
				<button type="button" class="left-icon" @click="getPage(--pageNumber)" :disabled="pageNumber <= 1">
					<i class="fas fa-angle-left"></i>
				</button>
				<button type="button" class="right-icon" @click="getPage(++pageNumber)">
					<i class="fas fa-angle-right"></i>
				</button>
			</div>
		</div>
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
			titleElem: null,
			pageNumber: null
		}
	},
	methods: {
		...mapActions(['updateCountriesChoice']),
		getPage(number) {
			const routerInfo = { name: 'Home', query: { gender: this.$route.query.gender } }
			if (number > 1) {
				routerInfo.query.page = number
			}
			this.$router.push(routerInfo)
		}
	},
	computed: {
		...mapState(['countries', 'showCountries', 'title', 'page']),
		downloadLink() {
			let url = 'https://randomuser.me/api/?seed=default&exc=login,coordinates,timezone&format=csv&dl&noinfo&results=3'
			const queryParams = this.$route.query
			for (const param in queryParams) {
				url += `&${param}=${queryParams[param]}`
			}
			// if (queryParams.page) {
			// 	url += `&page=${queryParams.page}`
			// }
			// if (queryParams.gender) {
			// 	url += `&$gender=${queryParams.gender}`
			// }
			return url
		},
		isHomePage() {
			return this.$route.name === 'Home'
		}
	},
	mounted() {
		this.titleElem = document.getElementById('title')
		const page = this.$route.query.page
		this.pageNumber = page > 1 ? page : 1
	}
}
</script>
