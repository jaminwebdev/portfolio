<template>
  <div :class="[getTheme, 'homeContainer']">
    <transition name="fade-delay" appear>
      <AppHero :type="getTheme">
        <template #leftColumnOfTwo>
          <transition name="fade" mode="out-in">
            <div v-if="!showForm">
              <h1>
                Hi, I'm Jamin
                <br />
                I'm a
                <span class="secondaryHighlight">Front End </span>
                Engineer.
              </h1>
              <p>
                I build websites and applications while leveraging blazingly fast tools and frameworks like Vue & Nuxt JS, React & Next JS, Angular,
                and Node.
              </p>
              <b-button size="is-medium" :type="getTheme === 'minimal' ? 'is-primary' : 'is-primary is-light'" @click="showWebsiteForm">
                My Portfolio
                <svg class="icon-right" viewBox="0 0 40 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H33.3333C34.3942 0 35.4116 0.421427 36.1618 1.17157C36.9119 1.92172 37.3333 2.93913 37.3333 4V22.6667C37.3333 23.7275 36.9119 24.7449 36.1618 25.4951C35.4116 26.2452 34.3942 26.6667 33.3333 26.6667H16.5333V24H33.3333C33.687 24 34.0261 23.8595 34.2761 23.6095C34.5262 23.3594 34.6667 23.0203 34.6667 22.6667V4C34.6667 3.64638 34.5262 3.30724 34.2761 3.05719C34.0261 2.80714 33.687 2.66667 33.3333 2.66667H4C3.64638 2.66667 3.30724 2.80714 3.05719 3.05719C2.80714 3.30724 2.66667 3.64638 2.66667 4V8H0V4Z"
                  />
                  <path
                    d="M16.5334 32.0002H38.6668C39.0204 32.0002 39.3595 31.8597 39.6096 31.6096C39.8596 31.3596 40.0001 31.0205 40.0001 30.6668C40.0001 30.3132 39.8596 29.9741 39.6096 29.724C39.3595 29.474 39.0204 29.3335 38.6668 29.3335H16.5334V32.0002Z"
                  />
                  <path
                    d="M5.86672 25.6001C5.58382 25.6001 5.31251 25.7125 5.11247 25.9125C4.91243 26.1126 4.80005 26.3839 4.80005 26.6668C4.80005 26.9497 4.91243 27.221 5.11247 27.421C5.31251 27.6211 5.58382 27.7334 5.86672 27.7334H8.00005C8.28295 27.7334 8.55426 27.6211 8.7543 27.421C8.95433 27.221 9.06672 26.9497 9.06672 26.6668C9.06672 26.3839 8.95433 26.1126 8.7543 25.9125C8.55426 25.7125 8.28295 25.6001 8.00005 25.6001H5.86672Z"
                  />
                  <path
                    d="M0.533447 13.5756C0.533447 12.8041 0.822426 12.0641 1.33681 11.5186C1.8512 10.973 2.54885 10.6665 3.2763 10.6665H10.5906C11.318 10.6665 12.0157 10.973 12.5301 11.5186C13.0445 12.0641 13.3334 12.8041 13.3334 13.5756V29.0907C13.3334 29.8623 13.0445 30.6022 12.5301 31.1478C12.0157 31.6933 11.318 31.9998 10.5906 31.9998H3.2763C2.54885 31.9998 1.8512 31.6933 1.33681 31.1478C0.822426 30.6022 0.533447 29.8623 0.533447 29.0907V13.5756ZM3.2763 12.6059C3.03382 12.6059 2.80127 12.7081 2.62981 12.8899C2.45835 13.0718 2.36202 13.3184 2.36202 13.5756V29.0907C2.36202 29.3479 2.45835 29.5946 2.62981 29.7764C2.80127 29.9583 3.03382 30.0604 3.2763 30.0604H10.5906C10.8331 30.0604 11.0656 29.9583 11.2371 29.7764C11.4085 29.5946 11.5049 29.3479 11.5049 29.0907V13.5756C11.5049 13.3184 11.4085 13.0718 11.2371 12.8899C11.0656 12.7081 10.8331 12.6059 10.5906 12.6059H3.2763Z"
                  />
                </svg>
              </b-button>
            </div>
          </transition>
        </template>
        <template #rightColumnOfTwo>
          <img src="/avatars/smiling-waving.svg" alt="Avatar of me smiling & waiving" id="headerAvatar" />
          <nuxt-img id="laptopMockup" src="/leaning-laptop.png" />
        </template>
        <template #svgSeparatorBottom>
          <SvgSeparator type="tilt" fill="var(--primary-page-background)" custHeight="125px" class="bottom tiltDownLeft"></SvgSeparator>
        </template>
      </AppHero>
    </transition>
    <main>
      <Portfolio :portfolios="portfolios" :featPortfolio="featPortfolio" :type="getTheme" />
      <Services :type="getTheme" />
      <FavStack :type="getTheme" />
    </main>
  </div>
</template>

<script>
import { portfolios, featPortfolio } from "../helpers/portfolio"
import { technologies } from "../helpers/otherTech"
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      portfolios,
      featPortfolio,
      technologies,
      showForm: false,
    }
  },
  methods: {
    launchIconModal(icon) {
      console.log(`Launching the ${icon} modal`)
    },
    showWebsiteForm() {
      this.showForm = true
    },
  },
  computed: {
    ...mapGetters("theme", ["getTheme", "getThemeBorderRadius", "getThemeCards", "getThemeStackCards"]),
  },
}
</script>

<style lang="scss">
.homeContainer {
  overflow-x: hidden;

  &.minimal {
    & .heroContainer {
      padding: 200px 0 150px;

      @media only screen and (max-width: 1000px) {
        padding: 150px 10px 120px;
        min-height: 600px;

        & .rightColumnOfTwo {
          z-index: 25;

          & #headerAvatar {
            top: initial;
            bottom: -300px;
            right: -320px;
            z-index: 25;
            transform: rotateZ(-20deg) rotateY(180deg) scale(0.7);
          }
        }
      }
    }
  }

  &.slanted {
    & .heroContainer {
      padding: 200px 0 150px;

      @media only screen and (max-width: 1000px) {
        padding-top: 150px;
        min-height: 700px;

        & .rightColumnOfTwo {
          z-index: 25;
        }

        & #headerAvatar {
          top: initial;
          bottom: -250px;
          right: -320px;
          z-index: 25;
          transform: rotateZ(-20deg) rotateY(180deg) scale(0.7);
        }

        & .svgContainer.bottom {
          z-index: 30;

          & svg {
            height: 7.5rem !important;
          }
        }
      }
    }
  }

  &.rounded {
    & .heroContainer {
      padding: 150px 0 75px;

      @media only screen and (max-width: 1000px) {
        padding: 150px 0 100px;

        & #headerAvatar {
          top: initial;
          bottom: -275px;
          right: -320px;
          transform: rotateZ(-20deg) rotateY(180deg) scale(0.7);
        }
      }
    }
  }

  // -- section styles independent of theme --
  & .heroContainer {
    & #headerAvatar {
      position: absolute;
      top: 0;
      right: -17%;
      z-index: -1;
      max-width: none;
      transform: rotate(25deg);

      -webkit-filter: drop-shadow(20px 30px 20px rgba(var(--primary-color-dark-rgb), 0.1));
      filter: drop-shadow(20px 30px 20px rgba(var(--primary-color-dark-rgb), 0.1));
    }

    & .leftColumnOfTwo > div {
      & p {
        margin: 20px 0 35px;
      }
    }

    & #laptopMockup {
      @media only screen and (max-width: 1000px) {
        display: none;
      }
    }
  }
}
</style>
