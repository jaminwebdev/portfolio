<template>
  <section :class="['myStack', type]">
    <SvgSeparator type="moving" fill="var(--primary-page-background)" custHeight="100px" class="top" v-if="getTheme === 'slanted'"></SvgSeparator>
    <h2 class="myStack__heading">More Tech <span :class="getTheme === 'minimal' ? 'secondaryHighlight' : ''">I Love</span></h2>
    <div class="myStack__cardContainer">
      <AppCard :type="getThemeStackCards" :borderRadius="getThemeBorderRadius" bgColor="transparent" borderColor="#fff">
        <template #icons>
          <BaseIcon icon="nuxt" bordered clickable :height="70" :width="70"> </BaseIcon>
          <BaseIcon icon="supabase" bordered clickable :height="70" :width="70"> </BaseIcon>
        </template>
        <template #heading>
          <h3 class="textCentered" style="color: #fff">Nuxt & <br />Supabase</h3>
        </template>
      </AppCard>
      <AppCard :type="getThemeStackCards" :borderRadius="getThemeBorderRadius" bgColor="transparent" borderColor="#fff">
        <template #icons>
          <BaseIcon icon="next" bordered clickable :height="70" :width="70"> </BaseIcon>
          <BaseIcon icon="node" bordered clickable :height="70" :width="70"> </BaseIcon>
          <BaseIcon icon="mongo" bordered clickable :height="70" :width="70"> </BaseIcon>
        </template>
        <template #heading>
          <h3 class="textCentered" style="color: #fff">Next, Node & Mongo</h3>
        </template>
      </AppCard>
      <AppCard :type="getThemeStackCards" :borderRadius="getThemeBorderRadius" bgColor="transparent" borderColor="#fff">
        <template #icons>
          <BaseIcon icon="angular" bordered clickable :height="70" :width="70"> </BaseIcon>
          <BaseIcon icon="firebase" bordered clickable :height="70" :width="70"> </BaseIcon>
        </template>
        <template #heading>
          <h3 class="textCentered" style="color: #fff">Angular & Firebase</h3>
        </template>
      </AppCard>
    </div>
    <SvgSeparator type="moving" fill="var(--primary-page-background)" custHeight="100px" class="bottom" v-if="getTheme === 'slanted'"></SvgSeparator>
  </section>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  props: ["type"],
  computed: {
    ...mapGetters("theme", ["getTheme", "getThemeBorderRadius", "getThemeStackCards"]),
  },
}
</script>

<style lang="scss" scoped>
@use "@/assets/css/_variables.scss";
.myStack {
  overflow: hidden;
}

.minimal {
  background: #edf2f7;
  display: grid;
  grid-template-columns: var(--default-full-layout-grid);
  padding: 150px 0;
  position: relative;

  & .myStack {
    &__heading {
      text-align: center;
      grid-column: center-start/center-end;
      margin-bottom: 50px;
    }

    &__cardContainer {
      grid-column: center-start/center-end;

      display: grid;
      grid-gap: 25px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
}

.slanted {
  display: grid;
  grid-template-columns: var(--default-full-layout-grid);
  padding: 175px 0;
  background: url("/Main Background Vector.svg");
  background-size: cover;
  background-position: center center;
  position: relative;

  & .myStack {
    &__heading {
      text-align: center;
      color: #fafaff;
      grid-column: center-start/center-end;
      margin-bottom: 50px;
    }

    &__cardContainer {
      grid-column: center-start/center-end;

      display: grid;
      grid-gap: 25px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
}

.rounded {
  padding: 80px 25px;
  background: url("/Main Background Vector.svg");
  background-size: cover;
  background-position: center center;
  border-radius: 30px;

  & .myStack {
    &__heading {
      text-align: center;
      color: #fafaff;
      margin-bottom: 50px;
    }

    &__cardContainer {
      display: grid;
      grid-gap: 25px;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
    }

    @media only screen and (max-width: variables.$bp-medium) {
      padding: 75px 15px;
      grid-column: full-start/full-end;

      &__cardContainer {
        grid-gap: 45px;
      }
    }
  }
}
</style>
