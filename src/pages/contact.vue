<template>
  <div>
    <NavBar/>
    <PageHeader title="Contact us" />
    <ContactPage />
    <FooterTwo/>
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import ContactPage from "../components/ContactPage";
  import GMap from "../components/GMap";
  import NavBar from "@/components/NavBar";
  export default {
    components: {
      NavBar,
      ContactPage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Gama | Contact Us"
      }
    }
  }
</script>
