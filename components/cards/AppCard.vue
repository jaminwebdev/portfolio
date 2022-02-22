<template>
  <div :class="['appCard', `${type}Card`, { noOverlay, noImg }]" :style="styleConfig">
    <div :class="[`${type}Card__imgContainer`, 'appCard__imgContainer']" v-if="type !== 'roundedBg'">
      <slot name="img"></slot>
    </div>
    <div :class="[`${type}Card__tagContainer`, 'appCard__tagContainer']">
      <div :class="[`${type}Card__icons`]">
        <slot name="icons"></slot>
      </div>
      <div :class="[`${type}Card__tagLink`]">
        <slot name="tag"></slot>
      </div>
    </div>
    <div :class="[`${type}Card__contentContainer`]">
      <div class="appCard__headingContainer">
        <div class="appCard__avatarIcon">
          <slot name="avatar"></slot>
        </div>
        <div class="appCard__headings">
          <slot name="heading"></slot>
          <slot name="subtitle"></slot>
        </div>
      </div>
      <div class="appCard__body">
        <slot name="body"></slot>
        <div class="appCard__btns">
          <slot name="btns"></slot>
        </div>
        <div class="appCard__cardMeta">
          <slot name="meta"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String, // slanted, roundedBg, rounded, bordered, bgVector
    bgImg: {
      type: String,
      default: "/CardBGVector.svg",
    },
    bgColor: {
      type: String,
      default: "#fff",
    },
    borderRadius: {
      type: String,
      default: "0rem",
    },
    borderColor: String,
    borderWidth: {
      type: String,
      default: "5px",
    },
    noOverlay: Boolean,
    noImg: Boolean,
  },
  computed: {
    styleConfig() {
      let styles = ""
      if (this.type === "roundedBg") {
        styles = {
          background: `linear-gradient(to right, rgba(var(--primary-color-dark-rgb), .85), rgba(var(--primary-color-dark-rgb), .85)), url(${this.$props.bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }

        if (this.bgImg === "/CardBGVector.svg") {
          styles = {
            ...styles,
            background: `url(${this.$props.bgImg})`,
          }
        }
      }

      if (this.type === "bordered") {
        styles = {
          background: this.bgColor,
          border: `${this.borderWidth} solid ${this.borderColor}`,
          borderRadius: this.borderRadius,
        }
      }

      if (this.type === "bgVector") {
        styles = {
          borderRadius: this.borderRadius,
          background: `url(${this.$props.bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }
      }

      return styles
    },
  },
}
</script>

<style lang="scss">
@use "@/assets/css/_variables.scss";
.appCard {
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(37, 61, 126, 0.1);
  background: #fff;

  display: grid;
  position: relative;

  &__cardMeta:not(:empty) {
    display: grid;
    justify-content: space-between;
    grid-auto-flow: column;
    grid-auto-columns: max-content;

    border-top: 1px solid #e8e8e8;
    padding-top: 10px;
    margin-top: 15px;
    margin-bottom: -25px;

    @media only screen and (max-width: variables.$bp-small) {
      display: flex;
      flex-wrap: wrap;
    }

    & a,
    & span {
      color: var(--primary-color);
      font-size: 14px;
    }

    & a {
      margin-bottom: 0;

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
      grid-gap: 0.5rem;
    }
  }

  &__headingContainer {
    grid-column: 1/-1;
    display: grid;
    column-gap: 15px;
    grid-template-columns: 50px 1fr;
  }

  &__headings {
    grid-column: 2/-1;

    & a h3,
    & a h4 {
      transition: transform 0.2s ease-out;
      display: inline-block;

      &:hover {
        transform: scale(1.01);
        color: var(--primary-color);
      }
    }

    & span {
      display: flex;
      color: var(--primary-color);
      font-size: 14px;

      & img {
        margin-right: 5px;
      }
    }
  }

  &__avatarIcon {
    & img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }

    &:empty ~ .appCard__headings {
      grid-column: 1/-1;
    }
  }

  &__body {
    color: var(--primary-font-color);
    grid-column: 1/-1;
  }

  &__btns {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));

    margin-top: 25px;

    &:empty {
      margin-top: 0;
    }

    & .button {
      margin-bottom: 0;

      &:only-child {
        grid-column: 1/-1;
        justify-self: start;
      }
    }
  }
}

.slantedCard {
  grid-template-rows: 255px;

  &__imgContainer {
    position: relative;
    grid-column: 1 / -1;
    grid-row: 1 / 2;

    &:not(:empty) {
      height: 255px;
      grid-row: 1 / 2;

      & ~ .slantedCard__contentContainer {
        padding: 15px 30px 30px;
      }
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    & .svgContainer.bottom {
      bottom: -1px;
    }
  }

  &__tagContainer {
    grid-row: 1 / span 1;
    grid-column: 1/-1;
    align-self: end;
    display: grid;
    align-items: end;
    padding: 0 30px;
  }

  &__icons {
    grid-row: 1/2;
    display: grid;
    grid-template-columns: repeat(3, min-content);
    z-index: 20;
  }

  &__tagLink {
    grid-column: 2/3;
    width: 32px;
    justify-self: end;
    z-index: 20;
  }

  &__contentContainer {
    grid-column: 1/-1;
    width: 100%;
    padding: 25px 30px 30px;
    display: grid;
    row-gap: 15px;
    align-content: space-around;
    grid-template-columns: repeat(2, 1fr);
  }

  & p {
    margin-bottom: 0;
  }
}

.roundedCard {
  border-radius: 15px;
  grid-template-rows: 275px;

  &__imgContainer {
    position: relative;
    grid-column: 1 / -1;

    &:not(:empty) {
      height: 255px;
      grid-row: 1 / 2;
      margin: 12px;

      & ~ .roundedCard__contentContainer {
        padding: 15px 30px 30px;
      }
    }

    & img {
      border-radius: 15px;
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    & svg {
      display: none;
    }
  }

  &.noOverlay .roundedCard__imgContainer::after {
    background-image: none;
  }

  &__tagContainer {
    grid-row: 1 / span 1;
    grid-column: 1/-1;
    align-self: end;
    display: grid;
    align-items: end;
    padding: 0 20px 15px;
  }

  &__icons {
    grid-row: 1/2;
    display: grid;
    grid-template-columns: repeat(3, min-content);
    z-index: 20;

    & .iconContainer {
      max-width: 50px;
      max-height: 50px;
    }
  }

  &__tagLink {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 32px;
    z-index: 20;
  }

  &__contentContainer {
    grid-column: 1/-1;
    width: 100%;
    padding: 25px 30px 30px;
    display: grid;
    row-gap: 15px;
    align-content: space-around;
    grid-template-columns: repeat(2, 1fr);
    background: #fff;
  }

  & p {
    margin-bottom: 0;
  }
}

.roundedBgCard {
  position: relative;
  border-radius: 15px;
  display: grid;

  &__tagContainer {
    grid-row: 1 / span 2;
    grid-column: 1/-1;
    align-items: center;
    display: grid;
    padding: 15px 20px;
    margin-bottom: 30px;
  }

  &__icons {
    grid-row: 1/2;
    display: grid;
    grid-template-columns: repeat(3, min-content);
    z-index: 20;

    & .iconContainer {
      max-width: 50px;
      max-height: 50px;
    }
  }

  &__tagLink {
    width: 32px;
    z-index: 20;
    grid-column: 2/3;
    justify-self: end;

    & a {
      margin-bottom: 0;
      display: flex;
      align-items: center;
    }
  }

  &__contentContainer {
    width: 100%;
    padding: 0 25px 40px;
    display: grid;
    row-gap: 15px;
    grid-template-columns: repeat(2, 1fr);
  }

  & p,
  & h2,
  & h3,
  & h4 {
    margin-bottom: 0;
    color: #fff;
  }
}

.borderedCard {
  display: grid;
  padding: 60px 40px;

  &__imgContainer,
  &__tagLink {
    display: none;
  }

  &__icons {
    grid-row: 1/-1;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, min-content);
    z-index: 20;

    &:not(:empty) {
      margin-bottom: 25px;
    }
  }

  &__contentContainer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

.bgVectorCard {
  display: grid;
  padding: 60px 40px;

  &__imgContainer,
  &__tagLink {
    display: none;
  }

  &__icons {
    grid-row: 1/-1;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, min-content);
    z-index: 20;

    &:not(:empty) {
      margin-bottom: 25px;
    }
  }

  &__contentContainer {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

.noImg {
  & .appCard__imgContainer,
  & .appCard__tagContainer {
    display: none;
  }

  &.defaultCard,
  &.roundedCard {
    grid-template-rows: auto;
  }
}
</style>
