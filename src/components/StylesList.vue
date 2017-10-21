<template>
	<ul class="styles" v-if="styles.length">
		<li v-for="(style, index) in styles" :key="index" class="styles__style">
			<a :href="style.url" target="_blank" rel="noopener">{{ style.nickName ? style.nickName : style.fileName }}</a>
			<!-- TODO: Add ability to remove styles -->
			<!-- <button class="styles__remove-style">X</button> -->

			<!-- TODO: Add ability to reorder styles -->
		</li>
	</ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["styles"])
  }
};
</script>

<style>
.styles {
  padding-left: 0;
  list-style-type: none;
}

.styles__style {
  margin-bottom: 15px;
}
</style>
