<template>
  <div>
    <NavBar />
    <SliderTwo />
    <NanoArea />
    <AboutArea />
    <EmailArea />
    <ServicesTwoArea />
    <VideoArea />
    <MissionArea />
    <ProjectThreeArea />
    <ClientThreeArea />
    <FunfactsThreeArea />
    <ExperienceArea />
    <BlogThreeArea />
    <BrandThreeArea />
    <FooterTwo />
  </div>

</template>

<script>
  import NavBar from "../components/NavBar";
  import SliderTwo from "../components/SliderTwo";
  import FooterTwo from "../components/FooterTwo";
  import NanoArea from "../components/NanoArea";
  import AboutArea from "../components/AboutArea";
  import EmailArea from "../components/EmailArea";
  import ServicesTwoArea from "../components/ServicesTwoArea";
  import VideoArea from "../components/VideoArea";
  import MissionArea from "../components/MissionArea";
  import ProjectThreeArea from "../components/ProjectThreeArea";
  import ClientThreeArea from "../components/ClientThreeArea";
  import FunfactsThreeArea from "../components/FunfactsThreeArea";
  import ExperienceArea from "../components/ExperienceArea";
  import BlogThreeArea from "../components/BlogThreeArea";
  import BrandThreeArea from "../components/BrandThreeArea";
  export default {
    components: {
      BrandThreeArea,
      BlogThreeArea,
      ExperienceArea,
      FunfactsThreeArea,
      ClientThreeArea,
      ProjectThreeArea,
      MissionArea,
      VideoArea,
      ServicesTwoArea,
      EmailArea,
      AboutArea,
      NanoArea,
      NavBar,
      SliderTwo,
      FooterTwo,
    },
    head(){
      return {
        title: "Gama | Home 3"
      }
    }
  }
</script>
