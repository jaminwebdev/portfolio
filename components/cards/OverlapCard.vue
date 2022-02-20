<template>
  <div class="overlapCard">
    <div class="overlapCard__imgContainer" :style="bgImgStyles"></div>
    <div class="overlapCard__card" :style="cardStyles">
      <p class="overlapCard__featuredLabel">Featured</p>
      <div class="overlapCard__tagContainer">
        <div class="overlapCard__iconsContainer">
          <slot name="icons"></slot>
        </div>
        <div class="overlapCard__tagLink">
          <slot name="tag"></slot>
        </div>
      </div>
      <div class="overlapCard__contentContainer">
        <div class="overlapCard__headings">
          <slot name="heading"></slot>
          <slot name="subtitle"></slot>
          <div class="overlapCard__meta">
            <slot name="meta"></slot>
          </div>
        </div>
        <div class="overlapCard__body">
          <slot name="body"></slot>
        </div>
        <div class="overlapCard__btns">
          <slot name="btns"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    borderRadius: {
      type: Boolean,
      default: false,
    },
    bgImg: {
      type: String,
      default: "https://i.imgur.com/F24Y91W.jpg",
    },
  },
  computed: {
    bgImgStyles() {
      return {
        background: `url(${this.$props.bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        borderRadius: this.borderRadius ? "1.5rem" : "0",
      }
    },
    cardStyles() {
      return {
        borderRadius: this.borderRadius ? "1.5rem" : "0",
      }
    },
  },
}
</script>

<style lang="scss">
@use "@/assets/css/_variables.scss";
.overlapCard {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr 4fr 1fr;

  &__imgContainer {
    grid-row: 1/-1;
    grid-column: 1 / span 3;
    background-size: cover;
    background-position: center center;

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: 1 / span 4;
    }
  }

  &__card {
    grid-row: 2/3;
    grid-column: 3/-1;
    background: #fff;
    padding: 30px 40px;
    box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.08);
    position: relative;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: 4 / -1;
    }
  }

  &__featuredLabel {
    position: absolute;
    right: 0;
    top: -32px;
    background: var(--primary-color);
    color: #fff;
    padding: 5px 15px;
    font-size: 14px;
  }

  &__tagContainer {
    grid-column: 1/-1;

    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  &__iconsContainer {
    display: flex;
  }

  &__tagLink {
    display: grid;
    justify-items: end;

    & svg {
      width: 35px;
      transition: all 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &__contentContainer {
    grid-column: 1/-1;
  }

  &__headings {
    & h2,
    & h3,
    & h4 {
      text-align: left;
    }
    margin-bottom: 15px;

    & a h3,
    & a h4 {
      transition: transform 0.2s ease-out;
      display: inline-block;

      &:hover {
        transform: scale(1.01);
        color: var(--primary-color);
      }
    }
  }

  &__meta {
    display: grid;
    grid-gap: 15px;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    margin-bottom: 20px;

    @media only screen and (max-width: variables.$bp-medium) {
      display: flex;
      flex-wrap: wrap;
    }

    & a,
    & span {
      color: var(--primary-color);
      font-size: 16px;
    }

    & a {
      margin-bottom: 0;
      transition: transform 0.1s ease-out;

      &:hover {
        color: var(--primary-color-dark);
        transform: scale(1.05);
      }
    }

    & > span {
      display: grid;
      justify-items: center;
      align-items: center;
      grid-auto-flow: column;
      grid-gap: 5px;

      @media only screen and (max-width: variables.$bp-medium) {
        grid-auto-columns: max-content;
        grid-gap: 10px;
      }
    }
  }

  &__body {
    margin-bottom: 35px;
  }

  &__btns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  }
}
</style>
