// components/Footer.jsx

export default function Footer() {
  return (
    
<footer class="footer">
  <div class="footer-container">

    <div class="footer-column">
      <h2 class="footer-logo">StayEase</h2>
      <p class="footer-about">
        Experience the comfort of home with the luxury of a stay. Explore our
        beautiful guest houses nestled in peaceful destinations across India.
      </p>
    </div>

    <div class="footer-column">
      <h3>Quick Links</h3>
      <ul class="footer-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#rooms">Rooms</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#offers">Offers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Contact Us</h3>
      <ul class="footer-contact">
        <li><i class="fa fa-map-marker"></i> Goa, India</li>
        <li><i class="fa fa-phone"></i> +91 98765 43210</li>
        <li><i class="fa fa-envelope"></i> support@stayease.com</li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Stay Updated</h3>
      <p>Subscribe for exclusive offers and travel inspirations.</p>
      <form class="footer-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© 2025 StayEase. All rights reserved.</p>
    <div class="footer-social">
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
    </div>
  </div>
</footer>

  );
}
