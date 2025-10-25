// components/Footer.jsx


export default function Footer() {
  return (
    
<footer class="footer">
  <div class="footer-container">

    <div class="footer-column0">
      <h2 class="footer-logo">King Sukh Guest House</h2>
      <p class="footer-about">
        Experience the comfort of home with the luxury of a stay. Explore our
        beautiful guest houses nestled in peaceful destinations across India.
      </p>
    </div>

    <div class="footer-column0">
      <h3>Quick Links</h3>
      <ul class="footer-links2">
        <li><a href="#home">Home</a></li>
        <li><a href="#rooms">Rooms</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#offers">Offers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div class="footer-column0">
      <h3>Contact Us</h3>
      <ul class="footer-contact">
        <li><i class="fa fa-map-marker"></i> Goa, India</li>
        <li><i class="fa fa-phone"></i> +91 98765 43210</li>
        <li><i class="fa fa-envelope"></i> support@ksgh.com</li>
      </ul>
    </div>

    <div class="footer-column0">
      <h3>Stay Updated</h3>
      <p>Subscribe for exclusive offers and travel inspirations.</p>
      <form class="footer-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>

  <div class="footer-bottom">
    <p><i>King Sukh Guest House</i> | All rights reserved | © 2025</p>
    <div class="footer-social">
      <a href="#"><i class="fa-brands fa-facebook"></i></a>
      <a href="#"><i class="fa-brands fa-instagram"></i></a>
      <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
    </div>
  </div>
</footer>

  );
}
