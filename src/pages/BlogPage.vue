<template>
  <div class="blog-page bg-background min-vh-100 pb-16">
    <!-- HERO SECTION -->
    <header class="hero-section text-white d-flex align-center position-relative overflow-hidden">
      <div class="gradient-overlay" />

      <v-container class="position-relative z-index-2 py-16 text-center">
        <span class="text-subtitle-1 text-uppercase font-weight-bold text-secondary tracking-widest d-block mb-3">
          BLOG DE TECNOLOGÍA
        </span>

        <h1 class="text-h2 font-weight-black mb-4 text-gradient leading-tight">
          Novedades y Consejos IT
        </h1>

        <p class="text-h6 text-grey-lighten-2 mb-8 leading-relaxed font-weight-regular max-w-700 mx-auto">
          Mantente al día sobre ciberseguridad, optimización de hardware, soluciones de impresión eficientes y las últimas novedades en Inteligencia Artificial aplicada a empresas.
        </p>
      </v-container>
    </header>

    <!-- ARTICLES GRID -->
    <v-container class="mt-12">
      <v-row>
        <v-col
          v-for="post in offersStore.blogPosts"
          :key="post.id"
          class="d-flex"
          cols="12"
          md="6"
        >
          <v-card class="blog-card w-100 pa-6 rounded-xl border elevation-1 d-flex flex-column justify-space-between">
            <div>
              <div class="d-flex justify-space-between align-center mb-4">
                <v-chip class="font-weight-bold text-white" color="secondary" size="small">
                  {{ post.category }}
                </v-chip>

                <span class="text-caption text-grey">{{ post.date }}</span>
              </div>

              <h2 class="text-h5 font-weight-black text-primary mb-3 leading-snug">
                {{ post.title }}
              </h2>

              <p class="text-body-2 text-grey-darken-2 mb-6 leading-relaxed">
                {{ post.summary }}
              </p>
            </div>

            <div>
              <v-divider class="mb-4" />

              <div class="d-flex justify-space-between align-center">
                <span class="text-caption text-grey font-weight-medium">
                  <v-icon size="14" start>mdi-clock-outline</v-icon> {{ post.readTime }}
                </span>

                <v-btn class="font-weight-bold" color="primary" variant="text" @click="openPost(post)">
                  Leer Artículo <v-icon end>mdi-chevron-right</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- ARTICLE DIALOG -->
    <v-dialog v-model="dialog" max-width="800px" scrollable>
      <v-card v-if="selectedPost" class="rounded-xl pa-6">
        <v-card-title class="px-0 d-flex justify-space-between align-start text-wrap">
          <div>
            <v-chip class="font-weight-bold text-white mb-2" color="secondary" size="small">
              {{ selectedPost.category }}
            </v-chip>

            <h2 class="text-h4 font-weight-black text-primary leading-tight">
              {{ selectedPost.title }}
            </h2>
          </div>

          <v-btn color="grey" icon="mdi-close" variant="text" @click="dialog = false" />
        </v-card-title>

        <v-card-text class="px-0 py-6 text-body-1 text-grey-darken-3 leading-relaxed">
          <div class="d-flex align-center gap-3 mb-6 text-caption text-grey">
            <span><strong>Autor:</strong> {{ selectedPost.author }}</span>
            <span>•</span>
            <span><strong>Fecha:</strong> {{ selectedPost.date }}</span>
            <span>•</span>
            <span>{{ selectedPost.readTime }}</span>
          </div>

          <p class="mb-6" style="white-space: pre-line;">{{ selectedPost.content }}</p>

          <v-divider class="my-6" />

          <div class="bg-blue-lighten-5 pa-6 rounded-lg text-center">
            <h3 class="text-h6 font-weight-black text-primary mb-2">¿Te ha gustado el artículo?</h3>

            <p class="text-body-2 text-grey-darken-2 mb-4">
              En Imax PC somos especialistas en soporte técnico y transformación digital para tu negocio. Contacta con nosotros para cualquier duda o consulta informática.
            </p>

            <v-btn class="text-white font-weight-bold rounded-lg" color="secondary" to="/contacto" @click="dialog = false">
              Contactar Soporte Técnico
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { type BlogPost, useOffersStore } from '@/stores/offersStore'

  const offersStore = useOffersStore()

  const dialog = ref(false)
  const selectedPost = ref<BlogPost | null>(null)

  function openPost (post: BlogPost) {
    selectedPost.value = post
    dialog.value = true
  }

  onMounted(() => {
    document.title = 'Blog y Consejos IT | Imax PC'
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

.gap-3 {
  gap: 12px;
}

.leading-snug {
  line-height: 1.35;
}

.blog-card {
  border-color: #E3E6EB !important;
  background-color: #FFFFFF;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s;
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(26, 58, 110, 0.08) !important;
  border-color: #4DB7E3 !important;
}
</style>
