<template>
  <div class="px-10 md:px-32 skillssection" id="section">
    <div
      class="mt-10 mb-20 text-center uppercase text-purp-light drop-shadow-lg"
    >
      <h1 id="skills" class="justify-center text-xl text-center md:text-5xl">
        Skills and proficiencies <span id="spn" class="">★</span>
      </h1>
    </div>
    <div class="">
      <div class="flex flex-col md:flex-row md:justify-around">
        <div class="flex flex-col items-center justify-around">
          <h2
            id="frontend"
            class="px-2 my-6 text-lg text-gray-600 uppercase md:text-2xl"
          >
            Front end
          </h2>

          <div
            class="flex justify-center p-6 bg-yellow-400 border-8 border-yellow-600 rounded-full  md:p-10"
          >
            <img class="shadow-xl" src="../assets/browser.svg" alt="" />
          </div>
          <div
            class="flex justify-center  md:px-10 md:flex-row md:w-max gap-x-2 md:gap-x-4"
          >
            <div
              class=""
              v-show="image.type === 'front'"
              v-for="image in images"
              :key="image.name"
            >
              <div v-if="image.skill === 'S'">
                <img
                  v-tooltip="image.tag"
                  class="p-2 mx-auto mt-10 mb-10 transition duration-500 ease-in-out transform border-2 border-green-400 rounded-full  hover:-translate-y-1 hover:shadow-xl hover:scale-110 hover:bg-transparent"
                  :src="require(`@/assets/${image.name}.svg`)"
                  alt=""
                />
              </div>
              <div v-if="image.skill === 'A'">
                <img
                  v-tooltip="image.tag"
                  class="p-2 mx-auto mt-10 mb-10 transition duration-500 ease-in-out transform border-2 border-yellow-500 rounded-full  hover:-translate-y-1 hover:shadow-xl hover:scale-110 hover:bg-transparent"
                  :src="require(`@/assets/${image.name}.svg`)"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-around">
          <h2 id="backend" class="px-2 my-6 text-2xl text-gray-600 uppercase">
            Backend
          </h2>

          <div
            class="flex justify-center p-10 bg-red-400 border-8 border-red-600 rounded-full "
          >
            <div></div>
            <img class="shadow-xl" src="../assets/server.svg" alt="" />
          </div>
          <div
            class="flex justify-center  md:px-10 md:flex-row md:w-max gap-x-2 md:gap-x-4"
          >
            <div
              class=""
              v-show="image.type === 'back'"
              v-for="image in images"
              :key="image.name"
            >
              <div v-if="image.skill === 'S'">
                <img
                  v-tooltip="image.tag"
                  class="p-2 mx-auto mt-10 mb-10 transition duration-500 ease-in-out transform border-2 border-green-400 rounded-full  hover:-translate-y-1 hover:shadow-xl hover:scale-110 hover:bg-transparent"
                  :src="require(`@/assets/${image.name}.svg`)"
                  alt=""
                />
              </div>
              <div v-if="image.skill === 'A'">
                <img
                  v-tooltip="image.tag"
                  class="p-2 mx-auto mt-10 mb-10 transition duration-500 ease-in-out transform border-2 border-yellow-500 rounded-full  hover:-translate-y-1 hover:shadow-xl hover:scale-110 hover:bg-transparent"
                  :src="require(`@/assets/${image.name}.svg`)"
                  alt=""
                />
              </div>
              <div v-if="image.skill === 'B'">
                <img
                  v-tooltip="image.tag"
                  class="p-2 mx-auto mt-10 mb-10 transition duration-500 ease-in-out transform border-2 border-yellow-300 rounded-full  hover:-translate-y-1 hover:shadow-xl hover:scale-110 hover:bg-transparent"
                  :src="require(`@/assets/${image.name}.svg`)"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <h2 id="misc" class="px-2 my-6 text-2xl text-gray-600 uppercase">
          Misc
        </h2>

        <div
          class="flex justify-center p-10 bg-blue-400 border-8 border-blue-600 rounded-full shadow-inner "
        >
          <img class="" src="../assets/misco.svg" alt="" />
        </div>
        <div
          class="flex justify-center  md:px-10 md:flex-row md:w-max gap-x-2 md:gap-x-4"
        >
          <div
            class=""
            v-show="image.type === 'misc'"
            v-for="image in images"
            :key="image.name"
          >
            <div v-if="image.skill === 'S'">
              <img
                v-tooltip="image.tag"
                class="p-2 mx-auto mt-10 mb-10 transition duration-500 ease-in-out transform border-2 border-green-400 rounded-full  hover:-translate-y-1 hover:shadow-xl hover:scale-110 hover:bg-transparent"
                :src="require(`@/assets/${image.name}.svg`)"
                alt=""
              />
            </div>
            <div v-if="image.skill === 'A'">
              <img
                v-tooltip="image.tag"
                class="p-2 mx-auto mt-10 mb-10 transition duration-500 ease-in-out transform border-2 border-yellow-500 rounded-full  hover:-translate-y-1 hover:shadow-xl hover:scale-110 hover:bg-transparent"
                :src="require(`@/assets/${image.name}.svg`)"
                alt=""
              />
            </div>
            <div v-if="image.skill === 'B'">
              <img
                v-tooltip="image.tag"
                class="p-2 mx-auto mt-10 mb-10 transition duration-500 ease-in-out transform border-2 border-yellow-300 rounded-full  hover:-translate-y-1 hover:shadow-xl hover:scale-110 hover:bg-transparent"
                :src="require(`@/assets/${image.name}.svg`)"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 50,
      delay: 100,
      images: [
        {
          name: "vue",
          tag: "VueJS",
          skill: "S",
          diff: "hard",
          type: "front",
        },
        {
          name: "tailwindcss",
          tag: "TailwindCSS",
          skill: "S",
          type: "front",
        },
        {
          name: "css3",
          tag: "CSS3",
          skill: "S",
          type: "front",
        },
        {
          name: "html5",
          tag: "HTML5",
          skill: "S",
          type: "front",
        },
        {
          name: "react",
          tag: "ReactJs/React Native",
          skill: "A",
          type: "front",
        },
        {
          name: "nodejs-seeklogo.com",
          tag: "NodeJS",
          skill: "A",
          type: "back",
        },

        { name: "laravel", tag: "Laravel", skill: "B", type: "back" },
        {
          name: "mongodb-icon-1",
          tag: "MongoDB",
          skill: "B",
          type: "back",
        },
        { name: "database", tag: "SQL", skill: "S", type: "back" },

        {
          name: "python",
          tag: "Python",
          skill: "A",
          type: "misc",
        },
        {
          name: "java",
          tag: "Java",
          type: "misc",
          skill: "A",
        },

        {
          name: "cdnlogo_c",
          tag: "C#",
          skill: "A",
          type: "misc",
        },
        {
          name: "php",
          tag: "PHP",
          skill: "B",
          type: "back",
        },
        {
          name: "git",
          tag: "Git",
          skill: "S",
          type: "misc",
        },
      ],
    };
  },

  methods: {
    increment: function (counter, n) {
      while (n < 13) {
        this.counter = counter + counter;
        console.log(counter);
        n++;
        return counter;
      }
    },
  },
  computed: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Allison&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Sedgwick+Ave&display=swap");

.icons {
  width: 10%;
  display: flex;
  align-content: center;
  justify-content: center;
}
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: white;
  border-color: #9058f3;
  color: #9058f3;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: #9058f3;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 15px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}

h1 {
  font-size: 20px;
  display: inline-flex;
  flex-direction: column;
}
h1 > #spn {
  display: flex;
  align-items: center;
  justify-content: center;
}
#spn:after,
#spn:before {
  content: "";
  background: #9058f3;
  height: 3px;
  flex: 0 0 40%;
  margin: 20px;
}
#frontend {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 #f7c035, 0 1px 0 #f7c035;
  transition: box-shadow 0.3s;
  overflow: hidden;
}

#frontend:hover {
  box-shadow: inset 0 -30px 0 #f7c035;
  color: white;
}

#backend {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 #f57173, 0 1px 0 #f57173;
  transition: box-shadow 0.3s;
  overflow: hidden;
}

#backend:hover {
  box-shadow: inset 0 -30px 0 #f57173;
  color: white;
}

#misc {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 #6ba3f8, 0 1px 0 #6ba3f8;
  transition: box-shadow 0.3s;
  overflow: hidden;
}

#misc:hover {
  box-shadow: inset 0 -30px 0 #6ba3f8;
  color: white;
}
#skills {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}

.skillssection {
  background-image: url("../assets/pixel.svg");
  background-size: 100% 100%;
  -o-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .skillssection {
    background-image: url("../assets/pixel.svg");
    background-size: 100% 100%;
    -o-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: cover;

    opacity: 1;
  }
}
</style>

