<template>
    <div class="serviceTabs">
        <b-tabs v-model="activeTab" size="is-medium" type="is-toggle" :vertical="!isMobile" :expanded="isMobile">
            <b-tab-item>
                <template #header>
                    <b-icon icon="cellphone-link"></b-icon>
                    <span> Web Dev </span>
                </template>
                <div class="serviceTabs__tabHeadings">
                    <div class="serviceTabs__headingBlock">
                        <h3>1 Sec</h3>
                        <h4>Load Times</h4>
                    </div>
                    <div class="serviceTabs__headingBlock">
                        <h3>130+</h3>
                        <h4>Sites Built</h4>
                    </div>
                    <div class="serviceTabs__headingBlock">
                        <h3>99.9%</h3>
                        <h4>Uptime</h4>
                    </div>
                </div>
                <p>
                    Website performance has always been important, but it's only getting more important as Google,
                    end-users, and business expectations evolve - especially for mobile devices. You can't afford to not
                    take advantage of Vue or React in your next website project.
                </p>
                <div class="serviceTabs__tabBtns">
                    <b-button size="is-medium" type="is-primary"> Web Dev Services </b-button>
                    <b-button size="is-medium" type="is-primary" outlined> My Portfolio </b-button>
                </div>
            </b-tab-item>

            <b-tab-item>
                <template #header>
                    <b-icon icon="magnify"></b-icon>
                    <span> SEO </span>
                </template>
                <div class="serviceTabs__tabHeadings">
                    <div class="serviceTabs__headingBlock">
                        <h3>89%</h3>
                        <h4>Avg Traffic Increase</h4>
                    </div>
                    <div class="serviceTabs__headingBlock">
                        <h3>100+</h3>
                        <h4>Site Audits</h4>
                    </div>
                </div>
                <p>
                    I've been lucky enough to work with dozens of SEO and digital marketing agencies, which has allowed
                    me to pick up all the insider knowledge you need to get ahead. Why would you hire someone else to
                    optimize your site after the fact? Let's launch your site with everything already baked in!
                </p>
                <div class="serviceTabs__tabBtns">
                    <b-button size="is-medium" type="is-primary"> SEO Services </b-button>
                </div>
            </b-tab-item>

            <b-tab-item>
                <template #header>
                    <b-icon icon="palette-outline"></b-icon>
                    <span> Design </span>
                </template>
                <div class="serviceTabs__tabHeadings">
                    <div class="serviceTabs__headingBlock">
                        <h3>20+</h3>
                        <h4>Designs Completed</h4>
                    </div>
                    <div class="serviceTabs__headingBlock">
                        <h3>Double</h3>
                        <h4>Your Conversions</h4>
                    </div>
                </div>
                <p>
                    I've also worked with many talented designers and picked up their inspiration resources and design
                    tools. This has lead me down a rabbit hole of UX improvements and given me a research-backed
                    wireframing process that has dramatically increased conversions.
                </p>
                <div class="serviceTabs__tabBtns">
                    <b-button size="is-medium" type="is-primary"> See My Designs </b-button>
                </div>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: 0,
            activeTab: 0,
        }
    },
    computed: {
        isMobile() {
            return this.windowWidth < 900
        },
    },
    mounted() {
        this.windowWidth = window.innerWidth
        window.addEventListener("resize", this.windowResizeEvent)
    },
    destroyed() {
        window.removeEventListener("resize", this.windowResizeEvent)
    },
    methods: {
        windowResizeEvent() {
            this.windowWidth = window.innerWidth
        },
    },
}
</script>

<style lang="scss">
.serviceTabs {
    &__tabHeadings {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(max-content, 8rem));
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

    &__tabBtns {
        margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 3rem;

        @media only screen and (max-width: 56.25rem) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    & .tabs ul {
        border-bottom: none;
    }

    & .tabs.is-toggle a:hover {
        background: var(--primary-color);
        color: #fff;
    }

    .tabs.is-toggle li.is-active a:hover {
        background: var(--primary-color-dark);
    }

    .b-tabs.is-vertical {
        flex-wrap: nowrap;

        & .tab-content {
            padding: 1rem 6rem;
        }
    }

    .tabs .icon:first-child {
        margin-right: 1.5rem;
    }

    @media only screen and (max-width: 56.25rem) {
        .b-tabs .tabs {
            margin-bottom: 2.5rem;
        }
    }
}
</style>
