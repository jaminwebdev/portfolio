<template>
  <footer class="footer myContainer">
    <div class="footer__leftColumn">
      <img src="/logo--blue.svg" alt="" class="footer__logo" />
      <p>I'm a developer specializing in all things JS - Vue, React, Angular, Node. JS all the things 😎.</p>
    </div>
    <div class="footer__quickLinks">
      <h3 class="footer__heading">Quick Links</h3>
      <p class="footer__links">Portfolio</p>
      <p class="footer__links">Blog</p>
      <p class="footer__links">Case Studies</p>
    </div>
    <div class="footer__resources">
      <h3 class="footer__heading">Resources</h3>
      <p class="footer__links">Learn JS</p>
      <p class="footer__links">Learn Vue</p>
      <p class="footer__links">Learn React</p>
    </div>
    <div class="footer__social">
      <h3 class="footer__heading">Follow Me</h3>
      <svg class="footer__social" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 2.5C13.3585 2.5 11.733 2.82332 10.2165 3.45151C8.69989 4.07969 7.3219 5.00043 6.16117 6.16117C3.81696 8.50537 2.5 11.6848 2.5 15C2.5 20.525 6.0875 25.2125 11.05 26.875C11.675 26.975 11.875 26.5875 11.875 26.25V24.1375C8.4125 24.8875 7.675 22.4625 7.675 22.4625C7.1 21.0125 6.2875 20.625 6.2875 20.625C5.15 19.85 6.375 19.875 6.375 19.875C7.625 19.9625 8.2875 21.1625 8.2875 21.1625C9.375 23.0625 11.2125 22.5 11.925 22.2C12.0375 21.3875 12.3625 20.8375 12.7125 20.525C9.9375 20.2125 7.025 19.1375 7.025 14.375C7.025 12.9875 7.5 11.875 8.3125 10.9875C8.1875 10.675 7.75 9.375 8.4375 7.6875C8.4375 7.6875 9.4875 7.35 11.875 8.9625C12.8625 8.6875 13.9375 8.55 15 8.55C16.0625 8.55 17.1375 8.6875 18.125 8.9625C20.5125 7.35 21.5625 7.6875 21.5625 7.6875C22.25 9.375 21.8125 10.675 21.6875 10.9875C22.5 11.875 22.975 12.9875 22.975 14.375C22.975 19.15 20.05 20.2 17.2625 20.5125C17.7125 20.9 18.125 21.6625 18.125 22.825V26.25C18.125 26.5875 18.325 26.9875 18.9625 26.875C23.925 25.2 27.5 20.525 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z"
          fill="var(--primary-color-dark)"
        />
      </svg>
      <svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.59598 25.0757H0.412946V8.33392H5.59598V25.0757ZM3.00167 6.0502C1.34431 6.0502 0 4.67324 0 3.01083C1.18627e-08 2.2123 0.316247 1.44649 0.87917 0.88185C1.44209 0.317211 2.20558 0 3.00167 0C3.79777 0 4.56125 0.317211 5.12418 0.88185C5.6871 1.44649 6.00335 2.2123 6.00335 3.01083C6.00335 4.67324 4.65848 6.0502 3.00167 6.0502ZM24.9944 25.0757H19.8225V16.9259C19.8225 14.9836 19.7835 12.4928 17.1278 12.4928C14.433 12.4928 14.0201 14.603 14.0201 16.786V25.0757H8.84263V8.33392H13.8136V10.6177H13.8862C14.5781 9.30227 16.2684 7.91412 18.7902 7.91412C24.0357 7.91412 25 11.3789 25 15.8792V25.0757H24.9944Z"
          fill="var(--primary-color-dark)"
        />
      </svg>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
@use "@/assets/css/_variables.scss";
.footer {
  padding-top: 3rem;
  background-color: #fafaff;

  display: grid;
  grid-template-columns: minmax(250px, 350px) repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px;

  @media only screen and (max-width: variables.$bp-medium) {
    justify-items: center;
    grid-template-columns: initial;
    padding-bottom: 3rem;
  }

  &__leftColumn {
    background: #edf2f7;
    padding: 40px;
    grid-column: 1/2;

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: 1/-1;
    }
  }

  &__logo {
    margin-bottom: 2rem;
  }

  &__quickLinks {
    grid-column: 2 / span 1;

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: 1 / span 1;
    }

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: 1 / -1;
      text-align: center;
    }
  }

  &__resources {
    grid-column: 3 / span 1;

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: 2 / span 1;
    }

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: 1 / -1;
      text-align: center;
    }
  }

  &__social {
    grid-column: 4 / span 1;

    & svg {
      margin: 2rem 1.5rem 0;
    }

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: 3 / span 1;
    }

    @media only screen and (max-width: variables.$bp-medium) {
      grid-column: 1 / -1;
      text-align: center;
    }
  }

  &__heading {
    font-size: 1.8rem;
    color: var(--primary-color-dark);
  }

  &__links {
    color: var(--primary-color-dark);
    margin: 1.25rem 0;
  }
}
</style>
