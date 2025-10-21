import React from 'react'

const GOOGLE_MAPS_QUERY = encodeURIComponent("Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156")

export default function App(){
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <h1>King Sukh Guest House</h1>
          <a className="btn" href="#book">Book Now</a>
        </div>
      </nav>

      <header className="hero" style={{backgroundImage:'url(/images/header.jpg)'}}>
        <div className="overlay"></div>
        <div className="hero-content container">
          <h2>Welcome to King Sukh Guest House</h2>
          <p>Comfort · Cleanliness · Hospitality</p>
          <a className="btn btn-light" href="#book">Check Availability</a>
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
              <a className="btn" href="#book">View Rates</a>
            </div>
            <div className="room-grid">
              <img src="/images/room1.jpg" alt="room" />
              <img src="/images/room1.jpg" alt="room" />
              <img src="/images/room1.jpg" alt="room" />
              <img src="/images/room1.jpg" alt="room" />
            </div>
          </div>
        </section>

        <section id="gallery" className="section">
          <h3>Photo Gallery</h3>
          <div className="gallery">
            {['header.jpg','large.jpg','out.jpg','recep.jpg','service.jpg','flower.jpg','small.jpg','ayodhya.webp'].map((img) => (
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
              <p>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
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

      <footer className="footer">
        <div className="container">
          <div>© {new Date().getFullYear()} King Sukh Guest House</div>
          <div>Made with care</div>
        </div>
      </footer>
    </div>
  )
}

function BookingForm(){
  const [state,setState] = React.useState({name:'',contact:'',checkin:'',nights:1,message:''})
  const [sent,setSent] = React.useState(false)
  function handle(e){
    setState({...state,[e.target.name]: e.target.value})
  }
  async function submit(e){
    e.preventDefault()
    // send to backend
    try{
      const res = await fetch('http://localhost:4000/api/bookings', {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(state)
      })
      if(res.ok){
        setSent(true)
        setState({name:'',contact:'',checkin:'',nights:1,message:''})
      } else {
        const err = await res.text()
        alert('Error: '+err)
      }
    } catch(err){
      alert('Network error: '+err.message)
    }
  }
  return (
    <form onSubmit={submit} className="form">
      <label>Name
        <input name="name" value={state.name} onChange={handle} required />
      </label>
      <label>Contact
        <input name="contact" value={state.contact} onChange={handle} required />
      </label>
      <label>Check-in
        <input type="date" name="checkin" value={state.checkin} onChange={handle} required />
      </label>
      <label>Nights
        <input type="number" name="nights" min="1" value={state.nights} onChange={handle} />
      </label>
      <label>Message
        <textarea name="message" value={state.message} onChange={handle}></textarea>
      </label>
      <button className="btn" type="submit">Send Booking</button>
      {sent && <div className="success">Thanks — booking request sent.</div>}
    </form>
  )
}
