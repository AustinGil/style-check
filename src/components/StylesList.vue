<template>
	<ul class="styles">
		<li v-for="(style, index) in styles" :key="index" class="styles__style">
			<a :href="style.url" class="styles__style-link" target="_blank" rel="noopener">{{ style.nickName ? style.nickName : style.fileName }}</a>

			<button class="styles__remove-style" @click="deleteStyle(index)">X</button>

			<!-- TODO: Add ability to reorder styles -->
		</li>
	</ul>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["styles"])
  },
  methods: {
    ...mapActions(["removeStyle"]),

    deleteStyle(index) {
      this.removeStyle(index);
    }
  }
}
</script>

<style>
.styles {
  flex-grow: 1;
  padding-left: 0;
  list-style-type: none;
}

.styles__style {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 15px;
}

.styles__style-link {
  display: flex;
  align-items: center;
  margin-right: 5px;
}
</style>
