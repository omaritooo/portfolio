<template >
  <div
    id="sect"
    data-aos="fade-left"
    data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    class="px-2 py-10 bg-gray-300 shadow-inner md:p-20"
  >
    <div
      class="flex flex-col justify-center w-full mx-auto text-3xl  md:w-2/5 rounded-b-xl bg-custom-champagne"
    >
      <div class="content-center bg-custom-blackie rounded-t-xl">
        <div class="flex justify-start w-1/12 p-4 space-x-3">
          <div
            class="w-1/12 p-2 transition duration-200 ease-in-out bg-red-500 rounded-full  hover:bg-red-600"
          ></div>
          <div
            class="w-1/12 p-2 transition duration-200 ease-in-out bg-yellow-500 rounded-full  hover:bg-yellow-600"
          ></div>

          <div
            class="w-1/12 p-2 transition duration-200 ease-in-out bg-green-500 rounded-full  hover:bg-green-600"
          ></div>
        </div>
      </div>
      <div
        id="terminal"
        class="flex px-6 py-10 antialiased text-gray-400 terminal"
      >
        <div class="flex flex-col space-y-6">
          <div class="flex space-x-10 text-xl">
            <span>1</span>
            <span class="antialiased font-bold text-red-400"
              >&lt;h1&gt;
              <span class="font-normal text-yellow-500">Who am I?</span>
              &lt;/h1&gt;</span
            >
          </div>
          <div class="flex space-x-10 text-xl">
            <span>2</span>
            <span class="font-normal font-bold text-red-400"
              >&lt;p&gt;
              <span class="font-normal text-green-400"
                >I'm a 23 year old fresh graduate with a BSc in Computer
                Engineering from the
                <span class="antialiased font-bold text-red-400">
                  &lt;em&gt;<span
                    class="antialiased font-normal text-green-400"
                  >
                    Arab Academy of Science and Technology
                  </span>
                  &lt;/em&gt; </span
                >.</span
              >
              &lt;/p&gt;</span
            >
          </div>
          <div class="flex space-x-10 text-xl">
            <span>3</span>
            <span class="font-normal font-bold text-red-400"
              >&lt;template&gt;
              <span class="font-normal text-green-400"
                >I'm incredibly interested and invested in the front end
                development field but I'm highly flexible and adaptable when it
                comes to learning and working with new technologies.</span
              >
              &lt;/template&gt;</span
            >
          </div>

          <div class="flex space-x-10 text-xl">
            <span>4</span>
            <span class="font-normal font-bold text-red-400"
              >&lt;div&gt;
              <span class="font-normal text-green-400"
                >My hobbies and interests include music, reading and video
                games.</span
              >
              &lt;div&gt;</span
            >
          </div>
        </div>
        <!-- {{ para }} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      paragraph: [
        "<h1>Who am I?</h1>",
        "testtesttesttesttesttest",
        "testtesttesttesttesttest",
        "testtesttesttesttesttest",
        "testtesttesttesttesttest",
        "testtesttesttesttesttest",
        "testtesttesttesttesttest",
        "testtesttesttesttesttest",
        "testtesttesttesttesttest",
      ],
    };
  },
  mounted: function () {
    this.$forceUpdate();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/ss2?family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Bungee+Inline&family=Monoton&family=Press+Start+2P&family=Permanent+Marker&family=Rock+Salt&family=Tourney:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Sedgwick+Ave&display=swap");

.vue-typer {
  font-family: "K2D", sans-serif;
}

.vue-typer .custom.char.typed {
  font-family: "K2D", sans-serif;
  color: #724bcc;
}
.vue-typer .custom.char.selected {
  font-family: "K2D", sans-serif;
  color: #724bcc;
  background-color: transparent;
}

.vue-typer .custom.caret {
  color: #724bcc;
}
#sect {
  background-color: #d1d5db;
  /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23B5B5BF' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%237C8B8E'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E"); */
}
#terminal {
  font-family: "K2D", sans-serif;
  font-weight: 500;
  font-smooth: auto;
}
</style>

