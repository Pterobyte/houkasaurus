<template>
  <router-link class="card" :to="url" >
    <section>
      <header><h2 class="card__title">{{name}}</h2></header>
      <div class="card__content" :style="backgroundImageStyle"></div>
    </section>
  </router-link>
</template>
<script>
export default {
  name: 'Card',
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      default: 'https://jt.houk.space/logo.png'
    }
  },
  computed: {
    backgroundImageStyle() {
      return `--image-url: url(${this.imageUrl});`
    }
  },
}
</script>
<style lang="scss" scoped>

.card {
  text-decoration: none !important;
}

.card__content {
  --image-url: '';
  background-image: var(--image-url);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-size 0.2s ease-in-out;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  height: 12rem;
  text-align: center;

  &:hover {
    background-size: 90%;
  }
  a {
    color: var(--text-color);
  }
}
</style>