<template>
  <div class="nuxt-error">
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#ff0000" viewBox="0 0 48 48">
      <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
    </svg>
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
import error404 from '~/components/404.vue';
import error500 from '~/components/500.vue';
import PageHeader from "@/components/PageHeader";
export default {
  name: 'nuxt-error',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404;
      }
      // catch everything else
      return error500;
    },
  },}
</script>
<style>
.nuxt-error{
  padding: 1rem;
  background: #F7F8FB;
  color: #47494E;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 100 !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
