<template>
  <div :class="['theme__container', open ? 'open' : '']">
    <div class="theme__drawer">
      <div class="theme__drawerClose" v-if="open" @click="toggleDrawer">
        <svg viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.5 31.5C9.7825 31.5 3.5 25.2175 3.5 17.5C3.5 9.7825 9.7825 3.5 17.5 3.5C25.2175 3.5 31.5 9.7825 31.5 17.5C31.5 25.2175 25.2175 31.5 17.5 31.5ZM17.5 0C7.8225 0 0 7.8225 0 17.5C0 27.1775 7.8225 35 17.5 35C27.1775 35 35 27.1775 35 17.5C35 7.8225 27.1775 0 17.5 0ZM22.0325 10.5L17.5 15.0325L12.9675 10.5L10.5 12.9675L15.0325 17.5L10.5 22.0325L12.9675 24.5L17.5 19.9675L22.0325 24.5L24.5 22.0325L19.9675 17.5L24.5 12.9675L22.0325 10.5Z"
          />
        </svg>
      </div>
      <h4>Don't like this layout?</h4>
      <button @click="onColorModeChange">Change mode</button>
    </div>
    <div class="theme__drawerToggle" @click="toggleDrawer" v-if="!open">
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25 50C21.717 50 18.4661 49.3534 15.4329 48.097C12.3998 46.8406 9.6438 44.9991 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C38.75 0 50 10 50 22.5C50 26.4782 48.4196 30.2936 45.6066 33.1066C42.7936 35.9196 38.9782 37.5 35 37.5H30.5C29.75 37.5 29.25 38 29.25 38.75C29.25 39 29.5 39.25 29.5 39.5C30.5 40.75 31 42.25 31 43.75C31.25 47.25 28.5 50 25 50V50ZM25 5C19.6957 5 14.6086 7.10714 10.8579 10.8579C7.10714 14.6086 5 19.6957 5 25C5 30.3043 7.10714 35.3914 10.8579 39.1421C14.6086 42.8929 19.6957 45 25 45C25.75 45 26.25 44.5 26.25 43.75C26.25 43.25 26 43 26 42.75C25 41.5 24.5 40.25 24.5 38.75C24.5 35.25 27.25 32.5 30.75 32.5H35C37.6522 32.5 40.1957 31.4464 42.0711 29.5711C43.9464 27.6957 45 25.1522 45 22.5C45 12.75 36 5 25 5V5ZM11.25 20C13.25 20 15 21.75 15 23.75C15 25.75 13.25 27.5 11.25 27.5C9.25 27.5 7.5 25.75 7.5 23.75C7.5 21.75 9.25 20 11.25 20ZM18.75 10C20.75 10 22.5 11.75 22.5 13.75C22.5 15.75 20.75 17.5 18.75 17.5C16.75 17.5 15 15.75 15 13.75C15 11.75 16.75 10 18.75 10ZM31.25 10C33.25 10 35 11.75 35 13.75C35 15.75 33.25 17.5 31.25 17.5C29.25 17.5 27.5 15.75 27.5 13.75C27.5 11.75 29.25 10 31.25 10ZM38.75 20C40.75 20 42.5 21.75 42.5 23.75C42.5 25.75 40.75 27.5 38.75 27.5C36.75 27.5 35 25.75 35 23.75C35 21.75 36.75 20 38.75 20Z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  data() {
    return {
      open: false,
    }
  },
  computed: {
    ...mapGetters("theme", ["getColorMode"]),
  },
  methods: {
    ...mapActions("theme", ["setFade", "changeColorMode"]),
    toggleDrawer() {
      this.open = !this.open
    },
    onColorModeChange() {
      const colorState = this.getColorMode
      const newColorMode = colorState === "light" ? "dark" : "light"
      this.setFade(true)
      setTimeout(() => {
        this.changeColorMode(newColorMode)
        const docRoot = document.documentElement
        if (newColorMode === "dark") {
          docRoot.style.setProperty("--primary-page-background", "#2f495e")
          docRoot.style.setProperty("--secondary-page-background", "#37546d")
          docRoot.style.setProperty("--primary-font-color", "#fafaff")
          docRoot.style.setProperty("--primary-color-dark", "#fafaff")
        } else {
          docRoot.style.setProperty("--primary-page-background", "#fafaff")
          docRoot.style.setProperty("--secondary-page-background", "#edf2f7")
          docRoot.style.setProperty("--primary-font-color", "#2f495e")
          docRoot.style.setProperty("--primary-color-dark", "#2f495e")
        }
        this.setFade(false)
      }, 300)
    },
  },
}
</script>

<style lang="scss">
@use "@/assets/css/_variables.scss";
.theme {
  &__container {
    position: fixed;
    z-index: 100;
    bottom: 5%;
    left: -220px;
    transition: all 0.25s ease-out;

    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 25px;
    align-items: end;

    &.open {
      left: 10px;
    }

    @media only screen and (max-width: variables.$bp-medium) {
      grid-gap: 25px;
      left: -230px;
      bottom: 3%;
    }
  }

  &__drawerToggle {
    width: 45px;
    height: 45px;
    border-radius: 50%;

    display: grid;
    justify-items: center;
    align-items: center;

    background: linear-gradient(var(--primary-color-dark), var(--primary-color-light));
    position: relative;
    transition: all 0.4s ease-out;

    @media only screen and (max-width: variables.$bp-medium) {
      width: 45px;
      height: 45px;
    }

    &::before {
      position: absolute;
      content: "";
      left: 5%;
      right: 5%;
      top: 5%;
      bottom: 5%;
      background: #fff;
      border-radius: 50%;
      transition: all 0.4s ease-out;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.1);

      &::before {
        background: linear-gradient(var(--primary-color-dark), var(--primary-color-light));
      }

      & svg {
        fill: #fff;
      }
    }

    & svg {
      width: 25px;
      height: 25px;
      z-index: 10;
      fill: #0d2772;
      transition: all 0.3s ease-out;
    }
  }

  &__drawer {
    width: 220px;
    padding: 25px;
    background: #fafaff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.12);
    position: relative;

    & h4 {
      margin-bottom: 15px;
      font-weight: 600;
    }
  }

  &__drawerClose {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;

    display: grid;
    justify-items: center;
    align-items: center;

    transition: all 0.25s ease-out;

    & svg {
      width: 80%;
      height: 80%;
      fill: var(--primary-color-dark);
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.1);

      & svg {
        fill: var(--primary-color-medium);
      }
    }
  }

  &__select {
    border: 1px solid #ccc;
    padding: 15px 7.5px;
    border-radius: 5px;
    width: 100%;
    font-size: 1rem;
    margin-top: 15px;

    &:focus {
      outline: none;
      box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.12);
    }
  }

  &__selectLabel {
    font-family: var(--default-body-font);
    font-size: 16px;
    margin-bottom: 15px;
    color: var(--primary-font-color);
    font-weight: 500;
  }
}
</style>
