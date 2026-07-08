<template>
  <div class="c-hint" :class="type !== undefined ? `c-hint--${type}` : ``">
    <div class="c-hint__icon">
      <template v-if="iconType === 'info'">
        <icon-info />
      </template>
      <template v-else>
        <icon-attention />
      </template>
    </div>
    <div class="c-hint__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";

import IconInfo from "@/assets/icons/IconInfo.vue";
import IconAttention from "@/assets/icons/IconAttention.vue";

export default defineComponent({
  name: "HintMessage",
  components: {
    IconInfo,
    IconAttention,
  },
  props: {
    heading: String,
    message: String,
    type: String,
  },
  setup(props) {
    const { type } = toRefs(props);
    const typeValue = type.value;

    const iconType = computed(() => {
      return typeValue === "alert" || typeValue === "warning"
        ? "alert"
        : "info";
    });
    return {
      iconType,
    };
  },
});
</script>
