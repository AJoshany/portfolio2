import coupleGrowthImage from '~/assets/img/coupleGrowth.webp'
import flowDeskImage from '~/assets/img/flowdesk.webp'
import portfolioImage from '~/assets/img/portfolio.webp'
import partBankImage from '~/assets/img/part-bank.webp'
import realEstateImage from '~/assets/img/real-estate.webp'
import financeDashboardImage from '~/assets/img/finance-dashboard.webp'
import bookingImage from '~/assets/img/booking.webp'
import dashboardImage from '~/assets/img/dashboard.webp'

export const projects = [
  {
    id: 'coupleGrowth',
    title: 'CoupleGrowth',
    description:
      'A private web app for couples to track shared goals, plan dates, and keep a joint journal. Built with Next.js and TypeScript; state kept in typed React context with localStorage persistence, no backend or accounts required.',
    image: coupleGrowthImage,

    info: [
      {
        label: 'Frontend',
        value: 'Next.js, React, TypeScript',
      },
      {
        label: 'Styling',
        value: 'CSS / Tailwind',
      },
      {
        label: 'Tools',
        value: 'pnpm, Git',
      },
      {
        label: 'Live Demo',
        url: 'https://couplegrowth.freebuff.app/',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/AJoshany/couple-growth-hub',
      },
    ],
  },

  {
    id: 'flowdesk',
    title: 'Flowdesk',
    description:
      'A CRM dashboard for small teams: customer records, deal pipelines, and role-based access control. Next.js with TypeScript, route-level code splitting for the dashboard, and Tailwind for the UI layer.',
    image: flowDeskImage,

    info: [
      {
        label: 'Frontend',
        value: 'Next.js, React, TypeScript',
      },
      {
        label: 'Styling',
        value: 'CSS / Tailwind',
      },
      {
        label: 'Tools',
        value: 'pnpm, Git',
      },
      {
        label: 'Live Demo',
        url: 'https://flowdesk.freebuff.app/',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/AJoshany/flowdesk',
      },
    ],
  },

  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'This website. Nuxt 4 with server-side rendering, hand-written SCSS and Tailwind, and a contact form backed by a server route. Built to score well on Core Web Vitals — no UI framework, no animation library.',
    image: portfolioImage,

    info: [
      {
        label: 'Frontend',
        value: 'Nuxt 4, Vue 3, Vite',
      },
      {
        label: 'Styling',
        value: 'CSS / SCSS / Tailwind',
      },
      {
        label: 'Tools',
        value: 'npm, Git',
      },
      {
        label: 'Live Demo',
        url: 'https://joshany.ir',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/AJoshany/portfolio2',
      },
    ],
  },

  {
    id: 'part-bank',
    title: 'Part Bank',
    description:
      'A two-person project simulating core online-banking flows: account creation, transfers, and transaction history. Vue 3 with Pinia for state, an Express API standing in for a real backend, and SCSS for styling.',
    image: partBankImage,

    info: [
      {
        label: 'Frontend',
        value: 'Vue 3, Pinia, Vue Router, Vite',
      },
      {
        label: 'Backend',
        value: 'Node.js, Express (simulated API)',
      },
      {
        label: 'Styling',
        value: 'CSS / SCSS',
      },
      {
        label: 'Tools',
        value: 'npm, Git',
      },
    ],
  },

  {
    id: 'real-estate',
    title: 'Real Estate',
    description:
      'A property-listings app built as a two-person team. Vue 3 and Pinia on the front; Supabase for data, auth, and per-user bookmarks and reserved listings.',
    image: realEstateImage,

    info: [
      {
        label: 'Frontend',
        value: 'Vue 3, Pinia, Vue Router, Vite',
      },
      {
        label: 'Backend',
        value: 'Supabase (BaaS)',
      },
      {
        label: 'Styling',
        value: 'CSS / SCSS',
      },
      {
        label: 'Tools',
        value: 'npm, Git',
      },
      {
        label: 'Live Demo',
        url: 'https://real-state11.vercel.app/',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/AJoshany/Real-state',
      },
    ],
  },

  {
    id: 'finance-dashboard',
    title: 'Finance Dashboard',
    description:
      'A personal-finance dashboard for recording transactions and seeing where money goes: income vs. expenses summarized with interactive charts. Vue 3 with Pinia, Supabase for storage.',
    image: financeDashboardImage,

    info: [
      {
        label: 'Frontend',
        value: 'Vue 3, Pinia, Vue Router, Vite',
      },
      {
        label: 'Backend',
        value: 'Supabase (BaaS)',
      },
      {
        label: 'Styling',
        value: 'CSS / SCSS',
      },
      {
        label: 'Tools',
        value: 'npm, Git',
      },
      {
        label: 'Live Demo',
        url: 'https://finance-dashboard-joshany.vercel.app/',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/AJoshany/FinanceDashboard',
      },
    ],
  },

  {
    id: 'booking',
    title: 'Booking App',
    description:
      'An appointment-booking site for doctors’ offices: patients pick a doctor, date, and time slot, then manage upcoming appointments. Vue 3 with Pinia for booking state.',
    image: bookingImage,

    info: [
      {
        label: 'Frontend',
        value: 'Vue 3, Pinia, Vue Router, Vite',
      },
      {
        label: 'Styling',
        value: 'CSS',
      },
      {
        label: 'Tools',
        value: 'npm, Git',
      },
      {
        label: 'Live Demo',
        url: 'https://booking-app-joshany.vercel.app/',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/AJoshany/Booking-App',
      },
    ],
  },

  {
    id: 'dashboard',
    title: 'Dashboard Admin',
    description:
      'An admin dashboard with interactive charts, live stats, user management, and configurable widgets. React with React Router and Recharts, styled with MUI.',
    image: dashboardImage,

    info: [
      {
        label: 'Frontend',
        value: 'React, React Router, Recharts, Vite',
      },
      {
        label: 'Styling',
        value: 'CSS / MUI',
      },
      {
        label: 'Tools',
        value: 'npm, Git',
      },
      {
        label: 'Live Demo',
        url: 'https://dashboard-admin-phi-rose.vercel.app/',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/AJoshany/Dashboard-Admin',
      },
    ],
  },
]
