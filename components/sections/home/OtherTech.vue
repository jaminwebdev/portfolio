<template>
  <section class="otherTech myContainer">
    <div class="leftColumnOfTwo">
      <h2 class="otherTech__heading">
        What Else <br />
        <span class="secondaryHighlight">Can I Do?</span>
      </h2>
      <p>
        I’m a big fan of constantly learning new technologies and goodies to add to my stack. Here’s
        a list of items I'm also intimately familiar with, or continually learning more about.
      </p>
      <p>Click on any of the icons to learn more.</p>
    </div>
    <div class="rightColumnOfTwo">
      <BaseIcon
        v-for="tech in technologies"
        :key="tech.name"
        :icon="tech.name"
        :iconLink="tech.iconLink"
        :width="100"
        :height="100"
      >
      </BaseIcon>
    </div>
  </section>
</template>

<script>
export default {
  props: ["technologies"],
}
</script>

<style lang="scss" scoped>
@use "@/assets/css/_variables.scss";
.otherTech {
  padding: 200px 0;

  display: grid;
  grid-template-columns: var(--default-two-columns-half);
  align-items: center;

  @media only screen and (max-width: 1000px) {
    grid-auto-rows: min-content;
    padding: 75px 0;
  }

  & .leftColumnOfTwo {
    grid-column: left-start/left-end;
    padding: 0 75px 0 0;

    & h2 {
      margin-bottom: 35px;
    }

    @media only screen and (max-width: variables.$bp-small) {
      padding: 0;
      margin-bottom: 20px;
    }
  }

  & .rightColumnOfTwo {
    display: grid;
    grid-column: right-start / right-end;
    row-gap: 40px;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    padding: 0 20px;

    @media only screen and (max-width: variables.$bp-small) {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
  }

  & .leftColumnOfTwo,
  & .rightColumnOfTwo {
    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: left-start / right-end;
      padding: 0;
    }
  }

  @media only screen and (max-width: variables.$bp-small) {
    padding: 120px 10px;
  }
}
</style>
