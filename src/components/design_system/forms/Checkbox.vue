<template>
  <div class="c-checkbox" :class="[specialClass, { 'is-disabled': disabled }]">
    <label class="c-checkbox__label" :for="id">
      <div class="c-checkbox__text">{{ label }}</div>
      <input
        class="c-checkbox__input"
        type="checkbox"
        :id="id"
        :checked="checked"
        :disabled="disabled"
      />
      <div class="c-checkbox__indicator"></div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckboxInput",
  props: {
    id: {
      type: String,
      required: false,
      default: "checkbox-ex",
    },
    specialClass: {
      type: String,
      required: false,
      default: null,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
      default: "Checkbox",
    },
  },
});
</script>
