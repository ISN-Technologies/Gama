<template>
  <section class="banner-slide">

    <VueSlickCarousel v-bind="settings">
      <div class="banner-area slide-bg1 bg_cover d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="banner-content text-center">
                <h3 data-animation="fadeInDown" data-delay=".1s" class="title">Quality is Our Soul</h3>
                <a data-animation="fadeInUp" data-delay="1s" class="main-btn" href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-area slide-bg2 bg_cover d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="banner-content text-center">
                <h3 data-animation="fadeInDown" data-delay=".1s" class="title">Innovative Products</h3>
                <a data-animation="fadeInUp" data-delay="1s" class="main-btn" href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-area slide-bg2 bg_cover d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="banner-content text-center">
                <h3 data-animation="fadeInDown" data-delay=".1s" class="title">Built for Africa</h3>
                <a data-animation="fadeInUp" data-delay="1s" class="main-btn" href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </VueSlickCarousel>
  </section>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    export default {
      name: "Banner",
      components: { VueSlickCarousel },
      data() {
        return {
          settings: {
            arrows: false,
            autoplay: true
          },
        }
      },
    }
</script>

<style scoped>

</style>
