<template>
  <article class="o-page">
    <header class="o-page__heading">
      <h1 class="mb-0">Typography</h1>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="basic-text">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Basic text</h2>
            </header>
            <p>
              Typography in DS is (at least for now) super simple, we have
              several <span class="ff-mono">font-sizes</span> (from 10px to
              32px). If you want to change some of the
              <span class="ff-mono">font-size</span>(s),
              <span class="ff-mono">line-height</span>(s), you can find
              variables in
              <span class="c-important"
                >01_settings/settings.typography.scss</span
              >.
            </p>

            <p>
              As a default font we're currently using
              <a href="https://fonts.google.com/specimen/Roboto" target="_blank"
                >Roboto</a
              >
              for all texts (normal and headings).
            </p>

            <component-example component-name="Basic Text">
              <p class="fs-nm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque imperdiet felis non sem pharetra, nec tincidunt
                risus suscipit. Cras vehicula dignissim pellentesque. Mauris in
                elit nec nulla sollicitudin condimentum a quis nisi.
              </p>

              <p class="fsi">Italic font-style</p>
              <p class="underline">Underlined text</p>
              <p class="fwb">Bold text</p>
              <p class="tc-negative fsi fwb underline">
                Some bold italic text with underlined text and red color
              </p>
            </component-example>

            <p class="mb-0">
              Except <span class="ff-mono">font-size</span> we can use classes
              for <span class="ff-mono">font-weight</span>,
              <span class="ff-mono">font-color</span>,
              <span class="ff-mono">font-style</span> etc. This style can be
              achieved by adding
              <router-link :to="TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME"
                >Utility Class</router-link
              >.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="headings">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Headings</h2>
            </header>
            <p>
              Headings are using same
              <span class="ff-mono">font-size</span> variables (if you change
              these variables, you'll automatically change
              <span class="ff-mono">font-sizes</span> for headings), which can
              be used by utility class.
            </p>

            <p>
              We can find CSS code for Headings in
              <span class="c-important">04_elements/elements.headings.scss</span
              >. Headings are concidered as elements, since we're using headings
              like this:
            </p>
            <code-block
              lang="html"
              :code="HEADINGS_EXAMPLE"
              class="mb-nm"
              :copy="false"
            />

            <component-example component-name="All Headings">
              <h1>H1 Heading</h1>
              <h2>H2 Heading</h2>
              <h3>H3 Heading</h3>
              <h4>H3 Heading</h4>
              <h5>H3 Heading</h5>
              <h6>H3 Heading</h6>
            </component-example>

            <p>
              Unlike setting up elements
              <span class="ff-mono">font-size</span> with utility class, heading
              element or class might also add
              <span class="ff-mono">margin-bottom</span>,
              <span class="ff-mono">line-height</span>&nbsp;&amp;&nbsp;
              <span class="ff-mono">font-weight</span> specific for heading.
            </p>

            <hint-message type="purple" class="mb-md">
              <p>
                Even though we can define heading just with HTML code, we can
                also define heading with CSS class. We have this possibility
                because we might want to have heading which looks like
                <span class="c-important">&lt;h2&gt;&lt;/h2&gt;</span> heading
                but semantically it should be less important heading, let's say
                <span class="c-important">&lt;h5&gt;&lt;/h5&gt;</span>.
              </p>
              <p class="mb-0">
                we can achieve this by using CSS class
                <span class="c-important"
                  >&lt;h5 class="h2"&gt;Heading 5&lt;/h5&gt;</span
                >
                &nbsp;&ndash;&nbsp;now we have less important
                <span class="ff-mono">heading 5</span> which looks like
                <span class="ff-mono">heading 2</span>,
              </p>
            </hint-message>
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

// HTML Code Examples
import { HEADINGS_EXAMPLE } from "@/code_examples/utilities/html/Examples";

// routes
import {
  COLORS_UTILITY_CLASSES_ROUTE_NAME,
  TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME,
} from "@/router/modules/utilities";

export default defineComponent({
  name: "DesignTypography",
  components: {
    ArticleNavigation,
    CodeBlock,
    HintMessage,
    ComponentExample,
  },
  setup() {
    const sections = getArticleNavSections();
    return {
      sections,
      COLORS_UTILITY_CLASSES_ROUTE_NAME,
      HEADINGS_EXAMPLE,
      TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME,
    };
  },
});
</script>
