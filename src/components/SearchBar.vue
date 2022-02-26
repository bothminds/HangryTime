<script>
import axios from "axios";
import Places from "./GooglePlaces.vue";

export default {
  name: "SearchBar",
  components: { Places },
  data() {
    return {
      go: false,
      place: {
        name: "",
        address: "",
        state: "",
        city: "",
        zip: "",
        country: "",
      },
      api_url: "https://maps.googleapis.com/maps/api/geocode/json?",
      url: "maps/api/place/nearbysearch/json?",
      params: {
        keyword: "",
        location: "",
        radius: "9000",
        type: "",
        maxprice: "",
        key: "AIzaSyD1tp_twpGmuQ0B6yGmDGEazS9ZQmwK-Ko",
      },
    };
  },
  methods: {
    getGeolocation() {
      if (this.place.zip.length > 4) {
        const s = "address=" + this.place.zip + "&key=" + this.params.key;
        const api = this.api_url;
        axios
          .get(api + s, {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((response) => {
            const r = response.data.results[0].geometry.location;
            this.params.location = r.lat + "," + r.lng;
            console.log(r.lat, r.lng);
            this.go = !this.go;
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
        !this.go;
      }
    },
  },
};
</script>
<template>
  <div class="col">
    <div class="row g-0" @submit.prevent="getGeolocation">
      <div class="col">
        <label class="visually-hidden" for="inlineFormInputGroupUsername"
          >Name</label
        >
        <div class="input-group">
          <div class="input-group-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
          </div>
          <input
            type="text"
            class="form-control"
            id="inlineFormInputGroupUsername"
            placeholder="Name"
            v-model="params.keyword"
          />
        </div>
      </div>

      <div class="col">
        <label class="visually-hidden" for="inlineFormInputGroupUsername"
          >Zip</label
        >
        <div class="input-group">
          <div class="input-group-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
              />
              <path
                d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
          </div>
          <input
            type="text"
            class="form-control"
            id="inlineFormInputGroupUsername"
            placeholder="Zip Code"
            v-model="place.zip"
            @change="getGeolocation"
          />
        </div>
      </div>

      <div class="col">
        <label class="visually-hidden" for="inlineFormSelectPref">Type</label>
        <div class="input-group">
          <div class="input-group-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-filter"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <select class="form-select" v-model="params.type" placeholder="Type">
            <option value="restaurant">Restaurant</option>
            <option value="bar">Bar</option>
            <option value="club">Club</option>
            <option value="museum">Museum</option>
          </select>
        </div>
      </div>

      <div class="col">
        <label class="visually-hidden" for="inlineFormSelectPref"
          >Dietary</label
        >
        <div class="input-group">
          <div class="input-group-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-currency-dollar"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
              />
            </svg>
          </div>
          <select class="form-select" v-model="params.maxprice">
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
        </div>
      </div>

      <div class="col-1">
        <button class="btn btn-primary" @click="getGeolocation()">
          Submit
        </button>
      </div>
    </div>
  </div>

  <div v-if="params.location" class="col mt-3">
    <Places :params-obj="params" :go-boolean="go"></Places>
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
</style>
