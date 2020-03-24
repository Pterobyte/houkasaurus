<template>
  <a :href="url" target="_blank">
    <section>
      <header>{{name}}</header>
      <div class="card" :style="backgroundImageStyle"></div>
    </section>
  </a>
</template>
<script>
export default {
  name: 'ProjectCard',
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
<style lang="stylus" scoped>

.card
  --image-url ''
  background-image var(--image-url)
  background-size cover
  filter blur(2px) opacity(50%)
  transition all 0.2s ease-in-out
  border 1px solid var(--border-color)
  border-radius 4px
  height 12rem
  text-align center

  &:hover
    filter blur(0) opacity(100%)
a
  color var(--text-color)
</style>