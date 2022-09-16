<template>
  <div>
    <NavBar />
    <PageHeader title="Ultrasonic Water Meter" />
    <ProjectSingle />
    <FooterTwo />
  </div>
</template>

<script>

  import NavBar from "../components/NavBar";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import ProjectSingle from "../components/ProjectSingle";
  export default {
    components: {
      ProjectSingle,
      PageHeader,
      FooterTwo,
      NavBar
    },
    head(){
      return {
        title: "Gama | Ultrasonic Water Meter"
      }
    }
  }
</script>
