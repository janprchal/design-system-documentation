<template>
  <div class="c-tabs has-tabs" id="js_tabs">
    <div class="c-tabs__buttons" role="tablist">
      <a class="c-tabs__button is-active" role="tab" data-target="chat">Chat</a
      ><a class="c-tabs__button" role="tab" data-target="admin">Admin</a
      ><a
        class="c-tabs__button"
        role="tab"
        data-target="active-model-attributes"
        >Active model attributes</a
      ><a
        class="c-tabs__button"
        role="tab"
        data-target="active-record-attributes"
        >Active record attributes</a
      >
    </div>
    <section
      class="c-tabs__tab is-active"
      data-identifier="chat"
      data-title="Chat"
      role="tabpanel"
    >
      <div class="c-tabs__container">
        <div class="c-tabs__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu
          eros, elementum nec bibendum ac, auctor luctus nisl. Morbi non
          bibendum magna.
        </div>
      </div>
    </section>
    <section
      class="c-tabs__tab"
      data-identifier="admin"
      data-title="Admin"
      role="tabpanel"
    >
      <div class="c-tabs__container">
        <div class="c-tabs__content">
          Integer ut elit quis orci tristique auctor. Integer ultricies risus
          sed mi porttitor euismod. Aenean pharetra libero at neque venenatis
          maximus. Nulla odio odio, ornare ac purus id, sagittis laoreet libero.
        </div>
      </div>
    </section>
    <section
      class="c-tabs__tab"
      data-identifier="active-model-attributes"
      data-title="Active model attributes"
      role="tabpanel"
    >
      <div class="c-tabs__container">
        <div class="c-tabs__content">
          Aenean sit amet urna non libero hendrerit laoreet ut vitae lectus. Nam
          tellus lorem, mattis in hendrerit at, dictum ac metus.
        </div>
      </div>
    </section>
    <section
      class="c-tabs__tab"
      data-identifier="active-record-attributes"
      data-title="Active record attributes"
      role="tabpanel"
    >
      <div class="c-tabs__container">
        <div class="c-tabs__content">
          Nam lectus nunc, auctor non semper in, gravida at arcu. Aenean
          dignissim leo vel eros pulvinar blandit. Pellentesque ligula orci,
          consequat sed ligula fringilla, sagittis imperdiet libero. Curabitur
          at aliquam nibh. Proin vestibulum dui eu nibh scelerisque pulvinar.
          Suspendisse ac accumsan felis. Ut quis dolor facilisis, euismod massa
          nec, semper ante.
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { Tabs } from "@/helpers/JS/tabs.js";

export default defineComponent({
  name: "TabsAndAccordion",
  setup() {
    onMounted(() => {
      new Tabs("js_tabs");
    });
  },
});
</script>
