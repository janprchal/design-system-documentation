<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">Tabs</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <hint-message type="warning" class="mb-lg">
              This component needs JavaScript to work properly.
            </hint-message>
            <p>
              One of the User Interfaces classic
              component&nbsp;&ndash;&nbsp;<span class="ff-mono">tabs</span>. Our
              component have one special functionality. On certain breakpoint
              (which is by default 540px and can be changed in JS file) the tabs
              will become accordion.
            </p>
            <p>
              CSS settings can be found in
              <location-path
                name="SCSS file"
                path="06_components/components.tabs.scss"
              />. This component relies on
              <location-path name="JavaScript" path="js/tabs.js" />.
            </p>

            <p class="mb-xs">
              In DS basic tabs looks like this:<br />
              <span class="fs-nm fsi"
                >You can shrink your sreen to see how will be Tabs changed into
                accordion</span
              >
            </p>
            <component-example
              :dsBg="true"
              class="c-component-example--no-gaps mt-0 mb-0"
              component-name="Tabs"
            >
              <div class="p-20">
                <ds-tabs-and-accordion class="mb-0" />
              </div>
            </component-example>
            <copy-button
              component-name="Tabs"
              :code="TABS_SCSS_CODE"
              class="mr-20"
            />
            <copy-button
              component-name="Tabs"
              code-type="JS"
              :code="TABS_JS_CODE"
            />
          </div>
        </section>
        <section class="o-page__section" id="tabs-structure">
          <header class="o-page__header">
            <h2>Tabs</h2>
          </header>
          <div class="o-page__inner">
            <p>
              Let's use first two Tabs from our example to introduce structure
              of <span class="ff-mono">Tabs</span>.
            </p>
            <code-block :code="TABS_STRUCTURE" :lang="`html`" class="mb-20" />
            <p>
              Tabs structure is pretty straightforward, we have
              <tag-name tag="div" class-name="c-tabs" /> parent, which contains
              wrapper for tab buttons
              <tag-name tag="div" class-name="c-tabs__buttons" />, this wrapper
              is followed by sections
              <tag-name tag="section" class-name="c-tabs__tab" /> each section
              represents one tab. In this section we can find 2 nested div,
              <tag-name tag="div" class-name="c-tabs__content" /> is the place
              where we can place content of the tab.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="javascript-structure">
          <header class="o-page__header">
            <h2>Structure used by JavaScript</h2>
          </header>
          <div class="o-page__inner">
            <p>
              As we mentioned before,
              <span class="ff-mono">Tabs</span> component needs JavaScript to
              work. Main attribute of this component is
              <span class="c-important">id="js_tabs"</span>, because ID is what
              is JS code is expecting to make <span class="ff-mono">Tabs</span>
              work.
            </p>

            <code-block :code="TABS_JS_RUN" :lang="`js`" class="mb-20" />

            <p>
              On our tab buttons we can see attribute
              <span class="c-important">data-target</span> our first tab button
              has attribute <span class="ff-mono">data-target="chat"</span> this
              attribute will be paired with attribute
              <span class="c-important">data-identifier</span> on tab section,
              first tab section has
              <span class="ff-mono">data-identifier="chat"</span>.
            </p>

            <p>
              <span class="ff-mono">data-title</span> is another attribute, from
              this attribute will Accordion take name of the clickable section.
            </p>
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
import CodeBlock from "@/components/common/CodeBlock.vue";
import HintMessage from "@/components/common/HintMessage.vue";
import ComponentExample from "@/components/common/ComponentExample.vue";
import LocationPath from "@/components/common/LocationPath.vue";
import CopyButton from "@/components/common/CopyButton.vue";
import TagName from "@/components/common/TagName.vue";

// routes
// import { } from "@/router/modules/utilities";

// code examples
import {
  TABS_STRUCTURE,
  TABS_JS_RUN,
  TABS_SCSS_CODE,
  TABS_JS_CODE,
} from "@/code_examples/components/Tabs";

import DsTabsAndAccordion from "@/components/design_system/components/TabsAndAccordion.vue";

export default defineComponent({
  name: "UserHint",
  components: {
    ArticleNavigation,
    ComponentExample,
    CodeBlock,
    HintMessage,
    CopyButton,
    TagName,
    LocationPath,
    DsTabsAndAccordion,
  },
  setup() {
    const sections = getArticleNavSections();
    return {
      sections,
      TABS_STRUCTURE,
      TABS_JS_RUN,
      TABS_SCSS_CODE,
      TABS_JS_CODE,
    };
  },
});
</script>
