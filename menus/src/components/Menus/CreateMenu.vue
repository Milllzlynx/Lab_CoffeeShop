<template>
  <div>
    <h1>Create Menu</h1>
    <form v-on:submit.prevent="createMenu">
      <p>Name: <input type="text" v-model="menu.name"></p>
      <p>Type: <input type="text" v-model="menu.type"></p>
      <p>Origin: <input type="text" v-model="menu.origin"></p>
      <p>Price: <input type="number" v-model.number="menu.price"></p>
      <p>Description: <input type="text" v-model="menu.description"></p>
      <p><button type="submit">create menu</button></p>
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
    async createMenu() {
      try {
        await MenusService.post(this.menu)
        this.$router.push({ name: 'menus' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>

</style>