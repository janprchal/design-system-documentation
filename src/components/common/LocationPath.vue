<template>
  <span class="c-location">
    {{ name }}
    <span class="c-location__path">{{ path }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LocationPath",
  components: {},
  props: {
    name: String,
    path: String,
  },
  setup() {
    return {};
  },
});
</script>
