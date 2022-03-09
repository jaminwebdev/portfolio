<template>
  <a :href="iconLink" target="_blank">
    <div
      :class="['iconContainer', bordered ? 'bordered' : '']"
      :style="{ height: `${height}px`, width: `${width}px` }"
    >
      <img :src="iconPath" :alt="`${icon} logo`" />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 125,
    },
    height: {
      type: Number,
      default: 125,
    },
    bordered: {
      type: Boolean,
    },
    iconLink: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconPath() {
      return `/icons/icon-${this.icon}.svg`
    },
  },
}
</script>

<style lang="scss">
.iconContainer {
  background: #fafaff;
  border-radius: 50%;
  transition: transform 0.3s ease-out;

  padding: 10px;
  display: grid;
  justify-items: center;
  align-items: center;

  &.bordered {
    background: linear-gradient(var(--primary-color-dark), var(--primary-color-light));
    position: relative;

    &::before {
      position: absolute;
      content: "";
      left: 5%;
      right: 5%;
      top: 5%;
      bottom: 5%;
      background: #fff;
      border-radius: 50%;
    }
  }

  & img {
    max-width: 80%;
    max-height: 80%;
    z-index: 10;
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
