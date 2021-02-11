<template>
  <div>
    <form>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" v-model="inputName"/>
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="text" id="age" name="age" v-model="inputAge"/>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['name', 'age'],
  data() {
    return {
      inputName: this.name,
      inputAge: this.age
    }
  },
  watch: {
    inputName() {
      this.emitChange();
    },
    inputAge() {
      this.emitChange();
    }
  },
  methods: {
    emitChange() {
      this.$emit('emit-change', { name: this.inputName, age: this.inputAge });
    }
  }
}
</script>