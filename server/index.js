const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 4000
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'dist')))

// simple CORS for dev (if frontend served separately)
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers','Content-Type')
  next()
})

const DATA_FILE = path.join(__dirname, 'bookings.json')
const SUBS_FILE = path.join(__dirname, 'subscription.json')

app.post('/api/bookings', (req,res)=>{
  const booking = Object.assign({receivedAt: new Date().toISOString()}, req.body || {})
  let arr = []
  try{
    if(fs.existsSync(DATA_FILE)){
      arr = JSON.parse(fs.readFileSync(DATA_FILE))
    }
  }catch(e){
    console.error('read error',e)
  }
  arr.push(booking)
  try{
    fs.writeFileSync(DATA_FILE, JSON.stringify(arr, null, 2))
    res.status(201).json({ok:true})
  }catch(e){
    console.error('write error',e)
    res.status(500).send('Failed to save booking')
  }
})

app.get('/api/bookings', (req,res)=>{
  try{
    const data = fs.existsSync(DATA_FILE) ? JSON.parse(fs.readFileSync(DATA_FILE)) : []
    res.json(data)
  }catch(e){
    res.status(500).send('Failed to read bookings')
  }
})

// Subscription Routes

app.post('/api/subscription', (req,res)=>{
  const subscribe = Object.assign({receivedAt: new Date().toISOString()}, req.body || {})
  let arr = []
  try{
    if(fs.existsSync(SUBS_FILE)){
      arr = JSON.parse(fs.readFileSync(SUBS_FILE))
    }
  }catch(e){
    console.error('read error',e)
  }
  arr.push(subscribe)
  try{
    fs.writeFileSync(SUBS_FILE, JSON.stringify(arr, null, 2))
    res.status(201).json({ok:true})
  }catch(e){
    console.error('write error',e)
    res.status(500).send('Failed to save subscription')
  }
})

app.get('/api/subscription', (req,res)=>{
  try{
    const data = fs.existsSync(SUBS_FILE) ? JSON.parse(fs.readFileSync(SUBS_FILE)) : []
    res.json(data)
  }catch(e){
    res.status(500).send('Failed to read subscription')
  }
})

app.listen(PORT, ()=> console.log('Server started on', PORT))
