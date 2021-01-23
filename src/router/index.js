import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/:name',
		name: 'UserList',
		component: () => import(/* webpackChunkName: "userList" */ '../views/UserList.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeResolve((to, from, next) => {
	if (to.name === 'UserList') {
		// Start the route progress bar.
		NProgress.start()
	}
	next()
})

router.afterEach((to, from) => {
	// Complete the animation of the route progress bar.
	NProgress.done()
})

export default router
