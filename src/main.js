import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyDn9lWIE3DWY9AW5qVoFcSOuTus-ORpf2w",
//   authDomain: "colreonedb.firebaseapp.com",
//   databaseURL: "https://colreonedb-default-rtdb.firebaseio.com",
//   projectId: "colreonedb",
//   storageBucket: "colreonedb.appspot.com",
//   messagingSenderId: "574136779848",
//   appId: "1:574136779848:web:49f8fe4449669b2b36c47d",
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
