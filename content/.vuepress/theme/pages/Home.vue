<template>
  <div class="home">
    <!-- TODO: more attractive hero, video? -->
    <div class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        alt="hero"
        class="spin"
      >

      <h1>{{ data.heroText }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button action-button-shine"
          :item="actionLink"
        />
      </p>

      <buy-me-a-coffee />

    </div>

    <newsletter />

<!-- TODO: slider -->
    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content custom/>

    <div
      class="footer"
      v-if="data.footer"
    >
      <a :href="data.footer" target="_blank" rel="noopener">{{data.footer}}</a>
    </div>
  </div>
</template>

<script>
import NavLink from '../components/NavLink.vue'
import Metadata from '../components/Metadata.vue'
import Newsletter from '../components/Newsletter.vue'
import BuyMeACoffee from '../components/BuyMeACoffee.vue'

export default {
  components: { NavLink, Metadata, Newsletter, BuyMeACoffee },

  computed: {
    data() {
      return this.$page.frontmatter
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },
  }
}
</script>

<style lang="stylus">
@import '../styles/config.styl'

.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  .hero
    text-align center
    padding 3.5rem 0
    img
      max-width 100%
      max-height 280px
      display block
      margin 3rem auto 3.5rem
    .spin
      transition all 0.2s ease-in-out
      &:hover
        transform: rotate(360deg)
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color var(--text-color)
    .action-button
      display inline-block
      font-size 1.2rem
      color var(--bg-color)
      background var(--btn-color-primary)
      padding 0.8rem 1.6rem
      border-radius 4px
      box-sizing border-box
      background-size: 200% 200%
      background-position: 10% 0%
      transition: all .1s ease-in-out
      &:hover
        box-shadow -1px 1px 2px var(--shadow-color)
        background-position: 91% 100%
        color var(--button-text-color)
  .features
    border-top 1px solid var(--border-color)
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color var(--text-color)
    p
      color var(--text-color)

  .section
    padding-top 5rem
  .footer
    padding 2.5rem
    border-top 1px solid var(--border-color)
    text-align center
    color var(--text-color)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
