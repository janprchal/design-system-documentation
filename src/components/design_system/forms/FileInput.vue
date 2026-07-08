<template>
  <div class="o-form-group">
    <label
      class="o-form-group__title"
      :for="id"
      :class="{ 'is-required': required }"
      >{{ label }}</label
    >
    <div class="o-form-group__action">
      <div class="c-file" :class="specialClass">
        <input class="c-file__input js_file" :id="id" type="file" />
        <label
          class="c-file__label"
          :for="id"
          :button-label="buttonLabel"
        ></label>
      </div>
    </div>
    <form-message :text="messageText" :type="messageType" :show="messageShow" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { FileInputs } from "@/helpers/JS/fileInput.js";

import FormMessage from "@/components/design_system/components/FormMessage.vue";

export default defineComponent({
  name: "FileInput",
  props: {
    id: {
      type: String,
      required: false,
      default: "input-ex",
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
    buttonLabel: {
      type: String,
      required: false,
      default: "Choose file",
    },
  },
  components: {
    FormMessage,
  },
  setup() {
    onMounted(() => {
      new FileInputs(".js_file");
    });
  },
});
</script>
