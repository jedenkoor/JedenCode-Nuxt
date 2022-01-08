<template>
  <div class="container">
    <ul class="projects__list">
      <ProjectsItem
        v-for="(project, index) in filteredProjects"
        :key="index"
        :project="project"
      />
    </ul>
  </div>
</template>

<script>
import ProjectsItem from '@/components/Projects/ProjectsItem'

export default {
  props: {
    'filteredProjects': {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    ProjectsItem
  }
}
</script>

<style lang="scss" scoped>
.projects {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem 2.4rem;
    padding-left: 0;
    list-style: none;
    @include w1200 {
      grid-template-columns: repeat(2, 1fr);
    }
    @include w767 {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.6rem;
    }
  }
}
</style>
