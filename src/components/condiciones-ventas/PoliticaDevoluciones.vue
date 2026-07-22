<template>
  <article id="sec-devoluciones" class="mb-10 scroll-margin">
    <v-card class="legal-card rounded-xl pa-8 border elevation-0">
      <div class="d-flex align-center mb-6">
        <v-avatar class="me-4 border-avatar" color="primary-lighten-5" rounded="lg" size="48">
          <v-icon color="primary" size="24">mdi-truck-delivery-outline</v-icon>
        </v-avatar>

        <div>
          <h2 class="text-h5 font-weight-black text-primary">3. Política de Devoluciones</h2>
          <span class="text-caption text-grey">Información detallada de garantías y procesos de devolución</span>
        </div>
      </div>

      <p class="text-body-1 text-grey-darken-3 leading-relaxed mb-6">
        Para su total tranquilidad, existen <strong>3 tipos de devoluciones distintas</strong> que regulan nuestras transacciones comerciales según la naturaleza de cada situación:
      </p>

      <!-- Devolución 1: Garantía Total de Satisfacción -->
      <v-hover v-slot="{ isHovering, props }">
        <v-card v-bind="props" class="rounded-xl pa-6 border elevation-0 mb-6 sub-card" :class="{ 'card-hover-border': isHovering }">
          <div class="d-flex align-center mb-4">
            <v-avatar class="me-3" color="green-lighten-5" rounded="lg" size="38">
              <v-icon color="success" size="20">mdi-thumb-up-outline</v-icon>
            </v-avatar>

            <h3 class="text-subtitle-1 font-weight-bold text-primary">1. GARANTÍA TOTAL DE SATISFACCIÓN (Derecho de Desistimiento)</h3>
          </div>

          <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-4">
            Se produce cuando el cliente desea devolver cualquier producto sin que exista ningún tipo de incidencia, ya sea por arrepentimiento, cambio de idea, o porque el producto (aunque corresponde exactamente con la descripción y foto de nuestra web) no es de su agrado.
          </p>

          <div class="mb-4">
            <v-chip class="font-weight-bold px-3" color="success" size="small">
              Plazo: 14 días naturales
            </v-chip>

            <span class="text-caption text-grey-darken-1 ms-2">
              desde la recepción del producto. En caso de festivo, debe dejar constancia por e-mail de su intención de devolución.
            </span>
          </div>

          <div class="bg-grey-lighten-5 rounded-lg pa-4 border mb-4">
            <span class="text-subtitle-2 font-weight-bold text-primary d-block mb-2">Procedimiento paso a paso:</span>

            <v-timeline align="start" class="timeline-custom" density="compact">
              <v-timeline-item dot-color="success" size="x-small">
                <div class="text-body-2 text-grey-darken-2">
                  Envíe un e-mail a <a href="mailto:info@imaxpc.es">info@imaxpc.es</a> indicando el producto a devolver, número de pedido y copia del pedido o factura de compra.
                </div>
              </v-timeline-item>

              <v-timeline-item dot-color="success" size="x-small">
                <div class="text-body-2 text-grey-darken-2">
                  Le comunicaremos la aceptación de la devolución y la dirección de entrega que deberá indicar claramente en el embalaje.
                </div>
              </v-timeline-item>

              <v-timeline-item dot-color="success" size="x-small">
                <div class="text-body-2 text-grey-darken-2">
                  Entregue el producto en nuestros almacenes en un plazo máximo de <strong>4 días</strong> desde que le comunicamos la aceptación (fuera de este plazo no se admitirá).
                </div>
              </v-timeline-item>
            </v-timeline>
          </div>

          <v-alert
            border="start"
            class="rounded-lg mb-0 text-body-2"
            density="comfortable"
            type="warning"
            variant="tonal"
          >
            <p class="mb-2"><strong>Condiciones importantes:</strong></p>

            <ul class="ps-4 mb-2">
              <li>No aplicable a productos desprecintados, sin su embalaje original, dañados, o productos en blíster con el embalaje roto o abierto.</li>
              <li>Los productos deben llegar en el mismo estado en que se enviaron, con todos sus embalajes, instrucciones y componentes. Si no se cumplen, no se aceptará la devolución.</li>
              <li><strong>Portes:</strong> Los gastos de envío correrán a cargo del cliente (tanto el de la primera entrega, que se descontará de la devolución, como el del envío posterior a nuestros almacenes). No se aceptarán envíos a portes debidos.</li>
            </ul>
          </v-alert>
        </v-card>
      </v-hover>

      <!-- Devolución 2: Devolución por entrega defectuosa -->
      <v-hover v-slot="{ isHovering, props }">
        <v-card v-bind="props" class="rounded-xl pa-6 border elevation-0 mb-6 sub-card" :class="{ 'card-hover-border': isHovering }">
          <div class="d-flex align-center mb-4">
            <v-avatar class="me-3" color="amber-lighten-5" rounded="lg" size="38">
              <v-icon color="warning" size="20">mdi-truck-alert-outline</v-icon>
            </v-avatar>

            <h3 class="text-subtitle-1 font-weight-bold text-primary">2. DEVOLUCIÓN POR ENTREGA DEFECTUOSA (Daños por transporte)</h3>
          </div>

          <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-4">
            Se produce cuando el producto entregado no coincide con el especificado en el pedido o bien ha sido golpeado y dañado externamente durante su envío.
          </p>

          <div class="mb-4">
            <v-chip class="font-weight-bold px-3" color="warning" size="small">
              Plazo: Menos de 24 horas
            </v-chip>

            <span class="text-caption text-grey-darken-1 ms-2">
              desde la recepción. Es fundamental comunicarlo de inmediato.
            </span>
          </div>

          <v-alert
            border="start"
            class="rounded-lg mb-4 text-body-2"
            density="comfortable"
            type="info"
            variant="tonal"
          >
            Si recibió el embalaje visiblemente dañado, es muy importante que lo indique en el albarán de entrega del transportista en el momento de la firma y recepción.
          </v-alert>

          <div class="bg-grey-lighten-5 rounded-lg pa-4 border">
            <span class="text-subtitle-2 font-weight-bold text-primary d-block mb-2">Procedimiento:</span>

            <p class="text-body-2 text-grey-darken-2 mb-2">
              Envíe un e-mail a <a href="mailto:info@imaxpc.es">info@imaxpc.es</a> describiendo el incidente. Le responderemos por e-mail indicando un número de devolución (a escribir en el embalaje exterior).
            </p>

            <p class="text-body-2 text-grey-darken-2 mb-2">
              Enviaremos un transportista a su domicilio para la recogida de forma totalmente gratuita y procederemos a enviarle el producto correcto lo antes posible.
            </p>

            <p class="text-body-2 text-success font-weight-bold mb-0">
              <v-icon size="16" start>mdi-check-circle-outline</v-icon> En esta devolución, todos los gastos de recogida y nueva entrega corren por cuenta de Imaxpcsystem, S.L.
            </p>
          </div>
        </v-card>
      </v-hover>

      <!-- Devolución 3: Garantía de Productos Defectuosos -->
      <v-hover v-slot="{ isHovering, props }">
        <v-card v-bind="props" class="rounded-xl pa-6 border elevation-0 mb-0 sub-card" :class="{ 'card-hover-border': isHovering }">
          <div class="d-flex align-center mb-4">
            <v-avatar class="me-3" color="red-lighten-5" rounded="lg" size="38">
              <v-icon color="error" size="20">mdi-shield-alert-outline</v-icon>
            </v-avatar>

            <h3 class="text-subtitle-1 font-weight-bold text-primary">3. GARANTÍAS DE PRODUCTOS DEFECTUOSOS (Avería/Fallo de fábrica)</h3>
          </div>

          <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-4">
            Se produce cuando el producto no funciona correctamente o ha dejado de hacerlo debido a un defecto de fábrica dentro de los plazos legales establecidos.
          </p>

          <div class="d-flex flex-wrap gap-2 mb-4">
            <v-chip class="font-weight-bold px-3" color="primary" size="small">
              Particulares: 2 años de garantía
            </v-chip>

            <v-chip class="font-weight-bold px-3" color="secondary" size="small">
              Empresas / Profesionales: 1 año de garantía
            </v-chip>
          </div>

          <div class="bg-red-lighten-5 rounded-lg pa-4 border border-error-lighten-3 mb-4">
            <span class="text-subtitle-2 font-weight-bold text-error d-block mb-2">Exclusiones de Garantía (Quedan fuera de garantía):</span>

            <ul class="ps-4 text-body-2 text-grey-darken-2">
              <li class="mb-1">Deterioro por factores externos, accidentes, mal uso, descuido de instrucciones o picos de tensión eléctrica tras la entrega.</li>
              <li class="mb-1">Daños por una incorrecta configuración o actualización, así como instalación de software no autorizado por parte del cliente.</li>
              <li class="mb-1">Averías provocadas por un componente que no haya sido suministrado por Imaxpcsystem, S.L.</li>
              <li class="mb-1">Condiciones específicas e incompatibilidades marcadas por el fabricante para su producto.</li>
              <li class="mb-0">Productos que hayan sido manipulados por el cliente o que no conserven su envoltorio original.</li>
            </ul>
          </div>

          <div class="bg-grey-lighten-5 rounded-lg pa-4 border">
            <span class="text-subtitle-2 font-weight-bold text-primary d-block mb-2">Cómo proceder:</span>

            <p class="text-body-2 text-grey-darken-2 mb-0">
              Envíe un correo a <a href="mailto:info@imaxpc.es">info@imaxpc.es</a> indicando el producto a devolver, número de pedido, copia del pedido o factura de compra y una descripción detallada del motivo o fallo detectado. No se atenderán devoluciones con portes debidos.
            </p>
          </div>
        </v-card>
      </v-hover>
    </v-card>
  </article>
</template>

<style scoped>
.scroll-margin {
  scroll-margin-top: 140px;
}
.legal-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  box-shadow: 0 4px 12px rgba(26, 58, 110, 0.03) !important;
}
.border-avatar {
  border: 1px solid rgba(26, 58, 110, 0.15);
}
.bg-primary-lighten-5 {
  background-color: rgba(26, 58, 110, 0.06) !important;
}
.sub-card {
  background-color: #FAFCFF;
  border-color: #E3E6EB !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card-hover-border {
  border-color: #4DB7E3 !important;
  box-shadow: 0 6px 16px rgba(26, 58, 110, 0.05) !important;
}
.leading-relaxed {
  line-height: 1.7;
}
.timeline-custom :deep(.v-timeline-item__body) {
  padding-block: 8px;
}
</style>
