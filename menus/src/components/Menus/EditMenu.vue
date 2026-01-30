<template>
  <div>
    <h1>Edit Menu</h1>
    <form v-on:submit.prevent="editMenu">
      <p>Name: <input type="text" v-model="menu.name"></p>
      <p>Type: <input type="text" v-model="menu.type"></p>
      <p>Origin: <input type="text" v-model="menu.origin"></p>
      <p>Price: <input type="number" v-model.number="menu.price"></p>
      <p>Description: <input type="text" v-model="menu.description"></p>
      <p><button type="submit">edit menu</button></p>
    </form>
  </div>
</template>

<script>
import MenusService from '../../services/MenusService';

export default {
  data() {
    return {
      menu: {
        name: '',
        type: '',
        origin: '',
        price: 0,
        description: ''
      }
    }
  },
  methods: {
    async editMenu() {
      try {
        const menuId = this.$route.params.menuId
        await MenusService.put(menuId, this.menu)
        this.$router.push({ name: 'menus' })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async created() {
    try {
      const menuId = this.$route.params.menuId
      const res = await MenusService.show(menuId)
      this.menu = res.data.data || res.data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style scoped>

</style>