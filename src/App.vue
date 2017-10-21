<template>
  <div id="app">
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  line-height: 1.5;
  font-family: Arial, Helvetica, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol {
  margin-top: 0 !important;
  &:last-child {
    margin-bottom: 0;
  }
}

button {
  // border: none;
  border-radius: 5px;
  padding: 5px;
  background: #fff;
  cursor: pointer;
}

label {
  display: block;
}

input,
select,
textarea {
  width: 100%;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  padding: 5px;
}

input[type="radio"] {
  width: auto;
  margin-right: 5px;
}

input[type="file"] {
  display: none;
}

.file-input__btn {
  @extend button;
  display: inline-block;
  margin-bottom: 15px;
  line-height: 1.15;
  color: black;
}

#app,
.main {
  display: flex;
  flex-direction: column;
}

#app {
  min-height: 100vh;
  color: #fff;
  background-color: #0c6980;
}

.main {
  flex-grow: 1;
}

.credits {
  text-align: center;
}
</style>