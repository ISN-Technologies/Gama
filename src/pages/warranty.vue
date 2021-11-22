<template>
  <div>
    <NavBar />
    <PageHeader title="Services & Warranty" />
    <WarrantySingle />
    <FooterTwo/>
  </div>
</template>

<script>


  import PageHeader from "../components/PageHeader";
  import WarrantySingle from "@/components/warranty-single";
  import NavBar from "@/components/NavBar";
  import Footer from "@/components/Footer";
  import FooterTwo from "@/components/FooterTwo";
  export default {
    components: {
      FooterTwo,
      NavBar,
      WarrantySingle,
      PageHeader
    },
    head(){
      return {
        title: "Gama | Services & Warranty"
      }
    }
  }
</script>
