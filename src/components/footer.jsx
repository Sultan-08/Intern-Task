// components/Footer.jsx
import React from 'react'

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
        <li><i class="fa fa-map-marker"></i> Barhanti, West Bengal, India</li>
        <li><i class="fa fa-phone"></i> +91 9007062180</li>
        <li><i class="fa fa-envelope"></i> support@ksgh.com</li>
      </ul>
    </div>

    <div class="footer-column0">
      <h3>Stay Updated</h3>
      <p>Subscribe for exclusive offers and travel inspirations.</p>
      <Subscription />
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

// Subscription 
function Subscription(){
  const [state,setState] = React.useState({email:''})
  const [sent,setSent] = React.useState(false)
  function handle(e){
    setState({...state,[e.target.name]: e.target.value})
  }
  async function submit(e){
    e.preventDefault()
    // send to backend
    try{
      const res = await fetch('http://localhost:4000/api/subscription', {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(state)
      })
      if(res.ok){
        setSent(true)
        setState({email:''})
      } else {
        const err = await res.text()
        alert('Error: '+err)
      }
    } catch(err){
      alert('Network error: '+err.message)
    }
  }
  return (
    <div>
    <form onSubmit={submit} className="footer-form">
        <input type="email" name="email" placeholder="Enter your email" value={state.email} onChange={handle} required />
      <button type="submit">Subscribe</button>
      {/* {sent && <div className="success">Thanks — subscription added.</div>} */}
    </form>
    {sent && (
  <div className="success2"><b>
    Thanks — subscription added successfully ✅</b>
  </div>
)}
</div>
  );
}
