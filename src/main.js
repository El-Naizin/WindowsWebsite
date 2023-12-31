import {createApp} from 'vue'

import {Quasar} from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'

import './assets/main.css'

// Import XP css
import "xp.css/dist/XP.css";
import router from "@/router";

const myApp = createApp(App);

myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
});

myApp.use(router);

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app');
