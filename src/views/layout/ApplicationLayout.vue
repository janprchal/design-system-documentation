<template>
  <article class="o-page">
    <header class="o-page__heading">
      <h1 class="mb-0">Application Layout</h1>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p class="mb-sm">
              In Design System we 3 base layouts to create our app:
            </p>
            <table class="c-table mb-md">
              <thead>
                <tr>
                  <th>Layput type</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">Fixed Width</span>
                  </td>
                  <td>
                    Wrapper has max-width based on columns width. By default
                    it's setup to be app. 1160px wide and centered.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">Full Width</span>
                  </td>
                  <td>
                    Wrapper uses 100% of screens available width for content.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important"
                      >Full Width with Navigation column</span
                    >
                  </td>
                  <td>
                    Wrapper uses 100% of screens width, but has column with
                    navigation on left side.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              All layouts are using
              <span class="c-important">&lt;div class="o-wrapper"&gt;</span>
              element which is setting up their basic behavior. In CSS we
              <span class="c-important">.o-wrapper</span> is using wrapper
              @mixin for basic bahavior.
            </p>

            <hint-message type="green" class="mt-lg mb-lg">
              Layouts are shown with
              <router-link
                :to="{ name: LAYOUT_OBJECTS_ROUTE_NAME, hash: '#TODO' }"
                >header</router-link
              >
              which has it's own page in this documentation, header and its
              parts (nav, user dropdown, ...) might also depends on JS.
            </hint-message>

            <h4>Important variables</h4>
            <p class="mb-sm">
              To define and work with layouts in DS we have some variables:
            </p>
            <table class="c-table mb-md">
              <thead>
                <tr>
                  <th>Variable name</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">$wrapper-padding-x</span><br />
                    <span class="ff-mono fs-sm">(--sm, --lg, --xl)</span>
                  </td>
                  <td>
                    Defines left and right padding for main content part of
                    layout.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">$col-padding-x</span><br />
                    <span class="ff-mono fs-sm">(--sm, --lg, --xl)</span>
                  </td>
                  <td>
                    Setting up left and right padding for each column, with this
                    variable we can define gaps between columns.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">$col-width</span>
                  </td>
                  <td>
                    Defines width of each column. Changing this variable will
                    affect max-width of Fixed Width Layout wrapper.
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              All of these variables can be found in
              <span class="c-important">01_settings/settings.layout.scss</span>
              file. If you need to do some changes on wrapper itself, you can
              find it in
              <span class="c-important">05_objects/objects.wrappers.scss</span>.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="fixed-layout">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Fixed Layout</h2>
            </header>
            <p>
              Width of content in this layout is based on width of columns (more
              about columns
              <router-link :to="{ name: FLEXBOX_GRID_ROUTE_NAME }"
                >DS column system</router-link
              >). We can find formula for the width in
              <span class="c-important">01_settings/settings.layout.scss</span>
              file, where we can see
              <span class="c-important">$wrapper-max-w--screen</span> &
              <span class="c-important">$wrapper-max-w--largescreen</span>
              variables, these are used to set up max-width of wrapper of
              content.
            </p>

            <component-example
              component-name="Fixed Layout"
              class="c-component-example--no-gaps"
            >
              <div v-html="FIXED_WIDTH_EXAMPLE"></div>
            </component-example>

            <h5>HTML code for Fixed Width layout:</h5>
            <code-block lang="html" :code="FIXED_WIDTH_CODE" class="mb-lg" />

            <hint-message type="purple">
              In example layout is wrapped by
              <span class="ff-mono">&lt;body&gt;</span> element, this is used in
              next layouts to change behavior by adding specific css class. This
              can be replace by for example
              <span class="ff-mono">&lt;div&gt;</span>.
            </hint-message>
          </div>
        </section>
        <section class="o-page__section" id="full-width-layout">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Full Width Layout</h2>
            </header>

            <p>
              This layout is using 100% of screens width, we don't have to
              bother with widths of each column and gaps (throught which we're
              setting up max-width of wrapper). The only variable which we need
              to count with is
              <span class="c-important">$col-padding-x</span> which defines left
              & right padding for wrapper.
            </p>

            <component-example
              component-name="Full Width Layout"
              class="c-component-example--no-gaps"
            >
              <div v-html="FULL_WIDTH_LAYOUT_EXAMPLE"></div>
            </component-example>

            <h5>HTML code for Full Width layout:</h5>
            <code-block
              lang="html"
              :code="FULL_WIDTH_LAYOUT_CODE"
              class="mb-lg"
            />
            <p>
              As you can notice this layout code is basically the same as
              previous one (fixed width layout). There is one small change, we
              added <span class="c-important">.full-width</span> class into
              <span class="ff-mono fs-nm">&lt;body&gt;</span> element. This
              class will affect <span class="c-important">.o-wrapper</span>.
              Wrapper will now use 100% of screen width, gap between left and
              right border of screen will be set by
              <span class="c-important">$wrapper-padding-x</span
              >(--lg,&nbsp;--xl) variable.
            </p>
          </div>
        </section>
        <section
          class="o-page__section"
          id="fluid-layout-with-navigation-column"
        >
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Fluid Layout With Navigation Column</h2>
            </header>

            <p>
              In this layout we're also using 100% of screen width, but area for
              content is reduced by the width of Navigation. Same as for Full
              Width Layout we're using
              <span class="c-important">$wrapper-padding-x</span>(lg, xl) to add
              horizontal space.
            </p>

            <p>
              We can change width of navigation column to increase or decrease
              width of content area. To achieve this we can change the
              <span class="c-important">$nav-max-w</span> variable in
              <span class="c-important">01_settings/settings.layout.scss</span>
              file. By default width of Navigation block is
              <span class="ff-mono fwsb">360px</span>.
            </p>

            <component-example
              component-name="Fluid Layout - Nav on left"
              class="c-component-example--no-gaps"
            >
              <div v-html="NAV_ON_LEFT_EXAMPLE"></div>
            </component-example>
            <h5>HTML code for Full Width layout with Navigation on left:</h5>
            <code-block lang="html" :code="NAV_ON_LEFT_CODE" class="mb-lg" />

            <!-- TODO -->
            <!-- HIDDEN FOR NOW - THERE IS MISSING HAMBURGER IF WE CHOOSE NOT TO USE HEADER -->
            <p>
              This layout has one more version, we can remove the header
              completely (simply bv removing it's html code), but to make things
              lookk nice, we have to add modifier class to wrapper content, it
              should look like this:
              <span class="c-important"
                >&lt;div class="o-wrapper__content
                o-wrapper__content--without-header"&gt;&lt;/div&gt;</span
              >
            </p>

            <hint-message type="warning">
              Because we remove whole header, we have to place
              <router-link
                :to="{ name: LAYOUT_OBJECTS_ROUTE_NAME, hash: '#header-block' }"
                >hamburger component</router-link
              >
              to open navigation block on smaller screens
            </hint-message>

            <component-example
              component-name="Fluid Layout - Nav on left"
              class="c-component-example--no-gaps"
            >
              <div v-html="NO_HEADER_EXAMPLE"></div>
            </component-example>

            <code-block lang="html" :code="NO_HEADER_CODE" class="mb-lg" />
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
  FLEXBOX_GRID_ROUTE_NAME,
  LAYOUT_OBJECTS_ROUTE_NAME,
} from "@/router/modules/layouts";

// Code Examples
import {
  FIXED_WIDTH_EXAMPLE,
  FIXED_WIDTH_CODE,
  FULL_WIDTH_LAYOUT_EXAMPLE,
  FULL_WIDTH_LAYOUT_CODE,
  NAV_ON_LEFT_EXAMPLE,
  NAV_ON_LEFT_CODE,
  NO_HEADER_CODE,
  NO_HEADER_EXAMPLE,
} from "@/code_examples/layout/html/Layouts";

export default defineComponent({
  name: "ApplicationLayout",
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
      FIXED_WIDTH_EXAMPLE,
      FIXED_WIDTH_CODE,
      FULL_WIDTH_LAYOUT_EXAMPLE,
      FULL_WIDTH_LAYOUT_CODE,
      NAV_ON_LEFT_EXAMPLE,
      NAV_ON_LEFT_CODE,
      FLEXBOX_GRID_ROUTE_NAME,
      LAYOUT_OBJECTS_ROUTE_NAME,
      NO_HEADER_CODE,
      NO_HEADER_EXAMPLE,
    };
  },
});
</script>
