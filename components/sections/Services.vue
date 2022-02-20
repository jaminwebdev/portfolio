<template>
  <section :class="['services', type]">
    <SvgSeparator type="tilt" fill="var(--primary-page-background)" custHeight="100px" class="top" v-if="type === 'slanted'"></SvgSeparator>
    <MyServiceTabs class="services__tabs" :light="type !== 'minimal'"></MyServiceTabs>
    <SvgSeparator
      type="tilt"
      fill="var(--primary-page-background)"
      custHeight="100px"
      class="bottom tiltDownRight"
      v-if="type === 'slanted'"
    ></SvgSeparator>
  </section>
</template>

<script>
export default {
  props: ["type"],
}
</script>

<style lang="scss">
.services {
  &.slanted {
    overflow: hidden;
    background: url("/BGBanner-alt.svg");
    padding: 150px 0;
    background-size: cover;
    background-position: center center;
    display: grid;
    grid-template-columns: var(--default-full-layout-grid);
    position: relative;

    & .services__tabs {
      grid-column: center-start/center-end;
    }
  }

  &.rounded {
    background: url("/BGBanner-alt.svg");
    padding: 100px 60px;
    background-size: cover;
    background-position: center center;
    border-radius: 30px;

    @media only screen and (max-width: 1000px) {
      padding: 75px 20px;
      grid-column: full-start/full-end;
    }
  }

  &.minimal {
    padding: 150px 0;
    background: #edf2f7;

    display: grid;
    grid-template-columns: var(--default-full-layout-grid);

    & .services__heading {
      grid-column: center-start/center-end;
    }

    & .services__tabs {
      grid-column: center-start/center-end;
    }
  }
}
</style>
