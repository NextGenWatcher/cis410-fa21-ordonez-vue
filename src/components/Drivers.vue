<template>
  <div>
    <h1>Get A Ride</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Vehicle Type</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aDriver in theDriver" :key="aDriver.DriverPK">
          <th>{{ aDriver.DriverFirstName }}</th>
          <th>{{ aDriver.DriverLastName }}</th>
          <th>{{ aDriver.VehicleType }}</th>
          <th>
            <router-link :to="`/drivers/${aDriver.DriverPK}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    theDriver() {
      return this.$store.state.driver;
    },
  },
};
</script>

<style></style>
