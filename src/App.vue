<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            ContactsApp
          </router-link>
        </div>

        <div class="navbar-end">
          <router-link to="/add" class="navbar-item">Add New</router-link>
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };

</script>

<style lang="scss" scoped>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .navbar {
    background-color: #00927c !important;

    a {
      color: #fff;

      &:hover {
        background-color: #006859;
      }

    }

  }

</style>
