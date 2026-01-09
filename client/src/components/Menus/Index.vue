<template>
  <div>
    <h1>Get All Menus</h1>
    <p><button @click="navigateTo('/menu/create')">สร้างเมนูใหม่!!!</button></p>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>