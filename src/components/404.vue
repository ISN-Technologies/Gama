<template>
  <div class="error-404">
    <p class="description">Oops! Sorry we couldn't find the page you were looking for.</p>
    <NuxtLink class="link"  to="/"> << Take me Home</NuxtLink>
  </div>
</template>
<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
.error-404 .logo{
  padding:30px;
}
.error-404 .description{
  color: #333333;
  font-size: 20px;
  font-weight: 300;
  line-height: 21px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.link{
  color: #7F828B !important;
  text-decoration: none;
}
</style>
