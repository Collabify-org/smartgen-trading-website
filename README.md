# Smart Generation Trading – React Site

React version of [smartgentrading.com](https://smartgentrading.com/) with a modern UI and color scheme inspired by industrial/power solutions layouts (blue, navy, light grey, yellow accents).

## ⚠️ FIRST-TIME SETUP REQUIRED

**Before running the app, setup images using ONE of these methods:**

### Option 1: PowerShell (Windows - Recommended)
```powershell
.\setup-images.ps1
```

### Option 2: Node.js (Any OS)
```bash
node setup-images.js
```

📖 See [IMAGE_SETUP_README.md](./IMAGE_SETUP_README.md) for detailed instructions and manual setup.

---

## Stack

- **React 18** + **Vite** + **React Router**
- **Tailwind CSS** (primary `#0047AB`, navy `#1a2a4b`, accent `#FFC107`)
- Mobile-responsive layout

## Routes

| Path | Page |
|------|------|
| `/` | Home (Hero, Products, About, Services, Advantage, CTA) |
| `/blog` | Blog |
| `/contact` | Contact |
| `/service` | Services |
| `/product/:id` | Product category (id 1–15) |
| `/buy-online` | Buy Online (Hostinger Store API: collections + products) |

Products dropdown links to `/product/1` … `/product/15` (Thermal & Acoustic Insulations, Duct Accessories, Vibration Isolators, Hangers & Supports, Copper & Fittings, VAV and Dampers, ESP and Ecology, Identification Labels and tags, Silent Pipes And Fittings, Decoduct Conduits and Fittings, Plumping, Water Proofing Chemicals and Flooring Adhesives, Water Treatment Chemicals, Miscellaneous Products, Air Conditioners).

## Setup

1. **Install dependencies**
   ```bash
   cd smartgen-react
   npm install
   ```

2. **Add images (required for logo, hero, and page images)**
   - **Logo and hero:** Copy into `smartgen-react/public/`:
     - `smartgen-logo-dOqygyGy7QHB2GZQ.jpeg`
     - `generated-m7VwQ5GMgyc3b7gp.png`
   - **Page images (product_1 … product_15, home, service, blog, contact):** Copy the entire `_files` folders from the project root into `smartgen-react/public/` so that:
     - `product_1_files/` … `product_15_files/` → `smartgen-react/public/product_1_files/` … `smartgen-react/public/product_15_files/`
     - `home_files/` → `smartgen-react/public/home_files/`
     - `service_files/` → `smartgen-react/public/service_files/`
     - `blog_files/` → `smartgen-react/public/blog_files/`
     - `contact_files/` → `smartgen-react/public/contact_files/`
   - The app uses `<img src="/product_1_files/xxx.jpg" />`-style paths; these folders must live under `public/` for those URLs to work.

3. **Run dev server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Structure

- `src/App.jsx` – Router (BrowserRouter, Routes), layout (TopBar, Header, Footer, WhatsApp), route elements
- `src/pages/` – HomePage, BlogPage, ContactPage, ServicePage, ProductPage, BuyOnlinePage
- `src/components/` – TopBar, Header, Hero, Products, About, Services, Advantage, CTA, EmergencyContact, Footer, WhatsAppFloat
- `public/` – Static assets (favicon, images)
- `tailwind.config.js` – Custom colors: `primary`, `navy`, `gray-bg`, `accent`

**Buy Online** (`/buy-online`) fetches categories from `https://api-ecommerce.hostinger.com/store/store_01JCEM1TPQ6PPMFKGVEACB57Z8/collections` and products from `/products?offset=&limit=6&to_date=`.

## Content

Content matches the live site: bulk inquiry CTA, product categories (Thermal & Acoustic Insulations, Duct Accessories, Vibration Isolators, etc.), About/Mission/Values, Schedule a Service form, and contact **sales@smartgentrading.com**.
