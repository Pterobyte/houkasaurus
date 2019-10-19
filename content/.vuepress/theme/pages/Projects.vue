<template>
  <main class="projects">
    <slot name="top"/>
    <div v-for="(project, index) in projects">
      <ProjectCard
        :name="project.title"
        :url="project.frontmatter.url"
        :excerpt="project.excerpt"
      />
    </div>
  </main>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
import Metadata from '../components/Metadata.vue'

export default {
  name: 'Projects',
  components: { ProjectCard , Metadata},
  computed: {
    projects() {
      return this.$site.pages
        .filter(page => page.path.includes(this.$page.path))
        .filter(page => page.title)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/config.styl'
@require '../styles/wrapper.styl'
.projects
  display grid
  grid-template-columns repeat(auto-fill, minmax(calc(40vw),1fr))
  grid-auto-rows: auto
  grid-gap 2rem
  padding 8rem 3rem
</style>