<template>
	<div class="home">
		<Sidebar />
		<Results />
	</div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Results from "./Results.vue";

export default {
  components: {
    Sidebar,
    Results
  }
};
</script>

<style>
.home {
  display: flex;
  flex-grow: 1;
}
</style>
