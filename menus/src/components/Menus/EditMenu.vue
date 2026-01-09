<template>
  <div>
    <h1>Edit Menu</h1>
    <p>Menu ID: {{ menuId }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuId: null
    }
  },
  created () {
    // ดึงค่า userId จาก URL
    console.log("created menuId:", this.menuId)
  },
  mounted () {
    this.menuId = this.$route.params.menuId
    console.log("mounted menuId:", this.menuId)
  }

}
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>
