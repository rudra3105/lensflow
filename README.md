# 📷 LensFlow — Photography Business PWA

> Premium Photography Business Management App  
> **Calendar & Booking Management + Rojmed (Daily Ledger)**  
> Powered by [Webrise Global](https://www.webriseglobal.com)

---

## 🚀 Features

### Module 1: Smart Calendar & Booking
- Monthly / Weekly / Agenda calendar views
- Add, Edit, Delete events with full details
- Color-coded by event type (Wedding, Pre Wedding, Birthday, Corporate, Outdoor Shoot, Other)
- Client info, timing, location, advance/remaining amounts
- Event status tracking (Upcoming / Completed / Cancelled)
- Reminder options (1 day before / Same day morning / 1 hour before)
- Push notification support
- Searchable event history

### Module 2: Rojmed (Daily Ledger)
- Daily income & expense tracking
- Income categories: Shoot Payment, Advance, Album Payment, Other
- Expense categories: Travel, Equipment, Food, Staff Payment, Editing, Marketing, Other
- Payment methods: Cash, UPI, Bank Transfer
- Day-by-day navigation
- Daily balance calculation
- Filter by income/expense
- Search entries
- Edit & delete entries

### Dashboard
- Today's events at a glance
- Today's income & expense stats
- Upcoming events
- Pending amounts
- Recent ledger entries
- Quick action shortcuts

### Reports & Analytics
- Monthly income vs expense bar chart
- Expense category breakdown (doughnut chart)
- Income source breakdown (doughnut chart)
- Monthly summary stats
- 6-month financial overview
- CSV data export

### PWA Features
- Installable on Android, iPhone, Desktop
- Offline support via Service Worker
- Background sync capability
- Push notification support
- App shortcut actions
- Splash screen
- Native app feel

---

## 🗂 Project Structure

```
photography-pwa/
├── index.html          # Main PWA app (all-in-one)
├── sw.js               # Service Worker (offline + push)
├── manifest.json       # PWA Manifest
├── README.md           # This file
└── icons/              # App icons (generate with realfavicongenerator.net)
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png
    ├── icon-384.png
    └── icon-512.png
```

---

## 🛠 Setup & Deployment

### Local Development
```bash
# Serve locally (required for PWA features)
npx serve .
# or
python3 -m http.server 8080
# or use VS Code Live Server
```

> ⚠️ PWA features (service worker, install prompt) require HTTPS or localhost.

### Deploy Options

#### Option A: Netlify (Recommended — Free)
1. Drag & drop the `photography-pwa/` folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Your app is live with HTTPS instantly!

#### Option B: Vercel
```bash
npm i -g vercel
vercel --prod
```

#### Option C: Firebase Hosting
```bash
npm i -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

#### Option D: GitHub Pages
1. Push to a GitHub repo
2. Enable Pages in Settings → Pages → Branch: main / root

---

## 📱 Mobile Install Instructions

### Android (Chrome)
1. Open the app URL in Chrome
2. Tap ⋮ menu → "Add to Home screen"
3. Or wait for the install banner

### iPhone (Safari)
1. Open in Safari
2. Tap Share icon → "Add to Home Screen"

### Desktop (Chrome/Edge)
1. Look for install icon in address bar
2. Click "Install LensFlow"

---

## 🔧 Customization

### Branding
Edit in `index.html`:
```html
<!-- App Name -->
<title>LensFlow — Photography Studio Manager</title>

<!-- Logo in header -->
<span class="header-logo">📷 LensFlow</span>

<!-- Login page brand -->
<h1>LensFlow</h1>
```

### Currency
Search for `₹` and replace with your currency symbol.

### Color Theme
Edit CSS variables in `:root`:
```css
:root {
  --gold: #d4a853;        /* Primary accent */
  --gold-light: #e8c47a;  /* Hover state */
  --gold-dim: #a07828;    /* Active/pressed */
  --bg: #0a0a0f;          /* Main background */
}
```

### Demo Credentials
- Email: `demo@lensflow.app`
- Password: `demo123`

To change: edit the `doLogin()` function or connect a real auth backend.

---

## 🔌 Backend Integration (Optional)

The app currently uses `localStorage` for data persistence. To connect a real backend:

### Recommended Stack
- **Backend**: Node.js + Express or FastAPI
- **Database**: PostgreSQL or MongoDB
- **Auth**: JWT tokens
- **Push**: Firebase Cloud Messaging (FCM)
- **Storage**: AWS S3 / Cloudinary

### API Endpoints to Build
```
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/events
POST   /api/events
PUT    /api/events/:id
DELETE /api/events/:id
GET    /api/entries
POST   /api/entries
PUT    /api/entries/:id
DELETE /api/entries/:id
GET    /api/reports/monthly?month=2026-05
GET    /api/reports/summary
POST   /api/notifications/subscribe
```

### Replace localStorage calls
Find `save()` and `load()` functions in `index.html` and replace with `fetch()` API calls.

---

## 📊 Data Schema

### Event
```json
{
  "id": "e_uuid",
  "client": "Priya & Arjun",
  "mobile": "9876543210",
  "type": "Wedding",
  "date": "2026-05-16",
  "start": "09:00",
  "end": "22:00",
  "location": "Royal Banquet Hall, Mumbai",
  "advance": 50000,
  "remaining": 75000,
  "status": "upcoming",
  "reminder": "1day",
  "notes": "Candid + Traditional photography",
  "color": "#ec4899"
}
```

### Ledger Entry
```json
{
  "id": "r_uuid",
  "type": "income",
  "amount": 50000,
  "category": "Advance",
  "payment": "UPI",
  "date": "2026-05-14",
  "notes": "Wedding advance received"
}
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--gold` | `#d4a853` | Primary CTA, active states |
| `--bg` | `#0a0a0f` | Main background |
| `--bg2` | `#111118` | Card backgrounds |
| `--surface` | `#22222e` | Secondary surfaces |
| `--text` | `#f0f0f5` | Primary text |
| `--text2` | `#9898b0` | Secondary/muted text |
| `--green` | `#22c55e` | Income, success |
| `--red` | `#ef4444` | Expense, error |
| Font (heading) | Syne | Bold display font |
| Font (body) | DM Sans | Clean readable font |

---

## 📄 License
© 2026 LensFlow. All rights reserved.  
Powered by [Webrise Global](https://www.webriseglobal.com)
