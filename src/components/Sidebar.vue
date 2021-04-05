<template>
	<div class="sidebar">
		<h1 class="h3 mb-16">Styles Check</h1>
		<p class="mb-16">See how your styles render global HTML elements and make sure nothing gets left behind.</p>

		<form @submit.prevent="addLib" class="mb-16">
			<label for="libs">Import Library</label>
			<div class="flex gap-8">
				<select name="libs" id="libs">
					<option value="" disabled selected></option>
					<option v-for="lib in libs" :key="lib.name" :value="lib.url">{{ lib.name }}</option>
				</select>
				<button aria-label="submit">+</button>
			</div>
		</form>

		<form @submit.prevent="addUrl" class="mb-16">
			<label for="url">Import URL</label>
			<div class="flex gap-8">
				<input name="url" id="url" type="url" />
				<button aria-label="submit">+</button>
			</div>
		</form>

		<form @submit.prevent="addFile" class="mb-16">
			<label for="file">Import File</label>
			<div class="flex gap-8 align-center">
				<input name="file" id="file" type="file" />
				<button aria-label="submit">+</button>
			</div>
		</form>

		<div>
			<label for="inline">Inline Styles</label>
			<textarea name="inline" id="inline" @input="addInline"></textarea>
		</div>

		<ul class="mb-16">
			<li v-for="(style, index) in activeStyles" :key="index" class="styles__style flex gap-8 align-center justify-between">
				<a :href="style.url" target="_blank" rel="noopener">{{ style.name }}</a>

				<button aria-label="remove style" class="styles__remove-style" @click="deleteStyle(index)">X</button>

				<!-- TODO: Add ability to reorder styles -->
			</li>
		</ul>

		<div class="credits">
			<p>&lt;/&gt; with 👓 by
				<a href="https://austingil.com">Austin Gil</a>
			</p>
		</div>
	</div>
</template>

<script>
// TODO: Look into https://codemirror.net/

const getStyleName = style => {
	if(style.name) return style.name
	const { pathname } = new URL(style.url)
	const lastSlashIndex = pathname.lastIndexOf('/')
	return pathname.slice(lastSlashIndex + 1)
}

export default {
	computed: {
		activeStyles() {
			return this.$store.state.styles.map(style => ({
				name: getStyleName(style),
				url: style.url
			}))
		},
		libs: () => [
			{
				name: 'Bedrocss',
				url: 'https://unpkg.com/bedrocss@0.0.1/bedrocss.min.css'
			},
			{
				name: 'Bootstrap',
				url: 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css'
			},
			{
				name: "Eric Meyer's CSS Reset",
				url: 'https://meyerweb.com/eric/tools/css/reset/reset200802.css'
			},
			{
				name: 'Normalize.css',
				url: 'https://csstools.github.io/normalize.css/11.0.0/normalize.css'
			}
		]
	},
  methods: {
		addLib(event) {
			const form = event.target
			const data = new FormData(form)
			const selectedUrl = data.get('libs')
			const selectedLib = this.libs.find(lib => lib.url === selectedUrl)
			if(!selectedLib) return
			this.$store.commit('addStyle', selectedLib)
			form.reset()
		},

		addUrl(event) {
			const form = event.target
			const data = new FormData(form)
			const url = data.get('url')
			if (!url) return
			this.$store.commit('addStyle', { url: url })
			form.reset()
		},

    addFile(event) {
			const form = event.target
			const data = new FormData(form)
			const file = data.get('file')

      if (!file) return

      const reader = new FileReader();
      reader.onload = () => {
        const fileContents = reader.result;
				if(!fileContents) return

				this.$store.commit('addStyle', { name: file.name, styles: fileContents })
      };
      reader.readAsText(file);
    },

		addInline(event) {
			this.$store.commit('setInline', event.target.value)
		},

		deleteStyle(index) {
			this.$store.commit('removeStyle', index)
    },
  }
};
</script>

<style lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  max-width: 250px;
  padding: 10px;
  word-wrap: break-word;

  a {
    color: #fff;
  }
}
</style>
