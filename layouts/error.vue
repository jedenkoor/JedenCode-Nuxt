<template>
  <div class="wrapper">
    <TheHeader />

    <main class="content">
      <section class="notfound" v-if="error.statusCode === 404">
        <div class="container notfound__container">
          <span class="notfound__title">404</span>
          <h1 class="notfound__text">К сожалению, указанная страница не найдена.</h1>
          <div class="btn primary-btn notfound__btns">
            <NuxtLink to="/" class="notfound__btn">Перейти на главную</NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <TheFooter />
  </div>
</template>

<script>
export default {
  props: {
  'error': {
    type: Object,
    default () {
        return {}
      }
    }
},
  layout: 'error' // you can set a custom layout for the error page
}
</script>

<style lang="scss" scoped>
.notfound {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title {
    font-size: 23rem;
    font-weight: 700;
    @include w767 {
      font-size: 15rem;
    }
  }
  &__text {
    margin-top: 0;
    margin-bottom: 3rem;
    font-size: 2rem;
    text-align: center;
    @include w767 {
      font-size: 1.6rem;
    }
  }
  &__btns {
    display: flex;
  }
  &__btn {
    padding: 0.7rem 3rem;
  }
}
</style>
