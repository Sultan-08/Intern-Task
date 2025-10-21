Guest House — Vite + React ( Frontend ) and Express ( Backend )

How to run (development)
1. Frontend:
   - cd frontend (root of this zip)
   - npm install
   - npm run dev
2. Backend:
   - cd server
   - npm install
   - npm start
   The backend listens on port 4000 by default and exposes:
     POST /api/bookings   - accepts JSON booking objects
     GET  /api/bookings   - returns saved bookings