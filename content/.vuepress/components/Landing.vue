<template>
  <div class="landing">
    <div></div>
    <div>
      <h1>{{title}}</h1>
      <slot />
    </div>
    <RightArrow class="arrow"/>
  </div>
</template>

<script>
import RightArrow from './RightArrow'
export default {
  name: 'Landing',
  components: { RightArrow },
  computed: {
    title() {
      return this.$page.frontmatter.heroText || this.$page.frontmatter.title
    }
  }
}
</script>

<style lang="scss" scoped>
.landing {
  margin: 0 auto;
  text-align: center;
  padding: 3rem;
}

@media (min-width: 900px) {
  .arrow {
    position: absolute;
    top: 40%;
    right: 10rem;
  }
}
</style>