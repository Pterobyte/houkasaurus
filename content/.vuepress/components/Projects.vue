<template>
  <main class="projects">
    <slot name="top"/>
    <div v-for="(project, index) in projects">
      <ProjectCard
        :name="project.title"
        :url="project.frontmatter.link"
        :imageUrl="project.frontmatter.screenshots[0].url"
      />
    </div>
  </main>
</template>

<script>
import ProjectCard from './ProjectCard.vue'

export default {
  name: 'Projects',
  components: { ProjectCard },
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
.projects
  display grid
  grid-template-columns repeat(auto-fill, minmax(calc(40vw),1fr))
  grid-auto-rows: auto
  grid-gap 2rem
  padding 8rem 3rem
</style>