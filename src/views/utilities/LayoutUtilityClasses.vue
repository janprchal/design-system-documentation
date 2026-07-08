<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">Layout utility classes</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>
              Utiility classes which we will go through in this section can help
              you with "conditional" rendereing of content in certain responsive
              scenario and provide classes to quickly change
              <span class="ff-mono">display</span>
              property.
            </p>

            <p class="mb-0">
              You can find these classes in
              <span class="c-important"
                >08_utilities/utilities.layout.scss</span
              >
              file.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="display-and-sizing">
          <header class="o-page__header">
            <h2>Display and Sizing</h2>
          </header>

          <div class="o-page__inner">
            <p>
              Let's look at the utility classes for
              <span class="ff-mono">display</span>,
              <span class="ff-mono">position</span>,
              <span class="ff-mono">width</span>,
              <span class="ff-mono">height</span> and
              <span class="ff-mono">border</span>
              properties at first.
            </p>

            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="c-important">.dib</span>
                  </td>
                  <td>
                    Will set <span class="ff-mono">display</span> property of
                    element to <span class="ff-mono">inline-block</span>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.db</span>
                  </td>
                  <td>
                    Changes <span class="ff-mono">display</span> property to
                    <span class="ff-mono">block</span>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.pr</span>
                  </td>
                  <td>
                    Sets elements <span class="ff-mono">position</span> property
                    to <span class="ff-mono">relative</span>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.full-w</span>
                  </td>
                  <td>
                    Elements <span class="ff-mono">width</span> will be set to
                    100% of available space.
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.full-h</span>
                  </td>
                  <td>
                    Will set elements <span class="ff-mono">height</span> to
                    100% of available space.
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.no-border</span>
                  </td>
                  <td>
                    This utility class will remove all borders which might
                    element have.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="o-page__section" id="conditional-rendering">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Conditional rendering</h2>
            </header>

            <p>
              These Utility classes can help you show or hide content on
              specified
              <router-link :to="{ name: RESPONSIVE_BREAKPOINTS_ROUTE_NAME }"
                >responsive breakpoints</router-link
              >
              (mobile, table, sceen, largescreen).
            </p>

            <p>
              Using this classes you can f.e.: show part of an application on
              mobile, but hide it on screens which are wide as tablet (or wider
              - screen, ...).
            </p>

            <p class="mb-sm">
              Let's look how the content conditional rendersing class looks
            </p>

            <code-block
              lang="css"
              :code="CONTENT_RENDER_CLASS_EXAMPLE"
              class="mb-md"
              :copy="false"
            />

            <p>
              This class will cause that element on which we will use it, will
              be shown only on tablet screen resolution (768px - 1160px). On
              smaller or larger screen resolutions won't be element with this
              class shown
              <span class="ff-mono">display: none</span>).
            </p>

            <p>
              In the table bellow we can see on which breakpoint is going to be
              the element with utility class showned and on which is going to be
              hidden.
            </p>
            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>On which breakpoint will be block visible</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="c-important">.mobile-only</span>
                  </td>
                  <td>
                    <icon-list :devices="mobileOnly" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.tablet-only</span>
                  </td>
                  <td>
                    <icon-list :devices="tabletOnly" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.tablet-and-more</span>
                  </td>
                  <td>
                    <icon-list :devices="tabletAndMore" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.screen-only</span>
                  </td>
                  <td>
                    <icon-list :devices="screenOnly" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.screen-and-more</span>
                  </td>
                  <td>
                    <icon-list :devices="screenAndMore" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.largescreen-and-more</span>
                  </td>
                  <td>
                    <icon-list :devices="largeScreenAndMore" />
                  </td>
                </tr>
              </tbody>
            </table>

            <p class="mb-xs">Let's see more "real life" example</p>
            <code-block
              lang="html"
              :code="CONTENT_RENDER_REAL_LIFE_EXAMPLE"
              class="mb-lg"
            />

            <component-example
              component-name="Conditional Rendering"
              class="c-component-example--no-gaps mt-0"
            >
              <div v-html="CONTENT_RENDER_REAL_LIFE_EXAMPLE"></div>
            </component-example>
            <p>
              Change wide of your browser screen to see how will the content
              change.
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
import ComponentExample from "@/components/common/ComponentExample.vue";
import IconList from "@/components/common/IconList.vue";

// Routes
import { RESPONSIVE_BREAKPOINTS_ROUTE_NAME } from "@/router/modules/layouts";

import { CONTENT_RENDER_REAL_LIFE_EXAMPLE } from "@/code_examples/utilities/html/Examples";
import { CONTENT_RENDER_CLASS_EXAMPLE } from "@/code_examples/utilities/css/Examples";

export default defineComponent({
  name: "LayoutUtilityClasses",
  components: {
    ArticleNavigation,
    CodeBlock,
    ComponentExample,
    IconList,
  },
  setup() {
    const sections = getArticleNavSections();
    const mobileOnly = [
      { name: "Mobile", visible: true },
      { name: "Tablet", visible: false },
      { name: "Screen", visible: false },
      { name: "Large Screen", visible: false },
    ];
    const tabletOnly = [
      { name: "Mobile", visible: false },
      { name: "Tablet", visible: true },
      { name: "Screen", visible: false },
      { name: "Large Screen", visible: false },
    ];
    const tabletAndMore = [
      { name: "Mobile", visible: false },
      { name: "Tablet", visible: true },
      { name: "Screen", visible: true },
      { name: "Large Screen", visible: true },
    ];
    const screenOnly = [
      { name: "Mobile", visible: false },
      { name: "Tablet", visible: false },
      { name: "Screen", visible: true },
      { name: "Large Screen", visible: false },
    ];
    const screenAndMore = [
      { name: "Mobile", visible: false },
      { name: "Tablet", visible: false },
      { name: "Screen", visible: true },
      { name: "Large Screen", visible: true },
    ];
    const largeScreenAndMore = [
      { name: "Mobile", visible: false },
      { name: "Tablet", visible: false },
      { name: "Screen", visible: false },
      { name: "Large Screen", visible: true },
    ];
    return {
      sections,
      RESPONSIVE_BREAKPOINTS_ROUTE_NAME,
      mobileOnly,
      tabletOnly,
      tabletAndMore,
      screenOnly,
      screenAndMore,
      largeScreenAndMore,
      CONTENT_RENDER_CLASS_EXAMPLE,
      CONTENT_RENDER_REAL_LIFE_EXAMPLE,
    };
  },
});
</script>
