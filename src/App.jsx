
import BookingForm from "./components/booking";
import Footer from "./components/footer";


const GOOGLE_MAPS_QUERY = encodeURIComponent("Kingsukh Guest House")

export default function App(){
  return (
    <div>
      <nav class="nav-new" >
        <h5 class="jp"><a href="#">Kingsukh Guest House</a></h5>
        <ul class="main-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About us</a></li>
        </ul>
        <button className="btn btn-light"
            onClick={() => document.getElementById('book').scrollIntoView({ behavior: 'smooth' })}>
            Book Now
          </button>
    </nav> 

      <header className="hero" style={{backgroundImage:'url(/images/ayodhya.webp)'}} id="home">
        <div className="overlay"></div>
        <div className="hero-content container" >
          <h2>Welcome to King Sukh Guest House</h2>
          <p>Comfort · Cleanliness · Hospitality</p>
          <button className="btn btn-light"
            onClick={() => document.getElementById('book').scrollIntoView({ behavior: 'smooth' })}>
            Check Availability
          </button>
        </div>
      </header>

      <main className="container">
        <section id="rooms" className="section">
          <div className="grid">
            <div>
              <h3>Rooms & Suites</h3>
              <p>Spacious rooms with modern amenities. Starting from ₹1000/night.</p>
              <ul>
                <li>Free Wi-Fi</li>
                <li>24/7 Hot Water</li>
                <li>Daily Housekeeping</li>
              </ul>
              <button className="btn btn-light"
                onClick={() => document.getElementById('book').scrollIntoView({ behavior: 'smooth' })}>
                View Rates
              </button>
            </div>
            <div className="room-grid">
              <img src="/images/small.jpg" alt="room" />
              <img src="/images/room1.jpg" alt="room" />
              <img src="/images/large.jpg" alt="room" />
              <img src="/images/recep.jpg" alt="room" />
            </div>
          </div>
        </section>

        <section id="gallery" className="section">
          <h3>Photo Gallery</h3>
          <div className="gallery">
            {['header.jpg','baranti.webp','out.jpg','mithonDam.webp','service.jpg','flower.jpg','logo.png','ayodhya.webp'].map((img) => (
              <img key={img} src={'/images/'+img} alt={img} onClick={() => window.open('/images/'+img,'_blank')} />
            ))}
          </div>
        </section>

        <section id="facilities" className="section">
          <h3>Facilities & Services</h3>
          <div className="cards">
            <div className="card"><h4>Dining</h4><p>Local cuisine served.</p></div>
            <div className="card"><h4>Parking</h4><p>Secure parking nearby.</p></div>
            <div className="card"><h4>Guide & Transport</h4><p>Local travel assistance.</p></div>
          </div>
        </section>

        <section id="book" className="section">
          <div className="grid">
            <div>
              <h3>Book a Room</h3>
              <BookingForm />
            </div>
            <div>
              <h4>Contact & Location</h4>
              <p>Kingsukh Guest House, Beside Barshal Water Tank, Manpur, Barhanti, West Bengal-723156</p>
              <p><strong>Phone:</strong> +91 9007062180</p>
              <div className="map">
                <iframe
                  title="map"
                  src={'https://www.google.com/maps?q='+GOOGLE_MAPS_QUERY+'&output=embed'}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

