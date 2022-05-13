<template>
  <article class="article">
    <header class="article__header">
      <h1>{{ article.title }}</h1>
      <div class="article__meta">
        <p><nuxt-img format="webp" src="https://i.imgur.com/yz11Nba.jpg" alt="" /> Jamin Roberts</p>
        <p><img src="/icons/icon-calendar.svg" alt="" /> {{ formatDate }}</p>
        <p>
          <img src="/icons/icon-tag.svg" alt="" />
          <NuxtLink :to="`/blog?tag=${tag}`" v-for="(tag, index) in article.tags" :key="tag">
            {{ tag }}<span v-if="index < article.tags.length - 1">,</span>
          </NuxtLink>
        </p>
      </div>
      <img src="/blue-dotted-square.svg" alt="" class="article__headerSquare" />
    </header>
    <main>
      <nuxt-img format="webp" :src="featuredImg" id="featuredImg" />
      <div class="article__body">
        <nuxt-content :document="article" />
      </div>
    </main>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blogs", params.slug).fetch()
    const featuredImg = article.featuredImg || "https://i.imgur.com/DgbU6sB.jpg"

    return {
      article,
      featuredImg,
    }
  },
  layout: "noTheme",
  computed: {
    formatDate() {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(this.article.createdAt).toLocaleDateString("en", options)
    },
    formatTags() {
      return this.article.tags
    },
  },
}
</script>

<style lang="scss">
@use "@/assets/css/_variables.scss";

.article {
  grid-column: full-start/full-end;
  display: grid;
  grid-template-columns:
    [full-start] minmax(20px, 1fr) [left-start] minmax(0, 450px) [left-end right-start] minmax(
      0,
      450px
    )
    [right-end] minmax(20px, 1fr) [full-end];
  background-color: var(--secondary-page-background);

  &__header {
    grid-column: full-start/full-end;
    background: var(--primary-page-background);
    padding: 200px 0 150px;
    position: relative;
    display: grid;
    row-gap: 20px;
    grid-template-columns:
      [full-start] minmax(20px, 1fr) [left-start] minmax(0, 450px) [left-end right-start] minmax(
        0,
        450px
      )
      [right-end] minmax(20px, 1fr) [full-end];
    overflow: hidden;

    @media only screen and (max-width: variables.$bp-medium) {
      padding: 150px 0;
    }

    & h1 {
      grid-column: left-start/right-end;
    }
  }

  &__headerSquare {
    position: absolute;
    bottom: 5%;
    left: 60%;
    transform: rotate(45deg);

    @media only screen and (max-width: variables.$bp-medium) {
      bottom: -5%;
    }
  }

  &__meta {
    grid-column: left-start/right-end;
    display: grid;
    grid-gap: 15px;
    grid-auto-flow: column;
    grid-auto-columns: max-content;

    @media only screen and (max-width: variables.$bp-medium) {
      display: flex;
      flex-wrap: wrap;
    }

    & p,
    & a {
      color: var(--primary-color);
      margin-bottom: 0px;
      font-size: 1rem;
    }

    & p {
      display: grid;
      justify-items: center;
      align-items: center;
      grid-auto-flow: column;
      grid-gap: 5px;

      @media only screen and (max-width: variables.$bp-medium) {
        grid-auto-columns: max-content;
        grid-gap: 10px;
      }
    }
  }

  & main {
    background-color: var(--secondary-page-background);
    grid-column: 2 / span 2;
    margin-top: -100px;
    z-index: 10;

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: 1 / -1;
    }
  }

  & #featuredImg {
    width: 100%;
    max-height: 600px;
    object-fit: cover;

    @media only screen and (max-width: variables.$bp-medium) {
      width: 90%;
      display: block;
      margin: 0 auto;
    }
  }

  &__body {
    padding: 50px;

    @media only screen and (max-width: variables.$bp-medium) {
      padding: 50px 25px;
    }
  }
}

.nuxt-content-highlight {
  position: relative;
  margin: 25px 0;

  & pre {
    border-radius: 5px;
    box-shadow: 10px 10px 25px rgba(38, 62, 82, 0.15);
  }

  & pre code {
    font-size: 18px !important;
  }

  & .filename {
    position: absolute;
    font-size: 16px;
    color: #fff;
    right: 20px;
    top: 15px;
  }

  & .number {
    background-color: transparent;
    padding: 0;
    margin: 0;
    height: auto;
  }
}

.nuxt-content h2,
.nuxt-content h3 {
  margin-top: 30px;
  margin-bottom: 18px;
  line-height: 1.4em;
  padding-bottom: 15px;
  border: 0 solid hsl(210, 38%, 93%);
  border-bottom-width: 1px;

  @media only screen and (max-width: variables.$bp-medium) {
    line-height: 1.2em;
    padding-bottom: 8px;
    margin-bottom: 20px;
  }
}

.nuxt-content h1 > a:before,
.nuxt-content h2 > a:before,
.nuxt-content h3 > a:before {
  content: "#";
  color: var(--primary-color);
  font-weight: 400;
  font-size: 24px;
  line-height: 25px;
  padding-right: 5px;
  position: absolute;
  bottom: 30%;
}

.nuxt-content h1 > a:before {
  opacity: 0;
}

@media only screen and (min-width: variables.$bp-medium) {
  .nuxt-content h2 > a:before,
  .nuxt-content h3 > a:before {
    opacity: 0;
  }
}

.nuxt-content h2:hover > a:before,
.nuxt-content h3:hover > a:before {
  opacity: 1;
}

.nuxt-content h1 > a,
.nuxt-content h2 > a,
.nuxt-content h3 > a {
  margin-left: -32px;
  padding: 5px 5px 5px 10px;
  position: relative;

  @media only screen and (max-width: variables.$bp-medium) {
    margin-left: -20px;
  }
}
</style>
