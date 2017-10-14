<template>
	<div class="styles">
		<div class="styles__form">
			<p>Add a stylesheet</p>
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
		<ul class="styles__list">
			<li v-for="(stylesheet, index) in stylesheets" :key="index" class="styles__list-item">
				<a :href="stylesheet.url" target="_blank" rel="noopener">{{ stylesheet.name ? stylesheet.name : stylesheet.url }}</a>
			</li>
		</ul>
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
</style>
