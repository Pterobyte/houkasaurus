<template>
  <a :href="imageLink" target="_blank">
    <section>
      <header>{{name}}</header>
      <div class="card" :style="backgroundImageStyle"></div>
    </section>
  </a>
</template>
<script>
import { handleBlobResponse } from '../util'
export default {
  props: {
    name: {
      required: true
    },
    excerpt: {
      required: true
    }
  },
  data() {
    return {
      imageBlob: '',
      imageLink: ''
    }
  },
  computed: {
    backgroundImageStyle() {
      return `--image-url: url(${this.imageBlob});`
    }
  },
  methods: {
    fetchBackgroundImage(page) {
      const url = `https://site-shot.houk.space/api/shot/${encodeURIComponent(page)}`
      return fetch(url)
        .then(handleBlobResponse)
        .then(URL.createObjectURL)
    },
  },
  mounted() {
    const excerpt = document.createElement('div')
    excerpt.innerHTML = this.$props.excerpt
    const anchor = excerpt.querySelector('[target="_blank"]')
    this.imageLink = anchor.href
    if (this.imageLink) {
      this.fetchBackgroundImage(this.imageLink)
        .then((imageBlob) => {
          this.imageBlob = imageBlob
        })
        .catch(console.error)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../styles/config.styl'
.card
  --image-url ''
  background-image var(--image-url)
  background-size cover
  filter blur(2px) opacity(50%)
  transition all 0.2s ease-in-out
  border 1px solid darken($borderColor, 10%)
  border-radius 4px
  height 12rem
  text-align center

  &:hover
    filter blur(0) opacity(100%)
</style>