<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ driver.DriverFirstName }}</h2>
        <br />
        <p>
          Last Name: <br /><strong>{{ driver.DriverLastName }}</strong>
        </p>
        <p>
          Driver PK: <br /><strong>{{ driver.DriverPK }}</strong>
        </p>
        <p>
          Vehicle FK: <br /><strong>{{ driver.VehicleFK }}</strong>
        </p>
        <p>
          Vhicle PK: <br /><strong>{{ driver.VehiclePK }}</strong>
        </p>
        <p>
          Vehicle Type: <br /><strong>{{ driver.VehicleType }}</strong>
        </p>
      </div>
    </div>
    <br />
    <router-link v-if="auth" :to="`/drivers/${this.$route.params.pk}/ride`"
      ><button class="btn btn-success">Order</button></router-link
    >

    <router-link v-else :to="`/login`"
      ><button class="btn btn-outline-success">
        Sign In to Order A Ride
      </button></router-link
    >
    <br />
    <br />
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    driver() {
      let allDrivers = this.$store.state.driver;

      let thisDriver = allDrivers.find((aDriver) => {
        return aDriver.DriverPK == this.$route.params.pk;
      });
      console.log("asdfasdfasf", thisDriver);
      return thisDriver;
    },
    // formattedBudget() {
    //   return new Intl.NumberFormat("en-US", {
    //     style: "currency",
    //     currency: "USD",
    //   }).format(this.driver.Budget);
    // },
    auth() {
      return this.$store.state.token;
    },
  },
};
</script>

<style></style>
