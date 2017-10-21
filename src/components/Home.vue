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
import Sidebar from "./Sidebar";
import Styles from "./Styles";
import StylesList from "./StylesList";
import Results from "./Results";

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
