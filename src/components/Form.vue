<template>
  <div>
    <h1>İdeal Kilo Hesaplayıcı</h1>
    <div class="d-flex justify-content-center mt-5">
      <form>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Boy</label>
          <div class="col-sm-10">
            <input
              type="number"
              v-model.number="content.size"
              class="form-control"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Kilo</label>
          <div class="col-sm-10">
            <input
              type="number"
              v-model.number="content.weight"
              class="form-control"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Cinsiyet</label>
          <div class="col-sm-10">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                v-model="content.gender"
                value="Kadin"
                checked
              />
              <label class="form-check-label">Kadın</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                v-model="content.gender"
                value="Erkek"
              />
              <label class="form-check-label">Erkek</label>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <button
            type="button"
            @click="calculate"
            class="btn btn-primary btn-block"
          >
            Hesapla
          </button>
        </div>
      </form>
    </div>
    <Results :clicked="isClicked" />
  </div>
</template>

<script>
import Results from "./Results";
export default {
  components: {
    Results,
  },
  data() {
    return {
      content: {
        size: "",
        weight: "",
        gender: "",
      },
      isClicked: false,
    };
  },
  methods: {
    calculate() {
      this.$store.commit("setIdealWeight", this.content);
      this.$store.commit("setIndex", this.content);
      this.isClicked = true;
    },
  },
};
</script>

<style lang="scss" scoped>
$raleway: Raleway;
form {
  display: flex;
  flex-direction: column;
  justify-items: center;
}

h1 {
  font-family: $raleway;
  font-size: 2.6em;
}
</style>