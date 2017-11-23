// HTML TEMPLATE
<template>
  <section class="container">
    <h1>Add New Contact</h1>

    <!-- Used to prevent the submit event from reloading the page. -->
    <form @submit.prevent="saveContact">

      <div class="field">
        <label for="firstname" class="label">First Name</label>
        <div class="control">
          <input type="text" class="input" placeholder="First Name" v-model="firstname">
        </div>
      </div>

      <div class="field">
        <label for="lastname" class="label">Last Name</label>
        <div class="control">
          <input type="text" class="input" placeholder="Last Name" v-model="lastname">
        </div>
      </div>

      <div class="field">
        <label for="emailaddress" class="label">Email Address</label>
        <div class="control">
          <input type="email" class="input" placeholder="Email Address" v-model="emailaddress">
        </div>
      </div>

      <div class="field">
        <label for="phonenumber" class="label">Phone Number</label>
        <div class="control">
          <input type="tel" class="input" placeholder="Phone Number" v-model="phonenumber">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-link" type="submit">Submit</button>
        </div>
      </div>

    </form>

  </section>
</template>

// COMPONENT LOGIC
<script>
  import db from './firebaseInit';

  export default {
    name: 'new-contact', // matches the route we assigned
    data() {
      return {
        firstname: null,
        lastname: null,
        emailaddress: null,
        phonenumber: null,
      };
    },

    methods: {
      saveContact() {
        // adds an object to the contacts collection
        db.collection('contacts').add({
          firstname: this.firstname,
          lastname: this.lastname,
          emailaddress: this.emailaddress,
          phonenumber: this.phonenumber,
          slug: this.generateUUID(),
        })
        .then((docRef) => {
          // eslint-disable-next-line
          console.log(`Document written with ID: ${docRef.id}`);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(`Error adding document: ${error}`);
        });
      },
      // will generate UUID
      generateUUID() {
        let d = new Date().getTime();
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
          const r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
      },
    },
  };
</script>

// COMPONENT STYLES
<style scoped>
  section {
    height: 100vh;
  }

  h1 {
    font-size: 30px;
    margin: 30px 0;
  }

  .input {
    height: 40px;
  }
</style>