<template>
  <li class="projects__item projects-item">
    <a :href="project.link" class="projects-item__link" target="_blank">
      <div class="projects-item__logo">
        <img :src="project.image" :alt="project.title" class="projects-item__img" />
      </div>
      <div class="projects-item__top">
        <h3 class="projects-item__title">{{ project.title }}</h3>
        <div class="projects-item__date">{{ project.date | dates }}</div>
      </div>
      <p class="projects-item__descr">{{ project.description }}</p>
      <ul class="projects-item__tags">
        <li class="projects-item__tag" v-for="(tag, index) in project.tags" :key="index">
          #{{ tag }}
        </li>
      </ul>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    'project': {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    dates(date) {
      return date
        .split('.')
        .reverse()
        .join('.')
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  &-item {
    &__link {
      display: block;
      height: 100%;
      padding: 2rem;
      background-color: var(--secondary-bg);
      border-radius: 0.5rem;
      transition: color 0.2s, background-color 0.2s;
      @include w767 {
        padding: 1.6rem;
      }
      @include hover {
        &:hover,
        &:focus-visible {
          color: var(--accent);
        }
      }
      @include active {
        &:active {
          color: var(--accent);
        }
      }
    }
    &__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20rem;
      padding: 2rem;
      border-radius: 0.5rem;
      background-color: var(--projects-bg);
    }
    &__img {
      width: 100%;
      max-width: 30rem;
      height: 100%;
      object-fit: contain;
    }
    &__top {
      display: flex;
      justify-content: space-between;
      margin-top: 1.5rem;
      margin-bottom: 2rem;
    }
    &__title {
      margin: 0;
      font-weight: 600;
      font-size: 2.2rem;
      @include w767 {
        font-size: 2rem;
      }
    }
    &__descr {
      margin-bottom: 1.8rem;
    }
    &__tags {
      display: flex;
      flex-wrap: wrap;
      padding-left: 0;
      list-style: none;
    }
    &__tag {
      font-size: 1.4rem;
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
}
</style>
