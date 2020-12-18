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
  background: rgb(211, 178, 255);
}
#app {
  text-align: center;
  color: #1b2b3b;
  margin-top: 80px;
}
</style>
