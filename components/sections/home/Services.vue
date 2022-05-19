<template>
  <section class="services">
    <SvgSeparator
      type="tilt"
      fill="var(--primary-page-background)"
      custHeight="100px"
      class="top"
    ></SvgSeparator>
    <MyServiceTabs class="services__tabs" :light="false"></MyServiceTabs>
    <SvgSeparator
      type="tilt"
      fill="var(--primary-page-background)"
      custHeight="100px"
      class="bottom tiltDownRight"
    ></SvgSeparator>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use "@/assets/css/_variables.scss";
.services {
  padding: 175px 0;
  background: var(--secondary-page-background);

  display: grid;
  grid-template-columns: var(--default-full-layout-grid);
  position: relative;

  & .services__heading {
    grid-column: center-start/center-end;
  }

  & .services__tabs {
    grid-column: center-start/center-end;
  }
}
</style>
