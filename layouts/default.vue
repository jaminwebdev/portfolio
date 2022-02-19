<template>
  <div :class="['app', viewFade ? 'fade' : '']">
    <div class="app__mobileNav">
      <p class="app__mobileNavLink app__mobileNavClose" @click="toggleMobileMenu">
        Close
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.5 31.5C9.7825 31.5 3.5 25.2175 3.5 17.5C3.5 9.7825 9.7825 3.5 17.5 3.5C25.2175 3.5 31.5 9.7825 31.5 17.5C31.5 25.2175 25.2175 31.5 17.5 31.5ZM17.5 0C7.8225 0 0 7.8225 0 17.5C0 27.1775 7.8225 35 17.5 35C27.1775 35 35 27.1775 35 17.5C35 7.8225 27.1775 0 17.5 0ZM22.0325 10.5L17.5 15.0325L12.9675 10.5L10.5 12.9675L15.0325 17.5L10.5 22.0325L12.9675 24.5L17.5 19.9675L22.0325 24.5L24.5 22.0325L19.9675 17.5L24.5 12.9675L22.0325 10.5Z"
            fill="#fff"
          />
        </svg>
      </p>
      <div class="app__mobileNavLinks"></div>
    </div>
    <div :class="[isMobileNavOpen ? 'app__mobileOpen' : '']">
      <div class="app__layout">
        <Nuxt class="app__layoutMain" />
        <Footer class="app__layoutFooter"></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {
  data() {
    return {
      mobileOpen: false,
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileOpen = !this.mobileOpen
    },
  },
  computed: {
    ...mapState("theme", ["viewFade"]),
    ...mapGetters("theme", ["getTheme"]),
    isMobileNavOpen() {
      return this.mobileOpen
    },
  },
  layoutTransition: {
    name: "fade",
    mode: "out-in",
  },
}
</script>

<style lang="scss">
.app {
  position: relative;
  transition: opacity 0.3s ease-out;

  &__layout {
    position: relative;
    transition: all 0.6s ease-out;
    background-color: #fafaff;

    &Nav,
    &Footer {
      z-index: 20;
    }

    &Main {
      z-index: 10;
    }
  }

  &__mobileOpen {
    perspective: 400rem;
    z-index: 10;

    & .app__layout {
      position: absolute;
      transform: rotateY(65deg);
      transform-origin: left center;
      box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.25);
    }
  }

  &__mobileNav {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    background: #2c3e50;

    &Links {
      position: absolute;
      top: 20rem;
      right: 7%;

      display: grid;
      grid-template-columns: 1fr;
    }

    &Link {
      color: #fff;
      text-decoration: none;
      font-size: 2rem;
      margin-bottom: 3rem;

      display: flex;
      align-items: center;

      &:hover {
        color: var(--primary-color-light);

        & svg {
          fill: var(--primary-color-light);
        }
      }

      & svg {
        fill: #fff;
        width: 2.5rem;
        margin-right: 1.5rem;
      }
    }

    &Close {
      position: absolute;
      top: 4rem;
      right: 5rem;

      & svg {
        margin-left: 1rem;
      }
    }
  }

  //for theme swapping
  &.fade {
    opacity: 0;
  }
}
</style>
