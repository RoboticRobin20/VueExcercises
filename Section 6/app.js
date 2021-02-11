const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45 67 89",
          email: "manuel@localhost.com"
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "9876 54 32 10",
          email: "julie@localhost.com"
        }
      ]
    }
  },
  methods: {

  }
});

app.component('friend-contact', {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">{{ ShowButtonCaption }}</button>
      <ul v-if="detailsVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
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
});

app.mount('#app');