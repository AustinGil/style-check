<template>
	<div class="styles">
		<h1>Styles Check</h1>
		<p>A tool to help designers and developers see how their stylesheets render global HTML elements and make sure nothing was forgotten.</p>
		<div class="styles__form">
			<p>Add your stylesheets below</p>
			<form>
				<label>URL
					<input type="url" v-model="newStylesheet.url" placeholder="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" required>
				</label>
				<label>Nickname (optional)
					<input type="text" v-model="newStylesheet.name" placeholder="Bootstrap">
				</label>
				<button type="submit" @click.prevent="fetchStylesheet">Add</button>
			</form>
		</div>
		<ul class="styles__list" v-if="stylesheets.length">
			<li v-for="(stylesheet, index) in stylesheets" :key="index" class="styles__style">
				<a :href="stylesheet.url" target="_blank" rel="noopener">{{ stylesheet.name ? stylesheet.name : stylesheet.url }}</a>
				<!-- TODO: Add ability to remove styles -->
				<!-- <button class="styles__remove-style">X</button> -->

				<!-- TODO: Add ability to reorder styles -->
			</li>
		</ul>
		<div class="credits">
			<p>&lt;/&gt; with 👓 by
				<a href="https://stegosource.com">Stegosource</a>
			</p>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import axios from 'axios'
// TODO: Look into https://codemirror.net/

export default {
	data() {
		return {
			newStylesheet: {
				url: '',
				name: ''
			}
		}
	},
	computed: {
		...mapState([
			'stylesheets'
		])
	},
	methods: {
		...mapActions([
			'addStylesheet'
		]),
		fetchStylesheet(url) {
			// TODO: Add validation to form input. required, isUrl.
			if (this.newStylesheet.url) {
				const tempUrl = 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css';
				const vm = this

				axios.get(tempUrl)
					.then(function(response) {
						// console.log(response.data);
						vm.addStylesheet(vm.newStylesheet)
						vm.newStylesheet = {}
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		}
	}
}
</script>

<style>
.styles {
	max-width: 250px;
	padding: 10px;
	word-wrap: break-word;
}

.styles__form {
	margin-bottom: 20px;
}

.styles__list {
	padding-left: 0;
	list-style-type: none;
}

.styles__style {
	margin-bottom: 15px;
}
</style>
