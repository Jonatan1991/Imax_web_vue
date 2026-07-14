<template>
  <div class="bg-background min-vh-100 pb-16">
    <!-- Hero Header -->
    <div class="legal-hero py-16 text-center text-white mb-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <span class="text-subtitle-2 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-3">
              Información Legal
            </span>
            <h1 class="text-h3 text-md-h2 font-weight-black mb-4 title-glow">
              Condiciones de Venta y Uso
            </h1>
            <div class="divider mx-auto mb-6"></div>
            <p class="text-body-1 text-blue-lighten-4 leading-relaxed max-w-600 mx-auto">
              Le rogamos que lea atentamente estas condiciones antes de utilizar esta página web o realizar un pedido.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Main Content Container -->
    <v-container>
      <v-row>
        <!-- Sidebar Navigation (Sticky on desktop) -->
        <v-col cols="12" md="3" class="d-none d-md-block">
          <aside class="sticky-sidebar">
            <v-card class="rounded-xl border elevation-0 pa-4 menu-card">
              <div class="text-subtitle-2 font-weight-black text-primary mb-4 px-2 uppercase-tracking">
                Índice de Contenidos
              </div>
              <v-list density="comfortable" class="bg-transparent py-0">
                <v-list-item
                  v-for="item in menuItems"
                  :key="item.id"
                  :value="item.id"
                  :active="activeSection === item.id"
                  @click="scrollTo(item.id)"
                  class="rounded-lg mb-1 nav-item"
                  color="primary"
                  :id="'btn-nav-' + item.id"
                >
                  <template v-slot:prepend>
                    <v-icon size="20" class="me-2">{{ item.icon }}</v-icon>
                  </template>
                  <v-list-item-title class="font-weight-medium text-body-2">
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </aside>
        </v-col>

        <!-- Legal Content Sections -->
        <v-col cols="12" md="9">
          <!-- Section 1: Condiciones Generales & Uso -->
          <article id="sec-generales" class="mb-10 scroll-margin">
            <v-card class="legal-card rounded-xl pa-8 border elevation-0">
              <div class="d-flex align-center mb-6">
                <v-avatar color="primary-lighten-5" rounded="lg" size="48" class="me-4 border-avatar">
                  <v-icon color="primary" size="24">mdi-file-document-outline</v-icon>
                </v-avatar>
                <div>
                  <h2 class="text-h5 font-weight-black text-primary">1. Condiciones Generales de Venta</h2>
                  <span class="text-caption text-grey">Información sobre las condiciones de compra online o a distancia</span>
                </div>
              </div>
              
              <p class="text-body-1 text-grey-darken-3 leading-relaxed mb-6">
                Las compras realizadas en <strong>Imaxpcsystem, S.L.</strong> quedan sometidas a las condiciones generales de compra contenidas en la página en el momento de cursarse la correspondiente orden de compra online o a distancia (mail, teléfono, etc.). La formalización de un pedido conlleva la íntegra aceptación de las mismas. Las presentes condiciones de compra han sido expuestas con la debida antelación, de conformidad con la legislación vigente.
              </p>

              <v-divider class="my-6"></v-divider>

              <div class="d-flex align-center mb-6 mt-4">
                <v-avatar color="secondary-lighten-5" rounded="lg" size="44" class="me-4 border-avatar-sec">
                  <v-icon color="secondary" size="22">mdi-account-check-outline</v-icon>
                </v-avatar>
                <h3 class="text-h6 font-weight-bold text-primary">Condiciones de Uso</h3>
              </div>

              <!-- Subsection 1.1: General -->
              <div class="mb-6">
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-2">1.1. General</h4>
                <p class="text-body-2 text-grey-darken-2 leading-relaxed">
                  Utilizar esta página web y/o registrarse como usuario presupone la aceptación de estas condiciones.
                </p>
              </div>

              <!-- Subsection 1.2: Propiedad de esta página web -->
              <div class="mb-6">
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-2">1.2. Propiedad de esta página web</h4>
                <p class="text-body-2 text-grey-darken-2 leading-relaxed">
                  Esta página web es propiedad de <strong>Imaxpcsystem, S.L.</strong> Todos los derechos de su contenido, de las imágenes, textos, diseño y software son propiedad de Imaxpcsystem, S.L. Todos los elementos de esta página, incluyendo sin limitaciones, su diseño y su contenido están protegidos por las leyes de la Propiedad Intelectual, Propiedad Industrial y tratados internacionales referidos a los Derechos de Autor.
                </p>
              </div>

              <!-- Subsection 1.3: Uso de su Contenido -->
              <div class="mb-6">
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-2">1.3. Uso de su Contenido</h4>
                <p class="text-body-2 text-grey-darken-2 leading-relaxed">
                  A menos que sea explícitamente autorizado por Imaxpcsystem, S.L., usted no puede reproducir, transmitir o explotar el contenido de esta web de ningún modo.
                </p>
              </div>

              <!-- Subsection 1.4: Responsabilidades -->
              <div class="mb-6">
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-2">1.4. Responsabilidades</h4>
                <v-row class="mt-2">
                  <v-col cols="12" class="py-1">
                    <div class="d-flex align-start">
                      <v-icon color="secondary" size="18" class="mt-1 me-2">mdi-circle-medium</v-icon>
                      <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-0">
                        <strong>4.1.</strong> A pesar de que Imaxpcsystem, S.L. pone el máximo esfuerzo en garantizar la precisión y exactitud en el contenido de esta página web, ésta puede contener errores o inexactitudes. Consecuentemente no garantizamos la veracidad, la fiabilidad o la exactitud de su contenido.
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="12" class="py-1">
                    <div class="d-flex align-start">
                      <v-icon color="secondary" size="18" class="mt-1 me-2">mdi-circle-medium</v-icon>
                      <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-0">
                        <strong>4.2.</strong> Imaxpcsystem, S.L. rechaza la responsabilidad sobre la información contenida en páginas web de terceras partes conectadas por enlaces (links) con las páginas web de Imaxpcsystem, S.L.
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="12" class="py-1">
                    <div class="d-flex align-start">
                      <v-icon color="secondary" size="18" class="mt-1 me-2">mdi-circle-medium</v-icon>
                      <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-0">
                        <strong>4.3.</strong> Bajo ninguna circunstancia, Imaxpcsystem, S.L. será tenido como responsable de ningún daño o perjuicio de ningún tipo surgido de, o en relación, al uso de esta página web.
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="12" class="py-1">
                    <div class="d-flex align-start">
                      <v-icon color="secondary" size="18" class="mt-1 me-2">mdi-circle-medium</v-icon>
                      <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-0">
                        <strong>4.4.</strong> Deberá indemnizar a Imaxpcsystem, S.L. contra cualquier daño o perjuicio que resulte del incumplimiento por su parte de las presentes condiciones o del uso del contenido de esta web sin previa autorización.
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </div>

              <!-- Subsection 1.5: Divisibilidad -->
              <div class="mb-6">
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-2">1.5. Divisibilidad</h4>
                <p class="text-body-2 text-grey-darken-2 leading-relaxed">
                  Si alguna estipulación de las presentes condiciones carece o pasase a carecer de validez o resultara no ejecutable según el derecho aplicable, dicha estipulación no tendría efecto, pero solamente en la medida de esa precisa falta de validez, y no afectará a ninguna otra estipulación de las presentes condiciones.
                </p>
              </div>

              <!-- Subsection 1.6: Legislación y jurisdicción aplicable -->
              <div class="mb-6">
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-2">1.6. Legislación y jurisdicción aplicable</h4>
                <p class="text-body-2 text-grey-darken-2 leading-relaxed">
                  Estas condiciones de uso deben ser interpretadas y están regidas por la legislación española vigente. Cualquier disputa derivada de estas condiciones deberá dirimirse ante los tribunales de Madrid.
                </p>
              </div>

              <!-- Subsection 1.7: Modificaciones -->
              <div>
                <h4 class="text-subtitle-1 font-weight-bold text-primary mb-2">1.7. Modificaciones</h4>
                <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-0">
                  Imaxpcsystem, S.L. se reserva el derecho a cambiar el contenido de esta página web, en cualquier momento y sin aviso previo.
                </p>
              </div>
            </v-card>
          </article>

          <!-- Section 2: Protección de Datos -->
          <article id="sec-datos" class="mb-10 scroll-margin">
            <v-card class="legal-card rounded-xl pa-8 border elevation-0">
              <div class="d-flex align-center mb-6">
                <v-avatar color="primary-lighten-5" rounded="lg" size="48" class="me-4 border-avatar">
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
                  De conformidad con lo establecido en la Ley Orgánica 15/1999, de 13 de Diciembre de Protección de Datos de Carácter Personal (LOPD) y en la normativa de desarrollo, usted puede, en cualquier momento, acceder, modificar o solicitar que cancelemos su información personal de nuestra base de datos a través de nuestra página web o enviando un e-mail a <a href="mailto:info@imaxpc.es" class="text-primary font-weight-bold">info@imaxpc.es</a>.
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
                  border="start"
                  bg-color="blue-lighten-5"
                  color="primary"
                  icon="mdi-credit-card-outline"
                  class="rounded-xl border"
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
                <v-card variant="tonal" color="primary" class="rounded-xl pa-5 d-flex flex-column flex-sm-row justify-space-between align-sm-center">
                  <div class="mb-3 mb-sm-0">
                    <span class="text-subtitle-2 d-block font-weight-bold">¿Tiene alguna duda sobre nuestra política?</span>
                    <span class="text-caption">Póngase en contacto con nuestro equipo de soporte técnico.</span>
                  </div>
                  <div class="d-flex flex-wrap gap-3">
                    <v-chip color="primary" variant="flat" href="mailto:info@imaxpc.es" class="cursor-pointer">
                      <v-icon start size="16">mdi-email</v-icon>
                      info@imaxpc.es
                    </v-chip>
                    <v-chip color="primary" variant="flat" href="tel:+34913090503" class="cursor-pointer">
                      <v-icon start size="16">mdi-phone</v-icon>
                      +34 913 090 503
                    </v-chip>
                  </div>
                </v-card>
              </div>
            </v-card>
          </article>

          <!-- Section 3: Devoluciones -->
          <article id="sec-devoluciones" class="mb-10 scroll-margin">
            <v-card class="legal-card rounded-xl pa-8 border elevation-0">
              <div class="d-flex align-center mb-6">
                <v-avatar color="primary-lighten-5" rounded="lg" size="48" class="me-4 border-avatar">
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
                    <v-avatar color="green-lighten-5" rounded="lg" size="38" class="me-3">
                      <v-icon color="success" size="20">mdi-thumb-up-outline</v-icon>
                    </v-avatar>
                    <h3 class="text-subtitle-1 font-weight-bold text-primary">1. GARANTÍA TOTAL DE SATISFACCIÓN (Derecho de Desistimiento)</h3>
                  </div>
                  
                  <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-4">
                    Se produce cuando el cliente desea devolver cualquier producto sin que exista ningún tipo de incidencia, ya sea por arrepentimiento, cambio de idea, o porque el producto (aunque corresponde exactamente con la descripción y foto de nuestra web) no es de su agrado.
                  </p>
                  
                  <div class="mb-4">
                    <v-chip color="success" size="small" class="font-weight-bold px-3">
                      Plazo: 14 días naturales
                    </v-chip>
                    <span class="text-caption text-grey-darken-1 ms-2">
                      desde la recepción del producto. En caso de festivo, debe dejar constancia por e-mail de su intención de devolución.
                    </span>
                  </div>

                  <div class="bg-grey-lighten-5 rounded-lg pa-4 border mb-4">
                    <span class="text-subtitle-2 font-weight-bold text-primary d-block mb-2">Procedimiento paso a paso:</span>
                    <v-timeline density="compact" align="start" class="timeline-custom">
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

                  <v-alert type="warning" border="start" variant="tonal" density="comfortable" class="rounded-lg mb-0 text-body-2">
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
                    <v-avatar color="amber-lighten-5" rounded="lg" size="38" class="me-3">
                      <v-icon color="warning" size="20">mdi-truck-alert-outline</v-icon>
                    </v-avatar>
                    <h3 class="text-subtitle-1 font-weight-bold text-primary">2. DEVOLUCIÓN POR ENTREGA DEFECTUOSA (Daños por transporte)</h3>
                  </div>

                  <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-4">
                    Se produce cuando el producto entregado no coincide con el especificado en el pedido o bien ha sido golpeado y dañado externamente durante su envío.
                  </p>

                  <div class="mb-4">
                    <v-chip color="warning" size="small" class="font-weight-bold px-3">
                      Plazo: Menos de 24 horas
                    </v-chip>
                    <span class="text-caption text-grey-darken-1 ms-2">
                      desde la recepción. Es fundamental comunicarlo de inmediato.
                    </span>
                  </div>

                  <v-alert type="info" border="start" variant="tonal" density="comfortable" class="rounded-lg mb-4 text-body-2">
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
                      <v-icon start size="16">mdi-check-circle-outline</v-icon> En esta devolución, todos los gastos de recogida y nueva entrega corren por cuenta de Imaxpcsystem, S.L.
                    </p>
                  </div>
                </v-card>
              </v-hover>

              <!-- Devolución 3: Garantía de Productos Defectuosos -->
              <v-hover v-slot="{ isHovering, props }">
                <v-card v-bind="props" class="rounded-xl pa-6 border elevation-0 mb-0 sub-card" :class="{ 'card-hover-border': isHovering }">
                  <div class="d-flex align-center mb-4">
                    <v-avatar color="red-lighten-5" rounded="lg" size="38" class="me-3">
                      <v-icon color="error" size="20">mdi-shield-alert-outline</v-icon>
                    </v-avatar>
                    <h3 class="text-subtitle-1 font-weight-bold text-primary">3. GARANTÍAS DE PRODUCTOS DEFECTUOSOS (Avería/Fallo de fábrica)</h3>
                  </div>

                  <p class="text-body-2 text-grey-darken-2 leading-relaxed mb-4">
                    Se produce cuando el producto no funciona correctamente o ha dejado de hacerlo debido a un defecto de fábrica dentro de los plazos legales establecidos.
                  </p>

                  <div class="d-flex flex-wrap gap-2 mb-4">
                    <v-chip color="primary" size="small" class="font-weight-bold px-3">
                      Particulares: 2 años de garantía
                    </v-chip>
                    <v-chip color="secondary" size="small" class="font-weight-bold px-3">
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

          <!-- Section 4: Ley Aplicable -->
          <article id="sec-ley" class="mb-0 scroll-margin">
            <v-card class="legal-card rounded-xl pa-8 border elevation-0">
              <div class="d-flex align-center mb-6">
                <v-avatar color="primary-lighten-5" rounded="lg" size="48" class="me-4 border-avatar">
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

              <v-alert border="start" bg-color="grey-lighten-4" class="rounded-lg mb-0 text-caption text-grey-darken-2">
                El contenido de esta página y los términos de venta son susceptibles de cambios y modificaciones en cualquier momento. Por ello, le recomendamos encarecidamente revisar estas condiciones con asiduidad para estar al corriente de las posibles actualizaciones.
              </v-alert>
            </v-card>
          </article>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Establecer título de la página
onMounted(() => {
  document.title = 'Condiciones de Venta | Imax PC'
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Elementos del menú
const menuItems = [
  { id: 'sec-generales', title: '1. Condiciones Generales', icon: 'mdi-file-document-outline' },
  { id: 'sec-datos', title: '2. Protección de Datos', icon: 'mdi-shield-lock-outline' },
  { id: 'sec-devoluciones', title: '3. Política de Devoluciones', icon: 'mdi-truck-delivery-outline' },
  { id: 'sec-ley', title: '4. Ley Aplicable y Jurisdicción', icon: 'mdi-scale-balance' },
]

// Estado activo del scroll
const activeSection = ref('sec-generales')

// Desplazarse a una sección
const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 140 // Ajuste para el menú superior
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    activeSection.value = id
  }
}

// Detectar sección activa al hacer scroll
const handleScroll = () => {
  const scrollPosition = window.scrollY + 180 // Margen superior para activar antes de llegar al borde
  
  for (const item of menuItems) {
    const element = document.getElementById(item.id)
    if (element) {
      const top = element.offsetTop
      const height = element.offsetHeight
      
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = item.id
        break
      }
    }
  }
}
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

/* Hero Section Styles */
.legal-hero {
  background: linear-gradient(135deg, #1A3A6E 0%, #1a1c2c 100%);
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
}

.legal-hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(77, 183, 227, 0.15) 0%, transparent 60%);
  pointer-events: none;
}

.divider {
  width: 80px;
  height: 4px;
  background-color: #4DB7E3;
  border-radius: 2px;
}

.title-glow {
  text-shadow: 0 2px 10px rgba(77, 183, 227, 0.3);
}

/* Sidebar Sticky Styles */
.sticky-sidebar {
  position: sticky;
  top: 140px; /* Separación de la App Bar */
  z-index: 10;
}

.menu-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
}

.uppercase-tracking {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
}

.nav-item {
  transition: all 0.2s ease;
}

.nav-item:hover {
  background-color: rgba(77, 183, 227, 0.08);
}

.nav-item.v-list-item--active {
  background-color: rgba(26, 58, 110, 0.08) !important;
  border-left: 4px solid #1A3A6E;
  border-radius: 0 8px 8px 0 !important;
}

/* Legal Cards Styles */
.legal-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  box-shadow: 0 4px 12px rgba(26, 58, 110, 0.03) !important;
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

.border-avatar {
  border: 1px solid rgba(26, 58, 110, 0.15);
}

.border-avatar-sec {
  border: 1px solid rgba(77, 183, 227, 0.15);
}

.bg-primary-lighten-5 {
  background-color: rgba(26, 58, 110, 0.06) !important;
}

.bg-secondary-lighten-5 {
  background-color: rgba(77, 183, 227, 0.08) !important;
}

/* Timeline custom adjustments */
.timeline-custom :deep(.v-timeline-item__body) {
  padding-block: 8px;
}

.scroll-margin {
  scroll-margin-top: 140px; /* Para que al hacer click no quede tapado por la navbar */
}

/* Common Text Layout */
.leading-relaxed {
  line-height: 1.7;
}

.max-w-600 {
  max-width: 600px;
}

.tracking-widest {
  letter-spacing: 0.15em !important;
}
</style>