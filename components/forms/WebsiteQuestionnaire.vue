<template>
  <div :class="['customSteps', light ? 'light' : '']">
    <FormulateForm v-model="formValues" @submit="submitHandler" autocomplete="off">
      <b-progress
        :value="((activeStep + 1) / totalSteps) * 100"
        :type="light ? 'is-info' : 'is-primary'"
        size="is-small"
      ></b-progress>
      <b-steps
        v-model="activeStep"
        :animated="true"
        :has-navigation="true"
        mobile-mode="minimalist"
        class="customSteps__steps"
      >
        <b-step-item step="1">
          <FormulateInput
            type="select"
            name="project"
            :input-class="['myInputClass', 'step-0']"
            label="What kind of website project do you have?"
            :options="[
              { value: 'new', label: 'I need a brand new website' },
              { value: 'rebuild', label: 'My website needs a new look and feel' },
              { value: 'unsure', label: `I'm not sure, but my website is under-performing` },
            ]"
            validation="required"
            @validation="checkValidity($event, 0)"
            placeholder="Select an option"
          />
          <transition name="fade">
            <FormulateInput
              v-if="formValues.project === 'rebuild' || formValues.project === 'unsure'"
              input-class="myInputClass"
              label="If you have a URL, please provide it"
              type="text"
              name="url"
              placeholder="url (optional)"
            />
          </transition>
        </b-step-item>

        <b-step-item step="2">
          <FormulateInput
            :input-class="['myInputClass', 'step-1']"
            label="What does/will your website do?"
            type="textarea"
            name="purpose"
            validation="required|max:120,length"
            :help="`Keep it under 120 characters - ${120 - formValues.purpose.length} left.`"
            @validation="checkValidity($event, 1)"
            placeholder="A brief description of your site/business"
            rows="3"
          />
        </b-step-item>

        <b-step-item step="3">
          <FormulateInput
            :input-class="['myInputClass', 'step-2']"
            label="What are the most important goals for your site?"
            name="goals"
            :options="[
              {
                value: 'speed',
                label: `Speed - I know every second counts`,
              },
              { value: 'seo', label: `SEO & Traffic - I'm not seeing a lot of traffic` },
              {
                value: 'conversions',
                label: `Conversions - I think I'm losing out on valuable users`,
              },
              {
                value: 'awareness',
                label: `Awareness - I need reach visitors in an immersive fashion`,
              },
            ]"
            type="checkbox"
            validation="required"
            @validation="checkValidity($event, 2)"
          />
        </b-step-item>

        <b-step-item step="4">
          <FormulateInput
            :input-class="['myInputClass', 'step-3']"
            label="What's your name?"
            type="text"
            name="name"
            placeholder="Your name"
            validation="required"
            @validation="checkValidity($event, 3)"
          />
          <FormulateInput
            type="select"
            name="contact"
            :input-class="['myInputClass', 'step-3']"
            :options="[
              { value: 'email', label: 'Email' },
              { value: 'phone', label: 'Phone' },
              { value: 'linkedin', label: `LinkedIn` },
              { value: 'instagram', label: `Instagram` },
            ]"
            validation="required"
            @validation="checkValidity($event, 3)"
            placeholder="Select an option"
            label="How would you like to be contacted?"
          />
          <FormulateInput
            v-if="formValues.contact && formValues.contact !== 'phone'"
            input-class="myInputClass"
            :label="`What's your ${formValues.contact}?`"
            type="text"
            name="contact-value"
            :placeholder="`${formValues.contact} account`"
            :validation="['required', formValues.contact === 'email' ? 'email' : '']"
            @validation="checkValidity($event, 3)"
          />
          <FormulateInput
            v-if="formValues.contact && formValues.contact === 'phone'"
            input-class="myInputClass"
            label="What's your phone number?"
            type="text"
            name="contact-value"
            placeholder="xxx-xxx-xxxx"
            validation="required|min:12,length"
            @validation="checkValidity($event, 3)"
            v-mask="'###-###-####'"
          />
        </b-step-item>

        <template #navigation="{ previous, next }">
          <b-button
            class="customSteps__prev"
            type="is-primary"
            v-if="!previous.disabled"
            outlined
            :inverted="light"
            @click.prevent="previousStep($event, previous)"
          >
            Previous
          </b-button>
          <b-button
            class="customSteps__next"
            :type="light ? 'is-primary is-light' : 'is-primary'"
            v-if="!next.disabled"
            @click.prevent="nextStep($event, next)"
            :disabled="isStepInvalid"
          >
            Next
          </b-button>
          <b-button
            tag="input"
            native-type="submit"
            class="customSteps__next"
            :type="light ? 'is-primary is-light' : 'is-primary'"
            value="Let's Do This!"
            :disabled="isStepInvalid"
            v-if="next.disabled"
          />
        </template>
      </b-steps>
    </FormulateForm>
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
      activeStep: 0,
      totalSteps: 4,
      formValues: {
        purpose: "",
      },
      formValidity: {
        "step-0": {
          project: false,
        },
        "step-1": {
          purpose: false,
        },
        "step-2": {
          goals: false,
        },
        "step-3": {
          name: false,
          contact: false,
          "contact-value": false,
        },
      },
    }
  },
  methods: {
    nextStep(_, next) {
      next.action()
      setTimeout(() => {
        document.querySelector(`.step-${this.activeStep}`).focus()
      }, 300)
    },
    previousStep(_, previous) {
      previous.action()
      setTimeout(() => {
        document.querySelector(`.step-${this.activeStep}`).focus()
      }, 300)
    },
    checkValidity($event, stepNum) {
      this.formValidity[`step-${stepNum}`][$event.name] = !$event.hasErrors
    },
    submitHandler($event) {
      console.log($event)
    },
  },
  computed: {
    isStepInvalid() {
      const validities = Object.values(this.formValidity[`step-${this.activeStep}`])
      return validities.some((current) => current === false)
    },
  },
}
</script>

<style lang="scss">
.customSteps {
  max-width: 90%;
  margin: 0 auto;
  &__steps {
    grid-column: center-start/center-end;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;

    & .step-content {
      grid-column: 1 / -1;
    }
  }

  &__next {
    grid-column: 3/-1;
  }

  &__prev {
    grid-column: 1/2;
  }

  & .b-steps nav.steps {
    display: none;
  }

  & .b-steps .steps + .step-content {
    padding: 0;
    margin-bottom: 20px;
  }

  &.light {
    & label,
    & .formulate-input-help {
      color: #fff;
    }

    & .formulate-input-error {
      color: #fffc65;
    }

    & .formulate-input-element {
      & input,
      & textarea,
      & select {
        background: #fff;
      }
    }
  }
}
</style>
