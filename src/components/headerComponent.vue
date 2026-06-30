<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import logoH from "../assets/img/logo h.jpg";

const isMenuOpen = ref(false);
const isSearchOpen = ref(false);
const searchQuery = ref("");

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (isSearchOpen.value) {
    setTimeout(() => {
      const input = document.querySelector(".search-modal input");
      if (input) input.focus();
    }, 0);
  }
};

const handleSearch = () => {
  if (searchQuery.value) {
    console.log("Search:", searchQuery.value);
    searchQuery.value = "";
    isSearchOpen.value = false;
  }
};

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "#" },
  { name: "About", path: "#" },
  { name: "Contact", path: "#" },
];
</script>

<template>
  <!-- Top Header -->
  <div class="top-header">
    <div class="container">
      <div class="top-header-content">
        <div class="top-left">
          <span class="contact-info">
            <i class="fas fa-envelope"></i>
            <a href="mailto:hello@imax.com">hello@imax.com</a>
          </span>
          <span class="contact-info">
            <i class="fas fa-phone"></i>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </span>
        </div>
        <div class="top-right">
          <div class="social-links">
            <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Header -->
  <header class="main-header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <RouterLink to="/" class="logo-text">
            <img :src="logoH" alt="IMAX Shop" class="logo-img" />
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="main-nav desktop-nav">
          <RouterLink v-for="item in navItems" :key="item.name" :to="item.path" class="nav-link">
            {{ item.name }}
          </RouterLink>
        </nav>

        <!-- Header Icons -->
        <div class="header-icons">
          <button class="icon-btn search-btn" @click="toggleSearch" title="Search">
            <i class="fas fa-search"></i>
          </button>
          <button class="icon-btn cart-btn" title="Cart">
            <i class="fas fa-shopping-cart"></i>
            <span class="badge">0</span>
          </button>
          <button class="icon-btn user-btn" title="User">
            <i class="fas fa-user"></i>
          </button>
          <button class="icon-btn menu-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }" title="Menu">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="mobile-nav">
      <div class="mobile-nav-content">
        <RouterLink v-for="item in navItems" :key="item.name" :to="item.path" class="mobile-nav-link"
          @click="closeMenu">
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </header>

  <!-- Search Modal -->
  <transition name="fade">
    <div v-if="isSearchOpen" class="search-modal-overlay" @click="toggleSearch">
      <div class="search-modal" @click.stop>
        <button class="close-btn" @click="toggleSearch">
          <i class="fas fa-times"></i>
        </button>
        <div class="search-container">
          <h2>Search Products</h2>
          <form @submit.prevent="handleSearch" class="search-form">
            <input v-model="searchQuery" type="text" placeholder="Enter search term..." class="search-input" />
            <button type="submit" class="search-submit">
              <i class="fas fa-search"></i> Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.top-header {
  background: #1A3A6E;
  color: #ffffff;
  padding: 0.35rem 0;
  font-size: 0.75rem !important;
  line-height: 1.2;
  border-bottom: 1px solid rgba(77, 183, 227, 0.12);
}

.top-header,
.top-header span,
.top-header a,
.top-header i,
.top-header .social-links a {
  font-size: 0.75rem !important;
}

.top-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-left,
.top-right {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.contact-info a {
  color: #E3E6EB;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-info a:hover {
  color: #4DB7E3;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-links a {
  color: #E3E6EB;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #4DB7E3;
}

.main-header {
  background-color: #ffffff;
  border-bottom: 1px solid #E3E6EB;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 15px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
}

.logo {
  flex-shrink: 0;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1A3A6E;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.logo-img {
  max-height: 60px;
  width: auto;
  display: block;
}

.logo-text .highlight {
  color: #F4C20D;
}

.main-nav {
  flex: 1;
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.nav-link {
  color: #1A1A1A;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #4DB7E3;
  border-bottom-color: #4DB7E3;
}

.header-icons {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #1A1A1A;
  position: relative;
  transition: color 0.3s ease;
  padding: 0.5rem;
}

.icon-btn:hover {
  color: #4DB7E3;
}

.badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #F4C20D;
  color: #1A1A1A;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
}

.menu-toggle {
  display: none;
}

/* Mobile Navigation */
.mobile-nav {
  display: none;
  background-color: #F7F9FC;
  border-top: 1px solid #E3E6EB;
}

.mobile-nav-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav-link {
  color: #1A1A1A;
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.mobile-nav-link:hover {
  background-color: #E3E6EB;
}

/* Search Modal */
.search-modal-overlay {
  display: fixed;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-modal {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #1A1A1A;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #4DB7E3;
}

.search-container h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #1A3A6E;
}

.search-form {
  display: flex;
  gap: 0.5rem;
}

.search-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #E3E6EB;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #4DB7E3;
}

.search-submit {
  padding: 0.75rem 1.5rem;
  background-color: #4DB7E3;
  color: #1A1A1A;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-submit:hover {
  background-color: #3CA2D3;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .desktop-nav {
    display: none !important;
  }

  .menu-toggle {
    display: block;
  }

  .mobile-nav {
    display: block;
  }

  .top-header-content {
    flex-direction: column;
    gap: 0.75rem;
  }

  .top-left,
  .top-right {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  .header-content {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .header-icons {
    gap: 1rem;
  }
}

@media (max-width: 576px) {

  .top-left,
  .top-right {
    font-size: 0.75rem;
    gap: 0.5rem;
  }

  .social-links {
    gap: 0.5rem;
  }

  .logo-text {
    font-size: 1.25rem;
  }

  .search-modal {
    width: 95%;
    padding: 1.5rem;
  }
}
</style>
