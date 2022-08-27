<template>
  <div>
    <div class="wrapper">
      <HeaderVue />
      <Sidebar />
      
      <routerView/>

      <FooterVue />

    </div>


  </div>
</template>

<script>
import HeaderVue from './layouts/Header.vue';
import Sidebar from './layouts/Sidebar.vue'
import FooterVue from './layouts/Footer.vue';
export default {
  components: {
    HeaderVue,
    Sidebar,
    FooterVue
  }
}
</script>

<style lang="scss" scoped>
</style>