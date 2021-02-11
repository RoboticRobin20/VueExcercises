<template>
  <form>
    <div>
      <label for="name">Name: </label>
      <input type="text" id="name" name="name" v-model="name" />
    </div>
    <div>
      <label for="email">Email: </label>
      <input type="email" id="email" name="email" v-model="email" />
    </div>
    <div>
      <label for="phone">Phone: </label>
      <input type="tel" id="phone" name="phone" v-model="phone" /><br />
    </div>
    <button @click.prevent="addFriend">Add friend</button>
  </form>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    addFriend() {
      this.$emit("add-friend", {
        id: new Date().toISOString(),
        name: this.name,
        email: this.email,
        phone: this.phone,
        isFavorite: false
      });
    },
  },
};
</script>

<style>

</style>
