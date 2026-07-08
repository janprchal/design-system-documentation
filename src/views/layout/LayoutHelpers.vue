<template>
  <article class="o-page">
    <header class="o-page__heading">
      <h1 class="mb-0">Layout Helpers</h1>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>
              There might be situations when it's not convenient to use
              <router-link :to="{ name: FLEXBOX_GRID_ROUTE_NAME }"
                >grid system</router-link
              >
              or create new object. We just need to align element in container.
              For these scenarios we can use layout helpers.
            </p>

            <p>
              We can find these classes on
              <span class="c-important">05_objects/objects.layout.scss</span>.
              These classes have also their rasponsive variants (similar to
              columns).
            </p>

            <p>
              Layout helpers relies on CSS <span class="ff-mono">flexbox</span>,
              every time we want to use class which aligns element, we have to
              use this class on <span cass="ff-mono">flexbox</span> element.
            </p>

            <p class="mb-0">
              In all chapters we will use one important class:
              <span class="c-important">.o-flex</span>, this class simply sets
              <span class="ff-mono">display</span> property of element to
              <span class="ff-mono">flex</span>. This class has responsive
              versions <span class="c-important">.o-flex-sm</span>,&nbsp;
              <span class="c-important">.o-flex-md</span>,&nbsp;
              <span class="c-important">.o-flex-lg</span>,&nbsp;
              <span class="c-important">.o-flex-xl</span>&nbsp;&ndash;&nbsp; if
              we use this type of class element will have
              <span class="ff-mono">display: flex;</span>
              only on responsive condition is true, in other cases it will be
              defult (depend on type of element).
            </p>
          </div>
        </section>
        <section class="o-page__section" id="horizontal-positioning">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Horizontal positioning</h2>
            </header>
            <p>
              When we want to move items on X axis we can use 4 main classes to
              achieve this. Every time we want to move elements in container on
              X axis, we're woring with
              <span class="c-important">justify-content</span> property.
            </p>
            <table class="c-table mb-md">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">.o-start</span>
                  </td>
                  <td>
                    Using this class items will be aligned to left side of
                    container. This is natural behavior event in we do not use
                    this class (but this class will be used when we need to add
                    resposibility).
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">.o-center</span>
                  </td>
                  <td>Elements will be centered.</td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">.o-center</span>
                  </td>
                  <td>Elements will be added at the end of container.</td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">.o-between</span>
                  </td>
                  <td>
                    Elements will take as much space horizontal between them as
                    possible.
                  </td>
                </tr>
              </tbody>
            </table>
            <p>Let's try to use classes above in example.</p>
            <h4>Example of horizontal positioning</h4>
            <code-block
              lang="html"
              :code="HORIZONTAL_POSITIONING_BASIC_CODE"
              class="mb-nm"
              :copy="false"
            />

            <component-example
              component-name="Horizontal positioning"
              class="c-component-example--no-gaps"
            >
              <div v-html="HORIZONTAL_POSITIONING_EXAMPLE"></div>
            </component-example>
          </div>
        </section>
        <section class="o-page__section" id="vertical-positioning">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Vertical positioning</h2>
            </header>

            <p>Vertical positioning works very similar as horizontal.</p>

            <table class="c-table mb-md">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">.o-top</span>
                  </td>
                  <td>
                    Using this class items will be aligned to top of container.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">.o-middle</span>
                  </td>
                  <td>Elements will be in the middle.</td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">.o-end</span>
                  </td>
                  <td>Elements will be placed to the end of container.</td>
                </tr>
              </tbody>
            </table>

            <code-block
              lang="html"
              :code="VERTICAL_POSITIONING_BASIC_CODE"
              class="mb-nm"
              :copy="false"
            />

            <component-example
              component-name="Vertical positioning"
              class="c-component-example--no-gaps"
            >
              <div v-html="VERTICAL_POSITIONING_EXAMPLE"></div>
            </component-example>
          </div>
        </section>
        <section class="o-page__section" id="horizontal-&-vertical-positioning">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Horzintal & Vertical positioning</h2>
            </header>

            <p>We can combine both positions together.</p>
            <code-block
              lang="html"
              :code="BOTH_POSITIONING_BASIC_CODE"
              class="mb-nm"
              :copy="false"
            />
            <component-example
              component-name="Horizontal & Vertical positioning"
              class="c-component-example--no-gaps"
            >
              <div v-html="BOTH_POSITIONING_EXAMPLE"></div>
            </component-example>
          </div>
        </section>
        <section class="o-page__section" id="responsive-positioning">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Responsive positioning</h2>
            </header>

            <p>
              Responsive versions of horizontal & vertical classes are made
              simply by add responsive suffix (more about these identifiers is
              in
              <router-link
                :to="{
                  name: RESPONSIVE_BREAKPOINTS_ROUTE_NAME,
                  hash: '#responsive-classnames',
                }"
                >responsive breakpoints</router-link
              >) and if you need, you can add your own responsive condition.
            </p>

            <code-block
              lang="html"
              :code="RESPONSIVE_POSITIONING_BASIC_CODE"
              class="mb-md"
              :copy="false"
            />
            <p class="mb-xs fs-nm fsi">
              You can shrink your sreen to see how will the columns change.
            </p>
            <component-example
              component-name="Responsive positioning"
              class="c-component-example--no-gaps mt-0"
            >
              <div v-html="RESPONSIVE_POSITIONING_EXAMPLE"></div>
            </component-example>
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

// routes
import {
  FLEXBOX_GRID_ROUTE_NAME,
  RESPONSIVE_BREAKPOINTS_ROUTE_NAME,
} from "@/router/modules/layouts";

// Code Examples
import {
  HORIZONTAL_POSITIONING_EXAMPLE,
  VERTICAL_POSITIONING_EXAMPLE,
  HORIZONTAL_POSITIONING_BASIC_CODE,
  VERTICAL_POSITIONING_BASIC_CODE,
  BOTH_POSITIONING_EXAMPLE,
  BOTH_POSITIONING_BASIC_CODE,
  RESPONSIVE_POSITIONING_EXAMPLE,
  RESPONSIVE_POSITIONING_BASIC_CODE,
} from "@/code_examples/layout/html/LayoutHelpers";

export default defineComponent({
  name: "LayoutHelpers",
  components: {
    ArticleNavigation,
    ComponentExample,
    CodeBlock,
  },
  setup() {
    const sections = getArticleNavSections();

    return {
      sections,
      FLEXBOX_GRID_ROUTE_NAME,
      HORIZONTAL_POSITIONING_EXAMPLE,
      VERTICAL_POSITIONING_EXAMPLE,
      HORIZONTAL_POSITIONING_BASIC_CODE,
      VERTICAL_POSITIONING_BASIC_CODE,
      BOTH_POSITIONING_EXAMPLE,
      BOTH_POSITIONING_BASIC_CODE,
      RESPONSIVE_POSITIONING_EXAMPLE,
      RESPONSIVE_POSITIONING_BASIC_CODE,
      RESPONSIVE_BREAKPOINTS_ROUTE_NAME,
    };
  },
});
</script>
