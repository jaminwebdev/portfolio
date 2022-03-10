<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
      intersection: {
        threshold: threshold,
      },
    }"
  >
    <transition appear @before-enter="onBeforeEnter" @enter="onEnter">
      <div v-if="isVisible" class="lazyLoadedContainer">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap"

export default {
  data() {
    return {
      isVisible: false,
    }
  },
  props: {
    threshold: {
      type: Number,
      default: 0.9,
    },
    delay: {
      type: Number,
      default: 0.2,
    },
  },
  methods: {
    onBeforeEnter(el) {
      el.style.opacity = 0
    },
    onEnter(el, done) {
      const tl = gsap.timeline()
      tl.from(el, { opacity: 0, scaleX: 0, scaleY: 0 })
      tl.to(el, {
        opacity: 1,
        scaleX: 1.05,
        scaleY: 1.05,
        duration: 0.2,
        ease: "power1.out",
        delay: this.delay,
      })
      tl.to(el, {
        scaleX: 1,
        scaleY: 1,
        duration: 0.15,
        onComplete: done,
      })
    },
    visibilityChanged(isVisible) {
      console.log("running")
      this.isVisible = isVisible
    },
  },
}
</script>

<style scoped>
.lazyLoadContainer {
  position: relative;
}
</style>
