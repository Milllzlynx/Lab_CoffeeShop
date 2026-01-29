<template>
  <div>
    <h1>Edit Menu</h1>
    <form v-on:submit.prevent="editMenu">
      <p>Name: <input type="text" v-model="menu.name"></p>
      <p>Type: <input type="text" v-model="menu.type"></p>
      <p>Origin: <input type="text" v-model="menu.origin"></p>
      <p>Price: <input type="text" v-model="menu.price"></p>
      <p>Description: <input type="text" v-model="menu.Des"></p>
      <p><button type="submit">edit menu</button></p>
    </form>
  </div>
</template>

<script>
import MenusService from '../../services/MenusService'
export default {
  data() {
    return {
      menu: {
        name: '',
        type: '',
        origin: '',
        price: '',
        description: ''
      }
    }
  },
  methods: {
    async editMenu() {
      try {
        await MenusService.put(this.menu)
        this.$router.push({
          name: 'menus'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async created() {
    try {
      let menuId = this.$route.params.menuId
      this.menu = (await MenusService.show(menuId)).data
    } catch (error) {
      console.log(error)
    }
  }

}
</script>
<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>
