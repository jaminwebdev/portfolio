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
.heroContainer {
  position: relative;
  overflow: hidden;

  &.slanted,
  &.rounded {
    background-image: url("static/Main Background Vector.svg");
    background-size: cover;
    background-position: center center;
  }

  & h1 {
    color: #fafaff;
  }

  & p {
    color: #fafaff;
    font-size: 1.5rem;
  }

  &.slanted {
    display: grid;
    grid-template-columns: var(--default-two-columns-half);
    align-items: center;
    justify-items: center;

    & .leftColumnOfTwo {
      grid-column: left-start/left-end;
      z-index: 50;
      padding-right: 3%;

      @media only screen and (max-width: 1000px) {
        padding-right: 0;
        grid-column: left-start/right-end;

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

      @media only screen and (max-width: 1000px) {
        grid-column: left-start/right-end;
      }
    }
  }

  &.rounded {
    border-radius: 0 0 3rem 3rem;
    display: grid;
    grid-template-columns: var(--default-two-columns-half);
    align-items: center;
    justify-items: center;

    @media only screen and (max-width: 1000px) {
      grid-auto-rows: min-content;
    }

    & .leftColumnOfTwo {
      grid-column: left-start/left-end;
      padding-right: 5%;

      @media only screen and (max-width: 1000px) {
        grid-column: left-start/right-end;
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
      grid-column: right-start/right-end;
      z-index: 100;
      position: relative;

      @media only screen and (max-width: 1000px) {
        grid-column: left-start/right-end;
      }
    }
  }

  &.minimal {
    background: #edf2f7;

    display: grid;
    grid-template-columns: var(--default-two-columns-half);
    align-items: center;
    justify-items: center;

    & .leftColumnOfTwo {
      grid-column: left-start/left-end;
      z-index: 50;
      padding-right: 3%;

      @media only screen and (max-width: 1000px) {
        padding-right: 0;
        grid-column: left-start/right-end;

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

      @media only screen and (max-width: 1000px) {
        grid-column: left-start/right-end;
      }
    }

    & h1,
    & p {
      color: var(--primary-font-color);
    }
  }

  .leftColumnOfTwo {
    width: 100%;
  }
}
</style>
