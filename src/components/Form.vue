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
              @blur="$v.content.size.$touch()"
              v-model.number="content.size"
              class="form-control"
            />
            <span class="form-text text-danger" v-if="!$v.content.size.required"
              >Bu alan zorunludur</span
            >
            <span
              class="form-text text-danger"
              v-if="!$v.content.size.minLength"
              >Bu alan 3 haneli olmalı</span
            >
            <span
              class="form-text text-danger"
              v-if="!$v.content.size.maxLength"
              >Bu alan 3 haneli olmalı</span
            >
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
            <span
              class="form-text text-danger"
              v-if="!$v.content.weight.required"
              >Bu alan zorunludur</span
            >
            <span
              class="form-text text-danger"
              v-if="!$v.content.weight.minLength"
              >Min 2 haneli olmalı</span
            >
            <span
              class="form-text text-danger"
              v-if="!$v.content.weight.maxLength"
              >Max 3 haneli olmalı</span
            >
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Cinsiyet</label>
          <div class="col-sm-10">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="woman"
                v-model="content.gender"
                value="Kadin"
                checked
              />
              <label class="form-check-label" for="woman"> Kadın </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="man"
                v-model="content.gender"
                value="Erkek"
              />
              <label class="form-check-label" for="man"> Erkek </label>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <button
            type="button"
            @click="calculate"
            :disabled="$v.$invalid"
            class="btn btn-outline-light btn-block"
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
import {
  required,
  numeric,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
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
  validations: {
    content: {
      size: {
        required,
        numeric,
        minLength: minLength(3),
        maxLength: maxLength(3),
      },
      weight: {
        required,
        numeric,
        minLength: minLength(2),
        maxLength: maxLength(3),
      },
      gender: { required },
    },
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
@import "../style/form.scss";
</style>