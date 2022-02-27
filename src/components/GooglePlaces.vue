<script>
import axios from "axios";
import GooglePlace from "./GooglePlace.vue";
import GoogleMaps from "./GoogleMaps.vue";
export default {
  components: { GooglePlace, GoogleMaps },
  name: "MainContent",
  props: {
    searchString: String,
  },
  watch: {
    searchString(val) {
      this.getPlaces(val);
    },
  },
  data() {
    return {
      items: null,
      api_url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?",
    };
  },
  methods: {
    getPlaces(s) {
      const api = this.api_url;
      axios
        .get(api + s)
        .then((response) => (this.items = response.data.results))
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-md-8">
      <GooglePlace v-if="items" :place="items"></GooglePlace>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
