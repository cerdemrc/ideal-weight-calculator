<template>
  <div class="container" v-if="clicked">
    <div class="row mt-5 d-flex justify-content-center">
      <div class="col-xs-12 col-md-4 col-lg-3 weight">
        <label>Boy Kilo Endeksi</label>
        <h3>{{ index }}</h3>
      </div>
      <div class="col-xs-12 col-md-4">
        <h1>{{ message.title }}</h1>
        <p>{{ message.content }}</p>
      </div>
      <div class="col-xs-12 col-md-4 col-lg-3 ideal-weight">
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
@import "../style/results.scss";
</style>