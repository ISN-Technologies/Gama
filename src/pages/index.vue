<template>
  <div>
    <NavBar />
    <Slider />
    <NanoArea/>
    <AboutOverview />
    <TopProducts />
    <Partner />
    <FaqBrandArea />
    <FaqArea />
    <Footer />
  </div>
</template>

<script>

  import NavBar from "../components/NavBar";
  import Slider from "../components/Slider";
  import TopProducts from "../components/TopProducts";
  import FaqBrandArea from "../components/FaqBrandArea";
  import FaqArea from "../components/FaqArea";
  import Partner from "../components/Partner";
  import Footer from "../components/Footer";
  import NanoArea from "@/components/NanoArea";
  import AboutOverview from "@/components/AboutOverview";
  export default {
    components: {
      AboutOverview,
      NanoArea,
      Footer,
      Partner,
      FaqArea,
      FaqBrandArea,
      TopProducts,
      Slider,
      NavBar

    }
  }
</script>
