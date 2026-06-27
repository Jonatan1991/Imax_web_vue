<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const newsletter = ref('');

const categories = [
  { name: 'Watches', path: '#' },
  { name: 'Shoes', path: '#' },
  { name: 'Accessories', path: '#' },
];

const information = [
  { name: 'About Us', path: '#' },
  { name: 'Contact Us', path: '#' },
  { name: 'FAQ', path: '#' },
  { name: 'Shipping Info', path: '#' },
];

const handleNewsletterSubmit = () => {
  if (newsletter.value) {
    console.log('Newsletter signup:', newsletter.value);
    newsletter.value = '';
  }
};
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="container">
        <div class="footer-grid">
          <!-- Products Section -->
          <div class="footer-section">
            <h5>Products</h5>
            <ul>
              <li v-for="cat in categories" :key="cat.name">
                <RouterLink :to="cat.path">{{ cat.name }}</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Information Section -->
          <div class="footer-section">
            <h5>Information</h5>
            <ul>
              <li v-for="item in information" :key="item.name">
                <RouterLink :to="item.path">{{ item.name }}</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Social Media Section -->
          <div class="footer-section">
            <h5>Follow Us</h5>
            <div class="social-icons">
              <a href="#" class="social-icon" title="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon" title="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon" title="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-icon" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <!-- Newsletter Section -->
          <div class="footer-section">
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for updates and special offers.</p>
            <form @submit.prevent="handleNewsletterSubmit" class="newsletter-form">
              <input
                v-model="newsletter"
                type="email"
                placeholder="Your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <p>&copy; 2024 IMAX Shop. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #212245;
  color: #ffffff;
  margin-top: 5rem;
}

.footer-content {
  padding: 3rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h5 {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #ffc000;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #a8a8a8;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #ffc000;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 192, 0, 0.1);
  color: #ffc000;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
  background-color: #ffc000;
  color: #212245;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 0.9rem;
}

.newsletter-form input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-form button {
  padding: 0.75rem 1.5rem;
  background-color: #ffc000;
  color: #212245;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-form button:hover {
  background-color: #ffb300;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  color: #a8a8a8;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .newsletter-form {
    flex-direction: column;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
