<template>
  <div>
    <NavBar />
    <PageHeader title="Top Products" />
    <ProductsPage />
    <Footer/>
  </div>
</template>

<script>

  import Nav from "../components/Nav";
  import FooterTwo from "../components/FooterTwo";
  import PageHeader from "../components/PageHeader";
  import ProductsPage from "../components/ProductsPage";
  import NavBar from "~/components/NavBar";
  export default {
    components: {
      NavBar,
      ProductsPage,
      PageHeader,
      FooterTwo,
      Nav
    },
    head(){
      return {
        title: "Gama | Products"
      }
    }
  }
</script>
