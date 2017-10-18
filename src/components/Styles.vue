<template>
	<div class="styles">
		<h1>Styles Check</h1>
		<p>A tool to help designers and developers see how their stylesheets render global HTML elements and make sure nothing was forgotten.</p>
		<div class="styles__form">
			<form>
				Add From:
				<div class="add-from">
					<label>
						<input type="radio" name="add-from" v-model="addFrom" value="url">URL
					</label>
					<label>
						<input type="radio" name="add-from" v-model="addFrom" value="computer">Computer
					</label>
					<!-- <label> -->
					<!-- <input type="radio" name="add-from" v-model="addFrom" value="inline">Inline -->
					<!-- </label> -->
				</div>

				<!-- Maybe include a quick add feature -->

				<label v-if="addFrom == 'url'">URL
					<input type="url" v-model="newStyle.url" placeholder="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" required>
				</label>

				<label v-if="addFrom == 'computer'">File
					<input type="file" @change="addFromComputer($event)">
				</label>

				<!-- <label>Custom -->
				<!-- <textarea placeholder="body { ... }"></textarea> -->
				<!-- </label> -->

				<label>Nickname (optional)
					<input type="text" v-model="newStyle.name" placeholder="Bootstrap">
				</label>

				<button type="submit" @click.prevent="addNewStyle">Add Styles</button>
			</form>
		</div>

		<ul class="styles__list" v-if="styles.length">
			<li v-for="(style, index) in styles" :key="index" class="styles__style">
				<a :href="style.url" target="_blank" rel="noopener">{{ style.name ? style.name : style.url }}</a>
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

<script type="ts">
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import axios from 'axios'
// TODO: Look into https://codemirror.net/

// TODO: Add TypeScript functionality
export default {
	data() {
		return {
			newStyle: {
				url: '',
				fileName: '',
				fileType: '',
				size: null,
				nickName: ''
			},
			addFrom: 'url'
		}
	},
	computed: {
		...mapState([
			'styles'
		])
	},
	methods: {
		...mapActions([
			'addStyle'
		]),
		getFileName(filePath) {
			return filePath;
		},
		addNewStyle() {
			const url = this.newStyle.url || false

			if (!url) {
				// TODO: You need a URL!!!
				return
			}

			const vm = this
			const newStyleObject = {
				url: this.newStyle.url,
				fileName: this.newStyle.url,
				fileType: '',
				size: null,
				nickName: ''
			}

			// Nick
			// nickneux21@gmail.com
			// betterview.net

			axios.get(url)
				.then(function(response) {
					// console.log(response.data);
					vm.addStyle(vm.newStyle)
					vm.newStyle = {}
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		addFromComputer(e) {
			// https://www.quora.com/How-do-I-read-and-parse-a-local-file-in-Javascript-jquery-without-using-HTML-file-input-or-drag-and-drop

			const selectedFile = e.target.files[0] || false;

			if (!selectedFile) {
				return
			}

			const newStyle = {
				url: window.URL.createObjectURL(selectedFile),
				name: selectedFile.name
			}

			const reader = new FileReader();
			reader.onload = function() {
				var dataURL = reader.result;
				console.log(dataURL);
			};
			console.log(reader.readAsText(selectedFile))
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

.add-from {
	display: flex;
	justify-content: space-between;
}

.styles__list {
	padding-left: 0;
	list-style-type: none;
}

.styles__style {
	margin-bottom: 15px;
}
</style>
