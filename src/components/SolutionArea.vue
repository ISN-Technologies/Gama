<template>
  <section class="solution-area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="solution-thumb animated wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
            <img src="/assets/images/cd1.jpg" alt="">
<!--            <div class="shape">-->
<!--              <img src="/assets/images/shape/shape-1.png" alt="">-->
<!--            </div>-->
          </div>
        </div>
        <div class="col-lg-7">
          <div class="solution-item">
<!--            <div class="solution-header">-->
<!--              <h3 class="title">Market Leader</h3>-->
<!--              <span>Innovative Products for Sustainable Progress. </span>-->
<!--            </div>-->
            <div class="row">
              <div class="col-lg-7">
                <div class="solution-list-content">
                  <p>
                    Inspired by our ambition and the power of technology to stimulate human progress,
                    we work tirelessly to bring you innovative sustainable products.
                  </p>
                  <ul>
                    <li><i class="flaticon-tick"></i>We offer high quality products.</li>
                    <li><i class="flaticon-tick"></i>Innovative Designs.</li>
                    <li><i class="flaticon-tick"></i>Sustainable use.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="solution-user  d-flex align-items-center">
<!--              <div class="user">-->
<!--                <img src="/assets/images/solution-user.png" alt="user">-->
<!--              </div>-->
<!--              <div class="sing">-->
<!--                <img src="/assets/images/solution-sing.png" alt="user">-->
<!--              </div>-->
              <button class="main-btn" @click="$router.push('about')">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="solution-shape animated wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
      <img src="/assets/images/shape/shape-13.png" alt="">
    </div>
  </section>
</template>

<script>
    export default {
        name: "SolutionArea"
    }
</script>

<style scoped>

</style>
