<template>
  <section class="projects margin-section">
    <div class="container">
      <h2 class="h2title">Проекты</h2>
    </div>

    <ProjectsFilter :filtered-projects.sync="filteredProjects" />

    <ProjectsList :filtered-projects="filteredProjects" />
  </section>
</template>

<script>
import ProjectsFilter from '@/components/Projects/ProjectsFilter'
import ProjectsList from '@/components/Projects/ProjectsList'

export default {
  data() {
    return {
      filteredProjects: []
    }
  },
  components: {
    ProjectsFilter,
    ProjectsList
  }
}
</script>

<style lang="scss" scoped>
.projects {
  padding-top: 3rem;
  overflow: hidden;
}
</style>
