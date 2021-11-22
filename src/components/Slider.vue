<template>
  <section class="banner-slide">

    <VueSlickCarousel v-bind="settings">
    <div class="banner-area slide-bg1 bg_cover d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="banner-content text-center">
              <h3 data-animation="fadeInDown" data-delay=".1s" class="title">Quality is Our Soul <br>...</h3>
<!--              <p class="description">-->
<!--                We have the best and very creative team that work tirelessly to come up with new ideas <br> that make our Products stand out among the existing brands.-->
<!--              </p>-->
              <a data-animation="fadeInUp" data-delay="1s" class="main-btn" href="/about">Learn More</a>
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
              <h3 data-animation="fadeInDown" data-delay=".1s" class="title">Delivering a Better Tomorrow <br>...</h3>
<!--              <p class="description">-->
<!--                We have the best and very creative team that work tirelessly to come up with new ideas <br> that make our Products stand out among the existing brands.-->
<!--              </p>-->
              <a data-animation="fadeInUp" data-delay="1s" class="main-btn" href="/about">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="banner-area slide-bg3 bg_cover d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="banner-content text-center">
                <h3 data-animation="fadeInDown" data-delay=".1s" class="title">Making the digital future a reality <br> ...</h3>
<!--                <p class="description">-->
<!--                  We have the best and very creative team that work tirelessly to come up with new ideas <br> that make our Products stand out among the existing brands.-->
<!--                </p>-->
                <a data-animation="fadeInUp" data-delay="1s" class="main-btn" href="/about">Learn More</a>
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
