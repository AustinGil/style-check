<template>
	<div class="styles">
		<div class="styles__form">
			<form>
				<label>Add New Source
					<input type="url" v-model="srcUrl">
				</label>
				<button type="submit" @click.prevent="fetchStylesheet">Add</button>
			</form>
		</div>
		<div class="styles__list">
			<ul>
				<li v-for="(stylesheet, index) in stylesheets" :key="index">
					{{stylesheet.name + ' - ' || ''}}{{stylesheet.url}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
	data() {
		return {
			srcUrl: ''
		}
	},
	computed: {
		...mapState([
			'stylesheets'
		])
	},
	methods: {
		fetchStylesheet(url) {
			// const tempUrl = 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css';

			// axios.get(tempUrl)
			// 	.then(function(response) {
			// 		// console.log(response.data);

			// 		var headHTML = document.querySelector('.html')[0].innerHTML;
			// 		headHTML += '<link type="text/css" rel="stylesheet" href="style.css">';
			// 		document.getElementsByTagName('head')[0].innerHTML = headHTML;
			// 	})
			// 	.catch(function(error) {
			// 		console.log(error);
			// 	});
		}
	}
}
</script>

<style>
.styles {
	max-width: 250px;
	padding: 10px;
}

.styles__form {
	margin-bottom: 20px;
}
</style>
