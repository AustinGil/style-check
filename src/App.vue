<template>
  <div id="app">
    <main class="main">
      <router-view/>
    </main>
    <div class="credits">
      <p>&lt;/&gt; with 👓 by
        <a href="https://stegosource.com">Stegosource</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}

label {
  display: block;
}

input {
  width: 100%;
}

#app,
.main {
  display: flex;
  flex-direction: column;
}

#app {
  height: 100vh;
}

.main {
  flex-grow: 1;
}

.credits {
  text-align: center;
}
</style>
