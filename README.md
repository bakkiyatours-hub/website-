
  # Create New Design

  This is a code bundle for Create New Design. The original project is available at https://www.figma.com/design/jRxdgMU6XK3EHo7s925s5a/Create-New-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Local links

  - Vite dev server: `http://127.0.0.1:5173/`
  - Static preview (`serve-local.cmd`): `http://127.0.0.1:5502/`

  ## Contact form (Brevo)

  This repo includes a separate Next.js backend for the contact form in `contact-api/`.

  - Backend:
    - `cd contact-api`
    - `cp .env.local.example .env.local` (set Brevo vars)
    - `npm.cmd i`
    - `npm.cmd run dev` (defaults to `http://localhost:3000`)
    - If Next fails with `spawn EPERM` on your PC, run the no-spawn local server instead:
      - `node scripts/contact-api-local-server.mjs` (from repo root)
  - Frontend:
    - Dev default: the Vite dev server proxies `/api/contact` to `http://localhost:3000` (no env needed)
    - If your backend is not on `localhost:3000`, copy `.env.example` to `.env.local` and set `VITE_CONTACT_API_URL=...`

  ## If `npm run dev` fails (office laptop)

  Some office/enterprise security policies block Node from spawning child processes, which breaks Vite/esbuild and results in a blank/failed dev server.

  You can still check the built site in `dist/`:

  - Double click `serve-local.cmd` and open `http://127.0.0.1:5502/`
  - To test on your phone (same Wi‑Fi), double click `serve-lan.cmd` and open `http://YOUR_PC_IP:5502/`

  Note: `127.0.0.1` only works on the same PC. For phones, use your PC LAN IP and include the port (example: `http://192.168.1.7:5502/`).
  
