# Codex Project Plan: Architecture Portfolio Website

## 1. Tujuan Project

Project ini adalah website portfolio arsitektur modern untuk menampilkan karya desain, render, diagram, dokumentasi proses, dan informasi profesional.

Website ini bersifat public-facing, artinya pengunjung bisa langsung membuka website tanpa login atau register.

Login hanya digunakan untuk admin agar bisa mengelola konten project, seperti menambah, mengedit, menghapus, dan mengupload gambar project.

Tujuan utama website:

- Menampilkan portfolio arsitektur secara profesional
- Memberikan pengalaman visual yang modern, clean, dan seamless
- Memudahkan update project tanpa harus mengubah kode frontend secara manual
- Menjadi identitas digital pribadi / studio arsitektur
- Siap dikembangkan ke sistem backend menggunakan Supabase
- Siap deploy ke Vercel

---

## 2. Arah Desain

Style website harus mengikuti arah desain berikut:

- Modern architecture portfolio
- Minimal, clean, dan premium
- Seamless layout antara navbar dan hero section
- Tidak ada garis pemisah keras antara navbar dan konten
- Transparent / floating navbar
- Fullscreen hero section
- Large editorial typography
- Visual-heavy dengan gambar render / project sebagai fokus utama
- Banyak whitespace
- Animasi halus, bukan berlebihan
- Responsive untuk desktop, tablet, dan mobile

Referensi rasa desain:

- Architecture studio website
- Editorial portfolio
- Minimal luxury design
- Smooth scrolling visual presentation

---

## 3. Tech Stack

Gunakan stack berikut:

- Next.js App Router
- JavaScript, bukan TypeScript
- Tailwind CSS
- Framer Motion untuk animasi
- Supabase untuk database, auth, dan storage
- Vercel untuk deployment
- GitHub sebagai version control

Catatan penting:

- Jangan hardcode data project untuk versi final
- Data dummy boleh digunakan di fase awal
- Jangan hardcode API key
- Gunakan environment variables
- Struktur folder harus rapi dan scalable
- Komponen harus reusable

---

## 4. Gambaran Sistem

Website dibagi menjadi dua area utama:

### 4.1 Public Website

Area ini bisa diakses semua orang tanpa login.

Halaman utama:

- Home
- Projects
- Project Detail
- About
- Contact

Fungsi utama:

- Menampilkan project architecture
- Menampilkan detail setiap project
- Menampilkan informasi personal / studio
- Menampilkan kontak
- Memberikan visual experience yang modern

### 4.2 Admin Area

Area ini hanya bisa diakses admin.

Route contoh:

```txt
/admin
```

Fungsi admin:

- Login admin
- Tambah project
- Edit project
- Hapus project
- Upload cover image
- Upload gallery images
- Manage project content

Public visitor tidak boleh melihat admin dashboard.

---

## 5. Data Project

Setiap project minimal memiliki data berikut:

```txt
title
slug
category
year
location
description
concept
cover_image
gallery_images
software_used
project_type
created_at
updated_at
```

Contoh kategori:

```txt
Residential
Commercial
Interior
Urban Design
Competition
Academic Project
Visualization
```

---

## 6. Struktur Folder Awal

Gunakan struktur folder seperti ini:

```txt
app/
  layout.jsx
  page.jsx
  projects/
    page.jsx
    [slug]/
      page.jsx
  about/
    page.jsx
  contact/
    page.jsx
  admin/
    page.jsx

components/
  layout/
    Navbar.jsx
    Footer.jsx
  home/
    Hero.jsx
    FeaturedProjects.jsx
    AboutPreview.jsx
    ContactCTA.jsx
  projects/
    ProjectCard.jsx
    ProjectGrid.jsx
    ProjectDetail.jsx
  admin/
    AdminLogin.jsx
    AdminDashboard.jsx
    ProjectForm.jsx

lib/
  supabase.js
  projects.js

data/
  dummyProjects.js

styles/
  globals.css

public/
  images/
```

Struktur ini boleh disesuaikan jika ada alasan teknis yang lebih baik, tetapi harus tetap rapi dan mudah dikembangkan.

---

## 7. Aturan Kerja Codex

Codex harus bekerja secara bertahap.

Satu session hanya mengerjakan satu step.

Setelah satu step selesai, Codex harus berhenti dan menunggu review.

Jangan lanjut ke step berikutnya sebelum ada konfirmasi dari user.

Setelah menyelesaikan step, Codex harus memberikan ringkasan:

- File apa saja yang dibuat / diubah
- Fitur apa yang sudah selesai
- Cara menjalankan / mengetes
- Hal yang perlu direview user
- Pertanyaan apakah boleh lanjut ke step berikutnya

Format akhir setiap session:

```txt
Step ini selesai.

Summary:
- ...

Files changed:
- ...

How to test:
- ...

Please review first.
Should I continue to the next step, or do you want revisions?
```

Codex tidak boleh langsung mengerjakan semua step sekaligus.

---

## 7.5 Additional Codex Rules

### Code Stability

- Avoid unnecessary refactors or redesigns of previously completed steps unless explicitly requested by the user.
- Keep previously approved layouts and structures stable unless revisions are requested.
- Keep visual consistency across all pages and sections.
- Do not modify completed features unless required for compatibility or requested by the user.
- Avoid changing folder structure without strong technical reason.

### Dependencies

- Do not add unnecessary dependencies or frameworks.
- Keep dependencies minimal, maintainable, and purposeful.
- Avoid dependency bloat for small features.
- Prefer built-in Next.js or React solutions where appropriate.
- Explain why a new dependency is needed before adding major packages.

### Component Architecture

- Prefer composition over large monolithic components.
- Avoid oversized files with too many responsibilities.
- Keep components modular, reusable, and easy to maintain.
- Keep component naming consistent across the project.
- Keep components focused on a single responsibility whenever possible.

Good example:

```txt
ProjectCard.jsx
ProjectGrid.jsx
ProjectDetail.jsx
Navbar.jsx
Hero.jsx
```

Avoid inconsistent naming such as:

```txt
PortfolioCard.jsx
WorkCard.jsx
ArchitectureItem.jsx
```

unless there is a clear architectural reason.

### File Organization

- Keep folder structure organized and scalable.
- Group related components together logically.
- Avoid placing unrelated logic inside page files.
- Separate UI components, utility functions, and data logic properly.
- Avoid unnecessary nesting complexity.

### Images and Performance

- Use Next.js Image component where appropriate for optimization.
- Keep image handling scalable and performance-friendly.
- Avoid unnecessarily heavy animations or effects.
- Optimize layouts for smooth scrolling and responsive rendering.
- Avoid loading oversized images unnecessarily.

### Placeholder Content

- Use architecture-related placeholder content instead of excessive lorem ipsum text.
- Placeholder projects and descriptions should feel realistic and relevant to architecture portfolios.
- Use meaningful temporary project names, locations, and categories.
- Avoid generic filler text where possible.

### Animation Guidelines

- Animations should feel smooth, premium, and subtle.
- Avoid excessive motion or distracting effects.
- Prioritize elegant transitions over flashy interactions.
- Maintain performance-friendly animations.
- Keep animation style visually consistent throughout the project.

### Workflow Rules

- Only work on one approved step at a time.
- Do not continue automatically after completing a step.
- Always stop and wait for explicit user confirmation before moving to the next step.
- After each completed step, provide:
  - summary of completed work
  - list of changed files
  - how to test
  - important notes or limitations
  - request for user review
- Never assume approval automatically.

### Maintainability

- Prioritize clean, readable, scalable code.
- Avoid overengineering.
- Prefer simple and maintainable solutions over overly complex abstractions.
- Keep code easy to edit for future portfolio expansion.
- Write code that is understandable for future manual editing.

### Responsive Design

- All layouts must be responsive.
- Design should work properly on:
  - desktop
  - tablet
  - mobile
- Avoid layouts that break on smaller screens.
- Keep mobile navigation clean and accessible.

### UI Consistency

- Maintain a seamless and modern architecture portfolio aesthetic throughout the project.
- Avoid sudden visual style changes between steps.
- Keep spacing, typography, colors, and interaction styles visually cohesive.
- Maintain consistent visual hierarchy across pages.
- Keep navbar, buttons, cards, and sections stylistically unified.

### Design Direction Consistency

- Keep the visual direction aligned with:
  - modern architecture portfolio
  - editorial minimalism
  - premium presentation
  - clean whitespace
  - visual-heavy layout
- Avoid unrelated visual styles such as:
  - gaming UI
  - cyberpunk neon
  - excessive glassmorphism
  - cartoonish layouts
  - overdecorated interfaces

unless explicitly requested by the user.

### Supabase and Security

- Never hardcode API keys.
- Always use environment variables for credentials.
- Never expose service role keys to frontend/client code.
- Keep Supabase integration scalable and secure.
- Respect RLS-friendly architecture.

### GitHub and Repository Safety

- Avoid modifying unrelated files.
- Keep commits focused on the current step/task.
- Avoid destructive repository-wide refactors without approval.
- Preserve repository cleanliness and maintainability.

### Final Rule

- The project should always prioritize:
  - clean architecture
  - maintainability
  - scalability
  - visual consistency
  - smooth user experience
  - realistic architecture portfolio presentation

---

# 8. Roadmap Step-by-Step

## Step 1 — Basic Project Setup

Tujuan:

Membuat fondasi awal project Next.js.

Yang dikerjakan:

- Setup Next.js App Router
- Setup Tailwind CSS
- Buat global layout
- Buat homepage awal
- Buat struktur folder dasar
- Buat Navbar basic
- Buat Footer basic
- Pastikan project bisa dijalankan

Belum dikerjakan:

- Supabase
- Admin dashboard
- Project detail
- Upload image
- Animasi kompleks

Prompt untuk Codex:

```txt
Project goal:
Create a modern architecture portfolio website.

This website will be used to showcase architecture projects, renderings, diagrams, and personal/studio information. The public website must be accessible without login. Login will only be used later for admin content management.

Tech stack:
- Next.js App Router
- JavaScript, not TypeScript
- Tailwind CSS
- Vercel-ready

Design direction:
- Modern architecture portfolio
- Minimal
- Clean
- Seamless layout
- No hard visual border between navbar and content
- Large editorial typography
- Responsive layout

Step 1 task:
Create the basic project setup.

Create:
- app/layout.jsx
- app/page.jsx
- global styles
- Navbar component
- Footer component
- clean folder structure

Important:
- Do not setup Supabase yet
- Do not create admin page yet
- Use dummy text only
- Keep code clean and scalable
- Stop after finishing this step and wait for review
```

---

## Step 2 — Modern Home Page UI

Tujuan:

Membuat tampilan homepage utama yang modern dan seamless.

Yang dikerjakan:

- Transparent / floating navbar
- Fullscreen hero section
- Hero title dan subtitle
- CTA button
- Featured projects preview
- About preview
- Contact CTA
- Responsive mobile layout

Style penting:

- Navbar terasa melayang di atas hero
- Tidak ada garis pemisah keras
- Hero harus terasa premium dan visual-heavy
- Gunakan dummy image / placeholder

Prompt untuk Codex:

```txt
Continue from the existing project.

Step 2 task:
Build the modern homepage UI.

Create / improve:
- Transparent floating navbar
- Fullscreen hero section
- Featured projects section
- About preview section
- Contact CTA section
- Footer refinement
- Responsive mobile layout

Design requirements:
- Seamless transition between navbar and hero
- No hard border between sections
- Modern architecture portfolio style
- Large editorial typography
- Clean spacing
- Premium visual feel
- Use placeholder images for now

Important:
- Do not setup Supabase yet
- Do not build admin yet
- Use dummy content only
- Stop after finishing this step and wait for review
```

---

## Step 3 — Dummy Project System

Tujuan:

Membuat sistem project sementara menggunakan dummy data.

Yang dikerjakan:

- Data dummy project
- Projects listing page
- Project card component
- Project detail page by slug
- Gallery layout
- Project metadata
- Support image and video media content
- Allow embedded video support for future Vimeo/YouTube integration

Data dummy harus punya:

- title
- slug
- category
- year
- location
- description
- cover image
- gallery images
- media items
- embedded video URL
- software used
- project type

Prompt untuk Codex:

```txt
Continue from the existing project.

Step 3 task:
Create a dummy project showcase system.

Create:
- data/dummyProjects.js
- projects listing page
- project detail page using slug
- ProjectCard component
- ProjectGrid component
- ProjectDetail component

Each project should include:
- title
- slug
- category
- year
- location
- description
- cover image
- gallery images
- software used
- project type

Design requirements:
- Modern architecture portfolio layout
- Clean project grid
- Smooth detail page layout
- Responsive design

Important:
- Use dummy data only
- Do not setup Supabase yet
- Stop after finishing this step and wait for review
```

---

## Step 4 — Animation and Interaction Polish

Tujuan:

Menambahkan animasi halus agar website terasa modern.

Yang dikerjakan:

- Install / setup Framer Motion
- Fade in sections
- Smooth hover project cards
- Navbar scroll behavior
- Subtle image animation
- Mobile menu animation

Animasi harus:

- Halus
- Tidak berlebihan
- Tidak mengganggu performa
- Cocok untuk portfolio arsitektur

Prompt untuk Codex:

```txt
Continue from the existing project.

Step 4 task:
Add smooth animations and interactions.

Use Framer Motion.

Create / improve:
- Section fade-in animations
- Project card hover animations
- Floating navbar scroll behavior
- Mobile menu animation
- Subtle image reveal animation

Animation direction:
- Smooth
- Minimal
- Premium
- Not excessive
- Performance-friendly

Important:
- Do not setup Supabase yet
- Do not build admin yet
- Stop after finishing this step and wait for review
```

---

## Step 5 — Supabase Database Integration

Tujuan:

Menghubungkan frontend dengan Supabase untuk mengambil data project.

Yang dikerjakan:

- Setup Supabase client
- Buat lib/supabase.js
- Buat lib/projects.js
- Fetch project dari Supabase
- Replace dummy data secara bertahap
- Loading state
- Error state
- Empty state

Environment variables:

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Jangan pernah hardcode key di file code.

Prompt untuk Codex:

```txt
Continue from the existing project.

Step 5 task:
Integrate Supabase for project data.

Requirements:
- Use environment variables:
  NEXT_PUBLIC_SUPABASE_URL
  NEXT_PUBLIC_SUPABASE_ANON_KEY
- Do not hardcode keys
- Create lib/supabase.js
- Create lib/projects.js
- Fetch projects from Supabase
- Replace dummy project data where appropriate
- Add loading state
- Add error state
- Add empty state

Important:
- Do not use service role key
- Do not build admin dashboard yet
- Keep dummy fallback if needed
- Stop after finishing this step and wait for review
```

---

## Step 6 — Admin Authentication

Tujuan:

Membuat login admin agar hanya admin yang bisa mengelola konten.

Yang dikerjakan:

- Route /admin
- Admin login page
- Supabase Auth login
- Protected admin route
- Logout function
- Basic admin dashboard shell

Belum dikerjakan:

- Create project form
- Edit project
- Upload image

Prompt untuk Codex:

```txt
Continue from the existing project.

Step 6 task:
Create admin authentication.

Requirements:
- Create /admin route
- Create admin login page
- Use Supabase Auth
- Protect admin dashboard route
- Add logout function
- Create basic admin dashboard shell

Important:
- Public website must remain accessible without login
- Only admin area requires login
- Do not create project upload form yet
- Stop after finishing this step and wait for review
```

---

## Step 7 — Admin Project Management

Tujuan:

Membuat admin bisa menambah, mengedit, dan menghapus project.

Yang dikerjakan:

- Create project form
- Edit project form
- Delete project
- Form validation basic
- Slug generation
- Connect form ke Supabase database

Prompt untuk Codex:

```txt
Continue from the existing project.

Step 7 task:
Create admin project management.

Requirements:
- Create project form
- Edit project form
- Delete project function
- Basic form validation
- Generate slug from project title
- Save project data to Supabase
- Update project data in Supabase
- Delete project data from Supabase

Project fields:
- title
- slug
- category
- year
- location
- description
- concept
- software_used
- project_type

Important:
- Admin only
- Public visitor must not access admin features
- Do not setup image upload yet
- Stop after finishing this step and wait for review
```
---

## 7.5 Additional Codex Rules

### Code Stability

- Avoid unnecessary refactors or redesigns of previously completed steps unless explicitly requested by the user.
- Keep previously approved layouts and structures stable unless revisions are requested.
- Keep visual consistency across all pages and sections.
- Do not modify completed features unless required for compatibility or requested by the user.
- Avoid changing folder structure without strong technical reason.

### Dependencies

- Do not add unnecessary dependencies or frameworks.
- Keep dependencies minimal, maintainable, and purposeful.
- Avoid dependency bloat for small features.
- Prefer built-in Next.js or React solutions where appropriate.
- Explain why a new dependency is needed before adding major packages.

### Component Architecture

- Prefer composition over large monolithic components.
- Avoid oversized files with too many responsibilities.
- Keep components modular, reusable, and easy to maintain.
- Keep component naming consistent across the project.
- Keep components focused on a single responsibility whenever possible.

Good example:

```txt
ProjectCard.jsx
ProjectGrid.jsx
ProjectDetail.jsx
Navbar.jsx
Hero.jsx
```

Avoid inconsistent naming such as:

```txt
PortfolioCard.jsx
WorkCard.jsx
ArchitectureItem.jsx
```

unless there is a clear architectural reason.

### File Organization

- Keep folder structure organized and scalable.
- Group related components together logically.
- Avoid placing unrelated logic inside page files.
- Separate UI components, utility functions, and data logic properly.
- Avoid unnecessary nesting complexity.

### Images and Performance

- Use Next.js Image component where appropriate for optimization.
- Keep image handling scalable and performance-friendly.
- Avoid unnecessarily heavy animations or effects.
- Optimize layouts for smooth scrolling and responsive rendering.
- Avoid loading oversized images unnecessarily.

### Placeholder Content

- Use architecture-related placeholder content instead of excessive lorem ipsum text.
- Placeholder projects and descriptions should feel realistic and relevant to architecture portfolios.
- Use meaningful temporary project names, locations, and categories.
- Avoid generic filler text where possible.

### Animation Guidelines

- Animations should feel smooth, premium, and subtle.
- Avoid excessive motion or distracting effects.
- Prioritize elegant transitions over flashy interactions.
- Maintain performance-friendly animations.
- Keep animation style visually consistent throughout the project.

### Workflow Rules

- Only work on one approved step at a time.
- Do not continue automatically after completing a step.
- Always stop and wait for explicit user confirmation before moving to the next step.
- After each completed step, provide:
  - summary of completed work
  - list of changed files
  - how to test
  - important notes or limitations
  - request for user review
- Never assume approval automatically.

### Maintainability

- Prioritize clean, readable, scalable code.
- Avoid overengineering.
- Prefer simple and maintainable solutions over overly complex abstractions.
- Keep code easy to edit for future portfolio expansion.
- Write code that is understandable for future manual editing.

### Responsive Design

- All layouts must be responsive.
- Design should work properly on:
  - desktop
  - tablet
  - mobile
- Avoid layouts that break on smaller screens.
- Keep mobile navigation clean and accessible.

### UI Consistency

- Maintain a seamless and modern architecture portfolio aesthetic throughout the project.
- Avoid sudden visual style changes between steps.
- Keep spacing, typography, colors, and interaction styles visually cohesive.
- Maintain consistent visual hierarchy across pages.
- Keep navbar, buttons, cards, and sections stylistically unified.

### Design Direction Consistency

- Keep the visual direction aligned with:
  - modern architecture portfolio
  - editorial minimalism
  - premium presentation
  - clean whitespace
  - visual-heavy layout
- Avoid unrelated visual styles such as:
  - gaming UI
  - cyberpunk neon
  - excessive glassmorphism
  - cartoonish layouts
  - overdecorated interfaces

unless explicitly requested by the user.

### Supabase and Security

- Never hardcode API keys.
- Always use environment variables for credentials.
- Never expose service role keys to frontend/client code.
- Keep Supabase integration scalable and secure.
- Respect RLS-friendly architecture.

### GitHub and Repository Safety

- Avoid modifying unrelated files.
- Keep commits focused on the current step/task.
- Avoid destructive repository-wide refactors without approval.
- Preserve repository cleanliness and maintainability.

### Final Rule

- The project should always prioritize:
  - clean architecture
  - maintainability
  - scalability
  - visual consistency
  - smooth user experience
  - realistic architecture portfolio presentation
  
---

## Step 8 — Supabase Storage Image Upload

Tujuan:

Membuat admin bisa upload cover image dan gallery image.

Yang dikerjakan:

- Upload cover image
- Upload gallery images
- Save image URLs to database
- Preview uploaded images
- Delete / replace image if needed
- Basic file validation

Prompt untuk Codex:

```txt
Continue from the existing project.

Step 8 task:
Add Supabase Storage image upload for projects.

Requirements:
- Upload cover image
- Upload gallery images
- Save image URLs to Supabase database
- Preview uploaded images in admin form
- Allow replacing image
- Add basic file validation
- Keep public project pages using uploaded images

Important:
- Use Supabase Storage
- Do not hardcode storage URLs if avoidable
- Keep admin-only access for upload features
- Stop after finishing this step and wait for review
```

---

## Step 9 — Final UI Polish

Tujuan:

Memoles tampilan agar siap menjadi portfolio publik.

Yang dikerjakan:

- Perbaikan spacing
- Responsive refinement
- Navbar polish
- Mobile menu polish
- Project page polish
- Detail page polish
- Empty states
- Loading skeleton
- Error UI
- Typography refinement

Prompt untuk Codex:

```txt
Continue from the existing project.

Step 9 task:
Final UI polish.

Improve:
- Spacing
- Typography
- Responsive layout
- Mobile navbar
- Project grid
- Project detail page
- Loading states
- Empty states
- Error states
- Visual consistency

Design direction:
- Modern architecture portfolio
- Premium
- Minimal
- Seamless
- Clean editorial feel

Important:
- Do not change core structure unless necessary
- Keep code maintainable
- Stop after finishing this step and wait for review
```

---

## Step 10 — SEO, Performance, and Deployment Prep

Tujuan:

Menyiapkan website untuk deploy dan public release.

Yang dikerjakan:

- Metadata SEO
- Open Graph image placeholder
- Page title dan description
- Image optimization
- Accessibility check
- Vercel readiness
- Environment variable documentation
- README update

Prompt untuk Codex:

```txt
Continue from the existing project.

Step 10 task:
Prepare the website for deployment.

Requirements:
- Add SEO metadata
- Add proper page titles and descriptions
- Add Open Graph metadata
- Improve accessibility where needed
- Check image optimization
- Make sure the project is Vercel-ready
- Update README with setup instructions
- Document required environment variables

Important:
- Do not expose secret keys
- Do not use Supabase service role key
- Stop after finishing this step and wait for review
```

---

# 9. Supabase Notes

Gunakan environment variables:

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Jangan gunakan di frontend:

```txt
SUPABASE_SERVICE_ROLE_KEY
```

Service role key bersifat rahasia dan tidak boleh masuk GitHub.

Jika butuh akses admin khusus, gunakan RLS policy Supabase dengan benar.

---

# 10. Database Table Draft

Table name:

```txt
projects
```

Kolom awal:

```txt
id uuid primary key
title text
slug text unique
category text
year text
location text
description text
concept text
cover_image text
gallery_images text[]
software_used text[]
project_type text
created_at timestamp
updated_at timestamp
```

Catatan:

- Struktur database bisa disesuaikan saat implementasi
- Pastikan public bisa read project
- Hanya authenticated admin yang bisa insert/update/delete

---

# 11. Definition of Done

Project dianggap selesai jika:

- Public website bisa diakses tanpa login
- Home page tampil modern dan seamless
- Project listing berjalan
- Project detail berjalan
- Admin bisa login
- Admin bisa tambah project
- Admin bisa edit project
- Admin bisa hapus project
- Admin bisa upload gambar
- Data project tampil dari Supabase
- Website responsive
- Website siap deploy ke Vercel

---

# 12. Final Instruction for Codex

Always work step by step.

Only complete one step per session.

After finishing a step, stop and wait for user review.

Do not continue to the next step without confirmation.

Prioritize clean, maintainable, scalable code.

Keep the design minimal, modern, seamless, and suitable for an architecture portfolio.
