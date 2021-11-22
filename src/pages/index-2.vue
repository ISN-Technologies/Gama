<template>
  <div>
    <NavTwo/>
    <SliderTwo />
    <ProjectContactArea />
    <SolutionTwoArea />
    <WhyUs />
    <Stats />
    <OurMission />
    <LeadershipArea />
<!--    <ClientTwoArea />-->
<!--    <ProjectTwoArea />-->
<!--    <BrandArea />-->
<!--    <BlogTwoArea />-->
<!--    <GMap />-->
    <Footer/>
  </div>

</template>

<script>
  import NavTwo from "../components/NavTwo";
  import SliderTwo from "../components/SliderTwo";
  import ProjectContactArea from "../components/ProjectContactArea";
  import SolutionTwoArea from "../components/SolutionTwoArea";
  import WhyUs from "../components/WhyUs";
  import Stats from "../components/Stats";
  import OurMission from "../components/OurMission";
  import LeadershipArea from "../components/LeadershipArea";
  import ClientTwoArea from "../components/ClientTwoArea";
  import ProjectTwoArea from "../components/ProjectTwoArea";
  import BrandArea from "../components/BrandArea";
  import BlogTwoArea from "../components/BlogTwoArea";
  import GMap from "../components/GMap";
  import FooterTwo from "../components/FooterTwo";
  export default {
    components: {
      FooterTwo,
      GMap,
      BlogTwoArea,
      BrandArea,
      ProjectTwoArea,
      ClientTwoArea,
      LeadershipArea,
      OurMission,
      Stats,
      WhyUs,
      SolutionTwoArea,
      ProjectContactArea,
      NavTwo,
      SliderTwo
    },
    head(){
      return {
        title: "Gama | Home 2"
      }
    }
  }
</script>
