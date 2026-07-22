<template>
  <article id="sec-ley" class="mb-0 scroll-margin">
    <v-card class="legal-card rounded-xl pa-8 border elevation-0">
      <div class="d-flex align-center mb-6">
        <v-avatar class="me-4 border-avatar" color="primary-lighten-5" rounded="lg" size="48">
          <v-icon color="primary" size="24">mdi-scale-balance</v-icon>
        </v-avatar>

        <div>
          <h2 class="text-h5 font-weight-black text-primary">4. Ley Aplicable y Jurisdicción</h2>
          <span class="text-caption text-grey">Marco legislativo y resolución de conflictos judiciales</span>
        </div>
      </div>

      <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-4">
        Las compras realizadas en <strong>Imaxpcsystem, S.L.</strong> quedan sometidas a la normativa vigente española y el resto de legislación concordante, entendiéndose realizadas las compras en el domicilio social de <strong>Imaxpcsystem, S.L.</strong>
      </p>

      <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-4">
        Respecto a cualquier discrepancia o divergencia que pudiera surgir sobre el cumplimiento o la interpretación del acuerdo de compra alcanzado, o de alguna de sus condiciones, las partes se someten, con renuncia a su propio fuero si lo tuvieren, a los <strong>Juzgados y Tribunales de Madrid</strong>.
      </p>

      <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-4">
        La declaración de nulidad de una o varias de las condiciones de compra establecidas que no sean esenciales no conllevará la nulidad del acuerdo de compra alcanzado, el cual continuará vigente y surtiendo plenos efectos.
      </p>

      <v-alert bg-color="grey-lighten-4" border="start" class="rounded-lg mb-0 text-caption text-grey-darken-2">
        El contenido de esta página y los términos de venta son susceptibles de cambios y modificaciones en cualquier momento. Por ello, le recomendamos encarecidamente revisar estas condiciones con asiduidad para estar al corriente de las posibles actualizaciones.
      </v-alert>
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
.leading-relaxed {
  line-height: 1.7;
}
</style>
