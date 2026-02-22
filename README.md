# Brevis Client

> Frontend application for Brevis — a minimalist, privacy-first platform for emotional expression and quiet release.

**Live Demo:** https://brevis-five.vercel.app/  
**Main Project:** https://github.com/me-prakhargupta/brevis  
**Backend Repo:** https://github.com/me-prakhargupta/brevis-server

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Frontend Principles](#frontend-principles)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Clone the repo](#1-clone-the-repo)
  - [Install dependencies](#2-install-dependencies)
  - [Run development server](#3-run-development-server)
- [Environment Variables](#environment-variables)
- [Future Improvements](#future-improvements)
- [Key Takeaway](#key-takeaway)
- [Author](#author)
- [Note](#note)

---

## Overview

This is the **client-side application** of Brevis, built to deliver a calm, distraction-free interface for expressing thoughts without pressure or noise.

The focus of this frontend is not feature complexity, but **intentional simplicity and emotional UX**.

---

## Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**

---

## Frontend Principles

- **Minimal UI**  
  Every element serves a purpose. No visual noise.

- **Low-friction interaction**  
  Users can start expressing instantly.

- **Non-performative design**  
  No metrics, no feedback loops, no engagement triggers.

- **Fast and responsive**  
  Optimized using Next.js rendering capabilities.

---

## Architecture

```
UI Components → Pages (App Router) → API Calls → Backend (Node.js)
```

- Component-driven structure for scalability
- Separation of UI, logic, and utilities
- Clean and maintainable folder organization

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/me-prakhargupta/brevis-client.git
cd brevis-client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

The app runs on:

```
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_backend_url
```

Replace `your_backend_url` with the URL of your running Brevis backend server.

---

## Future Improvements

- Enhanced UI polish and micro-interactions
- Better state handling (if scaling increases)
- Improved accessibility and responsiveness
- Deeper integration with backend features

---

## Key Takeaway

This frontend is intentionally simple — but that simplicity is designed, not accidental.

It prioritizes:

- **Clarity** over features
- **Experience** over engagement
- **Expression** over interaction

---

## Author

**Prakhar Gupta**  
Full-Stack Developer (Next.js, Node.js, TypeScript)  
Focused on building backend-driven, production-grade web applications.

---

## Note

This repository contains only the client-side implementation of Brevis. For the complete system architecture, see the [main Brevis project](https://github.com/me-prakhargupta/brevis).
