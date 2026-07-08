<template>
  <div class="c-code">
    <h4 v-if="heading" :class="headingCSSObject">{{ heading }}</h4>
    <div class="c-code__code">
      <div class="c-code__button">
        <button
          v-if="copy"
          :class="['c-btn-copy', buttonState]"
          type="button"
          v-clipboard:copy="code"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >
          {{ copyText }}
        </button>
      </div>
      <prism-editor
        class="ds-documentation"
        :readonly="true"
        :highlight="highlighter"
      ></prism-editor>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core.js";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/themes/prism.css";

export default defineComponent({
  name: "CodeBlock",
  props: {
    code: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      required: true,
    },
    copy: {
      type: Boolean,
      required: false,
      default: true,
    },
    heading: {
      type: String,
      required: false,
      default: null,
    },
    headingType: {
      type: String,
      required: false,
      default: null,
    },
  },
  components: {
    PrismEditor,
  },
  setup(props) {
    const copyText = ref("Copy");
    const buttonState = computed(() => {
      return {
        "has-error": copyText.value === "Error",
        "has-success": copyText.value === "Copied",
      };
    });
    const headingCSSObject = computed(() => {
      return {
        "tc-negative": props.heading === "Wrong",
        "tc-positive": props.heading === "Correct",
      };
    });

    watch(copyText, () => {
      if (copyText.value !== "Copy") {
        setTimeout(() => {
          copyText.value = "Copy";
        }, 3600);
      }
    });

    const onCopy = () => {
      copyText.value = "Copied";
    };
    const onError = () => {
      copyText.value = "Error";
    };

    const highlighter = () => {
      return highlight(props.code, languages[props.lang]);
    };

    return {
      copyText,
      buttonState,
      onCopy,
      onError,
      highlighter,
      headingCSSObject,
    };
  },
});
</script>
