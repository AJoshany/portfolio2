<template>
  <section class="pt-[3rem] text-[1.7rem] flex flex-col gap-[5rem]">
    <h2 class="text-[5.2rem] font-[600] text-center">Projects</h2>
    <div class="flex flex-col gap-[10rem] md:gap-[0]">
      <!-- Portfolio -->

      <div
        class="project flex flex-col-reverse md:flex-row md:gap-[4rem]"
        id="portfolio"
        data-aos="fade-right"
      >
        <div class="content flex flex-col gap-[2rem] pt-[1rem] md:pt-[3rem]">
          <h3 class="text-[3rem] font-[600]">Portfolio</h3>
          <p>
            A personal portfolio website built with Nuxt.js, showcasing my
            projects, skills, and experience. It features a clean, responsive
            design and smooth navigation, designed to highlight my work
            effectively.
          </p>
          <div class="flex flex-col gap-[1rem] pt-[3rem]">
            <div class="info">
              <p>- Frontend:</p>
              <p>Nuxt, Vue 3, AOS, Vite</p>
            </div>
            <div class="info">
              <p>- Styling:</p>
              <p>CSS / SCSS / Tailwind</p>
            </div>
            <div class="info">
              <p>- Tools:</p>
              <p>npm, Git</p>
            </div>
            <div class="info">
              <p>- Live Demo:</p>
              <nuxt-link
                to="https://joshany.ir"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[--color-orange-500]"
                >view</nuxt-link
              >
            </div>
            <div class="info">
              <p>- GitHub:</p>
              <nuxt-link
                to="https://github.com/AJoshany/portfolio2"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[--color-orange-500]"
                >view</nuxt-link
              >
            </div>
          </div>
        </div>
        <img
          src="~/assets/img/portfolio.webp"
          alt="part-bank"
          class="max-w-[100%] md:max-w-[50%] rounded-[--radius-lg]"
        />
      </div>

      <!-- Part Bank -->
      <div
        class="project flex flex-col md:flex-row md:gap-[4rem]"
        id="part-bank"
        data-aos="fade-left"
      >
        <img
          src="~/assets/img/part-bank.webp"
          alt="part-bank"
          class="max-w-[100%] md:max-w-[50%] rounded-[--radius-lg]"
        />
        <div class="content flex flex-col gap-[2rem] pt-[1rem] md:pt-[4rem]">
          <h3 class="text-[3rem] font-[600]">Part Bank</h3>
          <p>
            Part Bank is a mini banking application that simulates some of the
            core features of a real-world online bank. It is a simplified
            project designed to demonstrate essential banking operations in a
            web environment.The project was developed collaboratively as a
            two-person team.
          </p>
          <div class="flex flex-col gap-[1rem] pt-[3rem]">
            <div class="info">
              <p>- Frontend:</p>
              <p>Vue 3, Pinia, Vue Router, Vite</p>
            </div>
            <div class="info">
              <p>- Backend:</p>
              <p>Node.js, Express (for simulated API)</p>
            </div>
            <div class="info">
              <p>- Styling:</p>
              <p>CSS / SCSS</p>
            </div>
            <div class="info">
              <p>- Tools:</p>
              <p>npm, Git</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Real Estate -->
      <div
        class="project flex flex-col-reverse md:flex-row md:gap-[4rem]"
        id="real-estate"
        data-aos="fade-right"
      >
        <div class="content flex flex-col gap-[2rem] pt-[1rem] md:pt-[4rem]">
          <h3 class="text-[3rem] font-[600]">Real Estate</h3>
          <p>
            This is a practice project for real estate listings, connected to
            *Supabase*, where each user's bookmarks and reserved listings are
            stored in the database. The project was developed collaboratively as
            a two-person team.
          </p>
          <div class="flex flex-col gap-[1rem] pt-[3rem]">
            <div class="info">
              <p>- Frontend:</p>
              <p>Vue 3, Pinia, Vue Router, Vite</p>
            </div>
            <div class="info">
              <p>- Backend:</p>
              <p>Supabase(BaaS)</p>
            </div>
            <div class="info">
              <p>- Styling:</p>
              <p>CSS / SCSS</p>
            </div>
            <div class="info">
              <p>- Tools:</p>
              <p>npm, Git</p>
            </div>
            <div class="info">
              <p>- Live Demo:</p>
              <nuxt-link
                to="https://real-state11.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[--color-orange-500]"
                >view</nuxt-link
              >
            </div>
            <div class="info">
              <p>- GitHub:</p>
              <nuxt-link
                to="https://github.com/AJoshany/Real-state"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[--color-orange-500]"
                >view</nuxt-link
              >
            </div>
          </div>
        </div>
        <img
          src="~/assets/img/real-estate.webp"
          alt="part-bank"
          class="max-w-[100%] md:max-w-[50%] rounded-[--radius-lg]"
        />
      </div>

      <!-- Finance Dashboard -->

      <div
        class="project flex flex-col md:flex-row md:gap-[4rem]"
        id="finance-dashborad"
        data-aos="fade-left"
      >
        <img
          src="~/assets/img/finance-dashboard.webp"
          alt="part-bank"
          class="max-w-[100%] md:max-w-[50%] rounded-[--radius-lg]"
        />
        <div class="content flex flex-col gap-[2rem] pt-[1rem] md:pt-[4rem]">
          <h3 class="text-[3rem] font-[600]">Finance Dashboard</h3>
          <p>
            The Financial Dashboard Project allows users to easily record and
            manage their transactions. It automatically analyzes income and
            expenses, providing clear insights through interactive charts and
            summaries that help users understand their spending habits and make
            smarter financial decisions.
          </p>
          <div class="flex flex-col gap-[1rem] pt-[3rem]">
            <div class="info">
              <p>- Frontend:</p>
              <p>Vue 3, Pinia, Vue Router, Vite</p>
            </div>
            <div class="info">
              <p>- Backend:</p>
              <p>Supabase(BaaS)</p>
            </div>
            <div class="info">
              <p>- Styling:</p>
              <p>CSS / SCSS</p>
            </div>
            <div class="info">
              <p>- Tools:</p>
              <p>npm, Git</p>
            </div>

            <div class="info">
              <p>- Live Demo:</p>
              <nuxt-link
                to="https://finance-dashboard-joshany.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[--color-orange-500]"
                >view</nuxt-link
              >
            </div>
            <div class="info">
              <p>- GitHub:</p>
              <nuxt-link
                to="https://github.com/AJoshany/FinanceDashboard"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[--color-orange-500]"
                >view</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Booking App -->

      <div
        class="project flex flex-col-reverse md:flex-row md:gap-[4rem]"
        id="booking"
        data-aos="fade-right"
      >
        <div class="content flex flex-col gap-[2rem] pt-[1rem] md:pt-[3rem]">
          <h3 class="text-[3rem] font-[600]">Booking App</h3>
          <p>
            A simple appointment booking website for doctors, allowing patients
            to schedule and manage their appointments easily. Built with a focus
            on clean design and user-friendly navigation.
          </p>
          <div class="flex flex-col gap-[1rem] pt-[3rem]">
            <div class="info">
              <p>- Frontend:</p>
              <p>Vue 3, Pinia, Vue Router, Vite</p>
            </div>
            <div class="info">
              <p>- Styling:</p>
              <p>CSS</p>
            </div>
            <div class="info">
              <p>- Tools:</p>
              <p>npm, Git</p>
            </div>
            <div class="info">
              <p>- Live Demo:</p>
              <nuxt-link
                to="https://booking-app-joshany.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[--color-orange-500]"
                >view</nuxt-link
              >
            </div>
            <div class="info">
              <p>- GitHub:</p>
              <nuxt-link
                to="https://github.com/AJoshany/Booking-App"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[--color-orange-500]"
                >view</nuxt-link
              >
            </div>
          </div>
        </div>
        <img
          src="~/assets/img/booking.webp"
          alt="part-bank"
          class="max-w-[100%] md:max-w-[50%] rounded-[--radius-lg]"
        />
      </div>

      <!-- Dashboard Admin -->

      <div
        class="project flex flex-col md:flex-row md:gap-[4rem]"
        id="dashboard"
        data-aos="fade-left"
      >
        <img
          src="~/assets/img/dashboard.webp"
          alt="part-bank"
          class="max-w-[100%] md:max-w-[50%] rounded-[--radius-lg]"
        />
        <div class="content flex flex-col gap-[2rem] pt-[1rem] md:pt-[4rem]">
          <h3 class="text-[3rem] font-[600]">Dashboard Admin</h3>
          <p>
            A modern and responsive admin dashboard designed for efficient management and monitoring of data. Features include interactive charts, real-time statistics, user management, and customizable widgets to enhance productivity and provide clear insights into business operations. Built with a focus on usability, scalability, and clean design.
          </p>
          <div class="flex flex-col gap-[1rem] pt-[3rem]">
            <div class="info">
              <p>- Frontend:</p>
              <p>React, React Router, Rechart, Vite</p>
            </div>
            <div class="info">
              <p>- Styling:</p>
              <p>CSS / MUI</p>
            </div>
            <div class="info">
              <p>- Tools:</p>
              <p>npm, Git</p>
            </div>

            <div class="info">
              <p>- Live Demo:</p>
              <nuxt-link
                to="https://dashboard-admin-phi-rose.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[--color-orange-500]"
                >view</nuxt-link
              >
            </div>
            <div class="info">
              <p>- GitHub:</p>
              <nuxt-link
                to="https://github.com/AJoshany/Dashboard-Admin"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[--color-orange-500]"
                >view</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Projects - Ali Joshany",
  link: [{ rel: "canonical", href: "https://joshany.ir/projects" }],
});
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}
.info p:nth-child(1) {
  font-weight: 600;
}
</style>
