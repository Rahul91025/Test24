# Gupta Electronics & Electricals

Full-stack website for a local electrical repair and stabilizer business in Chaibasa. It includes a responsive React storefront, service booking, WhatsApp integration, MongoDB storage, email notifications and a JWT-protected admin dashboard.

## Project structure

```text
client/   React, Tailwind CSS, React Router, Axios, Framer Motion
server/   Node.js, Express, MongoDB, JWT, Nodemailer
```

## Local setup

1. Install Node.js 20+ and MongoDB, or create a MongoDB Atlas database.
2. Install dependencies from the repository root:

   ```bash
   npm install
   ```

3. Copy `client/.env.example` to `client/.env` and replace the phone and map values.
4. Copy `server/.env.example` to `server/.env` and configure MongoDB, JWT and admin credentials.
5. Create the first admin account:

   ```bash
   npm run seed:admin -w server
   ```

6. Start both apps:

   ```bash
   npm run dev
   ```

The website runs at `http://localhost:5173`; the API runs at `http://localhost:5000`.

## Admin

Open `/admin/login` and use the credentials configured in `server/.env`. The dashboard supports:

- Viewing bookings and customer details
- Pending, confirmed, completed and cancelled status
- WhatsApp follow-up links
- Revenue entry and totals
- Daily booking and customer counts

## Deployment

### MongoDB Atlas

Create a database, allow the Render server network, and use its connection string for `MONGODB_URI`.

### Backend on Render

The included `render.yaml` configures the service. Add `MONGODB_URI`, `CLIENT_URL`, SMTP settings and the other values from `server/.env.example`. After deployment, run the admin seed command once in a Render shell.

### Frontend on Vercel

Import the repository with:

- Root directory: `client`
- Build command: `npm run build`
- Output directory: `dist`
- `VITE_API_URL`: `https://your-render-service.onrender.com/api`
- Phone and map variables from `client/.env.example`

Update `client/public/sitemap.xml`, `robots.txt`, canonical business URLs, phone number, map location and domain before launch.

## Production checklist

- Replace all placeholder phone numbers and map links
- Use a long random `JWT_SECRET` and strong admin password
- Set the final Vercel URL in backend `CLIENT_URL`
- Configure SMTP with an app password if email alerts are needed
- Update business address and domain in SEO files
- Add real project photos to the gallery when available
