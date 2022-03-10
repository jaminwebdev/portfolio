<template>
  <section class="favStack">
    <div class="favStack__leftColumn">
      <LazyLoad>
        <img src="/blue-dotted-square.svg" class="blueDottedSquare" />
        <nuxt-img
          src="https://i.imgur.com/n92j5qA.png"
          class="favStack__devices favStack__devices--desktop"
        />
        <nuxt-img
          src="https://i.imgur.com/M9HNckv.png"
          class="favStack__devices favStack__devices--mobile"
        />
      </LazyLoad>
    </div>
    <div class="favStack__rightColumn">
      <h2>My Favorite <span class="secondaryHighlight">Stack</span></h2>
      <p>
        I love all things JS, however, this stack I'm particularly fond of. In fact, it's what this
        site is built with.
      </p>
      <div class="favStack__techCards">
        <TechCard
          heading="Nuxt"
          description="Leveraging the latest front-end technlolgoies like Vue, React, and Angular."
          icon="/icons/icon-nuxt.svg"
        />
        <TechCard
          heading="Node JS"
          description="Leveraging the latest front-end technlolgoies like Vue, React, and Angular."
          icon="/icons/icon-node.svg"
        />
        <TechCard
          heading="PostgreSQL"
          description="Leveraging the latest front-end technlolgoies like Vue, React, and Angular."
          icon="/icons/icon-postgres.svg"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["type"],
}
</script>

<style lang="scss" scoped>
@use "@/assets/css/_variables.scss";
.favStack {
  padding: 125px 0;

  display: grid;
  row-gap: 50px;
  column-gap: 15px;
  align-items: center;
  grid-template-columns: var(--default-two-columns-half);

  &__leftColumn {
    grid-column: 2/3;
    display: grid;
    justify-items: center;

    position: relative;

    & .blueDottedSquare {
      position: absolute;
      z-index: -1;
      left: -40px;
      top: -30px;
    }

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: 2 / span 2;
    }
  }

  &__devices {
    &--desktop {
      box-shadow: 40px 60px 80px rgba(39, 89, 161, 0.1);
      z-index: 2;
    }

    &--mobile {
      position: absolute;
      right: -20px;
      bottom: 0;
      max-height: 90%;
      z-index: 2;
    }
  }

  &__rightColumn {
    padding-left: 75px;

    & h2 {
      margin-bottom: 20px;
    }

    @media only screen and (max-width: variables.$bp-medium) {
      padding-left: 0;
      grid-column: 2 / span 2;
    }
  }

  &__techCards {
    margin-top: 30px;

    display: grid;
    justify-content: center;
    grid-gap: 20px;
  }
}
</style>
