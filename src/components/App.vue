<template>
  <div>
    <navbar/>
      <router-view>
      </router-view>
    <footer_page/>
  </div>
</template>
<script setup>
import navbar from "./pages/navbar_footer/navbar.vue"
import footer_page from "./pages/navbar_footer/footer.vue"
</script>
<style>
.router-link-active{
  border-bottom: 1px solid white;
}
</style>