<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>Rides</h3>
    <p v-if="accountError" class="text-danger">
      Cannot get your account informaiton, please try again later>
    </p>
    <table v-if="ridesByUser" class="table">
      <thead>
        <th>Rides Completed</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>From</th>
        <th>To</th>
      </thead>
      <tbody>
        <tr v-for="thisRide in ridesByUser" :key="thisRide.RidePK">
          <th>
            <router-link :to="`/drivers/${thisRide.DriverFK}`">{{
              thisRide.DriverPK
            }}</router-link>
          </th>
          <th>{{ thisRide.DriverFirstName }}</th>
          <th>{{ thisRide.DriverLastName }}</th>
          <th>{{ thisRide.LocationFrom }}</th>
          <th>{{ thisRide.LocationTo }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ridesByUser: null,
      accountError: false,
    };
  },
  computed: {
    firstName() {
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.FirstName;
    },
  },

  created() {
    axios
      .get("/rides/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("here is the reponse", theResponse);
        this.ridesByUser = theResponse.data;
      })
      .catch(() => {
        this.accountError = true;
      });
  },
};
</script>

<style></style>
