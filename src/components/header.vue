<template>
  <div>
    <header
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm"
    >
      <router-link class="mx-2 text-decoration-none text-dark me-md-auto" to="/"
        >Home</router-link
      >
      <nav class="my-2 my-md-0 me-md-3">
        <router-link
          class="mx-2 text-decoration-none text-info"
          to="/auth/login"
          >Log In</router-link
        >
        <router-link
          class="mx-2 text-decoration-none text-info"
          to="/auth/register"
          >Sign Up</router-link
        >
        <router-link class="mx-2 text-decoration-none text-info" to="/"
          >Log Out</router-link
        >
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>