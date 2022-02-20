<template>
    <div :class="['appCard', `${type}Card`, { noOverlay, noImg }]" :style="styleConfig">
        <div :class="[`${type}Card__imgContainer`, 'appCard__imgContainer']" v-if="type !== 'roundedBg'">
            <slot name="img"></slot>
        </div>
        <div :class="[`${type}Card__tagContainer`, 'appCard__tagContainer']">
            <div :class="[`${type}Card__icons`]">
                <slot name="icons"></slot>
            </div>
            <div :class="[`${type}Card__tagLink`]">
                <slot name="tag"></slot>
            </div>
        </div>
        <div :class="[`${type}Card__contentContainer`]">
            <div class="appCard__headingContainer">
                <div class="appCard__avatarIcon">
                    <slot name="avatar"></slot>
                </div>
                <div class="appCard__headings">
                    <slot name="heading"></slot>
                    <slot name="subtitle"></slot>
                </div>
            </div>
            <div class="appCard__body">
                <slot name="body"></slot>
                <div class="appCard__btns">
                    <slot name="btns"></slot>
                </div>
                <div class="appCard__cardMeta">
                    <slot name="meta"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: String, // default, roundedBg, rounded, bordered, bgVector
        bgImg: {
            type: String,
            default: "/CardBGVector.svg",
        },
        bgColor: {
            type: String,
            default: "#fff",
        },
        borderRadius: {
            type: String,
            default: "0rem",
        },
        borderColor: String,
        borderWidth: {
            type: String,
            default: "5px",
        },
        noOverlay: Boolean,
        noImg: Boolean,
    },
    computed: {
        styleConfig() {
            let styles = ""
            if (this.type === "roundedBg") {
                styles = {
                    background: `linear-gradient(to right, rgba(var(--primary-color-dark-rgb), .85), rgba(var(--primary-color-dark-rgb), .85)), url(${this.$props.bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }

                if (this.bgImg === "/CardBGVector.svg") {
                    styles = {
                        ...styles,
                        background: `url(${this.$props.bgImg})`,
                    }
                }
            }

            if (this.type === "bordered") {
                styles = {
                    background: this.bgColor,
                    border: `${this.borderWidth} solid ${this.borderColor}`,
                    borderRadius: this.borderRadius,
                }
            }

            if (this.type === "bgVector") {
                styles = {
                    borderRadius: this.borderRadius,
                    background: `url(${this.$props.bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }
            }

            return styles
        },
    },
}
</script>

<style lang="scss">
.appCard {
    overflow: hidden;
    box-shadow: 0px 10px 20px rgba(37, 61, 126, 0.1);
    background: #fff;

    display: grid;
    position: relative;

    &__cardMeta:not(:empty) {
        display: grid;
        justify-content: space-between;
        grid-auto-flow: column;
        grid-auto-columns: max-content;

        border-top: 1px solid #e8e8e8;
        padding-top: 1rem;
        margin-top: 1.5rem;
        margin-bottom: -2.5rem;

        @media only screen and (max-width: 56.25rem) {
            display: flex;
            flex-wrap: wrap;
        }

        & a,
        & span {
            color: var(--primary-color);
            font-size: 1.4rem;
        }

        & a {
            margin-bottom: 0;

            &:hover {
                color: var(--primary-color-dark);
                transform: scale(1.05);
            }
        }

        & > span {
            display: grid;
            justify-items: center;
            align-items: center;
            grid-auto-flow: column;
            grid-gap: 0.5rem;
        }
    }

    &__headingContainer {
        grid-column: 1/-1;
        display: grid;
        column-gap: 1.5rem;
        grid-template-columns: 5rem 1fr;
    }

    &__headings {
        grid-column: 2/-1;

        & a h3,
        & a h4 {
            transition: transform 0.2s ease-out;
            display: inline-block;

            &:hover {
                transform: scale(1.01);
                color: var(--primary-color);
            }
        }

        & span {
            display: flex;
            color: var(--primary-color);
            font-size: 1.4rem;

            & img {
                margin-right: 0.5rem;
            }
        }
    }

    &__avatarIcon {
        & img {
            width: 5rem;
            height: 5rem;
            object-fit: cover;
            border-radius: 50%;
        }

        &:empty ~ .appCard__headings {
            grid-column: 1/-1;
        }
    }

    &__body {
        color: var(--primary-font-color);
        grid-column: 1/-1;
    }

    &__btns {
        display: grid;
        grid-gap: 2.5rem;
        grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));

        margin-top: 2.5rem;

        &:empty {
            margin-top: 0;
        }

        & .button {
            margin-bottom: 0;

            &:only-child {
                grid-column: 1/-1;
                justify-self: start;
            }
        }
    }
}

.defaultCard {
    grid-template-rows: 25.5rem;

    &__imgContainer {
        position: relative;
        grid-column: 1 / -1;
        grid-row: 1 / 2;

        &:not(:empty) {
            height: 25.5rem;
            grid-row: 1 / 2;

            & ~ .defaultCard__contentContainer {
                padding: 1.5rem 3rem 3rem;
            }
        }

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        & .svgContainer.bottom {
            bottom: -1px;
        }
    }

    &__tagContainer {
        grid-row: 1 / span 1;
        grid-column: 1/-1;
        align-self: end;
        display: grid;
        align-items: end;
        padding: 0 3rem;
    }

    &__icons {
        grid-row: 1/2;
        display: grid;
        grid-template-columns: repeat(3, min-content);
        z-index: 20;
    }

    &__tagLink {
        grid-column: 2/3;
        width: 3.2rem;
        justify-self: end;
        z-index: 20;
    }

    &__contentContainer {
        grid-column: 1/-1;
        width: 100%;
        padding: 2.5rem 3rem 3rem;
        display: grid;
        row-gap: 1.5rem;
        align-content: space-around;
        grid-template-columns: repeat(2, 1fr);
    }

    & p {
        margin-bottom: 0;
    }
}

.roundedCard {
    border-radius: 1.5rem;
    grid-template-rows: 27.5rem;

    &__imgContainer {
        position: relative;
        grid-column: 1 / -1;

        &:not(:empty) {
            height: 25.5rem;
            grid-row: 1 / 2;
            margin: 1.75rem;

            &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(
                    to right,
                    rgba(var(--primary-color-dark-rgb), 0.7),
                    rgba(var(--primary-color-dark-rgb), 0.7)
                );
                z-index: 10;
                border-radius: 1.5rem;
            }

            & ~ .roundedCard__contentContainer {
                padding: 1.5rem 3rem 3rem;
            }
        }

        & img {
            border-radius: 1.5rem;
            position: relative;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        & svg {
            display: none;
        }
    }

    &.noOverlay .roundedCard__imgContainer::after {
        background-image: none;
    }

    &__tagContainer {
        grid-row: 1 / span 1;
        grid-column: 1/-1;
        align-self: end;
        display: grid;
        align-items: end;
        padding: 0 2.5rem 1rem;
    }

    &__icons {
        grid-row: 1/2;
        display: grid;
        grid-template-columns: repeat(3, min-content);
        z-index: 20;

        & .iconContainer {
            max-width: 5rem;
            max-height: 5rem;
        }
    }

    &__tagLink {
        position: absolute;
        top: 3rem;
        right: 3rem;
        width: 3.2rem;
        z-index: 20;
    }

    &__contentContainer {
        grid-column: 1/-1;
        width: 100%;
        padding: 2.5rem 3rem 3rem;
        display: grid;
        row-gap: 1.5rem;
        align-content: space-around;
        grid-template-columns: repeat(2, 1fr);
        background: #fff;
    }

    & p {
        margin-bottom: 0;
    }
}

.roundedBgCard {
    position: relative;
    border-radius: 1.5rem;
    display: grid;

    &__tagContainer {
        grid-row: 1 / span 2;
        grid-column: 1/-1;
        align-items: center;
        display: grid;
        padding: 1.5rem 2rem;
        margin-bottom: 3rem;
    }

    &__icons {
        grid-row: 1/2;
        display: grid;
        grid-template-columns: repeat(3, min-content);
        z-index: 20;

        & .iconContainer {
            max-width: 5rem;
            max-height: 5rem;
        }
    }

    &__tagLink {
        width: 3.2rem;
        z-index: 20;
        grid-column: 2/3;
        justify-self: end;

        & a {
            margin-bottom: 0;
            display: flex;
            align-items: center;
        }
    }

    &__contentContainer {
        width: 100%;
        padding: 0 2.5rem 4rem;
        display: grid;
        row-gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr);
    }

    & p,
    & h2,
    & h3,
    & h4 {
        margin-bottom: 0;
        color: #fff;
    }
}

.borderedCard {
    display: grid;
    padding: 6rem 4rem;

    &__imgContainer,
    &__tagLink {
        display: none;
    }

    &__icons {
        grid-row: 1/-1;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(3, min-content);
        z-index: 20;

        &:not(:empty) {
            margin-bottom: 2.5rem;
        }
    }

    &__contentContainer {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

.bgVectorCard {
    display: grid;
    padding: 6rem 4rem;

    &__imgContainer,
    &__tagLink {
        display: none;
    }

    &__icons {
        grid-row: 1/-1;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(3, min-content);
        z-index: 20;

        &:not(:empty) {
            margin-bottom: 2.5rem;
        }
    }

    &__contentContainer {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

.noImg {
    & .appCard__imgContainer,
    & .appCard__tagContainer {
        display: none;
    }

    &.defaultCard,
    &.roundedCard {
        grid-template-rows: auto;
    }
}
</style>
