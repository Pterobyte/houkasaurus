<template>
  <a :href="imageLink" target="_blank">
    <section>
      <header>{{name}}</header>
      <div class="card" :style="backgroundImageStyle"></div>
    </section>
  </a>
</template>
<script>
import { openDB } from 'idb'
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
      imageLink: '',
      db: {}
    }
  },
  computed: {
    backgroundImageStyle() {
      return `--image-url: url(${this.imageBlob});`
    }
  },
  methods: {
    async fetchImageFromStorage(page) {
      const image = await this.db.get('images', page)
      this.fetchImageFromNetwork(page) // don't await while updating val
      return image
    },
    async fetchImageFromNetwork(page) {
      const url = `https://site-shot.houk.space/api/shot/${encodeURIComponent(page)}`
      const res = await fetch(url)
      const blob = await handleBlobResponse(res)
      await this.db.add('images', blob, page)
      return blob        
    },
    async fetchStorageFirst(page) {
      const db = await this.returnDB('image-store', 1)
      const imageBlob = await this.fetchImageFromStorage(page) || await this.fetchImageFromNetwork(page)
      const blobUrl = URL.createObjectURL(imageBlob)
      this.imageBlob = blobUrl
      return blobUrl
    },
    async returnDB(name, version) {
      this.db = await openDB(name, version, {
        upgrade(db, oldVersion, newVersion, transaction) {
          db.createObjectStore('images')
        },
      })
     return this.db
    },
    parseExcerpt(query) {
      const excerpt = document.createElement('div')
      excerpt.innerHTML = this.$props.excerpt
      const anchor = excerpt.querySelector(query)
      this.imageLink = anchor.href
      return anchor.href
    },
  },
  mounted() {
    const imageLink = this.parseExcerpt('[target="_blank"]')
    if (imageLink) {
      this.fetchStorageFirst(this.imageLink)
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
  border 1px solid var(--border-color)
  border-radius 4px
  height 12rem
  text-align center

  &:hover
    filter blur(0) opacity(100%)
a
  color var(--text-color)
</style>