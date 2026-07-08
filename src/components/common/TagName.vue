<template>
  <span class="c-important">
    {{ tagName }}
  </span>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "TagName",
  components: {},
  props: {
    tag: String,
    className: String,
    content: String,
    status: String,
    selfClosing: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { tag, className, content, status, selfClosing } = toRefs(props);
    const tagName = `
      <${tag.value}${className.value ? ` class="${className.value}"` : ""}${
      status.value ? ` ${status.value}` : ""
    }${selfClosing.value ? " /" : ""}>${content.value ? content.value : ""}${
      selfClosing.value ? "" : `</${tag.value}>`
    }`;
    return {
      tagName,
    };
  },
});
</script>
