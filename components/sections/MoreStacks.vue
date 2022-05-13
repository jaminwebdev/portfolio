<template>
  <section class="moreStacks">
    <SvgSeparator
      type="moving"
      fill="var(--primary-page-background)"
      custHeight="100px"
      class="top"
    ></SvgSeparator>
    <h2 class="moreStacks__heading">More Tech <span class="secondaryHighlight">I Love</span></h2>
    <div class="moreStacks__cardContainer">
      <AppCard type="bordered" borderRadius="10px">
        <template #icons>
          <BaseIcon icon="nuxt" iconLink="https://nuxtjs.org/" bordered :height="70" :width="70">
          </BaseIcon>
          <BaseIcon
            icon="supabase"
            iconLink="https://supabase.com/"
            bordered
            :height="70"
            :width="70"
          >
          </BaseIcon>
        </template>
        <template #heading>
          <h3 class="textCentered" style="color: var(--primary-font-color)">
            Nuxt & <br />Supabase
          </h3>
        </template>
      </AppCard>
      <AppCard type="bordered" borderRadius="10px">
        <template #icons>
          <BaseIcon icon="next" iconLink="https://nextjs.org/" bordered :height="70" :width="70">
          </BaseIcon>
          <BaseIcon icon="node" iconLink="https://nodejs.org/en/" bordered :height="70" :width="70">
          </BaseIcon>
          <BaseIcon
            icon="mongo"
            iconLink="https://www.mongodb.com/"
            bordered
            :height="70"
            :width="70"
          >
          </BaseIcon>
        </template>
        <template #heading>
          <h3 class="textCentered" style="color: var(--primary-font-color)">Next, Node & Mongo</h3>
        </template>
      </AppCard>
      <AppCard type="bordered" borderRadius="10px">
        <template #icons>
          <BaseIcon icon="angular" iconLink="https://angular.io/" bordered :height="70" :width="70">
          </BaseIcon>
          <BaseIcon
            icon="firebase"
            iconLink="https://firebase.google.com/"
            bordered
            :height="70"
            :width="70"
          >
          </BaseIcon>
        </template>
        <template #heading>
          <h3 class="textCentered" style="color: var(--primary-font-color)">Angular & Firebase</h3>
        </template>
      </AppCard>
    </div>
    <SvgSeparator
      type="moving"
      fill="var(--primary-page-background)"
      custHeight="100px"
      class="bottom"
    ></SvgSeparator>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use "@/assets/css/_variables.scss";
.moreStacks {
  overflow: hidden;
  background: var(--secondary-page-background);
  display: grid;
  grid-template-columns: var(--default-full-layout-grid);
  padding: 225px 0;
  position: relative;

  &__heading {
    text-align: center;
    grid-column: center-start/center-end;
    margin-bottom: 50px;
  }

  &__cardContainer {
    grid-column: center-start/center-end;

    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
</style>
