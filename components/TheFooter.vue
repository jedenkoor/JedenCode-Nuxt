<template>
  <footer class="footer">
    <div class="container footer__container">
      <BaseLogo />
      <span class="footer__copyright">JedenCode © {{ currentYear }}</span>
    </div>
  </footer>
</template>

<script>
import BaseLogo from '@/components/Base/BaseLogo'

export default {
  components: {
    BaseLogo
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 4rem 0;
  @include w767 {
    padding: 2rem 0;
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include w767 {
      flex-direction: column;
      align-items: center;
    }
  }
  &__copyright {
    @include w767 {
      margin-top: 2rem;
    }
  }
}
</style>
