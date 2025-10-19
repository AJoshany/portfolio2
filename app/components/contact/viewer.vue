<template>
  <section
    class="flex flex-col items-center gap-[4rem] md:gap-[8rem] text-[1.4rem] md:text-[1.7rem]"
  >
    <div class="text-center md:max-w-[70%] flex flex-col gap-[1.5rem]">
      <h2 class="text-[5.2rem] font-[600]">Let’s Stay in Touch</h2>
      <p class="text-[1.7rem]">
        I’m always open to new opportunities and collaborations. If you’d like
        to get in touch, drop your email below — I’d love to connect.
      </p>
    </div>
    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col md:flex-row items-center justify-center gap-[2rem] w-full"
    >
      <input
        type="email"
        v-model="email"
        placeholder="Enter Your Email"
        class="w-[100%] md:w-[50rem] bg-[#F8F8F8] border-[1px] border-[#AFAFAF] text-[#797979] rounded-[--radius-lg] h-[6rem] px-[2rem]"
      />
      <button
        type="submit"
        :disabled="disalbleBtn"
        class="flex items-center justify-center gap-[1rem] relative min-w-[18rem] h-[6rem] text-white bg-[--color-orange-500] rounded-[--radius-lg] hover:bg-[--color-orange-200] transition-all"
      >
        <div v-if="showSpiner" class="spinner"></div>
        Contact Me
      </button>
    </form>
  </section>
</template>

<script setup>
const email = ref("");
const showSpiner = ref(false);
const disalbleBtn = ref(false);
const mail = useMail();
const toast = useToast();

const handleSubmit = async () => {
  showSpiner.value = true;
  disalbleBtn.value = true;
  try {
    await mail.send({
      subject: "Portfolio",
      text: email.value,
    });
    toast.success({
      title: "Success",
      message: "Your Email was sent successfully.",
      position: "bottomRight",
    });
  } catch (error) {
    toast.error({
      title: "Error",
      message: "Something went wrong.",
      position: "bottomRight",
    });
  } finally {
    disalbleBtn.value = false;
    showSpiner.value = false;
    email.value = "";
  }
};
</script>

<style>
.spinner {
  top: 50%;
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
