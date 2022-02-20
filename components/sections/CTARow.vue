<template>
  <div class="ctaRow__container">
    <div class="leftColumnOfTwo">
      <slot name="leftColumnOfTwo"></slot>
    </div>
    <div class="rightColumnOfTwo">
      <slot name="rightColumnOfTwo"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use "@/assets/css/_variables.scss";
.ctaRow {
  width: 100%;

  &__container {
    width: 100%;
    border-radius: 1.5rem;
    background: url("static/Main Background Vector.svg");
    background-size: cover;
    background-position: center center;

    display: grid;
    grid-template-columns: var(--default-two-columns-half);

    & .leftColumnOfTwo {
      grid-column: left-start/left-end;
      padding: 7.5rem 2rem;

      @media only screen and (max-width: variables.$bp-medium) {
        grid-column: left-start/right-end;
        padding: 4.5rem 0 0 0;
      }

      & h2,
      & p {
        color: #fafaff;
        margin: 0.5rem 0;

        @media only screen and (max-width: variables.$bp-medium) {
          text-align: center;
        }
      }
    }

    & .rightColumnOfTwo {
      grid-column: right-start/right-end;

      display: grid;
      align-items: center;
      justify-items: center;

      position: relative;

      @media only screen and (max-width: variables.$bp-medium) {
        grid-column: left-start/right-end;
        padding: 2rem 0 7rem 0;
      }

      & img {
        position: absolute;
        bottom: 0;
        right: 0;

        @media only screen and (max-width: variables.$bp-medium) {
          max-width: 12rem;
          right: -2rem;
        }
      }
    }
  }
}
</style>
