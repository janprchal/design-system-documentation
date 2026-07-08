<template>
  <template v-if="options > 1">
    <div
      class="c-radio"
      :class="[specialClass, { 'is-disabled': disabled }]"
      v-for="index in options"
      :key="`${id}_${index}`"
    >
      <label class="c-radio__label" :for="`${id}_${index}`">
        <div class="c-radio__text">
          {{ label }}
          <template v-if="options > 1">
            {{ index }}
          </template>
        </div>
        <input
          class="c-radio__input"
          type="radio"
          :name="name"
          :id="`${id}_${index}`"
          :checked="checked"
          :disabled="disabled"
        />
        <div class="c-radio__indicator"></div>
      </label>
    </div>
  </template>
  <template v-else>
    <div class="c-radio" :class="[specialClass, { 'is-disabled': disabled }]">
      <label class="c-radio__label" :for="`${id}`">
        <div class="c-radio__text">
          {{ label }}
        </div>
        <input
          class="c-radio__input"
          type="radio"
          :name="name"
          :id="`${id}`"
          :checked="checked"
          :disabled="disabled"
        />
        <div class="c-radio__indicator"></div>
      </label>
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RadioInput",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
      default: "radio_name",
    },
    options: {
      type: Number,
      required: false,
      default: 1,
    },
    label: {
      type: String,
      required: false,
      default: "Radio",
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
    specialClass: {
      type: String,
      required: false,
      default: null,
    },
  },
});
</script>
