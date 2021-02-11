<template>
  <li>
    <h2>{{ friend.name }} {{ favorite }}</h2>
    <button @click="toggleDetails">{{ captionShow }}</button>
    <button @click="toggleFavorite">{{ captionFavorite}}</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>ID:</strong>
        {{ friend.id }}
      </li>
      <li>
        <strong>Phone:</strong>
        {{ friend.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friend.email }}
      </li>
    </ul>
    <button @click="$emit('delete', friend.id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    friend: {
      type: Object,
      required: false,
      default: function() {
        return {
        name: "Robin",
        email: "rob.thoelen@gmail.com",
        phone: "0478 57 64 31",
        isFavorite: false
        }
      }
    }
  },
  emits: ['toggle-favorite', 'delete'],
  // emits: {
  //   'toggle-favorite': function(id) {
  //     if(id) {
  //       return true;
  //     } else {
  //       console.warn('Id is missing!');
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  computed: {
    captionShow() {
      return (this.detailsAreVisible ? 'Hide' : 'Show') + ' Details'; 
    },
    captionFavorite() {
      return this.friend.isFavorite ? 'Unfavorite' : 'Favorite'; 
    },
    favorite() {
      return this.friend.isFavorite ? '(Favorite)' : '';
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.friend.id);
    }
  }
};
</script>