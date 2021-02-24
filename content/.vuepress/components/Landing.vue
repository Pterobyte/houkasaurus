<template>
  <div>
    <div class="profile-img">
      <img src="/jt-face-right.webp" height="100%" alt=""/>
      <img class="laser" src="/laser.svg" alt="">
    </div>
    <main class="landing">
      <h1 class="typewriter">{{title}}</h1>
      <h2 class="description">{{description}}</h2>
    </main>
    <aside>
      <RightArrow class="arrow"/>
    </aside>
  </div>
</template>

<script>
import RightArrow from './RightArrow'

export default {
  name: 'Landing',
  components: { RightArrow },
  computed: {
    title() {
      return this.$page.frontmatter.heroText || this.$page.frontmatter.title || this.$site.title
    },
    description() {
      return this.$site.description
    }
  }
}
</script>

<style lang="scss" scoped>
.landing {
  margin: 0 auto;
  text-align: center;
}

.profile-img {
  height: 50vh;
  width: calc(100vw + 100px);
  position: absolute;
  left: -100px;
  bottom: 0;
  margin-bottom: 72px;
  opacity: 0.8;
  display: flex;
}

.laser {
  width: 100vw;
  overflow: hidden;
  margin-left: -80px;
  margin-top: -100px;
  opacity: 0.8;
}

.arrow {
  position: absolute;
  top: 40%;
  right: 20vw;
}

.description {
  font-size: 1rem;
}
</style>