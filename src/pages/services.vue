<template>
  <div>
    <Nav />
    <PageHeader title="Services" />
    <ServicePage />
    <Footer/>
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import ServicePage from "../components/ServicePage";
  export default {
    components: {
      ServicePage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Gama | Services"
      }
    }
  }
</script>
