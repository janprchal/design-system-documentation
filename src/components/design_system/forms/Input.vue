<template>
  <div class="o-form-group">
    <label
      class="o-form-group__title"
      :for="id"
      :class="{ 'is-required': required }"
      >{{ label }}</label
    >
    <div class="o-form-group__action">
      <input
        :type="type"
        :id="id"
        :class="specialClass"
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
      />
    </div>
    <form-message :text="messageText" :type="messageType" :show="messageShow" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormMessage from "@/components/design_system/components/FormMessage.vue";

export default defineComponent({
  name: "BasicInput",
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
  },
  components: {
    FormMessage,
  },
});
</script>
