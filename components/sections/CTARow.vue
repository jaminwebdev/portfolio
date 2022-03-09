<template>
  <section class="ctaRow myContainer">
    <div class="ctaRow__innerContainer">
      <div class="leftColumnOfTwo">
        <slot name="leftColumnOfTwo"></slot>
      </div>
      <div class="rightColumnOfTwo">
        <slot name="rightColumnOfTwo"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use "@/assets/css/_variables.scss";
.ctaRow {
  margin: 50px auto;

  &__innerContainer {
    width: 100%;
    border-radius: 15px;
    background: url("static/Main Background Vector.svg");
    background-size: cover;
    background-position: center center;

    display: grid;
    grid-template-columns: var(--default-two-columns-half);

    & .leftColumnOfTwo {
      grid-column: left-start/left-end;
      padding: 75px 20px;

      @media only screen and (max-width: variables.$bp-medium) {
        grid-column: left-start/right-end;
        padding: 45px 0 0 0;
      }

      & h2,
      & p {
        color: #fafaff;
        margin: 5px 0;

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
        padding: 20px 0 70px 0;
      }

      & img {
        position: absolute;
        bottom: 0;
        right: 0;

        @media only screen and (max-width: variables.$bp-small) {
          max-width: 150px;
          right: 3%;
        }
      }
    }
  }
}
</style>
