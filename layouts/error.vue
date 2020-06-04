<template>
  <div>
    <h1 v-if="error.statusCode === 404">Error!! 404</h1>
    <p>{{ error }}</p>
  </div>
</template>

<script charset="utf-8">
export default {
  props: ["error"],
};
</script>
