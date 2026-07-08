<template>
  <div class="c-component-example">
    <div class="c-component-example__header">
      <div class="c-component-example__browser-buttons">
        <div
          class="c-component-example__button c-component-example__button--close"
        ></div>
        <div
          class="c-component-example__button c-component-example__button--minimize"
        ></div>
        <div
          class="c-component-example__button c-component-example__button--enlarge"
        ></div>
      </div>
      <div class="c-component-example__name">
        {{ componentName }}
      </div>
    </div>
    <div
      class="c-component-example__content"
      :class="{ 'c-component-example__content--ds-bg': dsBg }"
    >
      <div class="example">
        <slot></slot>
      </div>
    </div>
    <div class="c-component-example__footer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentExample",
  props: {
    componentName: String,
    dsBg: Boolean,
  },
});
</script>
