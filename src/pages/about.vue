<template>
  <div>
    <NavBar />
    <PageHeader title="About Us" />
    <AboutPage />
    <WhyUs />
    <Stats/>
    <OurMission/>

    <FooterTwo />
  </div>
</template>

<script>

  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import AboutPage from "../components/AboutPage";
  import NavBar from "~/components/NavBar";
  import WhyUs from "~/components/WhyUs";
  import Stats from "~/components/Stats";
  import OurMission from "~/components/OurMission";
  export default {
    components: {
      OurMission,
      Stats,
      WhyUs,
      NavBar,
      AboutPage,
      PageHeader,
      FooterTwo
    },
    head(){
      return {
        title: "Gama | About Us"
      }
    }
  }
</script>
