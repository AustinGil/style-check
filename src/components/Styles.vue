<template>
	<div class="styles">
		<form>
			<label>Add New Source
				<input type="url" v-model="srcUrl">
			</label>
			<button type="submit" @click.prevent="fetchStylesheet">Add</button>
		</form>
		<ul>
			<!-- <li v-for="(stylesheet, index) in stylesheets" :key="index"> -->
			<!-- Stylesheet -->
			<!-- </li> -->
		</ul>

	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			srcUrl: ''
		}
	},
	methods: {
		fetchStylesheet(url) {
			const tempUrl = 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css';

			axios.get(tempUrl)
				.then(function(response) {
					console.log(response.data);

					var headHTML = document.querySelector('.html')[0].innerHTML;
					headHTML += '<link type="text/css" rel="stylesheet" href="style.css">';
					document.getElementsByTagName('head')[0].innerHTML = headHTML;
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	}
}
</script>

<style>

</style>
