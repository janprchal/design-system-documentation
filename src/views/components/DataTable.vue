<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">Table</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <!-- <location-path name="SCSS file" path="06_components/components.hint.scss" /> -->

            <!-- <component-example
              component-name="User Hint"
              class="c-component-example--no-gaps mt-0 mb-0"
            >
              <div class="pt-20 pr-60 pb-20 pl-60">
                <div v-html=""></div>
              </div>
            </component-example> -->
            <!-- <copy-button component-name="User Hint" :code="" /> -->
          </div>
        </section>
        <section class="o-page__section" id="hint-structure">
          <header class="o-page__header">
            <h2></h2>
          </header>
          <div class="o-page__inner">
            <p></p>
          </div>
        </section>
      </div>
      <aside class="o-page__side o-page__side--last">
        <article-navigation :article-sections="sections" />
      </aside>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getArticleNavSections } from "@/helpers/htmlHelpers";

import ArticleNavigation from "@/components/common/ArticleNavigation.vue";
// import CodeBlock from "@/components/common/CodeBlock.vue";
// import HintMessage from "@/components/common/HintMessage.vue";
// import ComponentExample from "@/components/common/ComponentExample.vue";
// import LocationPath from "@/components/common/LocationPath.vue";
// import CopyButton from "@/components/common/CopyButton.vue";
// import TagName from "@/components/common/TagName.vue";

// routes
// import { } from "@/router/modules/utilities";

// code examples
import {} from "@/code_examples/components/PillButton";

export default defineComponent({
  name: "UserHint",
  components: {
    ArticleNavigation,
    // ComponentExample,
    // CodeBlock,
    // CopyButton,
    // TagName,
    // LocationPath,
  },
  setup() {
    const sections = getArticleNavSections();
    return {
      sections,
    };
  },
});
</script>
