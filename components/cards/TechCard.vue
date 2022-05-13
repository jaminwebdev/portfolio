<template>
  <div class="techCard">
    <div class="techCard__Icon">
      <img :src="icon" alt="" />
    </div>
    <h4>{{ heading }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["heading", "icon", "description"],
}
</script>

<style lang="scss" scoped>
@use "@/assets/css/_variables.scss";

.techCard {
  background: var(--secondary-page-background);
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

  &__Icon {
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
