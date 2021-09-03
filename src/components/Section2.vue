<template>
  <div class="px-32" id="section">
    <div
      class="mt-10 mb-20 text-center uppercase text-purp-light drop-shadow-lg"
    >
      <h1 id="skills" class="text-5xl">
        Skills and proficiencies <span id="spn" class="">★</span>
      </h1>
    </div>
    <div class="flex flex-col justify-around">
      <div class="container flex flex-row bg-green-700 w-max">
        <div
          class=""
          v-show="image.skill === 'S'"
          v-for="image in images"
          :key="image.name"
        >
          <img
            v-tooltip="image.tag"
            v-bind:class="
              image.diff === 'hard' ? 'border-green-400' : 'border-red-400'
            "
            class="p-2 mx-auto mt-10 mb-10 transition duration-500 ease-in-out transform border-2 rounded-full  hover:-translate-y-1 hover:shadow-xl hover:scale-110 hover:bg-transparent"
            :src="require(`@/assets/${image.name}.svg`)"
            alt=""
          />
        </div>
      </div>
      <div
        class=""
        v-show="image.skill === 'A'"
        v-for="image in images"
        :key="image.name"
      >
        <img
          v-tooltip="image.tag"
          v-bind:class="
            image.diff === 'hard' ? 'border-green-400' : 'border-red-400'
          "
          class="p-2 mx-auto mt-10 mb-20 transition duration-500 ease-in-out transform border-2 rounded-full  hover:-translate-y-1 hover:shadow-xl hover:scale-110 hover:bg-transparent"
          :src="require(`@/assets/${image.name}.svg`)"
          alt=""
        />
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
        },
        {
          name: "tailwindcss",
          tag: "TailwindCSS",
          skill: "S",
        },
        {
          name: "css3",
          tag: "CSS3",
          skill: "S",
        },
        {
          name: "html5",
          tag: "HTML5",
          skill: "S",
        },
        {
          name: "react",
          tag: "ReactJs/React Native",
          skill: "A",
        },
        {
          name: "nodejs-seeklogo.com",
          tag: "NodeJS",
          skill: "A",
        },

        { name: "laravel", tag: "Laravel", skill: "B" },
        {
          name: "mongodb-icon-1",
          tag: "MongoDB",
          skill: "B",
        },
        { name: "database", tag: "SQL", skill: "S" },

        {
          name: "python",
          tag: "Python",
          skill: "A",
        },
        {
          name: "java",
          tag: "Java",
        },

        {
          name: "cdnlogo_c",
          tag: "C#",
          skill: "A",
        },
        {
          name: "php",
          tag: "PHP",
          skill: "B",
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

#skills {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}
</style>

