<template>
  <div class="register">
    <div
      class="container d-flex justify-content-center align-items-center text-start vh-75"
    >
      <div class="card w-50 shadow">
        <div class="card-header py-3">
          <h2 class="text-center">SIGN UP</h2>
        </div>
        <div class="card-body">
          <form @submit.prevent="checkForm" action="/" method="POST">
            <div class="col-12">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="name"
                name="name"
                placeholder="Your name"
              />
            </div>
            <div class="col-12">
              <label for="number" class="form-label">Phone Number</label>
              <input
                type="number"
                class="form-control"
                id="number"
                v-model="number"
                name="number"
                placeholder="Your Phone Number"
              />
            </div>
            <label for="password" class="form-label">Password</label>
            <div class="col-12 input-group">
              <input
                :type="show ? 'password' : 'text'"
                class="form-control"
                id="password"
                v-model="password"
                name="password"
                placeholder="password"
              />
              <div @click="show = !show" class="btn btn-outline-secondary">
                <span v-html="show ? svg : svgon"></span>
              </div>
            </div>
            <div class="col-12">
              <label for="passwordConfirm" class="form-label"
                >Confirm Password</label
              >
              <input
                :type="show ? 'password' : 'text'"
                class="form-control"
                id="passwordConfirm"
                v-model="passwordConfirm"
                name="passwordConfirm"
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit" class="btn btn-primary mt-4 w-100">
              Register User
            </button>
          </form>
        </div>
         <div class="card-footer">
          <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li class="text-danger" v-for="error, i in errors" :key="i">{{ error }}</li>
          </ul>
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "Registor",
  data() {
    return {
      errors: [],
      name: null,
      number: null,
      password: null,
      passwordConfirm: null,
      show: true,
      svg: ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
</svg>`,
      svgon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>`,
    };
  },
  methods: {
    async checkForm(e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }

      if (!this.number) {
        this.errors.push("Number required");
      }

      if (!this.password && !this.passwordConfirm) {
        this.errors.push("password required");
      }

      if (this.password !== this.passwordConfirm) {
        this.errors.push("password not equal");
      }
      if (!this.errors.length) {
        const dt = {
          fullName: this.name,
          phoneNumber: this.number,
          prePassword: this.passwordConfirm,
          password: this.password,
        };
        try {
          await this.$store.dispatch("registerUser", dt);
          await this.$router.push("/");
        } catch (errors) {
          await errors;
        }
      }

      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
    },
  },
};
</script>
<style scoped lang="scss">
</style>
