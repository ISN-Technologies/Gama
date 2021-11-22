<template>
  <div>
    <NavBar/>
    <PageHeader title="Resources" />
    <ResourcePage />
    <FooterTwo/>
  </div>
</template>

<script>

  import PageHeader from "../components/PageHeader";
  import ResourcePage from "@/components/resource-page";
  import NavBar from "@/components/NavBar";
  import Footer from "@/components/Footer";
  import FooterTwo from "@/components/FooterTwo";

  export default {
    components: {
      FooterTwo,
      ResourcePage,
      PageHeader,
      NavBar
    },
    head(){
      return {
        title: "Gama | Resource Center"
      }
    }
  }
</script>
