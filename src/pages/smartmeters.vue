<template>
  <div>
    <NavTwo />
    <PageHeader title="Our Services" />
    <ServicePage />
    <FooterTwo />
  </div>
</template>

<script>

  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import ServicePage from "../components/ServicePage";
  import NavTwo from "../components/NavTwo";
  export default {
    components: {
      ServicePage,
      PageHeader,
      FooterTwo,
      NavTwo
    },
    head(){
      return {
        title: "AFAK Tanzania | Our Services"
      }
    }
  }
</script>
