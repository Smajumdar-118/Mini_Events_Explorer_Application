# 🎟️ Events Explorer — Next.js Mini App

A responsive and accessible event listing application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project was created for a developer assessment with a focus on **routing**, **data handling**, **dynamic pages**, and **UI responsiveness** — without using any UI frameworks.

---

## 🧠 Approach & Architecture

This project was built with performance, responsiveness, and static generation in mind. Here's a breakdown of the core approach:

### 🏠 Homepage
- Displays a list of mock events using a local TypeScript data file.
- Each event is rendered using a reusable `<EventCard />` component.
- A client-side dropdown filter is implemented to filter events by location.

### 🔍 Filter Functionality
- The `EventFilter` component provides a location filter using a native `<select>` input.
- It updates state locally and filters the events array without reloading.

### 📄 Event Detail Pages
- Dynamic routing using `[id].tsx` under `pages/events/`.
- Each event detail page is pre-generated at build time using:
  - `getStaticPaths` to define dynamic routes.
  - `getStaticProps` to fetch event data by ID.

### ⚙️ SEO & Accessibility
- Meta tags (`<title>`, `<meta name="description">`) added using `next/head`.
- Semantic HTML tags used: `<main>`, `<article>`, `<section>`.
- Keyboard-friendly UI and responsive design ensured with Tailwind.
- Icons and additional UI feedback are used from `react-icons` to enhance experience.

---

## 📂 Folder Structure

/events-explorer
│
├── components/
│ ├── EventCard.tsx
│ └── EventFilter.tsx
│
├── data/
│ └── events.ts
│
├── pages/
│ ├── events/
│ │ └── [id].tsx
│ ├── _app.tsx
│ └── index.tsx
│
├── public/
│ └── favicon.ico
│ └── screenshot-home.png
│ └── screenshot-detail.png
│
├── styles/
│ └── globals.css
│
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md ✅ (Paste the full version above)


---

📸 Screenshots

![image](https://github.com/user-attachments/assets/81c5487c-3351-4e35-aeec-116857c66adc)


![image](https://github.com/user-attachments/assets/73959d7f-3b9e-4eef-9ca9-1b924f124dad)



#### 🛠 How to Run This App

```md
## 🛠 How to Run This App

Follow these steps to run the project locally:

npm install
npm run dev

---

#### 🧠 Improvements (Given More Time)

```md
## 🧠 Improvements (Given More Time)

If additional time were available, the following improvements could be made:

- Integrate a backend or CMS for real data
- Add image gallery support with upload
- Integrate maps (Leaflet / Google Maps API)
- Implement user auth and RSVP system
- Improve test coverage (Jest, Testing Library)
- Add CI/CD and deploy to Vercel or Netlify

👉 [Live Site]([https://your-vercel-deployment-url.vercel.app](https://mini-events-explorer-application.vercel.app/))
