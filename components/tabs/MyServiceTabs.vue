<template>
    <div :class="['myServiceTabs', { light }]">
        <div class="myServiceTabs__btnsContainer">
            <h2>What Do I Do?</h2>
            <p>
                Over the last 10 years I've had fantastic opportunities to work with dozens of agencies, designers, and
                SEO experts. Doing so has afforded me to wear a lot of hats. Click below to find out more.
            </p>
            <button
                :class="['myServiceTabs__btnToggle', { active: activeBtn === 'webdev' }]"
                type="button"
                @click="changeActiveTab('webdev')"
            >
                <div class="myServiceTabs__btnIcon">
                    <svg width="40" height="32" viewBox="0 0 40 32" xmlns="http://www.w3.org/2000/svg">
                        <path
                            stroke-width="0"
                            d="M0 4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H33.3333C34.3942 0 35.4116 0.421427 36.1618 1.17157C36.9119 1.92172 37.3333 2.93913 37.3333 4V22.6667C37.3333 23.7275 36.9119 24.7449 36.1618 25.4951C35.4116 26.2452 34.3942 26.6667 33.3333 26.6667H16.5333V24H33.3333C33.687 24 34.0261 23.8595 34.2761 23.6095C34.5262 23.3594 34.6667 23.0203 34.6667 22.6667V4C34.6667 3.64638 34.5262 3.30724 34.2761 3.05719C34.0261 2.80714 33.687 2.66667 33.3333 2.66667H4C3.64638 2.66667 3.30724 2.80714 3.05719 3.05719C2.80714 3.30724 2.66667 3.64638 2.66667 4V8H0V4Z"
                        />
                        <path
                            stroke-width="0"
                            d="M16.5334 32.0002H38.6668C39.0204 32.0002 39.3595 31.8597 39.6096 31.6096C39.8596 31.3596 40.0001 31.0205 40.0001 30.6668C40.0001 30.3132 39.8596 29.9741 39.6096 29.724C39.3595 29.474 39.0204 29.3335 38.6668 29.3335H16.5334V32.0002Z"
                        />
                        <path
                            d="M5.86672 25.6001C5.58382 25.6001 5.31251 25.7125 5.11247 25.9125C4.91243 26.1126 4.80005 26.3839 4.80005 26.6668C4.80005 26.9497 4.91243 27.221 5.11247 27.421C5.31251 27.6211 5.58382 27.7334 5.86672 27.7334H8.00005C8.28295 27.7334 8.55426 27.6211 8.7543 27.421C8.95433 27.221 9.06672 26.9497 9.06672 26.6668C9.06672 26.3839 8.95433 26.1126 8.7543 25.9125C8.55426 25.7125 8.28295 25.6001 8.00005 25.6001H5.86672Z"
                        />
                        <path
                            d="M0.533447 13.5756C0.533447 12.8041 0.822426 12.0641 1.33681 11.5186C1.8512 10.973 2.54885 10.6665 3.2763 10.6665H10.5906C11.318 10.6665 12.0157 10.973 12.5301 11.5186C13.0445 12.0641 13.3334 12.8041 13.3334 13.5756V29.0907C13.3334 29.8623 13.0445 30.6022 12.5301 31.1478C12.0157 31.6933 11.318 31.9998 10.5906 31.9998H3.2763C2.54885 31.9998 1.8512 31.6933 1.33681 31.1478C0.822426 30.6022 0.533447 29.8623 0.533447 29.0907V13.5756ZM3.2763 12.6059C3.03382 12.6059 2.80127 12.7081 2.62981 12.8899C2.45835 13.0718 2.36202 13.3184 2.36202 13.5756V29.0907C2.36202 29.3479 2.45835 29.5946 2.62981 29.7764C2.80127 29.9583 3.03382 30.0604 3.2763 30.0604H10.5906C10.8331 30.0604 11.0656 29.9583 11.2371 29.7764C11.4085 29.5946 11.5049 29.3479 11.5049 29.0907V13.5756C11.5049 13.3184 11.4085 13.0718 11.2371 12.8899C11.0656 12.7081 10.8331 12.6059 10.5906 12.6059H3.2763Z"
                        />
                    </svg>
                </div>
                <div class="myServiceTabs__btnContent">
                    <h4>Web Dev</h4>
                    <p>Leveraging the latest front-end technlolgoies like Vue, React, and Angular.</p>
                </div>
            </button>
            <button
                :class="['myServiceTabs__btnToggle', { active: activeBtn === 'seo' }]"
                type="button"
                @click="changeActiveTab('seo')"
            >
                <div class="myServiceTabs__btnIcon">
                    <svg width="35" height="27" viewBox="0 0 35 27" xmlns="http://www.w3.org/2000/svg">
                        <path
                            stroke-width="0"
                            d="M0.695651 4.15328L0.785281 5.95996C0.194091 6.75645 -0.077083 7.71981 0.0189393 8.68244L1.44631 23.2189C1.54749 24.2508 2.06123 25.2104 2.88666 25.9093C3.7121 26.6082 4.78961 26.9959 5.90767 26.9963H19.7422V24.9197H5.90767C5.34866 24.9192 4.81003 24.7251 4.39752 24.3755C3.98502 24.0258 3.72842 23.5459 3.67811 23.03L2.25074 8.49346C2.22273 8.20616 2.25961 7.9166 2.35904 7.64323C2.45847 7.36987 2.61826 7.11871 2.82823 6.90575C3.03821 6.69279 3.29375 6.52271 3.57858 6.40635C3.86341 6.28999 4.17127 6.22991 4.48254 6.22992H30.5202C30.8315 6.22991 31.1394 6.28999 31.4242 6.40635C31.709 6.52271 31.9646 6.69279 32.1746 6.90575C32.3845 7.11871 32.5443 7.36987 32.6438 7.64323C32.7432 7.9166 32.7801 8.20616 32.752 8.49346L32.156 14.5365H34.408L34.9816 8.68244C35.0379 8.10784 34.9645 7.52866 34.7659 6.98183C34.5673 6.435 34.248 5.93252 33.8283 5.5064C33.4085 5.08029 32.8976 4.73989 32.3281 4.50692C31.7585 4.27395 31.1428 4.15351 30.5202 4.15328H21.5975C20.409 4.15305 19.2693 3.71532 18.4291 2.93637L16.5737 1.21691C15.7335 0.437966 14.5938 0.000235231 13.4053 0H5.17718C3.98861 0 2.84871 0.437577 2.00826 1.21647C1.16781 1.99536 0.695651 3.05176 0.695651 4.15328ZM13.4053 2.07664C13.9995 2.07676 14.5694 2.29562 14.9895 2.6851L16.5737 4.15328H4.48254C3.94476 4.15328 3.42938 4.2405 2.9521 4.40248L2.93642 4.11175C2.94815 3.56822 3.1894 3.05063 3.60836 2.67012C4.02732 2.28961 4.59058 2.07653 5.17718 2.07664H13.4053Z"
                        />
                        <path
                            d="M32.3745 25.3601L28.7871 22.0021M30.121 18.9891C30.121 20.12 29.6405 21.2046 28.7852 22.0043C27.9299 22.8039 26.7698 23.2532 25.5602 23.2532C24.3507 23.2532 23.1906 22.8039 22.3353 22.0043C21.48 21.2046 20.9995 20.12 20.9995 18.9891C20.9995 17.8582 21.48 16.7737 22.3353 15.974C23.1906 15.1743 24.3507 14.7251 25.5602 14.7251C26.7698 14.7251 27.9299 15.1743 28.7852 15.974C29.6405 16.7737 30.121 17.8582 30.121 18.9891Z"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <div class="myServiceTabs__btnContent">
                    <h4>SEO</h4>
                    <p>What good is a website if people can't find you?</p>
                </div>
            </button>
            <button
                :class="['myServiceTabs__btnToggle', { active: activeBtn === 'design' }]"
                type="button"
                @click="changeActiveTab('design')"
            >
                <div class="myServiceTabs__btnIcon">
                    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path
                            stroke-width="0"
                            d="M25 50C21.717 50 18.4661 49.3534 15.4329 48.097C12.3998 46.8406 9.6438 44.9991 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C38.75 0 50 10 50 22.5C50 26.4782 48.4196 30.2936 45.6066 33.1066C42.7936 35.9196 38.9782 37.5 35 37.5H30.5C29.75 37.5 29.25 38 29.25 38.75C29.25 39 29.5 39.25 29.5 39.5C30.5 40.75 31 42.25 31 43.75C31.25 47.25 28.5 50 25 50V50ZM25 5C19.6957 5 14.6086 7.10714 10.8579 10.8579C7.10714 14.6086 5 19.6957 5 25C5 30.3043 7.10714 35.3914 10.8579 39.1421C14.6086 42.8929 19.6957 45 25 45C25.75 45 26.25 44.5 26.25 43.75C26.25 43.25 26 43 26 42.75C25 41.5 24.5 40.25 24.5 38.75C24.5 35.25 27.25 32.5 30.75 32.5H35C37.6522 32.5 40.1957 31.4464 42.0711 29.5711C43.9464 27.6957 45 25.1522 45 22.5C45 12.75 36 5 25 5V5ZM11.25 20C13.25 20 15 21.75 15 23.75C15 25.75 13.25 27.5 11.25 27.5C9.25 27.5 7.5 25.75 7.5 23.75C7.5 21.75 9.25 20 11.25 20ZM18.75 10C20.75 10 22.5 11.75 22.5 13.75C22.5 15.75 20.75 17.5 18.75 17.5C16.75 17.5 15 15.75 15 13.75C15 11.75 16.75 10 18.75 10ZM31.25 10C33.25 10 35 11.75 35 13.75C35 15.75 33.25 17.5 31.25 17.5C29.25 17.5 27.5 15.75 27.5 13.75C27.5 11.75 29.25 10 31.25 10ZM38.75 20C40.75 20 42.5 21.75 42.5 23.75C42.5 25.75 40.75 27.5 38.75 27.5C36.75 27.5 35 25.75 35 23.75C35 21.75 36.75 20 38.75 20Z"
                        />
                    </svg>
                </div>
                <div class="myServiceTabs__btnContent">
                    <h4>Design</h4>
                    <p>I've worked with extremely talented designers that let me pick their brains.</p>
                </div>
            </button>
        </div>
        <div class="myServiceTabs__contentContainer">
            <transition-group name="fade">
                <div class="myServiceTabs__tabContent" v-show="activeTab === 'webdev'" key="webdev">
                    <div class="myServiceTabs__tabHeadings">
                        <div class="myServiceTabs__headingBlock">
                            <h3>&#60; 1 Sec</h3>
                            <h4>Load Times</h4>
                        </div>
                        <div class="myServiceTabs__headingBlock">
                            <h3>130+</h3>
                            <h4>Sites Built</h4>
                        </div>
                    </div>
                    <p>
                        Website performance has always been important, but it's only getting more important as search
                        engines, end-users, and business expectations evolve - especially on mobile devices. Your
                        website can't hobble over the finish line and expect to keep up with competitors.
                    </p>
                    <p>
                        <i>Over half</i> of users abandon sites that take <strong>3 seconds or more</strong> to load.
                        You can't afford to <strong>not</strong> take advantage of Vue or React in your next website
                        project.
                    </p>
                    <div class="myServiceTabs__contentBtns">
                        <b-button size="is-medium" :type="light ? 'is-primary is-light' : 'is-primary'">
                            Web Dev Services</b-button
                        >
                        <b-button size="is-medium" type="is-primary" :outlined="light" inverted>
                            My Portfolio
                        </b-button>
                    </div>
                </div>
                <div class="myServiceTabs__tabContent" v-show="activeTab === 'seo'" key="seo">
                    <div class="myServiceTabs__tabHeadings">
                        <div class="myServiceTabs__headingBlock">
                            <h3>89%</h3>
                            <h4>Avg Traffic Increase</h4>
                        </div>
                        <div class="myServiceTabs__headingBlock">
                            <h3>100+</h3>
                            <h4>Site Audits</h4>
                        </div>
                    </div>
                    <p>
                        I've been lucky enough to work with dozens of SEO and digital marketing agencies, which has
                        allowed me to pick up all the insider knowledge you need to get ahead. Why would you hire
                        someone else to optimize your site after the fact? Let's launch your site with everything
                        already baked in!
                    </p>
                    <div class="myServiceTabs__contentBtns">
                        <b-button size="is-medium" :type="light ? 'is-primary is-light' : 'is-primary'">
                            SEO Services</b-button
                        >
                    </div>
                </div>
                <div class="myServiceTabs__tabContent" v-show="activeTab === 'design'" key="design">
                    <div class="myServiceTabs__tabHeadings">
                        <div class="myServiceTabs__headingBlock">
                            <h3>20+</h3>
                            <h4>Designs Completed</h4>
                        </div>
                        <div class="myServiceTabs__headingBlock">
                            <h3>Double</h3>
                            <h4>Your Conversions</h4>
                        </div>
                    </div>
                    <p>
                        I've also worked with many talented designers and picked up their inspiration resources and
                        design tools. This has lead me down a rabbit hole of UX improvements and given me a
                        research-backed wireframing process that has dramatically increased conversions.
                    </p>
                    <div class="myServiceTabs__contentBtns">
                        <b-button size="is-medium" :type="light ? 'is-primary is-light' : 'is-primary'">
                            See My Designs</b-button
                        >
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        light: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            activeTab: "webdev",
            activeBtn: "webdev",
        }
    },
    methods: {
        changeActiveTab(tabName) {
            if (tabName !== this.activeTab) {
                this.activeTab = ""
                this.activeBtn = tabName

                let delay = 395

                if (window.innerWidth > 900) {
                    delay = 500
                }

                setTimeout(() => {
                    this.activeTab = tabName
                }, delay)
            }
        },
    },
}
</script>

<style lang="scss">
.myServiceTabs {
    width: 100%;
    display: grid;
    column-gap: 12rem;
    grid-template-columns: 1fr 1.35fr;

    @media only screen and (max-width: 56.25em) {
        row-gap: 2rem;
        grid-template-columns: 1fr;
    }

    &__btnsContainer {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;
        row-gap: 0.75rem;

        & h2 {
            margin-bottom: 1.5rem;
            text-align: left;
        }

        @media only screen and (max-width: 56.25em) {
            grid-column: 1/-1;
            grid-gap: 2rem;
            grid-template-columns: repeat(3, 1fr);

            & h2,
            & p {
                grid-column: 1 /-1;
            }
        }
    }

    &__btnToggle {
        padding: 2rem;
        border-radius: 1.5rem;
        border: none;
        background: #fff;
        box-shadow: 0 0 12px rgba(var(--primary-color-dark-rgb), 0.1);
        transition: all 0.1s ease-out;

        display: grid;
        grid-template-columns: 1fr 6fr;
        column-gap: 2rem;
        align-items: center;

        @media only screen and (max-width: 56.25em) {
            grid-template-columns: 1fr;
            justify-items: center;
            padding: 1rem;
        }

        & .myServiceTabs__btnIcon {
            border: 1px solid var(--primary-color);
            padding: 1.5rem;
            border-radius: 50%;
            height: 6rem;
            width: 6rem;

            & svg {
                width: 100%;
                height: 100%;
                fill: var(--primary-color);
                stroke: var(--primary-color);
            }

            @media only screen and (max-width: 56.25em) {
                padding: 1rem;
                height: 4.5rem;
                width: 4.5rem;
            }
        }

        & .myServiceTabs__btnContent {
            & h4 {
                font-size: 2rem;
                font-weight: 500;
                margin-bottom: 0.5rem;
            }

            & p {
                font-size: 1.6rem;
                line-height: 1.2em;
                margin-bottom: 0;
            }

            & p,
            & h4 {
                text-align: left;
                grid-column: 2/-1;
            }

            @media only screen and (max-width: 56.25em) {
                & p {
                    display: none;
                }

                & h4 {
                    margin-top: 1rem;
                    margin-bottom: 0;
                    font-size: 1.8rem;
                    text-align: center;
                }
            }
        }

        &.active {
            background: var(--primary-color);

            & .myServiceTabs__btnIcon {
                border: 1px solid #fff;

                & svg {
                    fill: #fff;
                    stroke: #fff;
                }
            }

            & .myServiceTabs__btnContent {
                & h4,
                & p {
                    color: #fff;
                }
            }
        }

        &:hover {
            cursor: pointer;
            background: var(--primary-color-dark);

            & .myServiceTabs__btnIcon {
                border-color: #fff;
                & svg {
                    fill: #fff;
                }
            }

            & .myServiceTabs__btnContent {
                & h4,
                & p {
                    color: #fff;
                }
            }
        }
    }

    &__contentContainer {
        padding: 1rem;
        display: grid;
        align-content: center;

        & p:last-of-type {
            margin-bottom: 3.5rem;
        }

        @media only screen and (max-width: 56.25em) {
            grid-column: 1/-1;
            padding: 2rem 0;
        }
    }

    &__tabHeadings {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(max-content, 7rem));
        justify-content: space-evenly;
        margin-bottom: 3rem;
    }

    &__headingBlock {
        text-align: center;

        & h3 {
            color: var(--primary-color);
        }

        & h4 {
            font-size: 2rem;
        }
    }

    &__contentBtns {
        & button:first-child {
            margin-right: 3rem;
        }

        @media only screen and (max-width: 56.25em) {
            display: grid;
            grid-gap: 2rem;
            justify-items: center;

            & button:first-child {
                margin: 0;
            }
        }
    }

    &.light {
        & .myServiceTabs {
            &__btnsContainer {
                & h2,
                & p {
                    color: #fff;
                }

                & .myServiceTabs__btnIcon {
                    border: 1px solid #fff;

                    & svg {
                        fill: #fff;
                        stroke: #fff;
                    }
                }

                & .myServiceTabs__btnContent {
                    & h4,
                    & p {
                        color: #fff;
                    }
                }
            }

            &__btnToggle {
                background: transparent;
                border: 1px solid #fff;

                &.active {
                    background: #c2d7ef;
                    border: 1px solid transparent;

                    & .myServiceTabs__btnIcon {
                        border: 1px solid var(--primary-color-dark);

                        & svg {
                            fill: var(--primary-color-dark);
                            stroke: var(--primary-color-dark);
                        }
                    }

                    & .myServiceTabs__btnContent {
                        & h4,
                        & p {
                            color: var(--primary-color-dark);
                        }
                    }
                }

                &:hover {
                    cursor: pointer;
                    background: #fff;

                    & .myServiceTabs__btnIcon {
                        border-color: var(--primary-color-dark);
                        & svg {
                            fill: var(--primary-color-dark);
                        }
                    }

                    & .myServiceTabs__btnContent {
                        & h4,
                        & p {
                            color: var(--primary-color-dark);
                        }
                    }
                }
            }
        }

        & .myServiceTabs__contentContainer {
            & h3,
            & h4,
            & p,
            & strong {
                color: #fff;
            }
        }
    }
}
</style>
