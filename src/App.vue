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
  background: radial-gradient(
    circle,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
}
#app {
  text-align: center;
  color: white;
  margin-top: 80px;
}
</style>
