<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="fname-input" class="form-label">First Name</label
        ><input
          type="text"
          class="form-control"
          id="fname-input"
          required=""
          placeholder="First name"
          v-model="FirstName"
        />
      </div>
      <div class="mb-3">
        <label for="lname-input" class="form-label">Last Name</label
        ><input
          type="text"
          class="form-control"
          id="lname-input"
          required=""
          placeholder="Last name"
          v-model="LastName"
        />
      </div>
      <div class="mb-3">
        <label for="Email-input" class="form-label">Email</label
        ><input
          type="Email"
          class="form-control"
          id="Email-input"
          required=""
          placeholder="Enter Email"
          v-model="Email"
        />
        <small v-if="dupEmail" class="text-danger">
          Please chose a different Email</small
        >
      </div>
      <div class="mb-3">
        <label for="Password-input" class="form-label">Password</label
        ><input
          type="Password"
          class="form-control"
          id="Password-input"
          placeholder="Password"
          required=""
          v-model="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <p id="error-signup" class="text-danger">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  date() {
    return {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      errorMessage: "",
      dupEmail: false,
    };
  },

  methods: {
    onSubmit() {
      // console.log("form sumbitted");
      const myFormData = {
        FirstName: this.FirstName,
        LastName: this.LastName,
        Email: this.Email,
        Password: this.Password,
      };
      // console.log(myFormData);
      axios
        .post("/customers", myFormData)
        .then((myResponse) => {
          console.log("the response", myResponse);
          this.$router.replace("/login?signupsuccess=true");
        })
        .catch((myError) => {
          if (myError.response.status === 409) {
            this.dupEmail = true;
          } else {
            this.errorMessage = "cannot sign you up, please try again later";
          }
        });
    },
  },
};
</script>

<style></style>
