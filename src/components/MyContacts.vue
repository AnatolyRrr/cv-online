<template>
  <div class="contacts">
    <q-fab icon="email" direction="up" color="secondary" vertical-actions-align="right">
      <q-fab-action color="green-7" label="WhatsApp" @click="openLink('https://wa.me/79525136078')" />
      <q-fab-action color="light-blue-8" label="Telegram" @click="openLink('https://t.me/AnatolyRyazanov')" />
      <q-fab-action color="light-blue-10" label="LinkedIn" @click="openLink('https://www.linkedin.com/in/anatolyrrr/')" />
      <q-fab-action color="dark" label="GitHub" @click="openLink('https://github.com/AnatolyRrr')" />
      <q-fab-action color="deep-orange-10" label="Email" @click="sendEmail('venomdmod74@gmail.com')" />
    </q-fab>
  </div>
</template>

<script setup lang="ts">
const openLink = (url: string) => {
  window.open(url, '_blank');
};
const sendEmail = (email: string) => {
  window.location.href = `mailto:${email}`
};
</script>

<style scoped lang="scss">
.contacts {
  position: fixed;
  z-index: 10;
  right: 12px;
  bottom: 12px;
}
</style>
