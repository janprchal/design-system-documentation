<template>
  <button
    class="c-btn-copy c-btn-copy--css"
    :class="buttonState"
    v-clipboard:copy="code"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError"
  >
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  name: "CopyButton",
  props: {
    code: {
      type: String,
      required: true,
    },
    codeType: {
      type: String,
      required: false,
      default: "SCSS",
    },
    componentName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const copied = ref<boolean | null>(null);

    const buttonState = computed(() => {
      return {
        "has-error": copied.value === false,
        "has-success": copied.value === true,
      };
    });

    const buttonText = computed(() => {
      let name = "";
      if (copied.value === null) {
        name = `Copy ${props.componentName} ${props.codeType} code`;
      } else if (copied.value === true) {
        name = "Copied";
      } else {
        name = "Error when coping";
      }
      return name;
    });

    const onCopy = () => {
      copied.value = true;
      resetButtonState();
    };

    const onError = () => {
      copied.value = false;
      resetButtonState();
    };

    const resetButtonState = () => {
      setTimeout(() => {
        copied.value = null;
      }, 4000);
    };

    return { onCopy, onError, buttonState, buttonText };
  },
});
</script>
