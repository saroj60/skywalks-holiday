# 🚀 Skywalk Holidays — Production Deployment Guide & Checklist

This document provides step-by-step instructions for deploying the **Skywalk Holidays** platform to production across **Vercel** (Frontend / Serverless API), **PostgreSQL / MongoDB** (Database), and **Render / VPS / DigitalOcean**.

---

## 📑 Production Deployment Checklist

- [x] **Environment Variables Configured**: Secrets set in deployment portal.
- [x] **Database Schema Migrated**: `npx prisma db push` or `npx prisma migrate deploy` executed against production PostgreSQL.
- [x] **Security Headers Active**: Strict HTTP headers (`X-Frame-Options`, `X-Content-Type-Options`, `HSTS`, `Permissions-Policy`) configured in `next.config.ts`.
- [x] **Rate Limiting Protection**: API form endpoints protected against DDoS / spam attacks via `src/lib/rate-limit.ts`.
- [x] **Input Validation & Sanitization**: All form submit routes validate mandatory payload parameters and handle unexpected inputs gracefully.
- [x] **WhatsApp Business Integration**: Phone number formatted properly in `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- [x] **SEO & Metadata Verified**: OpenGraph, Twitter cards, XML sitemap (`/sitemap.xml`), and `robots.txt` active.
- [x] **Mobile Responsive Verified**: Clean rendering without horizontal scroll across 375px, 414px, 768px, 1024px, 1440px viewports.

---

## 🛠️ Deployment Instructions

### 1. Frontend & API Deployment (Vercel)

1. Push your repository to **GitHub / GitLab / Bitbucket**.
2. Go to [Vercel Dashboard](https://vercel.com/new) and import the project `skywalkholidays`.
3. Set the **Framework Preset** to **Next.js**.
4. In **Environment Variables**, add:
   ```env
   DATABASE_URL="postgresql://user:password@your-postgres-host:5432/skywalkdb?sslmode=require"
   NEXT_PUBLIC_WHATSAPP_NUMBER="9779851000000"
   JWT_SECRET="your_production_jwt_secret_key"
   NEXT_PUBLIC_APP_URL="https://skywalkholidays.com"
   NODE_ENV="production"
   ```
5. Click **Deploy**. Vercel will automatically build the Next.js App Router project and deploy global edge functions.

---

### 2. Production Database Setup (PostgreSQL / Supabase / Neon / Render)

1. Provision a PostgreSQL instance on **Supabase**, **Neon**, **Render**, or **DigitalOcean**.
2. Copy your connection URI (`postgresql://...`).
3. Run schema migration command locally or in CI/CD pipeline:
   ```bash
   npx prisma db push
   ```
4. Seed the initial admin account by running a POST request to `/api/admin/auth/login` with default credentials (`admin@skywalkholidays.com` / `admin123`) or customizing your admin seed.

---

### 3. Alternative Fullstack Container Deployment (Render / Docker / VPS)

If deploying to a single VPS (DigitalOcean Droplet, AWS EC2, or Render):

1. **Dockerfile**:
   ```dockerfile
   FROM node:20-alpine AS builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npx prisma generate
   RUN npm run build

   FROM node:20-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next/standalone ./
   COPY --from=builder /app/.next/static ./.next/static
   EXPOSE 3000
   CMD ["node", "server.js"]
   ```
2. Build & Run:
   ```bash
   docker build -t skywalkholidays .
   docker run -p 3000:3000 --env-file .env.production skywalkholidays
   ```

---

## 🔐 Database Backup Strategy

1. **Automated Nightly Dumps (PostgreSQL)**:
   ```bash
   pg_dump -U postgres -h localhost -d skywalkdb > backup_$(date +%Y%m%d).sql
   ```
2. **S3 Backup Retention**: Configure automated daily snapshots with 30-day retention policies on Supabase, AWS RDS, or DigitalOcean Managed Databases.

---

## 📞 Support & Monitoring

For production issues, check structured error logs via Vercel Logs or your server output:
- Log Format: `[ERROR] 2026-09-17T... - Message`
