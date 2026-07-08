<template>
  <div class="o-form-group">
    <label
      class="o-form-group__title"
      :for="id"
      :class="{ 'is-required': required }"
      >{{ label }}</label
    >
    <div class="o-form-group__action">
      <div class="c-icon-input" :class="[iconPositon, specialClass]">
        <input
          :type="type"
          :id="id"
          class="c-icon-input__input"
          :placeholder="placeholder"
          :value="value"
          :disabled="disabled"
        />

        <label
          class="c-icon-input__icon"
          :for="id"
          v-for="(icon, index) in iconsOrSymbol"
          :key="`${icon.code}_${index}`"
        >
          <template v-if="icon.isIcon">
            <i :class="['fas', icon.code]" aria-hidden="true"></i>
          </template>
          <template v-else>
            <span class="fs-nm">
              {{ icon.code }}
            </span>
          </template>
        </label>
      </div>
    </div>
    <form-message :text="messageText" :type="messageType" :show="messageShow" />
  </div>
</template>

<script lang="ts">
type IconValue = {
  isIcon: boolean;
  code: string;
};

import { defineComponent, toRef, computed } from "vue";
import FormMessage from "@/components/design_system/components/FormMessage.vue";

export default defineComponent({
  name: "IconInput",
  props: {
    id: {
      type: String,
      required: false,
      default: "input-ex",
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    specialClass: {
      type: String,
      required: false,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
      default: "Input",
    },
    placeholder: {
      type: String,
      required: false,
      default: "Placeholder",
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    messageText: {
      type: String,
      required: false,
    },
    messageType: {
      type: String,
      required: false,
    },
    messageShow: {
      type: Boolean,
      required: false,
      default: false,
    },
    value: {
      type: String,
      required: false,
    },
    icons: {
      type: Array,
      required: true,
      default: null,
    },
    iconPosition: {
      type: String,
      required: true,
      default: "right",
    },
  },
  components: {
    FormMessage,
  },
  setup(props) {
    const icons = toRef(props, "icons");
    const position = toRef(props, "iconPosition");

    const iconsOrSymbol = computed(() => {
      const res: IconValue[] = [];
      icons.value.forEach((iconItem: any) => {
        const item = {
          isIcon: iconItem.includes("fa") ? true : false,
          code: iconItem,
        };
        res.push(item);
      });
      return res;
    });

    const iconPositon = computed(() => {
      return {
        "c-icon-input--both-sides": icons.value.length === 2,
        "c-icon-input--icon-left": position.value === "left",
      };
    });

    return { iconsOrSymbol, iconPositon };
  },
});
</script>
