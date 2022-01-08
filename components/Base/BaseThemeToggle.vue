<template>
  <button class="header__toggle theme-toggle" @click.prevent="changeTheme">
    <span class="moon"></span>
    <span class="sun"></span>
    <small class="sun__ray"></small>
    <small class="sun__ray"></small>
    <small class="sun__ray"></small>
    <small class="sun__ray"></small>
    <small class="sun__ray"></small>
    <small class="sun__ray"></small>
  </button>
</template>

<script>
export default {
  mounted() {
    if (localStorage.getItem('theme') === 'light') {
      document.querySelector('html').classList.add('light-theme')
    }
  },
  methods: {
    changeTheme() {
      const htmlClassList = document.querySelector('html').classList
      htmlClassList.toggle('light-theme')
      if (htmlClassList.contains('light-theme')) {
        localStorage.setItem('theme', 'light')
      } else {
        localStorage.removeItem('theme')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-toggle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.7rem;
  width: 3.7rem;
  padding: 0;
  background: var(--main-bg);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  .sun {
    position: relative;
    z-index: 2;
    background-color: var(--toggle-color-secondary);
    height: 3.4rem;
    width: 3.4rem;
    border-radius: 50%;
    border: 0.4rem solid var(--main-bg);
    transition: background-color 0.2s, border-color 0.2s;
  }
  .sun__ray {
    width: 0.2rem;
    background: var(--toggle-color-secondary);
    display: block;
    height: 121%;
    position: absolute;
    transition: 0.4s all, height 0.3s ease-in-out;
    $columns: 12;
    @for $i from 1 through $columns {
      &:nth-child(#{$i}) {
        transform: rotate(calc(#{$i} * calc(360deg / #{$columns})));
      }
    }
  }
  @include hover {
    &:hover .sun__ray,
    &:focus-visible .sun__ray {
      $columns: 12;
      @for $i from 1 through $columns {
        &:nth-child(#{$i}) {
          transform: rotate(calc(calc(#{$i} * calc(360deg / #{$columns})) - 20deg));
        }
      }
    }
  }
  @include active {
    &:active .sun__ray {
      $columns: 12;
      @for $i from 1 through $columns {
        &:nth-child(#{$i}) {
          transform: rotate(calc(calc(#{$i} * calc(360deg / #{$columns})) - 20deg));
        }
      }
    }
  }
}
.moon {
  height: 2.8rem;
  width: 2.8rem;
  position: absolute;
  background-color: var(--main-bg);
  border-radius: 50%;
  top: 0;
  right: 0;
  transform: scale(0) translate(25%, -25%);
  z-index: 9;
  transition: transform 0.4s, background-color 0.2s;
  transform-origin: right;
}
.light-theme {
  @include hover {
    .theme-toggle:hover,
    .theme-toggle:focus-visible {
      .moon {
        transform: scale(1) translate(-3%, -18%);
      }
    }
  }
  @include active {
    .theme-toggle:active {
      .moon {
        transform: scale(1) translate(-3%, -18%);
      }
    }
  }
  .moon {
    transform: scale(1) translate(11%, -11%);
  }
  .theme-toggle .sun__ray {
    height: 0;
    transition: 0.4s, transform 0.4s, height 0.2s 0.1s;
    $columns: 12;
    @for $i from 1 through $columns {
      &:nth-child(#{$i}) {
        transform: rotate(calc(calc(#{$i} * calc(360deg / #{$columns})) - 45deg));
      }
    }
  }
}
</style>
