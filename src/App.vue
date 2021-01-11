<template>
  <div id="app">
		<DashBoard />
		<main role="main" class="main">
			<PageView
				title="some text"
			/>
		</main>
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

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
