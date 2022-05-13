<template>
  <header class="heroContainer" :style="{ backgroundColor: bgColor }">
    <div class="leftColumnOfTwo">
      <slot name="leftColumnOfTwo"></slot>
    </div>
    <div class="rightColumnOfTwo">
      <slot name="rightColumnOfTwo"></slot>
    </div>
    <slot name="svgSeparatorBottom"></slot>
  </header>
</template>

<script>
export default {
  props: {
    type: String,
    bgColor: String,
  },
}
</script>

<style lang="scss">
@use "@/assets/css/_variables.scss";
.heroContainer {
  position: relative;
  background: var(--secondary-page-background);

  display: grid;
  grid-template-columns: var(--default-two-columns-half);
  justify-items: center;
  align-items: center;

  & .leftColumnOfTwo {
    grid-column: left-start/left-end;
    width: 100%;
    z-index: 50;
    padding-right: 3%;

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: left-start/right-end;
      padding-right: 0;
      display: grid;
      grid-gap: 1.5rem;

      & a[type="button"] {
        justify-self: center;
      }
    }
  }

  & .rightColumnOfTwo {
    grid-column: right-start/right-end;
    z-index: 100;
    position: relative;

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: left-start/right-end;
      width: 100%;
    }
  }

  & h1,
  & p {
    color: var(--primary-font-color);
  }
}
</style>
