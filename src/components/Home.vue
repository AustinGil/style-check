<template>
	<div class="home">
		<Sidebar>
			<Styles></Styles>
			<StylesList></StylesList>
		</Sidebar>
		<Results></Results>
	</div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Styles from "./Styles.vue";
import StylesList from "./StylesList.vue";
import Results from "./Results.vue";

export default {
  components: {
    Sidebar,
    Styles,
    StylesList,
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
