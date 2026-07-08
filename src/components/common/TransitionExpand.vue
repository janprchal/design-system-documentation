<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ZERO } from "@/constants";
import { getStyle } from "@/helpers/htmlHelpers";

export default defineComponent({
  name: "TransitionExpand",
  methods: {
    enter(element: HTMLElement) {
      const { width } = getComputedStyle(element);

      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";

      const { height } = getComputedStyle(element);

      element.setAttribute("style", `width: ${null}`);
      element.setAttribute("style", `position: ${null}`);
      element.setAttribute("style", `visibility: ${null}`);
      element.setAttribute("style", `height: ${ZERO}`);

      getStyle(element, "height");

      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },
    afterEnter(element: HTMLElement) {
      element.style.height = "auto";
    },
    leave(element: HTMLElement) {
      const { height } = getComputedStyle(element);

      element.style.height = height;

      getStyle(element, "height");

      requestAnimationFrame(() => {
        element.setAttribute("style", `height: ${ZERO}`);
      });
    },
  },
});
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
