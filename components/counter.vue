<template>
  <section style="display: flex; justify-content: center; margin: 20px auto;">
    <h2 class="subtitle">Counter: {{ $store.state.counter.counter }}</h2>
    <button
      class="button--green"
      style="margin: 15px 0px 15px 30px;"
      @click="$store.commit('counter/countUp')"
    >
      +1
    </button>
    <button
      class="button--green"
      style="margin: 15px 30px;"
      @click="$store.commit('counter/reset')"
    >
      reset
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Counter App",
    };
  },
};
</script>
