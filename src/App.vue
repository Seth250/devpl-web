<template>
  <div id="app">
		<DashBoard />
		<PageView />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<script>
import DashBoard from './components/DashBoard.vue'
import PageView from './components/PageView.vue'

export default {
	name: 'App',
	components: {
		DashBoard,
		PageView
	}
}
</script>
