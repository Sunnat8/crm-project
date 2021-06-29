<template>
  <div>
    <header
      class="
        d-flex
        flex-column flex-md-row
        align-items-center
        p-3
        px-md-4
        mb-3
        bg-body
        border-bottom
        shadow-sm
      "
    >
      <router-link class="mx-2 text-decoration-none text-dark me-md-auto" to="/"
        >Home</router-link
      >
      <nav class="my-2 my-md-0 me-md-3">
        <router-link
          v-if="!isLoggedIn"
          class="mx-2 text-decoration-none text-info"
          to="/auth/login"
          >Log In</router-link
        >
        <router-link
          v-if="!isLoggedIn"
          class="mx-2 text-decoration-none text-info"
          to="/auth/register"
          >Sign Up</router-link
        >
        <div @click="logout" v-if="isLoggedIn" class="d-inline-block">
          <router-link class="mx-2 text-decoration-none text-info" to="/"
            >Log Out</router-link
          >
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/auth/login");
      });
    },
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  },
};
</script>