<template>
  <div class="blogFeed">
    <div class="blogFeed__header">
      <h1>Blog Posts</h1>
      <h4>Keep up with my latest ramblings on all things dev-related.</h4>
      <img src="/blue-dotted-square.svg" alt="" class="blogFeed__headerSquare" />
    </div>
    <main class="blogFeed__body">
      <div v-if="!searchTerm" class="blogFeed__featuredPost">
        <OverlapCard class="desktopVisible" :bgImg="featuredArticle.featuredImg">
          <template #heading>
            <Nuxt-Link :to="`/blog/${featuredArticle.slug}`">
              <h3>{{ featuredArticle.title }}</h3>
            </Nuxt-Link>
          </template>
          <template #meta>
            <span>
              <img src="/icons/icon-calendar.svg" alt="" />
              {{ formatDate(featuredArticle.createdAt) }}
            </span>
            <span>
              <img src="/icons/icon-tag.svg" alt="" />
              <NuxtLink
                :to="`/blog?tag=${tag}`"
                v-for="(tag, index) in featuredArticle.tags"
                :key="tag"
              >
                {{ tag }}<span v-if="index < featuredArticle.tags.length - 1">,</span>
              </NuxtLink>
            </span>
          </template>
          <template #body>
            <nuxt-content :document="{ body: featuredArticle.excerpt }" />
          </template>
          <template #btns>
            <b-button tag="router-link" :to="`/blog/${featuredArticle.slug}`" type="is-primary">
              Read More
            </b-button>
          </template>
        </OverlapCard>
        <AppCard type="rounded" class="mobileVisible" noOverlay>
          <template #img>
            <nuxt-img :src="featuredArticle.featuredImg" />
          </template>
          <template #heading>
            <Nuxt-Link :to="`/blog/${featuredArticle.slug}`">
              <h3 style="font-size: 1.65rem; margin-bottom: 10px">{{ featuredArticle.title }}</h3>
            </Nuxt-Link>
          </template>
          <template #subtitle>
            <span>
              <img src="/icons/icon-calendar.svg" alt="" />
              {{ formatDate(featuredArticle.createdAt) }}
            </span>
          </template>
          <template #body>
            <nuxt-content :document="{ body: featuredArticle.excerpt }" />
          </template>
          <template #btns>
            <b-button
              size="is-small"
              tag="router-link"
              :to="`/blog/${featuredArticle.slug}`"
              type="is-primary"
            >
              Read More
            </b-button>
          </template>
          <template #meta>
            <span>
              <img src="/icons/icon-tag.svg" alt="" />
              <NuxtLink
                :to="`/blog?tag=${tag}`"
                v-for="(tag, index) in featuredArticle.tags"
                :key="tag"
              >
                {{ tag }}<span v-if="index < featuredArticle.tags.length - 1">,</span>
              </NuxtLink>
            </span>
          </template>
        </AppCard>
      </div>
      <div class="blogFeed__cardContainer">
        <AppCard type="rounded" v-for="article in articles" :key="article.title" noOverlay>
          <template #img>
            <nuxt-img :src="article.featuredImg" />
          </template>
          <template #heading>
            <Nuxt-Link :to="`/blog/${article.slug}`">
              <h3 style="font-size: 1.65rem; margin-bottom: 10px">{{ article.title }}</h3>
            </Nuxt-Link>
          </template>
          <template #subtitle>
            <span>
              <img src="/icons/icon-calendar.svg" alt="" />
              {{ formatDate(article.createdAt) }}
            </span>
          </template>
          <template #body>
            <p>{{ formatExcerpt(article.description) }}</p>
          </template>
          <template #btns>
            <b-button
              size="is-small"
              tag="router-link"
              :to="`/blog/${article.slug}`"
              type="is-primary"
            >
              Read More
            </b-button>
          </template>
          <template #meta>
            <span>
              <img src="/icons/icon-tag.svg" alt="" />
              <NuxtLink :to="`/blog?tag=${tag}`" v-for="(tag, index) in article.tags" :key="tag">
                {{ tag }}<span v-if="index < article.tags.length - 1">,</span>
              </NuxtLink>
            </span>
          </template>
        </AppCard>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  transition: {
    name: "fade",
    mode: "out-in",
  },
  data() {
    return {
      searchTerm: "",
    }
  },
  async asyncData({ $content }) {
    const content = await $content("blogs").sortBy("createdAt", "desc").fetch()
    const [featuredArticle, ...articles] = content

    return {
      featuredArticle,
      articles,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(date).toLocaleDateString("en", options)
    },
    formatExcerpt(excerpt) {
      return `${excerpt.substr(0, 85)}...`
    },
  },
}
</script>

<style lang="scss">
@use "@/assets/css/_variables.scss";

.blogFeed {
  display: grid;
  grid-template-columns: var(--default-two-columns-half);
  background-color: var(--primary-background-color);

  &__header {
    grid-column: full-start/full-end;
    background: var(--secondary-page-background);
    padding: 200px 0 100px;
    position: relative;
    display: grid;
    row-gap: 20px;
    grid-template-columns: var(--default-two-columns-half);
    overflow: hidden;

    @media only screen and (max-width: variables.$bp-medium) {
      padding: 150px 0 100px;
    }

    & h1,
    & h4 {
      grid-column: left-start/right-end;
    }

    &Square {
      position: absolute;
      bottom: -22%;
      left: 60%;
      transform: rotate(45deg);

      @media only screen and (max-width: variables.$bp-medium) {
        bottom: -25%;
      }
    }
  }

  &__body {
    padding: 100px 0;
    grid-column: 2 / span 2;
    z-index: 10;

    @media only screen and (max-width: variables.$bp-medium) {
      padding: 50px 0;
    }
  }

  &__cardContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
    justify-content: center;

    margin-top: 35px;

    @media only screen and (max-width: variables.$bp-medium) {
      row-gap: 50px;
    }
  }
}
</style>
