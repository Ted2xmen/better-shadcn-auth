# Better Shadcn Auth Template

A modern authentication template for Next.js projects, featuring:

- **Next.js** — The React framework for production
- **shadcn/ui** — Beautifully designed UI components
- **NeonDB** — Serverless Postgres database
- **better-auth** — Simple, secure authentication
- **Drizzle ORM** — Type-safe SQL for TypeScript

---

## ✨ Features

- Email/password authentication (ready)
- Social login (GitHub & Google coming soon)
- Modular, clean code structure
- Responsive, accessible UI
- Fully open source

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ted2xmen/better-shadcn-auth.git
   cd better-shadcn-auth
   ```
2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in the required values.

   ```
   BETTER_AUTH_SECRET=
   BETTER_AUTH_URL=
   DATABASE_URL=
   ```

4. **Run the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 🛠️ Stack

| Technology    | Description                           |
|--------------|---------------------------------------|
| Next.js      | React framework for production         |
| shadcn/ui    | Modern UI components                  |
| NeonDB       | Serverless Postgres database           |
| better-auth  | Authentication solution                |
| Drizzle ORM  | Type-safe SQL ORM for TypeScript       |

---

## 📦 Folder Structure

```
/src
  /app
    /(auth)     # Auth pages & forms
    /(public)   # Public landing page
  /components   # Shared UI components
  /lib          # Config, utils, helpers
  /actions      # Server actions
```

---

## 🐲 Drizzle ORM Commands

To manage your database schema and generate types with Drizzle ORM, use the following commands:

```bash
# Run migrations
pnpm drizzle:migrate
# or
npm run drizzle:migrate
# or
yarn drizzle:migrate

# Generate types
pnpm drizzle:generate
# or
npm run drizzle:generate
# or
yarn drizzle:generate
```

> Make sure your Drizzle config is set up correctly in `drizzle.config.ts` and your database is accessible via `DATABASE_URL` in your `.env` file.

---

## 📄 License

MIT

---

## 🙏 Credits
- [shadcn/ui](https://ui.shadcn.com/)
- [better-auth](https://www.better-auth.com)
- [NeonDB](https://neon.tech/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Next.js](https://nextjs.org/)

---

> Made by [@ted2xmen](https://github.com/ted2xmen)
