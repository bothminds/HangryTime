<script>
import axios from "axios";
import GooglePlace from "./GooglePlace.vue";
import GoogleMaps from "./GoogleMaps.vue";
export default {
  components: { GooglePlace, GoogleMaps },
  name: "MainContent",
  props: {
    paramsObj: Object,
    goBoolean: Boolean,
  },
  watch: {
    goBoolean(val) {
      this.getPlaces();
      console.log("go:", val);
      // this.$emit("customChange", false);
    },
  },
  data() {
    return {
      items: null,
      api_params: {
        price: 1,
        name: "",
        address: "",
        state: "",
        city: "",
        zip: 30307,
        country: "",
        page: 1,
        per_page: 20,
      },
      api_url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?",
    };
  },
  methods: {
    getPlaces() {
      var s = "";
      for (var key in this.paramsObj) {
        if (s != "") {
          s += "&";
        }
        s += key + "=" + this.paramsObj[key];
      }
      console.log("further");
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
