<template>
  <div class="results">
    <h3>Results</h3>
    <iframe :src="src" class="results__iframe" frameborder="0">
    </iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import html from './html/all'

export default {
  computed: {
    ...mapState([
      'stylesheets'
    ]),
    src() {
      const stylesheet = 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css';

      return 'data:text/html;charset=utf-8,' + encodeURI(`<body>
        <link rel="stylesheet" href="${stylesheet}">
        ${html}
      </body>`);
    }
  },
  methods: {
    generateIframe() {
    }
  },
  created() {
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

.results__iframe {
  flex-grow: 1;
}
</style>
