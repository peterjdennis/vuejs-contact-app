// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});


// <script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCiBaGK1_R7U-d_CQAx6su5OEsw6SZz-gE",
//     authDomain: "vuejs-contact-app.firebaseapp.com",
//     databaseURL: "https://vuejs-contact-app.firebaseio.com",
//     projectId: "vuejs-contact-app",
//     storageBucket: "",
//     messagingSenderId: "131493489354"
//   };
//   firebase.initializeApp(config);
// </script>
