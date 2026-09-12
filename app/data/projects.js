import coupleGrowthImage from "~/assets/img/coupleGrowth.webp";
import flowDeskImage from "~/assets/img/flowdesk.webp";
import portfolioImage from "~/assets/img/portfolio.webp";
import partBankImage from "~/assets/img/part-bank.webp";
import realEstateImage from "~/assets/img/real-estate.webp";
import financeDashboardImage from "~/assets/img/finance-dashboard.webp";
import bookingImage from "~/assets/img/booking.webp";
import dashboardImage from "~/assets/img/dashboard.webp";

export const projects = [
  {
    id: "coupleGrowth",
    title: "CoupleGrowth",
    description:
      "A private space to track your goals, share your days, plan your dates and remember the moments that matter — for two people who are intentional about their relationship.",
    image: coupleGrowthImage,

    info: [
      {
        label: "Frontend",
        value: "Next, React, TypeScript",
      },
      {
        label: "Styling",
        value: "CSS / Tailwind",
      },
      {
        label: "Tools",
        value: "pnpm, Git",
      },
      {
        label: "Live Demo",
        url: "https://couplegrowth.freebuff.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/AJoshany/couple-growth-hub",
      },
    ],
  },

  {
    id: "flowdesk",
    title: "Flowdesk",
    description:
      " Full-Stack CRM Dashboard with Next.js, a CRM for small teams to manage customers, track deals, and collaborate with role-based access control.",
    image: flowDeskImage,

    info: [
      {
        label: "Frontend",
        value: "Next, React, TypeScript",
      },
      {
        label: "Styling",
        value: "CSS / Tailwind",
      },
      {
        label: "Tools",
        value: "pnpm, Git",
      },
      {
        label: "Live Demo",
        url: "https://flowdesk.freebuff.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/AJoshany/flowdesk",
      },
    ],
  },

  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "A personal portfolio website built with Nuxt.js, showcasing my projects, skills, and experience. It features a clean, responsive design and smooth navigation, designed to highlight my work effectively.",
    image: portfolioImage,

    info: [
      {
        label: "Frontend",
        value: "Nuxt, Vue 3, AOS, Vite",
      },
      {
        label: "Styling",
        value: "CSS / SCSS / Tailwind",
      },
      {
        label: "Tools",
        value: "npm, Git",
      },
      {
        label: "Live Demo",
        url: "https://joshany.ir",
      },
      {
        label: "GitHub",
        url: "https://github.com/AJoshany/portfolio2",
      },
    ],
  },

  {
    id: "part-bank",
    title: "Part Bank",
    description:
      "Part Bank is a mini banking application that simulates some of the core features of a real-world online bank. It is a simplified project designed to demonstrate essential banking operations in a web environment. The project was developed collaboratively as a two-person team.",
    image: partBankImage,

    info: [
      {
        label: "Frontend",
        value: "Vue 3, Pinia, Vue Router, Vite",
      },
      {
        label: "Backend",
        value: "Node.js, Express (for simulated API)",
      },
      {
        label: "Styling",
        value: "CSS / SCSS",
      },
      {
        label: "Tools",
        value: "npm, Git",
      },
    ],
  },

  {
    id: "real-estate",
    title: "Real Estate",
    description:
      "This is a practice project for real estate listings, connected to Supabase, where each user's bookmarks and reserved listings are stored in the database. The project was developed collaboratively as a two-person team.",
    image: realEstateImage,

    info: [
      {
        label: "Frontend",
        value: "Vue 3, Pinia, Vue Router, Vite",
      },
      {
        label: "Backend",
        value: "Supabase (BaaS)",
      },
      {
        label: "Styling",
        value: "CSS / SCSS",
      },
      {
        label: "Tools",
        value: "npm, Git",
      },
      {
        label: "Live Demo",
        url: "https://real-state11.vercel.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/AJoshany/Real-state",
      },
    ],
  },

  {
    id: "finance-dashboard",
    title: "Finance Dashboard",
    description:
      "The Financial Dashboard Project allows users to easily record and manage their transactions. It automatically analyzes income and expenses, providing clear insights through interactive charts and summaries that help users understand their spending habits and make smarter financial decisions.",
    image: financeDashboardImage,

    info: [
      {
        label: "Frontend",
        value: "Vue 3, Pinia, Vue Router, Vite",
      },
      {
        label: "Backend",
        value: "Supabase (BaaS)",
      },
      {
        label: "Styling",
        value: "CSS / SCSS",
      },
      {
        label: "Tools",
        value: "npm, Git",
      },
      {
        label: "Live Demo",
        url: "https://finance-dashboard-joshany.vercel.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/AJoshany/FinanceDashboard",
      },
    ],
  },

  {
    id: "booking",
    title: "Booking App",
    description:
      "A simple appointment booking website for doctors, allowing patients to schedule and manage their appointments easily. Built with a focus on clean design and user-friendly navigation.",
    image: bookingImage,

    info: [
      {
        label: "Frontend",
        value: "Vue 3, Pinia, Vue Router, Vite",
      },
      {
        label: "Styling",
        value: "CSS",
      },
      {
        label: "Tools",
        value: "npm, Git",
      },
      {
        label: "Live Demo",
        url: "https://booking-app-joshany.vercel.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/AJoshany/Booking-App",
      },
    ],
  },

  {
    id: "dashboard",
    title: "Dashboard Admin",
    description:
      "A modern and responsive admin dashboard designed for efficient management and monitoring of data. Features include interactive charts, real-time statistics, user management, and customizable widgets to enhance productivity and provide clear insights into business operations. Built with a focus on usability, scalability, and clean design.",
    image: dashboardImage,

    info: [
      {
        label: "Frontend",
        value: "React, React Router, Rechart, Vite",
      },
      {
        label: "Styling",
        value: "CSS / MUI",
      },
      {
        label: "Tools",
        value: "npm, Git",
      },
      {
        label: "Live Demo",
        url: "https://dashboard-admin-phi-rose.vercel.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/AJoshany/Dashboard-Admin",
      },
    ],
  },
];
