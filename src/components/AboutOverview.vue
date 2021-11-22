<template>
  <section class="about-area about-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="about-right-content">
            <div class="about-thumb animated wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
              <img src="/assets/images/overview.jpeg" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="about-main-content">
            <div class="about-title">
              <h3 class="title">Innovation that Stops at Nothing. </h3>
              <p>
                Inspired by our ambition and the power of technology to stimulate human progress,
                we work tirelessly to bring you innovative sustainable products.
              </p>
              <p>
                We provide high-quality products with innovative designs for durable use.
              </p>
              <div class="about-btns mt-5 d-block d-sm-flex  align-items-center">
                <button class="main-btn" @click="$router.push('about')">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape">
      <img src="/assets/images/shape/shape-13.png" alt="">
    </div>
  </section>
</template>

<script>
    export default {
        name: "AboutOverview"
    }
</script>

<style scoped>

</style>
