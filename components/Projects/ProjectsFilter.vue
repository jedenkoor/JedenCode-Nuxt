<template>
  <div class="projects-filter__wrap">
    <div class="container projects-filter__container">
      <ul class="projects__filter projects-filter">
        <li
          class="projects-filter__item"
          v-for="(item, index) in filtersList"
          :key="index"
        >
          <label>
            <input
              class="visually-hidden"
              type="checkbox"
              v-model="filters"
              :value="item"
            />
            <span>{{ item }}</span>
          </label>
        </li>
      </ul>

      <div class="projects-filter__sort projects-filter-sort" v-click-outside="hideSort">
        <button
          class="projects-filter-sort__btn"
          aria-label="Сортировка"
          :class="{ active: sortOpen }"
          @click.prevent="toggleSort"
        >
          <svg viewBox="0 0 15 15" fill="none">
            <path
              d="M3.5 14.5L3.14645 14.8536C3.34171 15.0488 3.65829 15.0488 3.85355 14.8536L3.5 14.5ZM3.85355 14.8536L6.85355 11.8536L6.14645 11.1464L3.14645 14.1464L3.85355 14.8536ZM3.85355 14.1464L0.853553 11.1464L0.146447 11.8536L3.14645 14.8536L3.85355 14.1464ZM3 0V14.5H4V0H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"
            />
          </svg>
          По дате создания
        </button>
        <ul class="projects-filter-sort__list" :class="{ active: sortOpen }">
          <li class="projects-filter-sort__item">
            <button
              class="projects-filter-sort__itembtn"
              data-value="dateAsc"
              @click.prevent="changeSort"
            >
              <svg viewBox="0 0 15 15" fill="none">
                <path
                  d="M3.5 0.5L3.85355 0.146447C3.65829 -0.0488155 3.34171 -0.0488155 3.14645 0.146447L3.5 0.5ZM3.14645 0.146447L0.146447 3.14645L0.853553 3.85355L3.85355 0.853553L3.14645 0.146447ZM3.14645 0.853553L6.14645 3.85355L6.85355 3.14645L3.85355 0.146447L3.14645 0.853553ZM3 0.5V15H4V0.5H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"
                />
              </svg>
              По дате создания
            </button>
          </li>
          <li class="projects-filter-sort__item">
            <button
              class="projects-filter-sort__itembtn active"
              data-value="dateDesc"
              @click.prevent="changeSort"
            >
              <svg viewBox="0 0 15 15" fill="none">
                <path
                  d="M3.5 14.5L3.14645 14.8536C3.34171 15.0488 3.65829 15.0488 3.85355 14.8536L3.5 14.5ZM3.85355 14.8536L6.85355 11.8536L6.14645 11.1464L3.14645 14.1464L3.85355 14.8536ZM3.85355 14.1464L0.853553 11.1464L0.146447 11.8536L3.14645 14.8536L3.85355 14.1464ZM3 0V14.5H4V0H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"
                />
              </svg>
              По дате создания
            </button>
          </li>
          <li class="projects-filter-sort__item">
            <button
              class="projects-filter-sort__itembtn"
              data-value="alphabetAsc"
              @click.prevent="changeSort"
            >
              <svg viewBox="0 0 15 15" fill="none">
                <path
                  d="M3.5 0.5L3.85355 0.146447C3.65829 -0.0488155 3.34171 -0.0488155 3.14645 0.146447L3.5 0.5ZM3.14645 0.146447L0.146447 3.14645L0.853553 3.85355L3.85355 0.853553L3.14645 0.146447ZM3.14645 0.853553L6.14645 3.85355L6.85355 3.14645L3.85355 0.146447L3.14645 0.853553ZM3 0.5V15H4V0.5H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"
                />
              </svg>
              По алфавиту A-Z
            </button>
          </li>
          <li class="projects-filter-sort__item">
            <button
              class="projects-filter-sort__itembtn"
              data-value="alphabetDesc"
              @click.prevent="changeSort"
            >
              <svg viewBox="0 0 15 15" fill="none">
                <path
                  d="M3.5 14.5L3.14645 14.8536C3.34171 15.0488 3.65829 15.0488 3.85355 14.8536L3.5 14.5ZM3.85355 14.8536L6.85355 11.8536L6.14645 11.1464L3.14645 14.1464L3.85355 14.8536ZM3.85355 14.1464L0.853553 11.1464L0.146447 11.8536L3.14645 14.8536L3.85355 14.1464ZM3 0V14.5H4V0H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"
                />
              </svg>
              По алфавиту Z-A
            </button>
          </li>
        </ul>
      </div>

      <button
        class="projects-filter__clear"
        aria-label="Сбросить фильтр"
        v-if="filters.length"
        @click.prevent="resetFilter"
      >
        <svg viewBox="0 0 15 15" fill="none">
          <path d="M2 2L13 13M2 13L13 2" />
        </svg>
        Сбросить фильтр
      </button>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import projects from '@/data/projects'

export default {
  props: {
    'filteredProjects': {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      currentSort: 'dateDesc',
      sortOpen: false,
      projects,
      filters: []
    }
  },
  computed: {
    filtersList() {
      const filteredFilters = []
      this.projects.forEach(project => {
        filteredFilters.push(...project.tags)
      })
      return filteredFilters
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort()
    }
  },
  methods: {
    updateprojects(currentSort) {
      let projectsList = this.projects
      if (this.filters.length) {
        projectsList = this.projects.filter(project =>
          this.filters.some(tag => project.tags.includes(tag))
        )
      }
      this.$emit(
        'update:filteredProjects',
        this.$options.filters.sort(projectsList, currentSort)
      )
    },
    resetFilter() {
      this.filters = []
    },
    toggleSort() {
      this.sortOpen = !this.sortOpen
    },
    hideSort() {
      this.sortOpen = false
    },
    changeSort(e) {
      this.currentSort = e.target.dataset.value
      document.querySelector('.projects-filter-sort__btn').innerHTML = e.target.innerHTML
      document.querySelectorAll('.projects-filter-sort__itembtn').forEach(item => {
        item.classList.remove('active')
      })
      e.target.classList.add('active')
      this.toggleSort()
    }
  },
  created() {
    this.updateprojects(this.currentSort)
  },
  watch: {
    filters() {
      this.updateprojects(this.currentSort)
    },
    currentSort() {
      this.updateprojects(this.currentSort)
    }
  },
  filters: {
    sort(projects, currentSort) {
      switch (currentSort) {
        case 'dateAsc':
          projects = projects.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
          break
        case 'dateDesc':
          projects = projects.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
          break
        case 'alphabetAsc':
          projects = projects.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1
            } else {
              return 0
            }
          })
          break
        case 'alphabetDesc':
          projects = projects.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return -1
            } else {
              return 0
            }
          })
          break
      }
      return projects
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss" scoped>
.projects {
  &__filter {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;
    @include w1200 {
      flex-wrap: nowrap;
      overflow-x: scroll;
      transform: translateX(-2.4rem);
      width: 100vw;
    }
    @include w767 {
      width: calc(100vw + 0.8rem);
    }
  }
  &-filter {
    &__wrap {
      margin-bottom: 7.5rem;
      background-color: var(--secondary-bg);
      transition: background-color 0.2s;
      @include w767 {
        margin-bottom: 7rem;
      }
    }
    &__container {
      position: relative;
    }
    &__item {
      label {
        position: relative;
        display: flex;
        margin-bottom: 1rem;
        padding: 2rem 3.8rem;
        cursor: pointer;
        @include w1200 {
          margin-bottom: 0;
          padding: 2rem 2.4rem;
        }
        @include w767 {
          padding: 1.6rem 2.4rem;
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
        &:before {
          content: '';
          position: absolute;
          top: 100%;
          left: -100vw;
          width: 200vw;
          height: 1rem;
          background-color: var(--main-bg);
          transition: background-color 0.2s;
          @include w1200 {
            display: none;
          }
        }
      }
      input {
        &:focus-visible + span {
          color: var(--accent);
        }
        &:checked + span {
          color: var(--accent);
        }
      }
      span {
        transition: color 0.2s;
        font-weight: 600;
        white-space: nowrap;
      }
    }
    &__clear {
      position: absolute;
      top: calc(100% + 2.3rem);
      right: 2.4rem;
      display: flex;
      align-items: center;
      padding: 0;
      background: none;
      border: none;
      color: var(--main-text);
      cursor: pointer;
      transition: color 0.2s;
      font-weight: 600;
      @include w1200 {
        top: calc(100% + 2.8rem);
        right: 1.6rem;
      }
      @include w767 {
        font-weight: 500;
      }
      @include w359 {
        font-size: 1.2rem;
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
      svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.8rem;
        @include w767 {
          margin-right: 0.4rem;
        }
        path {
          stroke: currentColor;
        }
      }
    }
    &__sort {
      position: absolute;
      top: calc(100% + 2.3rem);
      @include w1200 {
        top: calc(100% + 2.8rem);
      }
    }
    &-sort {
      &__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        padding: 0;
        background: none;
        border: none;
        border-radius: 0.2rem;
        color: var(--main-text);
        cursor: pointer;
        transition: color 0.2s;
        font-weight: 600;
        @include w767 {
          font-weight: 500;
        }
        @include w359 {
          font-size: 1.2rem;
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
        &.active {
          color: var(--accent);
        }
        svg {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 0.8rem;
          fill: currentColor;
          @include w767 {
            margin-right: 0.4rem;
          }
        }
      }
      &__list {
        position: absolute;
        top: calc(100% + 1.5rem);
        left: -2rem;
        padding: 0.5rem 0;
        background-color: var(--secondary-bg);
        border-radius: 0.2rem;
        list-style: none;
        box-shadow: 0.1rem 0.5rem 1.4rem rgba(20, 25, 31, 0.5);
        opacity: 0;
        visibility: hidden;
        @include w767 {
          top: calc(100% + 1rem);
          left: -1.6rem;
        }
        &.active {
          opacity: 1;
          visibility: visible;
          transition: visibility 0s linear, opacity 0.1s linear;
        }
      }
      &__itembtn {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 1rem 2rem;
        background: none;
        border: none;
        color: var(--main-text);
        cursor: pointer;
        white-space: nowrap;
        transition: color 0.2s;
        font-weight: 600;
        @include w767 {
          padding: 1rem 1.6rem;
          font-weight: 500;
        }
        @include w359 {
          font-size: 1.2rem;
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
        &.active {
          color: var(--accent);
        }
        svg {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 0.8rem;
          fill: currentColor;
          @include w767 {
            margin-right: 0.4rem;
          }
        }
      }
    }
  }
}
</style>
