<template>
  <div class="results">
    <!-- <h3 class="results__title">Results</h3> -->
    <!-- TODO: Look into making content editable https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode -->
    <iframe :src="src" class="results__iframe" frameborder="0">
    </iframe>
  </div>
</template>

<script>
import { mapState } from "vuex"
import html from "./html/all"

export default {
  computed: {
    ...mapState(["styles"]),
    src() {
      let stylesheets = ""
      let inlineStyles = ""

      this.styles.forEach(style => {
        if (style.url) {
          stylesheets += `<link rel="stylesheet" href="${style.url}">`
        } else if (style.contents) {
          inlineStyles += `<style>${style.contents}</style>`
        }
      })

      return (
        "data:text/html;charset=utf-8," +
        encodeURI(
          `<body>
					${stylesheets}
					${inlineStyles}
					${html}
				</body>`
        )
      )
    }
  }
}
</script>

<style>
.results {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
}

.results__title {
  margin-bottom: 0;
}

.results__iframe {
  flex-grow: 1;
  border: 1px solid lightgrey;
  background-color: #fff;
}
</style>
