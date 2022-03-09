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
                I build websites and applications while leveraging blazingly fast tools and
                frameworks like Vue & Nuxt JS, React & Next JS, Angular, and Node.
              </p>
              <b-button
                size="is-medium"
                :type="getTheme === 'minimal' ? 'is-primary' : 'is-primary is-light'"
                @click="showWebsiteForm"
              >
                My Portfolio
                <svg
                  viewBox="0 0 30 37"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon-right"
                >
                  <path
                    d="M28.9535 0H5.23256C3.84528 0.00159908 2.51527 0.563757 1.53431 1.56315C0.55336 2.56253 0.00156958 3.91754 0 5.33088V35.1838C0 35.4666 0.110257 35.7378 0.306516 35.9377C0.502775 36.1377 0.76896 36.25 1.04651 36.25H26.1628C26.4403 36.25 26.7065 36.1377 26.9028 35.9377C27.099 35.7378 27.2093 35.4666 27.2093 35.1838C27.2093 34.9011 27.099 34.6299 26.9028 34.4299C26.7065 34.23 26.4403 34.1176 26.1628 34.1176H2.09302V33.7623C2.09395 32.9142 2.42501 32.1012 3.01359 31.5016C3.60217 30.902 4.40018 30.5647 5.23256 30.5637H28.9535C29.231 30.5637 29.4972 30.4514 29.6935 30.2514C29.8897 30.0515 30 29.7803 30 29.4975V1.06618C30 0.783409 29.8897 0.512223 29.6935 0.312276C29.4972 0.112329 29.231 0 28.9535 0ZM17.26 2.13235H22.3256V15.993L20.42 13.0072C20.2388 12.8688 20.0164 12.794 19.79 12.7941C19.5636 12.7941 19.3411 12.8689 19.16 13.0074L17.26 15.9923V2.13235ZM27.907 28.4314H5.23256C4.09978 28.4302 2.99754 28.8055 2.09302 29.5002V5.33088C2.09395 4.48287 2.42501 3.66986 3.01359 3.07022C3.60217 2.47058 4.40018 2.13329 5.23256 2.13235H15.16V18.125C15.16 18.323 15.2178 18.5172 15.32 18.6856C15.4222 18.8541 15.5661 18.9902 15.74 19.0788C15.9139 19.1673 16.1064 19.2048 16.3 19.187C16.4936 19.1692 16.6845 19.0968 16.84 18.9779L19.79 15.193L22.7444 18.9779C22.8998 19.0967 23.0847 19.1691 23.2783 19.1869C23.4719 19.2046 23.6664 19.1672 23.8403 19.0786C24.0141 18.9901 24.1603 18.854 24.2625 18.6855C24.3647 18.5171 24.4188 18.323 24.4188 18.125V2.13235H27.9072L27.907 28.4314Z"
                    fill="currentColor"
                  />
                  <path d="M26.5 34.5L29 30" stroke="currentColor" stroke-width="1.5" />
                </svg>
              </b-button>
            </div>
            <WebsiteQuestionnaire v-else :light="getTheme !== 'minimal'"> </WebsiteQuestionnaire>
          </transition>
        </template>
        <template #rightColumnOfTwo>
          <img
            src="/avatars/smiling-waving.svg"
            alt="Avatar of me smiling & waiving"
            id="headerAvatar"
          />
          <nuxt-img id="laptopMockup" src="/leaning-laptop.png" />
        </template>
        <template #svgSeparatorBottom>
          <SvgSeparator
            type="tilt"
            fill="var(--primary-page-background)"
            custHeight="125px"
            class="bottom tiltDownLeft"
          ></SvgSeparator>
        </template>
      </AppHero>
    </transition>
    <main>
      <Portfolio :portfolios="portfolios" :featPortfolio="featPortfolio" :type="getTheme" />
      <Services :type="getTheme" />
      <FavStack :type="getTheme" />
      <MoreStacks :type="getTheme" />
      <OtherTech :type="getTheme" :technologies="technologies" />
      <LearnJS :type="getTheme" />
      <CTARow>
        <template #leftColumnOfTwo>
          <h2>Let’s Chat</h2>
          <p>Drop me a line and let’s make something happen!</p>
        </template>
        <template #rightColumnOfTwo>
          <b-button size="is-medium" tag="router-link" to="/" type="is-primary is-light">
            Let's Do This!
          </b-button>
          <img
            src="/avatars/casual-talkative.svg"
            alt="Avatar of me gesturing towards a contact button"
            id="catRowAvatar"
          />
        </template>
      </CTARow>
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
    ...mapGetters("theme", [
      "getTheme",
      "getThemeBorderRadius",
      "getThemeCards",
      "getThemeStackCards",
    ]),
  },
}
</script>

<style lang="scss">
@use "@/assets/css/_variables.scss";
.homeContainer {
  overflow-x: hidden;

  &.minimal {
    & .heroContainer {
      padding: 200px 0 150px;

      @media only screen and (max-width: variables.$bp-medium) {
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

      @media only screen and (max-width: variables.$bp-medium) {
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

      @media only screen and (max-width: variables.$bp-medium) {
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
      @media only screen and (max-width: variables.$bp-medium) {
        display: none;
      }
    }
  }
}
</style>
