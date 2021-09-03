<template>
  <div
    class="w-full text-gray-700 bg-transparent  dark-mode:text-red-200 dark-mode:bg-gray-800"
  >
    <div
      class="flex flex-row justify-between max-w-screen-xl px-4 mx-auto  md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
    >
      <div class="p-4">
        <a
          id="logo"
          href="#"
          class="text-4xl font-semibold tracking-widest rounded-lg  text-custom-purple dark-mode:text-white focus:outline-none focus:shadow-outline"
          >Omar Ashraf</a
        >
      </div>
      <nav
        class="flex flex-row justify-end flex-grow pb-4  md:pb-0 md:flex md:justify-end md:flex-row"
      >
        <a
          class="z-0 px-4 py-2 mt-2 italic transition duration-300 ease-in bg-transparent border-2 border-purple-500  rounded-3xl text-md dark-mode:bg-transparent dark-mode:hover:bg-purple-300 dark-mode:focus:bg-gray-300 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-100 focus:text-purple-900 hover:bg-purple-500 focus:bg-purple-500 focus:outline-none focus:shadow-outline"
          href="#"
          >Say Hello</a
        >

        <!-- <svg
          class="w-3 h-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg> -->

        <!-- <button v-on:click="toggle">Change Theme</button> -->
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Allison&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Sedgwick+Ave&display=swap");
#logo {
  font-family: "Allison", cursive;
}
</style>