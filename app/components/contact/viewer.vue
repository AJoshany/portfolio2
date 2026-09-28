<template>
  <section
    class="max-w-[110rem] mx-auto px-[3rem] flex flex-col items-center gap-[4rem]"
  >
    <div class="text-center flex flex-col gap-[1.5rem] max-w-[60rem]">
      <p class="text-brand font-[600] text-[1.3rem] tracking-[0.2em] uppercase">
        Contact
      </p>
      <h2 class="text-[4rem] md:text-[5.2rem] font-[600] leading-[1.1]">
        Let’s work together
      </h2>
      <p class="text-[1.7rem] text-muted">
        Looking for a front-end developer, or have a project in mind? Leave
        your email and I’ll get back to you, usually within a day.
      </p>
    </div>

    <form
      class="w-full max-w-[80rem] bg-raised border border-line rounded-[--radius-lg] p-[3rem] md:p-[4rem] flex flex-col md:flex-row items-stretch md:items-center gap-[2rem]"
      @submit.prevent="handleSubmit"
    >
      <div class="flex flex-col w-full">
        <label for="contact-email" class="sr-only">Your email address</label>
        <input
          id="contact-email"
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="Enter your email"
          class="w-full h-[6rem] bg-[--color-field] border border-line rounded-[--radius-xsm] px-[2rem] text-[--color-text] placeholder:text-[--color-text-faint] focus:border-[--color-orange-500] outline-none transition-colors"
          required
        />
      </div>
      <button
        type="submit"
        :disabled="isSubmitting"
        class="flex items-center justify-center gap-[1rem] relative min-w-[18rem] md:w-[18rem] h-[6rem] font-[600] text-[--color-ink-950] bg-[--color-orange-500] rounded-[--radius-xsm] hover:bg-[--color-orange-400] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span v-if="isSubmitting" class="spinner" aria-hidden="true"></span>
        <span role="status">
          {{ isSubmitting ? 'Sending…' : 'Contact Me' }}
        </span>
      </button>
    </form>
  </section>
</template>

<script setup>
const email = ref('')
const isSubmitting = ref(false)
const mail = useMail()
const toast = useToast()

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    await mail.send({
      subject: 'Portfolio contact',
      text: email.value,
    })
    toast.success({
      title: 'Sent',
      titleColor: 'white',
      message: 'Your email was sent successfully.',
      position: 'bottomRight',
      messageColor: 'white',
      color: '#08CB00',
    })
  } catch (error) {
    toast.error({
      title: 'Error',
      titleColor: 'white',
      message: 'Something went wrong. Try again, or email me directly.',
      position: 'bottomRight',
      messageColor: 'white',
      color: '#DD0303',
    })
  } finally {
    isSubmitting.value = false
    email.value = ''
  }
}
</script>

<style>
.spinner {
  width: 15px;
  height: 15px;
  border: 2px solid var(--color-ink-950);
  border-top-color: transparent;
  border-radius: 100%;
  animation: spin 1.2s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
