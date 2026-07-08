<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">Box</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>
              Basic box component where we can place content of the app.
              Component can have
              <span class="ff-mono">header</span> where we can place
              <span class="c-important">Icon</span>,
              <span class="c-important">Heading</span> and
              <span class="c-important">Controls</span>.
            </p>
            <p>
              We can place any content we want into
              <tag-name tag="div" class-name="c-box__content" />.
            </p>

            <p class="mb-lg">
              Settings for <span class="ff-mono">box</span> can be found in
              components
              <location-path
                name="SCSS file"
                path="06_components/components.box.scss"
              />.
            </p>
            <component-example
              component-name="Box"
              :ds-bg="true"
              class="c-component-example--no-gaps mt-0 mb-0"
            >
              <div class="p-20">
                <div v-html="DEFAULT_BOX_HTML"></div>
              </div>
            </component-example>
            <copy-button component-name="Box" :code="DEFAULT_BOX_CSS" />
          </div>
        </section>
        <section class="o-page__section" id="box-structure">
          <header class="o-page__header">
            <h2>Box structure</h2>
          </header>
          <div class="o-page__inner">
            <p class="mb-xs">
              This is the structe of the component you can see above:
            </p>
            <code-block :code="DEFAULT_BOX_HTML" :lang="`html`" class="mb-lg" />

            <p class="mb-xs">
              Let's take a closer look to
              <tag-name tag="div" class-name="c-box__header" /> We can place 3
              items into this element:
            </p>
            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th>Element</th>
                  <th>Role</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <tag-name tag="div" class-name="c-box__icon" />
                  </td>
                  <td>Container where we can place an icon.</td>
                </tr>
                <tr>
                  <td>
                    <tag-name tag="div" class-name="c-box__heading" />
                  </td>
                  <td>
                    Container's heading, by default it's a
                    <tag-name tag="div" /> with
                    <span class="ff-mono">typographical</span> rules. But it can
                    be raplaced with any heading.
                  </td>
                </tr>
                <tr>
                  <td>
                    <tag-name tag="div" class-name="c-box__control" />
                  </td>
                  <td>
                    Place where
                    <router-link :to="{ name: BUTTON_COMPONENT_ROUTE_NAME }"
                      >button(s)</router-link
                    >
                    or dropdown
                    <!-- TODO
                    <router-link :to="{ name: BUTTON_COMPONENT_ROUTE_NAME }">
                      dropdown
                    </router-link>
                    -->
                    menu can be placed
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              We can omit any of these elements if we wan't and show just
              <span class="ff-mono">heading</span> or
              <span class="ff-mono">icon</span>. We can also choose not to have
              <tag-name tag="div" class-name="c-box__header" /> at all, more
              about that in next chapter.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="box-variations">
          <header class="o-page__header">
            <h2>Box variations</h2>
          </header>
          <div class="o-page__inner">
            <p>
              We don't need to have
              <tag-name tag="div" class-name="c-box__header" /> in our
              <span class="ff-mono">box</span>, but we need to do certain
              changes.
            </p>

            <code-block
              :code="NO_HEADER_BOX_HTML"
              :lang="`html`"
              class="mb-lg"
            />
            <component-example
              component-name="Box"
              :ds-bg="true"
              class="c-component-example--no-gaps mt-0 mb-lg"
            >
              <div class="p-20">
                <div v-html="NO_HEADER_BOX_HTML"></div>
              </div>
            </component-example>

            <p>
              If we want to use <span class="ff-mono">box</span> without header
              part we have to add
              <span class="ff-mono fwn">modifier class</span>
              to box content element.
              <tag-name
                tag="div"
                class-name="c-box__content c-box__content--alone"
              />, this class will unite <span class="ff-mono">padding</span>, in
              default content element, <span class="ff-mono">padding-top</span>
              is larger.
            </p>
            <p>
              Another <span class="ff-mono">modifier class</span> for box
              content is
              <span class="c-important">.c-box__content--full-w</span>. This
              class will remove all <span class="ff-mono">paddings</span> and we
              can e.g.
              <span class="fsi"
                >divide box into two halfs and use different
                <span class="ff-mono">background-color</span> to each half</span
              >.
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
// import HintMessage from "@/components/common/HintMessage.vue";
import ComponentExample from "@/components/common/ComponentExample.vue";
import CopyButton from "@/components/common/CopyButton.vue";
import TagName from "@/components/common/TagName.vue";
import LocationPath from "@/components/common/LocationPath.vue";

// routes
import { BUTTON_COMPONENT_ROUTE_NAME } from "@/router/modules/components";

// code examples
import {
  DEFAULT_BOX_HTML,
  DEFAULT_BOX_CSS,
  NO_HEADER_BOX_HTML,
} from "@/code_examples/components/BasicBox";

export default defineComponent({
  name: "UserHint",
  components: {
    ArticleNavigation,
    ComponentExample,
    CodeBlock,
    CopyButton,
    TagName,
    LocationPath,
  },
  setup() {
    const sections = getArticleNavSections();
    return {
      sections,
      DEFAULT_BOX_HTML,
      DEFAULT_BOX_CSS,
      NO_HEADER_BOX_HTML,
      BUTTON_COMPONENT_ROUTE_NAME,
    };
  },
});
</script>
