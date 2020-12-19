<template>
  <div class="container" v-if="clicked">
    <div class="row mt-5 d-flex justify-content-center">
      <div class="col-sm-2 kilo">
        <label>Boy Kilo Endeksi</label>
        <h3>{{ index }}</h3>
      </div>
      <div class="col-sm-6">
        <h1>{{ message.title }}</h1>
        <h2>{{ message.content }}</h2>
      </div>
      <div class="col-sm-2 ideal">
        <label>İdeal Kilo Ağırlığı</label>
        <h3>{{ idealWeight }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    clicked: Boolean,
  },
  computed: {
    idealWeight() {
      return this.$store.getters.getIdealWeight;
    },
    message() {
      return this.$store.getters.getMessage;
    },
    index() {
      return this.$store.getters.getIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
$black: black;
$orange: rgb(252, 171, 21);
$raleway: Raleway;
.row {
  font-family: $raleway;
  .kilo {
    background: $orange;
    border-radius: 100%;
    width: 200px;
    height: 200px;
  }
  .ideal {
    background: $orange;
    border-radius: 100%;
    width: 200px;
    height: 200px;
  }
  label {
    margin-top: 50px;
    font-size: 1.1em;
    font-weight: bold;
  }
  h1 {
    font-size: 2.3em;
    margin-top: 20px;
  }
  h2 {
    font-size: 1.3em;
    margin-top: 30px;
  }
  h3 {
    font-size: 2.5em;
    margin-top: 10px;
  }
}
</style>