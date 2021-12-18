<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card">
          <div class="card-body">
            <h4>Create a Review</h4>
            <form id="review-form" @submit.prevent="submitReview">
              <div class="mb-3">
                <label for="DriverPK-input" class="form-label">DriverFk</label
                ><input
                  type="number"
                  class="form-control"
                  id="DriverPK-input"
                  required=""
                  min="1"
                  max="10"
                  v-model="DriverFK"
                />
              </div>
              <div class="mb-3">
                <label for="LocationTo-input" class="form-label"
                  >Location To</label
                ><input
                  type="text"
                  row="3"
                  class="form-control"
                  id="LocationTo-input"
                  required=""
                  v-model="LocationTo"
                />
              </div>
              <div class="mb-3">
                <label for="LocationFrom-input" class="form-label"
                  >Location From</label
                ><input
                  type="text"
                  row="3"
                  class="form-control"
                  id="LocationFrom-input"
                  required=""
                  v-model="LocationFrom"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit Review</button
              ><button
                v-on:click="cancelReview"
                type="clear"
                class="btn btn-outline-danger"
              >
                Cancel
              </button>
              <p v-if="errorMessage" class="form-text text-danger">
                {{ errorMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      DriverFK: null,
      LocationTo: "",
      LocationFrom: "",
      errorMessage: null,
    };
  },
  methods: {
    submitReview() {
      let myReview = {
        DriverFK: this.DriverFK,
        LocationTo: this.LocationTo,
        LocationFrom: this.LocationFrom,
      };
      axios
        .post("/rides", myReview, {
          headers: { Authorization: `Bearer ${this.$store.state.token}` },
        })
        .then(() => {
          this.$router.replace("/account");
          console.log("check1", myReview);
        })
        .catch(() => {
          this.errorMessage =
            "Unable to create a review, please try again later";
          console.log("check2", myReview);
        });
    },

    cancelReview() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>
