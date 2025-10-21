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

Notes:
- The frontend expects the backend to be reachable at the same origin. For local development, you can run both and configure a proxy if needed.
- SEO meta tags and JSON-LD structured data are included in index.html.
- Google Maps iframe points to address: "Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156".
