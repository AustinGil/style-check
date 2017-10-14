<template>
  <div id="app">
    <router-view/>
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

<style>
.credits {
  text-align: center;
}
</style>
