<template>
  <div id="app">
    <Form />
  </div>
</template>

<script>
import Form from "./components/Form";
export default {
  components: {
    Form,
  },
};
</script>

<style lang="scss">
body {
  background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
}
#app {
  text-align: center;
  color: white;
  margin-top: 80px;
}
</style>
