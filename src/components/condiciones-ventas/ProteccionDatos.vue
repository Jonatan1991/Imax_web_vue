<template>
  <article id="sec-datos" class="mb-10 scroll-margin">
    <v-card class="legal-card rounded-xl pa-8 border elevation-0">
      <div class="d-flex align-center mb-6">
        <v-avatar class="me-4 border-avatar" color="primary-lighten-5" rounded="lg" size="48">
          <v-icon color="primary" size="24">mdi-shield-lock-outline</v-icon>
        </v-avatar>

        <div>
          <h2 class="text-h5 font-weight-black text-primary">2. Protección de Datos</h2>
          <span class="text-caption text-grey">Nuestra política de privacidad y seguridad de la información</span>
        </div>
      </div>

      <!-- Datos 2.1: General -->
      <div class="mb-6">
        <h4 class="text-subtitle-1 font-weight-bold text-primary mb-2">2.1. General</h4>

        <p class="text-body-2 text-grey-darken-2 leading-relaxed">
          Imaxpcsystem, S.L. garantiza expresamente que los datos que usted nos facilite son mantenidos con absoluta confidencialidad.
        </p>
      </div>

      <!-- Datos 2.2: Tratamiento de sus datos personales -->
      <div class="mb-6">
        <h4 class="text-subtitle-1 font-weight-bold text-primary mb-2">2.2. Tratamiento de sus datos personales</h4>

        <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-4">
          Al objeto de procesar su pedido y de ceder los derechos de reproducción de las imágenes a nuestros clientes, requerimos nos faciliten ciertos datos personales como la razón social, C.I.F., nombre y apellidos, dirección, teléfono y e-mail, los cuales son tratados de forma informatizada. Vd. autoriza expresamente que dichos datos sean archivados en nuestra base de datos de clientes para su uso interno.
        </p>

        <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-4">
          De conformidad con lo establecido en la Ley Orgánica 15/1999, de 13 de Diciembre de Protección de Datos de Carácter Personal (LOPD) y en la normativa de desarrollo, usted puede, en cualquier momento, acceder, modificar o solicitar que cancelemos su información personal de nuestra base de datos a través de nuestra página web o enviando un e-mail a <a class="text-primary font-weight-bold" href="mailto:info@imaxpc.es">info@imaxpc.es</a>.
        </p>

        <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-4">
          El tratamiento y gestión de los mismos cumple lo estipulado en el Real Decreto 994/1999, de 11 de junio, por el que se aprueba el reglamento de medidas de seguridad de los ficheros automatizados que contengan datos de carácter personal.
        </p>

        <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-0">
          Imaxpcsystem, S.L., bajo ningún concepto, vende información sobre sus clientes a terceros ni cederá información alguna de sus datos.
        </p>
      </div>

      <!-- Datos 2.3: Datos de tarjeta de crédito (Redsys Box) -->
      <div class="mb-6">
        <v-alert
          bg-color="blue-lighten-5"
          border="start"
          class="rounded-xl border"
          color="primary"
          icon="mdi-credit-card-outline"
        >
          <h4 class="text-subtitle-1 font-weight-bold text-primary mb-2">2.3. Datos de tarjeta de crédito</h4>

          <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-0">
            Imaxpcsystem, S.L. <strong>nunca recibe</strong> los datos de su tarjeta de crédito. Éstos son enviados directamente a la pasarela de pago segura de <strong>Redsys</strong>, quien procesa el pago y nos notifica de manera segura la realización de la operación.
          </p>
        </v-alert>
      </div>

      <!-- Datos 2.4: Seguridad -->
      <div class="mb-6">
        <h4 class="text-subtitle-1 font-weight-bold text-primary mb-2">2.4. Seguridad</h4>

        <p class="text-body-2 text-grey-darken-2 leading-relaxed">
          Imaxpcsystem, S.L. toma todas las medidas necesarias para proteger la confidencialidad de su información personal. Únicamente los empleados autorizados tienen acceso a las bases de datos que almacenan información del usuario o a los servidores que hospedan nuestro servicio.
        </p>
      </div>

      <!-- Datos 2.5: Modificaciones -->
      <div>
        <h4 class="text-subtitle-1 font-weight-bold text-primary mb-2">2.5. Modificaciones y Contacto</h4>

        <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-4">
          Imaxpcsystem, S.L. se reserva el derecho de modificar su política de confidencialidad a causa de un cambio legislativo, jurisprudencial o de acuerdo con su criterio o práctica empresarial.
        </p>

        <v-card class="rounded-xl pa-5 d-flex flex-column flex-sm-row justify-space-between align-sm-center" color="primary" variant="tonal">
          <div class="mb-3 mb-sm-0">
            <span class="text-subtitle-2 d-block font-weight-bold">¿Tiene alguna duda sobre nuestra política?</span>
            <span class="text-caption">Póngase en contacto con nuestro equipo de soporte técnico.</span>
          </div>

          <div class="d-flex flex-wrap gap-3">
            <v-chip class="cursor-pointer" color="primary" href="mailto:info@imaxpc.es" variant="flat">
              <v-icon size="16" start>mdi-email</v-icon>
              info@imaxpc.es
            </v-chip>

            <v-chip class="cursor-pointer" color="primary" href="tel:+34913090503" variant="flat">
              <v-icon size="16" start>mdi-phone</v-icon>
              +34 913 090 503
            </v-chip>
          </div>
        </v-card>
      </div>
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
.gap-3 {
  gap: 12px;
}
</style>
