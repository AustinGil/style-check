<template>
	<div class="sidebar">
		<h1 class="h3 mb-16">Style Check</h1>
		<p class="mb-16">See how your styles render global HTML elements and make sure nothing gets left behind.</p>

		<form @submit.prevent="submitForm" class="mb-16">
			<label for="libs">Import Library</label>
			<div class="flex gap-8">
				<select name="libs" id="libs">
					<option value=""></option>
					<option v-for="lib in libs" :key="lib.name" :value="lib.url">{{ lib.name }}</option>
				</select>
				<button aria-label="submit">+</button>
			</div>
		</form>

		<form @submit.prevent="submitForm" class="mb-16">
			<label for="url">Import URL</label>
			<div class="flex gap-8">
				<input name="url" id="url" type="url" />
				<button aria-label="submit">+</button>
			</div>
		</form>

		<form @submit.prevent="submitForm" class="mb-16">
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

				<button aria-label="remove style" class="styles__remove-style" @click="deleteStyle(index)">&times;</button>

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
				url: 'https://unpkg.com/bedrocss/bedrocss.min.css'
			},
			{
				name: 'Bootstrap',
				url: 'https://unpkg.com/bootstrap/dist/css/bootstrap.min.css'
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
	mounted() {
		let urls = this.$route.query.url
		if (!urls) return

		urls = Array.isArray(urls) ? urls : [urls]
		for (const url of urls) {
			const lib = this.libs.find(lib => lib.url === url)
			if (lib) {
				this.$store.commit('addStyle', lib)
			} else {
				this.$store.commit('addStyle', { url: url })
			}
		}
	},
  watch: {
    '$store.state.styles.length': function() {
      const urls = []
      for (const { url } of this.$store.state.styles) {
        if (url) urls.push(url)
      }
			this.$router.push({ query: { url: urls} })
    }
  },
  methods: {
		async submitForm(event) {
			const form = event.target
			const data = new FormData(form)
			
			const selectedLibUrl = data.get('libs')
			const lib = this.libs.find(lib => lib.url === selectedLibUrl)
			const url = data.get('url')
			const file = data.get('file')

			let style = {}
			if (lib) {
				style = lib
			} else if (url) {
				style.url = url
			} else if (file) {
				style.name = file.name
				style.styles = await file.text()
			}
			this.$store.commit('addStyle', style)
			form.reset()
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

<style>
.sidebar {
  display: flex;
  flex-direction: column;
  max-width: 250px;
  padding: 10px;
  word-wrap: break-word;
}

.sidebar a {
	color: #fff;
}
</style>
