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
      username: null,
      token: null
    };
  },
  created() {
    let localToken = localStorage.getItem("kithub-api-user-token");
    let localUsername = localStorage.getItem("kithub-api-user-username");
    if (!localToken) {
      this.$router.push("/");
    } else {
      this.username = localUsername;
      this.token = localToken;
    }
  }
};
</script>