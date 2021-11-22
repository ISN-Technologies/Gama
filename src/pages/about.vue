<template>
  <div>
    <NavBar />
    <PageHeader title="About Us" />
    <AboutPage />
    <WhyUs />
    <Stats/>
    <OurMission/>
<!--    <ClientPage />-->
<!--    <VideoArea />-->
<!--    <BrandArea />-->
<!--    <LeadershipPage />-->
<!--   -->
    <FooterTwo />
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import AboutPage from "../components/AboutPage";
  import FunFactArea from "../components/FunFactArea";
  import ClientPage from "../components/ClientPage";
  import VideoArea from "../components/VideoArea";
  import BrandArea from "../components/BrandArea";
  import LeadershipPage from "../components/LeadershipPage";
  import ContactArea from "../components/ContactArea";
  import NavBar from "~/components/NavBar";
  import ServiceArea from "~/components/ServiceArea";
  import WhyUs from "~/components/WhyUs";
  import MissionArea from "~/components/MissionArea";
  import FunfactsThreeArea from "~/components/FunfactsThreeArea";
  import Stats from "~/components/Stats";
  import OurMission from "~/components/OurMission";
  export default {
    components: {
      OurMission,
      Stats,
      FunfactsThreeArea,
      MissionArea,
      WhyUs,
      ServiceArea,
      NavBar,
      ContactArea,
      LeadershipPage,
      BrandArea,
      VideoArea,
      ClientPage,
      FunFactArea,
      AboutPage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Gama | About Us"
      }
    }
  }
</script>
