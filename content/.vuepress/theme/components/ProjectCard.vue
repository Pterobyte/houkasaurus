<template>
  <a :href="href" target="_blank">
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
    url: {
      required: false
    }
  },
  data() {
    return {
      backgroundImageUrl: ''
    }
  },
  computed: {
    backgroundImageStyle() {
      return `--image-url: url(${this.backgroundImageUrl});`
    },
    href() {
      return `https://${this.url}`
    }
  },
  methods: {
    fetchBackgroundImage(page) {
      const url = `https://site-shot.houk.space/api/shot/${encodeURIComponent(page)}`
      return fetch(url)
        .then(handleBlobResponse)
        .then(URL.createObjectURL)
    }
  },
  mounted() {
    if (this.$props.url) {
      this.fetchBackgroundImage(this.$props.url)
        .then((backgroundImageUrl) => {
          this.backgroundImageUrl = backgroundImageUrl
        })
        .catch(console.error)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../styles/config.styl'
.card
  border 1px solid darken($borderColor, 10%)
  border-radius 4px
  height 12rem
  text-align center
  --image-url ''
  background-image var(--image-url)
  background-size cover
  filter blur(2px) opacity(50%)
  transition all 0.2s ease-in-out

  &:hover
    filter blur(0) opacity(100%)
</style>