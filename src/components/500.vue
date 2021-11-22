<template>
  <div class="error-404">
    <p class="description">Oops! Sorry something went wrong.</p>
    <NuxtLink class="link"  to="/"> << Take me Home</NuxtLink>
  </div>
</template>
<script>
export default {
  name: 'error-500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
