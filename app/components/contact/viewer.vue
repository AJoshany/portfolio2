<template>
  <section
    class="flex flex-col items-center gap-[4rem] md:gap-[8rem] text-[1.4rem] md:text-[1.7rem]"
  >
    <div class="text-center md:max-w-[70%] flex flex-col gap-[1.5rem]">
      <h2 class="text-[5.2rem] font-[600]">Contact</h2>
      <p class="text-[1.7rem]">
        Looking for a front-end developer, or have a project in mind? Leave
        your email and I’ll get back to you, usually within a day.
      </p>
    </div>
    <form
      class="flex flex-col md:flex-row items-center justify-center gap-[2rem] w-full"
      @submit.prevent="handleSubmit"
    >
      <div class="flex flex-col w-full md:w-auto">
        <label for="contact-email" class="sr-only">Your email address</label>
        <input
          id="contact-email"
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="Enter your email"
          class="w-[100%] md:w-[50rem] bg-[#F8F8F8] border-[1px] border-[#AFAFAF] text-[#333333] rounded-[--radius-lg] h-[6rem] px-[2rem]"
          required
        />
      </div>
      <button
        type="submit"
        :disabled="isSubmitting"
        class="flex items-center justify-center gap-[1rem] relative min-w-[18rem] h-[6rem] text-white bg-[--color-orange-500] rounded-[--radius-lg] hover:bg-[--color-orange-200] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
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
  border: 2px solid var(--color-orange-500);
  border-top-color: white;
  border-radius: 100%;
  animation: spin 1.2s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
