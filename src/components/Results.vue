<template>
  <div class="container" v-if="clicked">
    <div class="row mt-5 d-flex justify-content-center">
      <div class="col-sm-2 kilo">
        <label>Boy Kilo Endeksi</label>
        <h1>{{ index }}</h1>
      </div>
      <div class="col-sm-6">
        <h1>{{ message.title }}</h1>
        <h2>{{ message.content }}</h2>
      </div>
      <div class="col-sm-2 ideal">
        <label>İdeal Kilo Ağırlığı</label>
        <h1>{{ idealWeight }}</h1>
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
$raleway: Raleway;
.row {
  background: wheat;
  font-family: $raleway;
  .kilo {
    background: orange;
    border-radius: 100%;
    width: 200px;
    height: 200px;
  }
  .ideal {
    background: rgb(94, 252, 236);
    border-radius: 100%;
    width: 200px;
    height: 200px;
  }
  label {
    margin-top: 40px;
    font-size: 1.1em;
    font-weight: bold;
  }
  h1 {
    font-size: 2em;
    margin-top: 10px;
  }
  h2 {
    font-size: 1.3em;
  }
}
</style>