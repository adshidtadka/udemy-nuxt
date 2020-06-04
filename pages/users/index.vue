<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        {{ message }}
      </h1>
      <h2 class="subtitle">
        My fantabulous Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div class="links">
        <router-link to="/price" class="button--green">Price Page</router-link>
        <router-link to="/mypage" class="button--grey">My Page</router-link>
      </div>
      <div style="padding-top: 15px;">
        <ul>
          <li
            style="list-style-type: none;"
            v-for="user in users"
            :key="user.id"
          >
            {{ user.id }}, {{ user.name }}, {{ user.company.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Logo from "~/components/Logo.vue";

const url = "https://jsonplaceholder.typicode.com/users";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      message: "Users",
    };
  },
  asyncData({ error }) {
    return axios
      .get(url)
      .then((res) => ({ users: res.data }))
      .catch((e) => {
        console.log(e.response.status);
        error({ status: e.response.status, message: e.message });
      });
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
