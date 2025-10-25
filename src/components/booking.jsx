import React from 'react'

export default function BookingForm(){
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
      <button className="btn btn-light" type="submit">Send Booking</button>
      {sent && <div className="success">Thanks — booking request sent.</div>}
    </form>
  );
}
