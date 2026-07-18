<template>
  <v-footer class="pt-12 pb-6 px-6 px-md-15 flex-column" color="footer">
    <v-container>
      <v-row class="mb-8">

        <!-- COLUMNA 1: LOGO E INFO DE LA EMPRESA -->
        <v-col class="pe-md-10" cols="12" md="4">
          <div class="d-flex align-center mb-4">
            <!-- Cargamos el logo de IMAX -->
            <img alt="IMAX Logo" src="../../assets/images/logo.jpg" style="height: 60px; filter: brightness(0.9);">
          </div>

          <p class="text-body-2 text-grey-lighten-1 mb-4 font-weight-light line-height-relaxed">
            Especialistas en soluciones informáticas y sistemas de impresión Brother y HP. Ofrecemos el mejor servicio técnico y consumibles de alta calidad.
          </p>

          <div class="d-flex gap-3">
            <v-btn
              class="social-hover"
              color="grey-lighten-2"
              href="https://facebook.com"
              icon="mdi-facebook"
              size="small"
              target="_blank"
              variant="text"
            />

            <v-btn
              class="social-hover"
              color="grey-lighten-2"
              href="https://instagram.com"
              icon="mdi-instagram"
              size="small"
              target="_blank"
              variant="text"
            />

            <v-btn
              class="social-hover"
              color="grey-lighten-2"
              href="https://twitter.com"
              icon="mdi-twitter"
              size="small"
              target="_blank"
              variant="text"
            />
          </div>
        </v-col>

        <!-- COLUMNA 2: ENLACES RÁPIDOS (Leídos del Store) -->
        <v-col cols="6" md="3">
          <h4 class="text-subtitle-1 text-white font-weight-bold mb-4">Mapa del Sitio</h4>

          <ul class="footer-links">
            <li v-for="item in menuStore.menuItems" :key="item.label" class="mb-2">
              <router-link class="text-body-2 text-grey-lighten-1 footer-link-item" :to="item.to">
                <v-icon class="me-1 icon-arrow" size="x-small">mdi-chevron-right</v-icon>
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </v-col>

        <!-- COLUMNA 3: CATEGORÍAS DE PRODUCTOS (Brother, HP, etc. dinámicamente) -->
        <v-col cols="6" md="2">
          <h4 class="text-subtitle-1 text-white font-weight-bold mb-4">Marcas</h4>

          <ul class="footer-links">
            <template v-for="item in menuStore.menuItems" :key="item.label">
              <template v-if="item.label === 'Productos' && item.submenu">
                <li v-for="subItem in item.submenu" :key="subItem.label" class="mb-2">
                  <router-link class="text-body-2 text-grey-lighten-1 footer-link-item" :to="subItem.to">
                    <v-icon class="me-1 icon-arrow" size="x-small">mdi-chevron-right</v-icon>
                    {{ subItem.label }}
                  </router-link>
                </li>
              </template>
            </template>
          </ul>
        </v-col>

        <!-- COLUMNA 4: DATOS DE CONTACTO -->
        <v-col cols="12" md="3">
          <h4 class="text-subtitle-1 text-white font-weight-bold mb-4">Contacto</h4>

          <div class="d-flex align-start mb-3">
            <v-icon class="me-3 mt-1" color="primary">mdi-map-marker-outline</v-icon>

            <span class="text-body-2 text-grey-lighten-1 font-weight-light">
              Calle del Electrodo, 3, Rivas-Vaciamadrid, Madrid
            </span>
          </div>

          <div class="d-flex align-center mb-3">
            <v-icon class="me-3" color="primary">mdi-phone-outline</v-icon>

            <a class="text-body-2 text-grey-lighten-1 font-weight-light contact-link" href="tel:+34913090503">
              91 309 05 03
            </a>
          </div>

          <div class="d-flex align-center mb-3">
            <v-icon class="me-3" color="primary">mdi-email-outline</v-icon>

            <a class="text-body-2 text-grey-lighten-1 font-weight-light contact-link" href="mailto:info@imaxpc.com">
              info@imaxpc.com
            </a>
          </div>
        </v-col>

      </v-row>

      <v-divider class="border-opacity-15 mb-6" color="white" />

      <!-- BARRA DE COPYRIGHT -->
      <v-row class="align-center justify-between">
        <v-col class="text-center text-sm-start text-caption text-grey-lighten-1" cols="12" sm="6">
          &copy; {{ new Date().getFullYear() }} IMAX Web. Todos los derechos reservados.
        </v-col>

        <v-col class="text-center text-sm-end text-caption text-grey-lighten-1" cols="12" sm="6">
          <router-link class="footer-bottom-link me-4" to="/condiciones-ventas">Condiciones de Venta</router-link>
          <a class="footer-bottom-link" href="#">Política de Privacidad</a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
  import { useMainMenuStore } from '@/stores/menuStore'

  const menuStore = useMainMenuStore()
</script>

<style scoped>
.footer-links {
  list-style: none;
  padding: 0;
}

.footer-link-item {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
}

.footer-link-item:hover {
  color: var(--v-theme-primary) !important;
  transform: translateX(5px);
}

.icon-arrow {
  opacity: 0.5;
  transition: transform 0.3s ease;
}

.footer-link-item:hover .icon-arrow {
  transform: scale(1.2);
}

.contact-link {
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--v-theme-primary) !important;
}

.social-hover {
  transition: all 0.3s ease;
}

.social-hover:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
  color: var(--v-theme-primary) !important;
}

.footer-bottom-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.footer-bottom-link:hover {
  color: var(--v-theme-primary) !important;
}

.line-height-relaxed {
  line-height: 1.6;
}
</style>
