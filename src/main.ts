import { createApp } from 'vue'
import { Quasar } from 'quasar'

import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './styles/main.scss';

import App from './App.vue'

createApp(App)
  .use(Quasar, {
    plugins: {},
  })
  .mount('#app')
