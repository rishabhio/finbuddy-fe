

<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="email" />
      <br />
      <br />
      <input v-model="password" placeholder="password" type="password" />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
     ...mapMutations(["setUser", "setToken"]),
    async login(e) {
      e.preventDefault();
      console.log("authenticating");
      const response = await fetch("http://localhost:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });
      const resp = await response.json() 
      console.log(resp);
      this.setUser(resp.access);
      this.setToken(resp.access);
      this.$router.push("/txns");
    },
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>


