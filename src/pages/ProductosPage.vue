<template>
  <div class="productos-page bg-background min-vh-100 pb-16">
    <!-- HERO SECTION -->
    <header class="hero-section text-white d-flex align-center position-relative overflow-hidden">
      <div class="gradient-overlay" />
      <v-container class="position-relative z-index-2 py-16 text-center">
        <span class="text-subtitle-1 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-3">
          TIENDA Y DISTRIBUCIÓN
        </span>
        <h1 class="text-h2 font-weight-black mb-4 text-gradient leading-tight">
          Catálogo de Productos
        </h1>
        <p class="text-h6 text-grey-lighten-2 mb-8 leading-relaxed font-weight-regular max-w-700 mx-auto">
          Somos distribuidores oficiales autorizados de Brother y HP. Suministramos impresoras profesionales, consumibles 100% originales y los mejores accesorios y componentes de red para tu oficina.
        </p>
      </v-container>
    </header>

    <!-- PRODUCT CATEGORIES GRID -->
    <v-container class="mt-12">
      <v-row>
        <!-- 1. BROTHER -->
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="product-portal-card w-100 pa-6 rounded-xl border elevation-1 d-flex flex-column justify-space-between">
            <div>
              <div class="brand-badge-wrapper d-flex justify-center mb-6 py-4 bg-grey-lighten-4 rounded-xl">
                <span class="text-h4 font-weight-black text-blue-darken-4">brother</span>
              </div>
              <h3 class="text-h5 font-weight-bold text-primary mb-3">Equipos y Consumibles Brother</h3>
              <p class="text-body-2 text-grey-darken-2 mb-6 leading-relaxed">
                Soporte y distribución oficial. Impresoras láser rápidas, multifuncionales y consumibles originales para asegurar la mayor fiabilidad de impresión.
              </p>
            </div>
            <div class="d-flex flex-column gap-2">
              <v-btn color="primary" block class="font-weight-bold rounded-lg" to="/productos/brother/impresoras">
                Ver Impresoras <v-icon end>mdi-printer</v-icon>
              </v-btn>
              <v-btn color="secondary" block class="text-white font-weight-bold rounded-lg" to="/productos/brother/consumibles">
                Ver Consumibles <v-icon end>mdi-database</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>

        <!-- 2. HP -->
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="product-portal-card w-100 pa-6 rounded-xl border elevation-1 d-flex flex-column justify-space-between">
            <div>
              <div class="brand-badge-wrapper d-flex justify-center mb-6 py-4 bg-grey-lighten-4 rounded-xl">
                <span class="text-h4 font-weight-black text-sky-darken-2" style="color: #007DBA;">HP LaserJet</span>
              </div>
              <h3 class="text-h5 font-weight-bold text-primary mb-3">Equipos y Consumibles HP</h3>
              <p class="text-body-2 text-grey-darken-2 mb-6 leading-relaxed">
                Tecnología líder en impresión láser monocromo y color. Tóners y cartuchos originales HP con tecnología JetIntelligence para oficinas exigentes.
              </p>
            </div>
            <div class="d-flex flex-column gap-2">
              <v-btn color="primary" block class="font-weight-bold rounded-lg" to="/productos/hp/impresoras">
                Ver Impresoras <v-icon end>mdi-printer</v-icon>
              </v-btn>
              <v-btn color="secondary" block class="text-white font-weight-bold rounded-lg" to="/productos/hp/consumibles">
                Ver Consumibles <v-icon end>mdi-database</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>

        <!-- 3. ACCESSORIES & NETWORK -->
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="product-portal-card w-100 pa-6 rounded-xl border elevation-1 d-flex flex-column justify-space-between">
            <div>
              <div class="brand-badge-wrapper d-flex justify-center mb-6 py-4 bg-grey-lighten-4 rounded-xl">
                <span class="text-h4 font-weight-black text-grey-darken-3">Accesorios & Redes</span>
              </div>
              <h3 class="text-h5 font-weight-bold text-primary mb-3">Hardware, Redes y Periféricos</h3>
              <p class="text-body-2 text-grey-darken-2 mb-6 leading-relaxed">
                Componentes de alto rendimiento: unidades SSD, memorias RAM, routers profesionales, switches Gigabit y periféricos ergonómicos Logitech.
              </p>
            </div>
            <div class="d-flex flex-column gap-2">
              <v-btn color="primary" block class="font-weight-bold rounded-lg" to="/productos/accesorios">
                Ver Catálogo Completo <v-icon end>mdi-devices</v-icon>
              </v-btn>
              <div class="d-flex gap-2">
                <v-btn variant="outlined" size="small" class="flex-grow-1 font-weight-bold rounded-lg" to="/productos/accesorios?cat=Perifericos">
                  Periféricos
                </v-btn>
                <v-btn variant="outlined" size="small" class="flex-grow-1 font-weight-bold rounded-lg" to="/productos/accesorios?cat=Almacenamiento">
                  Discos
                </v-btn>
                <v-btn variant="outlined" size="small" class="flex-grow-1 font-weight-bold rounded-lg" to="/productos/accesorios?cat=Redes">
                  Redes
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- PROMOTION BANNER -->
      <v-card class="mt-12 pa-8 bg-blue-lighten-5 rounded-xl border-0 d-flex flex-column flex-md-row align-center justify-space-between gap-6">
        <div>
          <v-chip color="secondary" class="font-weight-bold text-white mb-2" size="small">AHORRA EN IMPRESIÓN</v-chip>
          <h3 class="text-h5 font-weight-black text-primary mb-2">¿Quieres optimizar los costes de impresión de tu oficina?</h3>
          <p class="text-body-2 text-grey-darken-3 leading-relaxed mb-0">
            Realizamos auditorías de impresión gratuitas para empresas. Te asesoramos sobre si te conviene la compra directa con consumibles XL o un contrato de Pago por Uso.
          </p>
        </div>
        <v-btn color="secondary" size="large" class="text-white font-weight-bold px-6 rounded-lg text-no-wrap" to="/contacto">
          Solicitar Auditoría
        </v-btn>
      </v-card>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'

  onMounted(() => {
    document.title = 'Catálogo de Productos | Imax PC'
  })
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #1a3a6e 0%, #11223f 100%);
  padding: 100px 0 80px;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(77, 183, 227, 0.15) 0%, transparent 60%);
  pointer-events: none;
}

.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #a5c7f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tracking-widest {
  letter-spacing: 0.2em !important;
}

.gap-2 {
  gap: 8px;
}

.gap-6 {
  gap: 24px;
}

.product-portal-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s, border-color 0.3s;
}

.product-portal-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(26, 58, 110, 0.08) !important;
  border-color: #4DB7E3 !important;
}

.brand-badge-wrapper {
  user-select: none;
}
</style>
