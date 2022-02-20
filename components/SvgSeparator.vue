<template>
  <div class="svgContainer">
    <svg v-if="type === 'tilt'" :style="{ height: custHeight }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
      <path :style="{ fill }" d="M0,6V0h1000v100L0,6z"></path>
    </svg>

    <svg
      v-if="type === 'moving'"
      :style="{ height: custHeight }"
      class="movingWaves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 
                58-18 88-18s
                58 18 88 18 
                58-18 88-18 
                58 18 88 18
                v44h-352z"
        ></path>
      </defs>
      <g class="parallax1">
        <use xlink:href="#gentle-wave" x="50" y="3" :style="{ fill, opacity: '0.3' }"></use>
      </g>
      <g class="parallax2">
        <use xlink:href="#gentle-wave" x="50" y="0" :style="{ fill, opacity: '0.3' }"></use>
      </g>
      <g class="parallax3">
        <use xlink:href="#gentle-wave" x="50" y="9" :style="{ fill, opacity: '0.4' }"></use>
      </g>
      <g class="parallax4">
        <use xlink:href="#gentle-wave" x="50" y="6" :style="{ fill, opacity: '1.0' }"></use>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      validator: function (value) {
        return ["moving", "tilt"].indexOf(value) !== -1
      },
    },
    fill: {
      type: String,
      default: "#fff",
    },
    custHeight: {
      type: String,
      default: "60px",
    },
  },
}
</script>

<style lang="scss">
.svgContainer {
  position: absolute;
  width: 100%;
  overflow: hidden;

  &.bottom {
    bottom: -6px;

    &.tiltDownLeft {
      transform: rotateX(180deg);
    }

    &.tiltDownRight {
      transform: rotateY(180deg) rotateX(180deg);
    }
  }

  &.top {
    top: -2px;

    &.tiltDownLeft {
      transform: rotateY(180deg);
    }

    & .movingWaves {
      transform: rotateX(180deg);
    }
  }

  & svg {
    width: 100%;
  }
}

.movingWaves {
  width: 100%;
  z-index: 5;
}

.parallax1 > use {
  animation: move-forever1 10s linear infinite;
}

.parallax1 > use:nth-child(1) {
  animation-delay: -2s;
}

.parallax2 > use {
  animation: move-forever2 8s linear infinite;
}

.parallax2 > use:nth-child(2) {
  animation-delay: -2s;
}

.parallax3 > use {
  animation: move-forever3 6s linear infinite;
}

.parallax3 > use:nth-child(1) {
  animation-delay: -2s;
}

.parallax4 > use {
  animation: move-forever4 4s linear infinite;
}

.parallax4 > use:nth-child(1) {
  animation-delay: -2s;
}

@keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }

  100% {
    transform: translate(-90px, 0%);
  }
}

@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
}

@keyframes move-forever3 {
  0% {
    transform: translate(85px, 0%);
  }

  100% {
    transform: translate(-90px, 0%);
  }
}

@keyframes move-forever4 {
  0% {
    transform: translate(-90px, 0%);
  }

  100% {
    transform: translate(85px, 0%);
  }
}
</style>
