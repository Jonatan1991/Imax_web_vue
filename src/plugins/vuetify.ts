/**
 * plugins/vuetify.ts
*
* Framework documentation: https://vuetifyjs.com`
*/

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { aliases, mdi } from 'vuetify/iconsets/mdi'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  },
  theme: {
    defaultTheme: 'imaxTheme',
    themes: {
      imaxTheme: {
        dark: false,
        colors: {
          primary: '#1A3A6E',      // Azul IMAX
          secondary: '#4DB7E3',    // Celeste tecnológico
          info: '#1e88e5',      // azul IMAX
          warning: '#fdd835',   // amarillo IMAX
          error: '#e53935',     // rojo IMAX
          background2: '#d8d8d8', // gris IMAX
          menuTop: '#202336', // gris IMAX
          footer: '#1a1c2c', // gris IMAX
          accent: '#E53935',       // Rojo IMAX
          success: '#43A047',      // Verde IMAX
          background: '#F7F9FC',   // Fondo claro
          surface: '#FFFFFF',      // Superficie blanca
          text: '#1A1A1A',         // Texto oscuro
          ui: '#E3E6EB'            // Gris suave UI
        }
      }
    }
  }
})
