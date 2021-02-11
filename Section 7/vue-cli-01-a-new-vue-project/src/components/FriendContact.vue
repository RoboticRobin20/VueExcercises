<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">{{ ShowButtonCaption }}</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "julie",
        name: "Julie Jones",
        phone: "9876 54 32 10",
        email: "julie@localhost.com"
      }
    };
  },
  computed: {
    ShowButtonCaption() {
      return (this.detailsVisible ? 'Hide' : 'Show') + ' Details';
    }
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible
    }
  }
};
</script>
