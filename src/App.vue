<template class="">
  <div class="overflow-x-hidden bg-custom-offwhite">
    <div :class="isDark ? '' : 'dark'">
      <Navbar />
      <Header v-model="isDark" />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour /> <vue-snotify></vue-snotify>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SectionOne from "./components/Section1.vue";
import SectionTwo from "./components/Section2.vue";
import Navbar from "./components/Navbar.vue";
import SectionThree from "./components/Section3.vue";
import SectionFour from "./components/Section4.vue";
export default {
  name: "App",

  data() {
    return {
      isDark: true,
    };
  },
  components: {
    Header,
    SectionOne,
    SectionTwo,
    Navbar,
    SectionThree,
    SectionFour,
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
