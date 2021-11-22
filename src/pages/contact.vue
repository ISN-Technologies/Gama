<template>
  <div>
    <NavBar/>
    <PageHeader title="Contact us" />
    <ContactPage />
    <FooterTwo/>
  </div>
</template>

<script>

  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import ContactPage from "../components/ContactPage";
  import NavBar from "@/components/NavBar";
  export default {
    components: {
      NavBar,
      ContactPage,
      PageHeader,
      FooterTwo,
    },
    head(){
      return {
        title: "Gama | Contact Us"
      }
    }
  }
</script>
