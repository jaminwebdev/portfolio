<template>
  <header :class="['heroContainer', type]" :style="{ backgroundColor: bgColor }">
    <div class="leftColumnOfTwo">
      <slot name="leftColumnOfTwo"></slot>
    </div>
    <div class="rightColumnOfTwo">
      <slot name="rightColumnOfTwo"></slot>
    </div>
    <slot v-if="type !== 'rounded' && type !== 'minimal'" name="svgSeparatorBottom"></slot>
  </header>
</template>

<script>
export default {
  props: {
    type: {
      validator: function (value) {
        return ["slanted", "minimal", "rounded"].indexOf(value) !== -1
      },
    },
    bgColor: {
      type: String,
    },
  },
}
</script>

<style lang="scss">
@use "@/assets/css/_variables.scss";
.heroContainer {
  position: relative;
  overflow: hidden;

  display: grid;
  grid-template-columns: var(--default-two-columns-half);
  justify-items: center;

  &.slanted,
  &.rounded {
    background-image: url("static/Main Background Vector.svg");
    background-size: cover;
    background-position: center center;
  }

  & .leftColumnOfTwo {
    grid-column: left-start/left-end;
    width: 100%;

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: left-start/right-end;
    }
  }

  & .rightColumnOfTwo {
    grid-column: right-start/right-end;

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: left-start/right-end;
    }
  }

  & h1 {
    color: #fafaff;
  }

  & p {
    color: #fafaff;
    font-size: 1.5rem;
  }

  &.slanted {
    & .leftColumnOfTwo {
      z-index: 50;
      padding-right: 3%;

      @media only screen and (max-width: variables.$bp-medium) {
        padding-right: 0;

        display: grid;
        grid-gap: 1.5rem;

        & a[type="button"] {
          justify-self: center;
        }
      }
    }

    & .rightColumnOfTwo {
      z-index: 100;
      position: relative;
    }
  }

  &.rounded {
    border-radius: 0 0 3rem 3rem;

    @media only screen and (max-width: variables.$bp-medium) {
      grid-auto-rows: min-content;
    }

    & .leftColumnOfTwo {
      padding-right: 5%;

      @media only screen and (max-width: variables.$bp-medium) {
        grid-row: 1/2;
        padding-right: 0px;

        display: grid;
        grid-gap: 1rem;

        & a[type="button"] {
          justify-self: center;
        }
      }
    }

    & .rightColumnOfTwo {
      z-index: 100;
      position: relative;
    }
  }

  &.minimal {
    background: var(--secondary-page-background);

    & .leftColumnOfTwo {
      z-index: 50;
      padding-right: 3%;

      @media only screen and (max-width: variables.$bp-medium) {
        padding-right: 0;
        display: grid;
        grid-gap: 1.5rem;

        & a[type="button"] {
          justify-self: center;
        }
      }
    }

    & .rightColumnOfTwo {
      z-index: 100;
      position: relative;
    }

    & h1,
    & p {
      color: var(--primary-font-color);
    }
  }
}
</style>
