<template>
  <div class="results">
    <!-- TODO: Look into making content editable https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode -->
    <iframe :src="src" class="results__iframe" frameborder="0">
    </iframe>
  </div>
</template>

<script>
import html from "./html/all"

// const replaceRegex = /\/\*.+\*\//g

export default {
  computed: {
    styles() {
      return this.$store.state.styles
    },
    inline() {
      return this.$store.state.inline
    },
    src() {
      let stylesheets = ""
      let fileContents = ""

      this.styles.forEach(style => {
        if (style.url) {
          stylesheets += `<link rel="stylesheet" href="${style.url}">`
        } else if (style.styles) {
          const cleaned = style.styles.replace(/\/\*.+\*\//g, '')
          fileContents += `<style>${cleaned}</style>`
        }
      })

      return `data:text/html;charset=utf-8,${encodeURIComponent(`<body>
        ${stylesheets}
        ${fileContents}
        <style>${this.inline.replace(/\/\*.+\*\//g, '')}</style>
        ${html}
      </body>`)}`
    }
  }
}
</script>

<style>
.results {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.results__iframe {
  flex-grow: 1;
  border: 1px solid lightgrey;
  background-color: #fff;
}
</style>
