<template>
  <div class="o-form-group">
    <label
      class="o-form-group__title"
      :for="id"
      :class="{ 'is-required': required }"
      >{{ label }}</label
    >
    <div class="o-form-group__action">
      <div class="c-options" :class="specialClass">
        <template v-for="(option, index) in options" :key="`option_${index}`">
          <input
            type="radio"
            class="c-options__input"
            :id="`${option}_id`"
            :name="optionsListName"
          />
          <label class="c-options__label" :for="`${option}_id`">{{
            option
          }}</label>
        </template>
      </div>
    </div>
    <form-message :text="messageText" :type="messageType" :show="messageShow" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormMessage from "@/components/design_system/components/FormMessage.vue";

export default defineComponent({
  name: "OptionsInput",
  props: {
    id: {
      type: String,
      required: false,
      default: "input-ex",
    },
    specialClass: {
      type: String,
      required: false,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
      default: "Input",
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    messageText: {
      type: String,
      required: false,
    },
    messageType: {
      type: String,
      required: false,
    },
    messageShow: {
      type: Boolean,
      required: false,
      default: false,
    },
    options: {
      type: Array,
      required: true,
      default: null,
    },
    optionsListName: {
      type: String,
      required: true,
      default: "OptionsList",
    },
  },
  components: {
    FormMessage,
  },
});
</script>
