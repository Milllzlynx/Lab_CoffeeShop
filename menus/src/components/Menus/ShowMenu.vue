<template>
  <div>
    <h1>Show Menu</h1>
    <div v-if="menu">
      <p>ID : {{ menu.id }}</p>
      <p>Name: {{ menu.name }}</p>
      <p>Type: {{ menu.type }}</p>
      <p>Origin: {{ menu.origin }}</p>
      <p>Price: {{ menu.price }}</p>
      <p>Description: {{ menu.Des }}</p>
    </div>
  </div>
</template>

<script>
import MenusService from '../../services/MenusService'
export default {
  data() {
    return {
      menu: null
    }
  },
  created() {
    console.log("created menuId:", this.menu)
  },
  async mounted() {
    var menuId = this.$route.params.menuId
    this.menu = (await MenusService.show(menuId)).data
    console.log("mounted menuId:", this.menu)
  }

}
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>