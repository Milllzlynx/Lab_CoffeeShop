<template>
  <div>
    <h1>Get All Menus</h1>
    <p><button @click="navigateTo('/menu/create')">สร้างเมนูใหม่</button></p>

    <div v-if="menus.length">
      <h4>จำนวนเมนู {{ menus.length }}</h4>

      <div v-for="menu in menus" :key="menu.id">
        <p>ID : {{ menu.id }}</p>
        <p>Name: {{ menu.name }}</p>
        <p>Type: {{ menu.type }}</p>
        <p>Origin: {{ menu.origin }}</p>
        <p>Price: {{ menu.price }}</p>
        <p>Description: {{ menu.description }}</p>

        <p>
          <button @click="navigateTo('/menu/' + menu.id)">ดูข้อมูลเมนู</button>
          <button @click="navigateTo('/menu/edit/' + menu.id)">แก้ไขข้อมูล</button>
          <button @click="deleteMenu(menu.id)">ลบข้อมูล</button>
        </p>
        <hr />
      </div>
    </div>

    <div v-else>
      <p>ไม่มีข้อมูลเมนู</p>
    </div>
  </div>
</template>

<script>
import MenusService from '../../services/MenusService';

export default {
  data() {
    return { menus: [] }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    async deleteMenu(menuId) {
      if (!confirm('Want to delete?')) return
      try {
        await MenusService.delete(menuId)
        await this.refreshData()
      } catch (err) {
        console.log(err)
      }
    },
    async refreshData() {
      const res = await MenusService.index()
      this.menus = res.data.data || res.data
    }
  },
  async created() {
    await this.refreshData()
  }
}
</script>
<style scoped>

</style>