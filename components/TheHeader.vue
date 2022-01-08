<template>
  <header class="header">
    <div class="container header__container">
      <BaseLogo />
      <BaseThemeToggle />
    </div>
  </header>
</template>

<script>
import BaseLogo from '@/components/Base/BaseLogo'
import BaseThemeToggle from '@/components/Base/BaseThemeToggle'

export default {
  components: {
    BaseLogo,
    BaseThemeToggle
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 40px 0;
  @include w767 {
    padding: 20px 0;
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
