<script setup>
import IconRestaurant from "./icons/IconRestaurant.vue";
</script>
<script>
export default {
  props: {
    place: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    Favorite: function (event) {
      console.log(this.place, event);
      this.$set(this.place[event], 'favorite', !this.clicked);
      !this.clicked;
    },
  },
};
</script>

<template>
  <div v-for="(p, index) in place" :key="index" class="place">
    <div class="row">
      <div class="col-1 icon">
        <IconRestaurant />
      </div>
      <div class="col-md-5">
        <h1>{{ p.name }}</h1>
        <span v-for="(t, index) in p.types" :key="index">{{ t }},</span>
        <p>{{ p.vicinity }}</p>
        <span v-for="(n, pindex) in 5" v-bind:key="pindex" class="">
          <span v-if="pindex < p.price_level" class="text-warning">$</span>
          <span v-else class="text-drk">$</span>
        </span>
      </div>
      <div class="col-2">
        <div class="">
          <span v-for="(n, i) in 5" :key="i" class="d-flex-inline">
            <span v-if="i < p.rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
            </span>
            <span v-else>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                fill-opacity="25%"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                ></path>
              </svg>
            </span>
          </span>
        </div>
      </div>
      <div class="col text-center">
        <h1>Make a Reservation</h1>
        <button class="phone shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            class="bi bi-telephone"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
          555-555-5555
        </button>
        see website |
        <span class="button">
          <span v-if="!clicked" @click="Favorite(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
              />
            </svg>
          </span>
          <span v-if="clicked" @click="Favorite(p.index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.place {
  height: auto;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border: bisque 2px solid;
  border-radius: 5px;
}
.icon {
  width: fit-content;
  margin-left: 15px;
}
.place div {
  margin: 5px;
  background-color: white;
}
h1 {
  font-size: medium;
  line-height: 90%;
}
h2 {
  color: #8b572a;
  line-height: 90%;
}
path {
  width: 18px;
  height: 18px;
  margin: 0 2px 0 0;
  padding: 0 2px 3px 2px;
  color: #0d8fb3;
}
.phone {
  background-color: #0d8fb3;
  border: #0d8fb3 1px solid;
  color: white;
  padding: 4px 7px;
}
.button {
  cursor: pointer;
}
</style>
