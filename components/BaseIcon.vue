<template>
    <div
        :class="[
            'iconContainer',
            bordered ? 'bordered' : '',
            clickable ? 'clickable' : '',
        ]"
        :style="{ height: `${height}px`, width: `${width}px` }"
        @click="iconClicked"
    >
        <img :src="iconPath" :alt="`${icon} logo`" />
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        width: {
            type: Number,
            default: 125,
        },
        height: {
            type: Number,
            default: 125,
        },
        bordered: {
            type: Boolean,
        },
        clickable: {
            type: Boolean,
        },
    },
    methods: {
        iconClicked() {
            this.$emit("iconClicked", this.icon)
        },
    },
    computed: {
        iconPath() {
            return `/icons/icon-${this.icon}.svg`
        },
    },
}
</script>

<style lang="scss">
.iconContainer {
    background: #fafaff;
    border-radius: 50%;
    transition: transform 0.5s ease-out;

    padding: 1rem;
    display: grid;
    justify-items: center;
    align-items: center;

    &.bordered {
        background: linear-gradient(
            var(--primary-color-dark),
            var(--primary-color-light)
        );
        position: relative;

        &::before {
            position: absolute;
            content: "";
            left: 5%;
            right: 5%;
            top: 5%;
            bottom: 5%;
            background: #fff;
            border-radius: 50%;
        }
    }

    &.clickable {
        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
    }

    & img {
        max-width: 70%;
        max-height: 70%;
        z-index: 10;
    }
}
</style>