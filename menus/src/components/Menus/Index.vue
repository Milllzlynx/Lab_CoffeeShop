<template>
  <div>
    <h1>Get All Menus</h1>
    <p><button @click="navigateTo('/menu/create')">สร้างเมนูใหม่!!!</button></p>
    <div v-if="menus.length">
      <h4>จำนวนเมนู {{ menus.length }}</h4>
      <div v-for="menu in menu" v-bind:key="menu.id">
        <p>ID : {{ menu.id }}</p>
        <p>Name: {{ menu.name }}</p>
        <p>Type: {{ menu.type }}</p>
        <p>Origin: {{ menu.origin }}</p>
        <p>Price: {{ menu.price }}</p>
        <p>Description: {{ menu.Des }}</p>
        <p>
          <button v-on:click="navigateTo('/menu/' + menu.id)">ดูข้อมูลเมนู</button>
          <button v-on:click="navigateTo('/menu/edit/' + menu.id)">แก้ไขข้อมูล</button>
          <button v-on:click="deleteUser(menu)">ลบข้อมูล</button>
        </p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import MenusService from '../../services/MenusService'
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },

    data() {
      return {
        menus: []
      }
    },

    async deleteUser(user) {
      let result = confirm("Want to delete?")
      if (result) {
        try {
          await UsersService.delete(user)
          this.refreshData()
        } catch (err) {
          console.log(err)
        }
      }
    },
    async refreshData() {
      this.users = (await UsersService.index()).data
    }
  },
  async created() {
    try {
      this.menus = (await MenusService.index()).data
      console.log(this.menus)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>