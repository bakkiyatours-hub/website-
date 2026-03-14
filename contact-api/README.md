# Contact API (Next.js) + Brevo

This folder is a small Next.js backend that exposes `POST /api/contact` and forwards submissions to Brevo.

## Setup

1. `cd contact-api`
2. `cp .env.local.example .env.local` and fill values
3. Install + run:
   - `npm.cmd i`
   - `npm.cmd run dev`

## Notes

- The API adds/updates the contact into Brevo list ID `3` and sets attributes `FULLNAME`, `PHONE`, `SUBJECT`, `MESSAGE`.
- Rotate your Brevo API key if it was shared anywhere public.

