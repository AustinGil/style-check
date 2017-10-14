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
