<template>
  <section class="flex flex-col items-center gap-[8rem] text-[1.7rem]">
    <div class="text-center md:max-w-[70%] flex flex-col gap-[1.5rem]">
      <h2 class="text-[5.2rem] font-[600]">Let’s Stay in Touch</h2>
      <p class="text-[1.7rem]">
        I’m always open to new opportunities and collaborations. If you’d like
        to get in touch, drop your email below — I’d love to connect.
      </p>
    </div>
    <form
      @submit.prevent="handleSubmit"
      class="flex items-center justify-center gap-[2rem] w-full"
    >
      <input
        type="email"
        v-model="email"
        placeholder="Enter Your Email"
        class="w-[50rem] bg-[#F8F8F8] border-[1px] border-[#AFAFAF] text-[#797979] rounded-[--radius-lg] h-[6rem] px-[2rem]"
      />
      <button
        type="submit"
        class="h-[6rem] px-[3rem] text-white bg-[--color-orange-500] rounded-[--radius-lg] hover:bg-[--color-orange-200] transition-all"
      >
        Contact Me
      </button>
    </form>
  </section>
</template>

<script setup>
const email = ref("");
const mail = useMail();

const handleSubmit = async () => {
  await mail.send({
    from: "John Doe",
    subject: "Incredible",
    text: email.value,
  });
  alert("Successfuly");
};
</script>

<style></style>
