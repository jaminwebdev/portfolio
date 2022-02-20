<template>
  <section class="favStack">
    <div class="favStack__leftColumn">
      <img src="/blue-dotted-square.svg" class="blueDottedSquare" />
      <nuxt-img src="https://i.imgur.com/n92j5qA.png" class="favStack__devices favStack__devices--desktop" />
      <nuxt-img src="https://i.imgur.com/M9HNckv.png" class="favStack__devices favStack__devices--mobile" />
    </div>
    <div class="favStack__rightColumn">
      <h2>My Favorite <span class="secondaryHighlight">Stack</span></h2>
      <p>I love all things JS, however, this stack I'm particularly fond of. In fact, it's what this site is built with.</p>
      <div class="favStack__techCards">
        <div class="favStack__techCard">
          <div class="favStack__techIcon">
            <img src="/icons/icon-nuxt.svg" alt="" />
          </div>
          <h4>Nuxt</h4>
          <p>Leveraging the latest front-end technlolgoies like Vue, React, and Angular.</p>
        </div>
        <div class="favStack__techCard">
          <div class="favStack__techIcon">
            <img src="/icons/icon-node.svg" alt="" />
          </div>
          <h4>Node JS</h4>
          <p>Leveraging the latest front-end technlolgoies like Vue, React, and Angular.</p>
        </div>
        <div class="favStack__techCard">
          <div class="favStack__techIcon">
            <img src="/icons/icon-postgres.svg" alt="" />
          </div>
          <h4>PostgreSQL</h4>
          <p>Leveraging the latest front-end technlolgoies like Vue, React, and Angular.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["type"],
}
</script>

<style lang="scss">
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
      z-index: 1;
      left: -40px;
      top: -30px;
    }

    @media only screen and (max-width: 1000px) {
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

    @media only screen and (max-width: 1000px) {
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

  &__techCard {
    background: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem 1rem 1rem;

    display: grid;
    column-gap: 15px;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: max-content max-content;

    & h4 {
      font-size: 1.3rem;
      font-weight: 600;
      margin: 10px 0 5px;
    }

    & p {
      line-height: 1.3em;
    }
  }

  &__techIcon {
    grid-column: 1/2;
    grid-row: 1/-1;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
