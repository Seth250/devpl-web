import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../views/UserList.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'UserList',
		component: UserList
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/:username',
		name: 'UserDetail',
		component: () => import(/* webpackChunkName: "userdetail" */ '../views/UserDetail.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
