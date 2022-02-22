<template>
  <section :class="['portfolio', type, 'myContainer']">
    <h2 class="portfolio__heading">My <span class="secondaryHighlight">Portfolio</span></h2>
    <OverlapCard class="portfolio__featPortfolio desktopVisible" :bgImg="featPortfolio.coverImg" :borderRadius="getTheme !== 'default'">
      <template #icons>
        <BaseIcon v-for="icon in featPortfolio.icons" :key="icon" :icon="icon" bordered clickable :height="50" :width="50"> </BaseIcon>
      </template>
      <template #tag>
        <a href="github.com" target="_blank">
          <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 2.5C13.3585 2.5 11.733 2.82332 10.2165 3.45151C8.69989 4.07969 7.3219 5.00043 6.16117 6.16117C3.81696 8.50537 2.5 11.6848 2.5 15C2.5 20.525 6.0875 25.2125 11.05 26.875C11.675 26.975 11.875 26.5875 11.875 26.25V24.1375C8.4125 24.8875 7.675 22.4625 7.675 22.4625C7.1 21.0125 6.2875 20.625 6.2875 20.625C5.15 19.85 6.375 19.875 6.375 19.875C7.625 19.9625 8.2875 21.1625 8.2875 21.1625C9.375 23.0625 11.2125 22.5 11.925 22.2C12.0375 21.3875 12.3625 20.8375 12.7125 20.525C9.9375 20.2125 7.025 19.1375 7.025 14.375C7.025 12.9875 7.5 11.875 8.3125 10.9875C8.1875 10.675 7.75 9.375 8.4375 7.6875C8.4375 7.6875 9.4875 7.35 11.875 8.9625C12.8625 8.6875 13.9375 8.55 15 8.55C16.0625 8.55 17.1375 8.6875 18.125 8.9625C20.5125 7.35 21.5625 7.6875 21.5625 7.6875C22.25 9.375 21.8125 10.675 21.6875 10.9875C22.5 11.875 22.975 12.9875 22.975 14.375C22.975 19.15 20.05 20.2 17.2625 20.5125C17.7125 20.9 18.125 21.6625 18.125 22.825V26.25C18.125 26.5875 18.325 26.9875 18.9625 26.875C23.925 25.2 27.5 20.525 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z"
            />
          </svg>
        </a>
      </template>
      <template #heading>
        <h3>{{ featPortfolio.heading }}</h3>
      </template>
      <template #body>
        <p>
          {{ featPortfolio.body }}
        </p>
      </template>
      <template #btns>
        <b-button size="is-small" tag="router-link" to="/" type="is-primary"> Details </b-button>
        <b-button size="is-small" tag="router-link" to="/" type="is-info is-light"> See Project </b-button>
      </template>
    </OverlapCard>
    <AppCard :type="getThemeCards" id="latestProject" :bgImg="featPortfolio.coverImg" class="portfolio__featPortfolio mobileVisible">
      <template #img>
        <nuxt-img :src="featPortfolio.coverImg" />
        <svg-separator type="tilt" fill="#fff" custHeight="50px" class="bottom tiltDownLeft" style="z-index: 15"></svg-separator>
      </template>
      <template #icons>
        <BaseIcon v-for="icon in featPortfolio.icons" :key="icon" :icon="icon" bordered clickable :height="50" :width="50"> </BaseIcon>
      </template>
      <template #tag>
        <a href="github.com" target="_blank">
          <svg viewBox="0 0 30 30" :fill="getTheme === 'default' ? '#444' : '#fff'" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 2.5C13.3585 2.5 11.733 2.82332 10.2165 3.45151C8.69989 4.07969 7.3219 5.00043 6.16117 6.16117C3.81696 8.50537 2.5 11.6848 2.5 15C2.5 20.525 6.0875 25.2125 11.05 26.875C11.675 26.975 11.875 26.5875 11.875 26.25V24.1375C8.4125 24.8875 7.675 22.4625 7.675 22.4625C7.1 21.0125 6.2875 20.625 6.2875 20.625C5.15 19.85 6.375 19.875 6.375 19.875C7.625 19.9625 8.2875 21.1625 8.2875 21.1625C9.375 23.0625 11.2125 22.5 11.925 22.2C12.0375 21.3875 12.3625 20.8375 12.7125 20.525C9.9375 20.2125 7.025 19.1375 7.025 14.375C7.025 12.9875 7.5 11.875 8.3125 10.9875C8.1875 10.675 7.75 9.375 8.4375 7.6875C8.4375 7.6875 9.4875 7.35 11.875 8.9625C12.8625 8.6875 13.9375 8.55 15 8.55C16.0625 8.55 17.1375 8.6875 18.125 8.9625C20.5125 7.35 21.5625 7.6875 21.5625 7.6875C22.25 9.375 21.8125 10.675 21.6875 10.9875C22.5 11.875 22.975 12.9875 22.975 14.375C22.975 19.15 20.05 20.2 17.2625 20.5125C17.7125 20.9 18.125 21.6625 18.125 22.825V26.25C18.125 26.5875 18.325 26.9875 18.9625 26.875C23.925 25.2 27.5 20.525 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z"
            />
          </svg>
        </a>
      </template>
      <template #heading>
        <h3>{{ featPortfolio.heading }}</h3>
      </template>
      <template #body>
        <p>
          {{ featPortfolio.body }}
        </p>
      </template>
      <template #btns>
        <b-button size="is-small" tag="router-link" to="/" type="is-primary">
          <svg class="icon-left" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.5 21.5H2M23.5 43V21.5V43ZM23.5 21.5V0V21.5ZM23.5 21.5H45H23.5Z"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
          Details
        </b-button>
        <b-button size="is-small" tag="router-link" to="/" type="is-info is-light">
          View
          <svg class="icon-right" viewBox="0 0 54 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M53.6424 18.4172C47.7714 6.16565 38.8968 0 27 0C15.097 0 6.2286 6.16564 0.357618 18.4233C0.12213 18.9173 0 19.4568 0 20.0031C0 20.5493 0.12213 21.0889 0.357618 21.5828C6.2286 33.8344 15.1032 40 27 40C38.903 40 47.7714 33.8344 53.6424 21.5767C54.1192 20.5828 54.1192 19.4294 53.6424 18.4172V18.4172ZM27 35.5828C17.0106 35.5828 9.69669 30.5644 4.53791 20C9.69669 9.43558 17.0106 4.41718 27 4.41718C36.9893 4.41718 44.3033 9.43558 49.4621 20C44.3095 30.5644 36.9955 35.5828 27 35.5828ZM26.7523 9.20245C20.7326 9.20245 15.8526 14.0368 15.8526 20C15.8526 25.9632 20.7326 30.7975 26.7523 30.7975C32.7719 30.7975 37.652 25.9632 37.652 20C37.652 14.0368 32.7719 9.20245 26.7523 9.20245ZM26.7523 26.8712C22.9188 26.8712 19.8161 23.7975 19.8161 20C19.8161 16.2025 22.9188 13.1288 26.7523 13.1288C30.5857 13.1288 33.6884 16.2025 33.6884 20C33.6884 23.7975 30.5857 26.8712 26.7523 26.8712Z"
            />
          </svg>
        </b-button>
      </template>
    </AppCard>
    <div class="portfolio__cardContainer">
      <div v-for="portfolio in portfolios" :key="portfolio.heading">
        <AppCard :type="getThemeCards" :bgImg="portfolio.coverImg">
          <template #img>
            <nuxt-img :src="portfolio.coverImg" />
            <svg-separator type="tilt" fill="#fff" custHeight="50px" class="bottom tiltDownLeft" style="z-index: 15"></svg-separator>
          </template>
          <template #icons>
            <BaseIcon v-for="icon in portfolio.icons" :key="icon" :icon="icon" bordered clickable :height="50" :width="50"> </BaseIcon>
          </template>
          <template #tag>
            <a href="github.com" target="_blank">
              <svg viewBox="0 0 30 30" fill="#444" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 2.5C13.3585 2.5 11.733 2.82332 10.2165 3.45151C8.69989 4.07969 7.3219 5.00043 6.16117 6.16117C3.81696 8.50537 2.5 11.6848 2.5 15C2.5 20.525 6.0875 25.2125 11.05 26.875C11.675 26.975 11.875 26.5875 11.875 26.25V24.1375C8.4125 24.8875 7.675 22.4625 7.675 22.4625C7.1 21.0125 6.2875 20.625 6.2875 20.625C5.15 19.85 6.375 19.875 6.375 19.875C7.625 19.9625 8.2875 21.1625 8.2875 21.1625C9.375 23.0625 11.2125 22.5 11.925 22.2C12.0375 21.3875 12.3625 20.8375 12.7125 20.525C9.9375 20.2125 7.025 19.1375 7.025 14.375C7.025 12.9875 7.5 11.875 8.3125 10.9875C8.1875 10.675 7.75 9.375 8.4375 7.6875C8.4375 7.6875 9.4875 7.35 11.875 8.9625C12.8625 8.6875 13.9375 8.55 15 8.55C16.0625 8.55 17.1375 8.6875 18.125 8.9625C20.5125 7.35 21.5625 7.6875 21.5625 7.6875C22.25 9.375 21.8125 10.675 21.6875 10.9875C22.5 11.875 22.975 12.9875 22.975 14.375C22.975 19.15 20.05 20.2 17.2625 20.5125C17.7125 20.9 18.125 21.6625 18.125 22.825V26.25C18.125 26.5875 18.325 26.9875 18.9625 26.875C23.925 25.2 27.5 20.525 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z"
                />
              </svg>
            </a>
          </template>
          <template #heading>
            <h3>{{ portfolio.heading }}</h3>
          </template>
          <template #body>
            <p>
              {{ portfolio.body }}
            </p>
          </template>
          <template #btns>
            <b-button size="is-small" tag="router-link" to="/" type="is-primary">
              <svg class="icon-left" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.5 21.5H2M23.5 43V21.5V43ZM23.5 21.5V0V21.5ZM23.5 21.5H45H23.5Z"
                  stroke="currentColor"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
              Details
            </b-button>
            <b-button size="is-small" tag="router-link" to="/" type="is-info is-light">
              View
              <svg class="icon-right" viewBox="0 0 54 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M53.6424 18.4172C47.7714 6.16565 38.8968 0 27 0C15.097 0 6.2286 6.16564 0.357618 18.4233C0.12213 18.9173 0 19.4568 0 20.0031C0 20.5493 0.12213 21.0889 0.357618 21.5828C6.2286 33.8344 15.1032 40 27 40C38.903 40 47.7714 33.8344 53.6424 21.5767C54.1192 20.5828 54.1192 19.4294 53.6424 18.4172V18.4172ZM27 35.5828C17.0106 35.5828 9.69669 30.5644 4.53791 20C9.69669 9.43558 17.0106 4.41718 27 4.41718C36.9893 4.41718 44.3033 9.43558 49.4621 20C44.3095 30.5644 36.9955 35.5828 27 35.5828ZM26.7523 9.20245C20.7326 9.20245 15.8526 14.0368 15.8526 20C15.8526 25.9632 20.7326 30.7975 26.7523 30.7975C32.7719 30.7975 37.652 25.9632 37.652 20C37.652 14.0368 32.7719 9.20245 26.7523 9.20245ZM26.7523 26.8712C22.9188 26.8712 19.8161 23.7975 19.8161 20C19.8161 16.2025 22.9188 13.1288 26.7523 13.1288C30.5857 13.1288 33.6884 16.2025 33.6884 20C33.6884 23.7975 30.5857 26.8712 26.7523 26.8712Z"
                />
              </svg>
            </b-button>
          </template>
        </AppCard>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  props: ["portfolios", "featPortfolio", "type"],
  computed: {
    ...mapGetters("theme", ["getTheme", "getThemeCards"]),
  },
}
</script>

<style lang="scss" scoped>
@use "@/assets/css/_variables.scss";
.portfolio {
  padding: 100px 20px 150px;

  &__heading {
    text-align: center;
    margin-bottom: 50px;
  }

  &__cardContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
    justify-content: center;

    margin-top: 35px;

    @media only screen and (max-width: variables.$bp-medium) {
      row-gap: 50px;
    }
  }
}
</style>
