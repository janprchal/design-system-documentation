<template>
  <div v-if="show" class="c-form-message" :class="messageType">
    <div class="c-form-message__icon">
      <template v-if="type === 'success'">
        <i class="fas fa-check-circle" aria-hidden="true"></i>
      </template>
      <template v-else-if="type === 'error'">
        <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
      </template>
      <template v-else>
        <i class="fas fa-info-circle" aria-hidden="true"></i>
      </template>
    </div>
    <div class="c-form-message__text">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, computed } from "vue";

export default defineComponent({
  name: "FormMessage",
  props: {
    type: {
      type: String,
      required: false,
      default: "",
    },
    text: {
      type: String,
      required: false,
    },
    show: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const type = toRef(props, "type");

    const messageType = computed(() => {
      return {
        "has-error": type.value === "error",
        "has-success": type.value === "success",
      };
    });

    return {
      messageType,
    };
  },
});
</script>
