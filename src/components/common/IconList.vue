<template>
  <ul class="o-flex">
    <li v-for="device in devices" :key="`device_${device.name}`" class="mr-sm">
      <div
        class="c-pill"
        :class="
          device.visible === true ? `c-pill--positive` : `c-pill--negative`
        "
      >
        <span class="c-pill__icon">
          <icon-check v-if="device.visible" />
          <icon-close v-else />
        </span>
        {{ device.name }}
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Device {
  name: string;
  visible: boolean;
}

import IconCheck from "@/assets/icons/IconCheck.vue";
import IconClose from "@/assets/icons/IconClose.vue";

export default defineComponent({
  name: "IconList",
  components: {
    IconCheck,
    IconClose,
  },
  props: {
    devices: {
      type: Array as PropType<Device[]>,
      required: true,
      default: () => [],
    },
  },
});
</script>
