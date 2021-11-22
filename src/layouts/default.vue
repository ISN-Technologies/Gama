<template>
  <div>
    <nuxt />
  </div>
</template>


<script>

  export default {
    components: {
    },
    head(){
      return {
        title: "Gama | Computers | Smart Meters | TV | Data Solutions | Network Solutions | Consumable Electronics"
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>

<style>
</style>
