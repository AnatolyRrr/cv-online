<template>
  <header>
    <q-avatar rounded class="avatar">
      <img src="avatar.jpg" />
    </q-avatar>

    <div class="separator" />

    <div>
      <h1>ANATOLIY RIAZANOV</h1>
      <h4>FRONTEND DEVELOPER</h4>
      <p>Age: {{ calculateAge('1995-01-31') }}</p>
      <p>City: Thailand, Phuket</p>
    </div>
  </header>
</template>

<script setup lang="ts">
const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }
    
    return age;
}
</script>

<style scoped lang="scss">
.avatar {
  font-size: 120px;

  @include MIN_768 {
    font-size: 160px;
  }
  @include MIN_1024 {
    font-size: 200px;
  }
}

header {
  display: flex;
  align-items: center;
  gap: 8px;

  @include MIN_768 {
    gap: 12px;
  }
  @include MIN_1024 {
    gap: 16px;
  }
}

h4 {
  color: $secondary;
}

.separator {
  width: 2px;
  height: 80px;
  background: $secondary;

  @include MIN_768 {
    height: 120px;
  }
  @include MIN_1024 {
    height: 160px;
  }
}
</style>
