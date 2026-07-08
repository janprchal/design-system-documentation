<template>
  <div class="c-switch" :class="specialClass" role="switch">
    <label class="c-switch__label">
      <input
        class="c-switch__input"
        :id="id"
        type="checkbox"
        :checked="checked"
      />
      <span class="c-switch__path"><span class="c-switch__toggle"></span></span
      ><span class="c-switch__text">{{ label }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SwitchInput",
  props: {
    id: {
      type: String,
      required: true,
    },
    specialClass: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>
