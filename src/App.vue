<template>
  <div id="app">
    <main class="main">
      <RouterView/>
    </main>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
button,
input:not([type="file"]),
select,
textarea {
  border-radius: .25rem;
}

.flex {
  display: flex;
}

.gap-8 {
  gap: .5rem;
}

.align-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.mb-16 {
  margin-bottom: 1rem;
}

.p-8 {
  padding: .5rem;
}

#app,
.main {
  display: flex;
  flex-direction: column;
}

#app {
  min-height: 100vh;
  color: #fff;
}

.main {
  flex-grow: 1;
}

.credits {
  text-align: center;
}
</style>