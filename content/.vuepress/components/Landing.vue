<template>
  <div>
    <div class="profile-img">
      <img :src="profileImg" height="100%"/>
    </div>
    <main class="landing">
      <h1 class="typewriter">{{title}}</h1>
      <h2 class="description">Software Engineer • Cloud Architect • DevOps</h2>
    </main>
    <aside>
      <RightArrow class="arrow"/>
    </aside>
  </div>
</template>

<script>
import RightArrow from './RightArrow'
import jtFaceRightImg from '../public/jt-face-right.png'

export default {
  name: 'Landing',
  components: { RightArrow },
  computed: {
    title() {
      return this.$page.frontmatter.heroText || this.$page.frontmatter.title
    },
    profileImg() {
      return jtFaceRightImg
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
  position: absolute;
  left: -100px;
  bottom: 0;
  margin-bottom: 60px;
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