<template>
  <div>
    <h1>Show Menu</h1>

    <div v-if="menu">
      <p>ID : {{ menu.id }}</p>
      <p>Name: {{ menu.name }}</p>
      <p>Type: {{ menu.type }}</p>
      <p>Origin: {{ menu.origin }}</p>
      <p>Price: {{ menu.price }}</p>
      <p>Description: {{ menu.description }}</p>
    </div>

    <div v-else>
      <p>กำลังโหลด...</p>
    </div>
  </div>
</template>

<script>
import MenusService from '../../services/MenusService';

export default {
  data() {
    return { menu: null }
  },
  async created() {
    try {
      const menuId = this.$route.params.menuId
      const res = await MenusService.show(menuId)
      this.menu = res.data.data || res.data
    } catch (err) {
      console.log(err)
      this.menu = null
    }
  }
}
</script>
<style scoped>

</style>