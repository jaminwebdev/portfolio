<template>
  <section class="learn">
    <SvgSeparator
      type="tilt"
      fill="var(--primary-page-background)"
      custHeight="100px"
      class="top"
    ></SvgSeparator>
    <div class="leftColumnOfTwo">
      <h2 class="moreTech__heading">
        Want to Learn <span class="secondaryHighlight">JavaScript</span>?
      </h2>
      <p>
        As I’ve learned more about JavaScript, and programming in general, I’ve kept track of
        articles, code-alongs, videos, tutorials, and modules that helped solidify important
        concepts. Everything from closure, scope, principles of object-oriented programming, and
        functional programming.
      </p>
      <p>
        Best of all, most of this list is 100% free. I’ve only included affordable online courses
        because I think they’re worth more than the $10 it costs to take them.
      </p>
      <b-button size="is-medium" tag="router-link" to="/" type="is-primary">
        Start Learning!
        <svg
          class="icon-right"
          viewBox="0 0 30 37"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.9535 0H5.23256C3.84528 0.00159908 2.51527 0.563757 1.53431 1.56315C0.55336 2.56253 0.00156958 3.91754 0 5.33088V35.1838C0 35.4666 0.110257 35.7378 0.306516 35.9377C0.502775 36.1377 0.76896 36.25 1.04651 36.25H26.1628C26.4403 36.25 26.7065 36.1377 26.9028 35.9377C27.099 35.7378 27.2093 35.4666 27.2093 35.1838C27.2093 34.9011 27.099 34.6299 26.9028 34.4299C26.7065 34.23 26.4403 34.1176 26.1628 34.1176H2.09302V33.7623C2.09395 32.9142 2.42501 32.1012 3.01359 31.5016C3.60217 30.902 4.40018 30.5647 5.23256 30.5637H28.9535C29.231 30.5637 29.4972 30.4514 29.6935 30.2514C29.8897 30.0515 30 29.7803 30 29.4975V1.06618C30 0.783409 29.8897 0.512223 29.6935 0.312276C29.4972 0.112329 29.231 0 28.9535 0ZM17.26 2.13235H22.3256V15.993L20.42 13.0072C20.2388 12.8688 20.0164 12.794 19.79 12.7941C19.5636 12.7941 19.3411 12.8689 19.16 13.0074L17.26 15.9923V2.13235ZM27.907 28.4314H5.23256C4.09978 28.4302 2.99754 28.8055 2.09302 29.5002V5.33088C2.09395 4.48287 2.42501 3.66986 3.01359 3.07022C3.60217 2.47058 4.40018 2.13329 5.23256 2.13235H15.16V18.125C15.16 18.323 15.2178 18.5172 15.32 18.6856C15.4222 18.8541 15.5661 18.9902 15.74 19.0788C15.9139 19.1673 16.1064 19.2048 16.3 19.187C16.4936 19.1692 16.6845 19.0968 16.84 18.9779L19.79 15.193L22.7444 18.9779C22.8998 19.0967 23.0847 19.1691 23.2783 19.1869C23.4719 19.2046 23.6664 19.1672 23.8403 19.0786C24.0141 18.9901 24.1603 18.854 24.2625 18.6855C24.3647 18.5171 24.4188 18.323 24.4188 18.125V2.13235H27.9072L27.907 28.4314Z"
          />
          <path d="M26.5 34.5L29 30" stroke="currentColor" stroke-width="1.5" />
        </svg>
      </b-button>
    </div>
    <div class="rightColumnOfTwo">
      <img
        src="/avatars/working-laptop.svg"
        alt="Avatar of me smiling & waiving"
        class="learn__avatar"
      />
    </div>
    <SvgSeparator
      type="tilt"
      fill="var(--primary-page-background)"
      custHeight="100px"
      class="bottom tiltDownRight"
    ></SvgSeparator>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use "@/assets/css/_variables.scss";

.learn {
  grid-column: full-start/full-end;
  padding: 175px 0;
  position: relative;
  background: var(--secondary-page-background);

  display: grid;
  grid-template-columns: var(--default-two-columns-half);
  align-items: center;

  @media only screen and (max-width: variables.$bp-medium) {
    grid-auto-rows: min-content;
    padding: 150px 10px;
  }

  & .leftColumnOfTwo {
    grid-column: left-start/left-end;
    padding: 0 75px 0 0;

    & h2,
    & p {
      margin-bottom: 35px;
    }
  }

  & .rightColumnOfTwo {
    grid-column: right-start / right-end;
    display: grid;
    align-items: center;
    justify-items: center;

    @media only screen and (max-width: variables.$bp-medium) {
      grid-row: 1/2;
      margin-bottom: 50px;
    }
  }

  & .leftColumnOfTwo,
  & .rightColumnOfTwo {
    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: left-start / right-end;
      padding: 0;

      display: grid;
      justify-items: center;
    }
  }

  &__avatar {
    max-width: 350px;

    @media only screen and (max-width: variables.$bp-medium) {
      max-width: 250px;
    }
  }
}
</style>
