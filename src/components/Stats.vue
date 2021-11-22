<template>
  <section class="stats-area bg_cover" style="background-image: url(/assets/images/ban.jpg);" v-observe-visibility="onVisibilityChange">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="stats-item d-block d-md-flex justify-content-between align-items-center">
            <div class="item animated wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
<!--              <i class="flaticon-cityscape"></i>-->
              <h3 class="title odometer"><countTo :startVal='0' :endVal='startCounter ? 20 : 0' :duration='3000'></countTo></h3>
              <p>Products</p>
            </div>
            <div class="item animated wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
<!--              <i class="flaticon-design"></i>-->
              <h3 class="title odometer"><countTo :startVal='0' :endVal='startCounter ? 100 : 0' :duration='3000'></countTo></h3>
              <p>Clients are happy and satisfied</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import countTo from 'vue-count-to';
  import { ObserveVisibility } from 'vue-observe-visibility'
  export default {
    name: "Stats",
    components: { countTo },
    directives: {
      ObserveVisibility
    },
    data() {
      return{
        startCounter: false
      }
    },
    methods: {
      onVisibilityChange (isVisible) {
        if (isVisible){
          this.startCounter = true;
        }

      },
    }
  }
</script>


<style scoped>

</style>
