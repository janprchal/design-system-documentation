<template>
  <article class="o-page">
    <header class="o-page__heading">
      <h1 class="mb-0">Flexbox Grid System</h1>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>
              We're using Grid System to divide space into blocks where we can
              place our content (f.e. components). DS is using standard 12 which
              is giving us lots of options how to split content. Grid system is
              based on CSS <span class="ff-mono">Flexbox</span>.
            </p>

            <p>
              Funcions which build the grid basics, can be found in
              <span class="c-important">02_tools/tools.flex-grid.scss</span>,
              these mixins are setting up width of each column for every
              <router-link :to="{ name: RESPONSIVE_BREAKPOINTS_ROUTE_NAME }"
                >responsive breakpoint</router-link
              >.
            </p>
            <p>
              Rest of the settings for Grid System can be found in
              <span class="c-important">05_objects/objects.flex-grid.scss</span
              >, where we can find basic settings for the grid. Important
              variable here is
              <span class="c-important">$col-padding-x</span>(--sm, --md, --lg,
              --xl). If we want to change spacing between columns we can change
              this variable.
            </p>

            <hint-message type="green" class="mb-lg">
              Most of the time we will defining columns throught CSS classes to
              our HTML elements. Later we will discover how to work with columns
              directly in CSS and how to use them in our Objects & Components.
            </hint-message>

            <h4>Base elements we will be using to build grid are:</h4>
            <div class="mb-md">
              <span class="c-important"
                >&lt;div class="o-row"&gt;&lt;/div&gt;</span
              ><br />
              is wrapper for our columns. Row has negative
              <span class="ff-mono">margin</span>
              to ensure that columns are aligned on X axis. Row is by default
              <span class="ff-mono">flex</span>, we can benefit from this when
              we want to use
              <router-link :to="{ name: LAYOUT_HELPERS_ROUTE_NAME }"
                >layout helpers</router-link
              >.
            </div>

            <div class="mb-md">
              <span class="c-important"
                >&lt;div class="o-col-*"&gt;&lt;/div&gt;</span
              ><br />
              where the <span class="ff-mono">*</span> represents number of
              columns (1-12) which should element take.
            </div>
            <h5>All 12 Columns</h5>
            <code-block lang="html" :code="ALL_COLUMNS_CODE" class="mb-lg" />
            <component-example
              component-name="All 12 Columns with gaps"
              class="mt-0"
            >
              <div v-html="ALL_COLUMNS_EXAMPLE"></div>
            </component-example>
            <p>
              By default columns have gaps between them, we can override this
              behavior byt adding
              <span class="c-important">.o-row--no-gaps</span>modifier class to
              <span class="c-important"
                >&lt;div class="o-row"&gt;&lt;/div&gt;</span
              >
              block.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="basic-usage">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Basic use</h2>
            </header>
            <p>
              Now, because we know what are base elements to create structure
              with columns, we can use them in real world example.
            </p>
            <code-block lang="html" :code="BASIC_COLUMNS_CODE" class="mb-lg" />
            <p>
              In first example we used <span class="c-important">o-col-*</span>
              class to define width of our column. In example above we can see
              that we used different classes.
            </p>

            <div class="mb-md">
              <div class="mb-xs">
                <span class="c-important">.o-col-sm-12</span><br />
                On Mobile breakpoint will this column take 100% of available
                space.
              </div>

              <div class="mb-xs">
                <span class="c-important">.o-col-md-6</span><br />
                On Tablet breakpoint will this column take 50% of available
                space.
              </div>

              <div class="mb-xs">
                <span class="c-important">.o-col-lg-3</span><br />
                On Screen breakpoint will this column take 25% of available
                space.
              </div>

              <div class="mb-xs">
                <span class="c-important">.o-col-xl-2</span><br />
                On Large Screen breakpoint will this column take app. 16.6667%
                of available space.
              </div>
            </div>

            <p class="mb-xs fs-nm fsi">
              You can shrink your sreen to see how will the columns change.
            </p>
            <component-example component-name="Basic Columns" class="mt-0">
              <div v-html="BASIC_COLUMNS_EXAMPLE"></div>
            </component-example>
            In example we can also see how the negative margin of
            <span class="c-important">.o-row</span> aligning columns in the
            wrapper.
          </div>
        </section>
        <section class="o-page__section" id="offsetting-columns">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Offsetting columns</h2>
            </header>
            <p>
              There might be a scenario where we don't want our column to be at
              the start position, but we want to move it few columns to right.
              For these scenarios we can use
              <span class="fwb">offset</span>.
            </p>

            <p>
              We can add offset to the column in similar way as we are defining
              column itself:
              <span class="c-important"
                >&lt;div class="o-col-offset-*"&gt;&lt;/div&gt;</span
              >, where <span class="ff-mono">*</span> represents the number of
              columns by which we want the block to be shifted.
            </p>

            <code-block lang="html" :code="OFFSET_CODE" class="mb-lg" />
            <component-example component-name="Offset" class="mt-0">
              <div v-html="OFFSET_EXAMPLE"></div>
            </component-example>
            <p>
              In example above we defined block which will have 50% of available
              width (6 cols of 12), we moved this block to right by offsetting
              it by 6 columns from left side.
            </p>
            <p>
              We can use responsive classnames (-sm-, -md-, -lg-, -xl-) same way
              we used them, when we we're defining columns.
            </p>
            <code-block
              lang="html"
              :code="OFFSET_RESPONSIVE_CODE"
              class="mb-lg"
            />

            <p class="mb-xs fs-nm fsi">
              You can shrink your sreen to see how will the columns change.
            </p>
            <component-example
              component-name="Offset with responsive options"
              class="mt-0"
            >
              <div v-html="OFFSET_RESPONSIVE_CODE"></div>
            </component-example>
            <p>
              In this example, we want to have our block 50% wide, and centered
              on Tablet breakpoint (and all bigger screens), on moble block will
              be 100% wide and offset class won't be applied (we dont need any).
            </p>
          </div>
        </section>
        <section class="o-page__section" id="nesting-columns">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Nesting columns</h2>
            </header>
            <p>
              We can easily nest columns into each other, by that we can have
              even more control on how do we want to split content.
            </p>
            <code-block lang="html" :code="NESTING_CODE" class="mb-lg" />

            <!-- <p class="mb-xs fs-nm fsi">
              You can shrink your sreen to see how will the columns change.
            </p> -->
            <component-example component-name="Nested Columns" class="mt-0">
              <div v-html="NESTING_EXAMPLE"></div>
            </component-example>
            <p>
              In the example above we can see, that nesting is very simple, we
              just need to nest another
              <span class="c-important">&lt;div class="o-row"&gt;</span> &
              <span class="c-important">&lt;div class="o-col-*"&gt;</span>
              structure.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="columns-in-css">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Columns in CSS</h2>
            </header>
            <p>
              When we're defigning structure for our content it's convinient to
              write this logic straight into HTML by adding class like
              <span class="c-important">.o-col-md-6</span> to element. But,
              there might be case when we want so work with columns in CSS files
              (usually in components or objects), therefor in DS we can find
              mixins which can help us with that.
            </p>

            <h5>HTML structure</h5>
            <code-block lang="html" :code="COLS_IN_STYLES_HTML" class="mb-lg" />
            <h5>CSS Code</h5>
            <code-block lang="css" :code="COLS_IN_STYLES_CSS" class="mb-lg" />

            <p>
              We're using <span class="ff-mono">mixins</span> which DS is
              providing. We can see in CSS code above, that we defined 12
              columns for mobile breakpoint, 6 columns for tablet, 3 for desktop
              and 2 for large resolution screens. We also used
              <span class="ff-mono">mixin</span> to create row.
            </p>
            <component-example component-name="Nested Columns" class="mt-0">
              <div v-html="NESTING_EXAMPLE"></div>
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
import HintMessage from "@/components/common/HintMessage.vue";
import ComponentExample from "@/components/common/ComponentExample.vue";

// Routes
import {
  RESPONSIVE_BREAKPOINTS_ROUTE_NAME,
  LAYOUT_HELPERS_ROUTE_NAME,
} from "@/router/modules/layouts";

// Code Examples
import {
  ALL_COLUMNS_CODE,
  ALL_COLUMNS_EXAMPLE,
  BASIC_COLUMNS_CODE,
  BASIC_COLUMNS_EXAMPLE,
  OFFSET_CODE,
  OFFSET_EXAMPLE,
  OFFSET_RESPONSIVE_CODE,
  OFFSET_RESPONSIVE_EXAMPLE,
  NESTING_CODE,
  NESTING_EXAMPLE,
  COLS_IN_STYLES_CSS,
  COLS_IN_STYLES_HTML,
} from "@/code_examples/layout/html/Grid";

export default defineComponent({
  name: "GridSystem",
  components: {
    ArticleNavigation,
    HintMessage,
    ComponentExample,
    CodeBlock,
  },
  setup() {
    const sections = getArticleNavSections();

    return {
      sections,
      ALL_COLUMNS_CODE,
      ALL_COLUMNS_EXAMPLE,
      BASIC_COLUMNS_CODE,
      BASIC_COLUMNS_EXAMPLE,
      RESPONSIVE_BREAKPOINTS_ROUTE_NAME,
      LAYOUT_HELPERS_ROUTE_NAME,
      OFFSET_CODE,
      OFFSET_EXAMPLE,
      OFFSET_RESPONSIVE_CODE,
      OFFSET_RESPONSIVE_EXAMPLE,
      NESTING_CODE,
      NESTING_EXAMPLE,
      COLS_IN_STYLES_CSS,
      COLS_IN_STYLES_HTML,
    };
  },
});
</script>
