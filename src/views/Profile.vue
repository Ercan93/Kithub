<template>
  <div>
    <h1>User's profile page</h1>
  </div>
</template>
<script>
export default {
  name: "UserProfile",
  data() {
    return {
      email: null,
      token: null
    };
  },
  created() {
    let localToken = localStorage.getItem("kithub-api-user-token");
    let localEmail = localStorage.getItem("kithub-api-user-email");
    if (!localToken) {
      this.$router.push("/");
    } else {
      this.email = localEmail;
      this.token = localToken;
    }
  }
};
</script>