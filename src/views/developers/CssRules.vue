<template>
  <article class="o-page">
    <header class="o-page__heading">
      <h1 class="mb-0">CSS Rules</h1>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <!-- when-not-to-use-nesting -->
        <section class="o-page__section" id="when-not-to-use-nesting">
          <div class="o-page__inner">
            <header class="mb-lg">
              <h2 class="mb-sm">
                When <span class="tc-negative">not</span> to use nesting
              </h2>
              <p>
                Generally we aim not to overuse nesting when writing CSS code.
                Our goal is flat structure of CSS file.
              </p>
            </header>
            <h4 class="mb-xs">when writing BEM structure</h4>
            <p>
              Nesting when we're writing BEM structure is not good approach,
              using selectors written as
              <span class="c-important">&__block-name</span> makes more specific
              selectors then we need (if we're obtaining BEM rules), also code
              full of nesting is harder to read (specially if you get back to
              your component after two weeks, month, year). Project is then hard
              to maintain.
            </p>
          </div>
          <div class="o-row">
            <div class="o-col-lg-12 o-col-xl-6 mb-md">
              <h4 class="tc-negative">Wrong</h4>
              <code-block
                :code="structureCodeBad"
                :lang="`css`"
                :copy="false"
                class="mb-lg"
              />
            </div>
            <div class="o-col-lg-12 o-col-xl-6">
              <h4 class="tc-positive">Correct</h4>
              <code-block :code="structureCodeOk" :lang="`css`" :copy="false" />
            </div>
          </div>
        </section>

        <!-- when-using-relationship-selector -->
        <section class="o-page__section" id="when-using-relationship-selector">
          <div class="o-page__inner">
            <header>
              <h2>When using relationship selector</h2>
            </header>
            <p>
              Selectors which are not nested are easier to read and understand
              (relation is on one line). We're not using these selectors super
              often (when writing BEM), but they might come handy in checkboxes,
              radio buttons etc.
            </p>
          </div>
          <div class="o-row">
            <div class="o-col-lg-12 o-col-xl-6 mb-md mb-0--xl">
              <code-block
                :code="relationsSelectrosBad"
                :lang="`css`"
                :copy="false"
                heading="Wrong"
              />
            </div>

            <div class="o-col-lg-12 o-col-xl-6">
              <code-block
                :code="relationsSelectrosOk"
                :lang="`css`"
                :copy="false"
                heading="Correct"
              />
            </div>
          </div>
        </section>

        <!-- when-to-use-nesting -->
        <section class="o-page__section" id="when-to-use-nesting">
          <div class="o-page__inner">
            <header>
              <h1 class="mb-xl">
                When to <span class="tc-positive">use</span> nesting
              </h1>
              <p>
                Nesting is very useful feature and we're going to use it when
                writing CSS.
              </p>
            </header>
            <p>
              If we're making modifier for whole component (and not just for
              component__block) we can nest components blocks, which will be
              affected by that modifier.
            </p>

            <hint-message class="mb-xl" type="warning">
              if we want to change just
              <span class="c-important">component__element</span>, we're not not
              gonna use
              <span class="c-important">component--modifier</span> (with nested
              element), but
              <span class="c-important">component__element--modifier</span>.
            </hint-message>

            <p>
              Modifier of whole component which contains 2 and more elements
              should be placed at the end of the file. Component's element
              modifier should be place right after element selector.
            </p>
          </div>
          <div class="o-row mb-xl">
            <div class="o-col-lg-12 o-col-xl-6 mb-md mb-0--xl">
              <code-block
                :code="componentModifierNok"
                :lang="`css`"
                :copy="false"
                heading="Wrong"
              />
            </div>
            <div class="o-col-lg-12 o-col-xl-6">
              <code-block
                :code="componentModifierOk"
                :lang="`css`"
                :copy="false"
                heading="Correct"
              />
            </div>
          </div>

          <div class="o-page__inner">
            <h2 class="mb-20">
              Selectors starting with <code>:selector</code> and state classes
            </h2>
            <p>
              We want to nest all selectors which starts with
              <span class="c-important">:selector or ::selector</span> if it's
              not breaking other rules&nbsp;(f.e.&nbsp;<router-link
                :to="{ hash: `#when-using-relationship-selector` }"
                >relationship selector</router-link
              >)
            </p>
            <p>
              Similarly we want to nest class which describes state of element
              e.g.&nbsp;<code class="c-important">.is-active</code>,
              <code class="c-important">.has-child</code> etc.
            </p>
          </div>
          <div class="o-row">
            <div class="o-col-12 o-col-xl-6">
              <code-block
                :code="nestingDotsOk"
                :lang="`css`"
                :copy="false"
                heading="Spatne"
              />
            </div>
          </div>
        </section>

        <!-- in-tables -->
        <section class="o-page__section" id="in-tables">
          <div class="o-page__inner">
            <header>
              <h2 class="mb-20">Tables</h2>
            </header>
            <p>
              Nesting table related selectors is allowed, it's even considered
              as a good practice. For now it's not mandatory to use BEM
              structure for tables. This depends on project.
            </p>
          </div>
          <div class="o-row">
            <div class="o-col-lg-12 o-col-xl-6 mb-md mb-0--xl">
              <code-block
                :code="tablesNok"
                :lang="`css`"
                :copy="false"
                heading="Not necessary (but might be convenient)"
              />
            </div>
            <div class="o-col-6 o-col-lg-12 o-col-xl-6">
              <code-block
                :code="tablesOk"
                :lang="`css`"
                :copy="false"
                heading="Correct"
              />
            </div>
          </div>
        </section>

        <!-- svg-/-icons -->
        <section class="o-page__section" id="svg-/-icons">
          <div class="o-page__inner">
            <header>
              <h2 class="mb-20">SVG / Icons</h2>
            </header>
            <p>
              Often a svg icon is inserted into component and it's not necessary
              (or event convenient) to give her BEM related class. We're also
              nesting svg icon, usually we don't have to worried about selector
              specificity.
            </p>
          </div>
          <div class="o-row">
            <div class="o-col-lg-12 o-col-xl-6">
              <h4 class="tc-positive">Correct</h4>
              <code-block :code="svgOk" :lang="`css`" :copy="false" />
            </div>
          </div>
        </section>

        <!-- coding-styles -->
        <section class="o-page__section" id="coding-styles">
          <div class="o-page__inner">
            <header>
              <h1 class="mb-20">Coding styles</h1>
              <p>How to structure css declarations into logical parts.</p>
            </header>
            <p>
              Empty line works as a separator between logical blocks of style
              declarations. They can have even specific order e.g.: <br />
              <strong class="fwb">
                1.&nbsp;Positioning, 2.&nbsp;Box Model / Display,
                3.&nbsp;Design, 4.&nbsp;Typography, 5.&nbsp;Animations,
                6.&nbsp;Other
              </strong>
            </p>
          </div>
          <div class="o-row">
            <div class="o-col-lg-12 o-col-xl-6 mb-md mb-0--xl">
              <code-block
                :code="declarationOrder"
                :lang="`css`"
                :copy="false"
                heading="Correct"
              />
            </div>
            <div class="o-col-lg-12 o-col-xl-6">
              <h4 class="tc-positive">
                Component showing all above in practice
              </h4>
              <code-block
                :code="radioButtonScssComponent"
                :lang="`css`"
                :copy="false"
              />
            </div>
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
import CodeBlock from "@/components/common/CodeBlock.vue";
import HintMessage from "@/components/common/HintMessage.vue";
import ArticleNavigation from "@/components/common/ArticleNavigation.vue";

import { getArticleNavSections } from "@/helpers/htmlHelpers";

import {
  STRUCTURE_NOK,
  STRUCTURE_OK,
  RELATIONS_NOK,
  RELATIONS_OK,
  NESTING_DOTS_OK,
  COMPONENT_MODIFIER_NOK,
  COMPONENT_MODIFIER_OK,
  TABLES_NOK,
  TABLES_OK,
  SVG_OK,
  DECLARATION_ORDER,
  RADIO_BUTTON_COMPONENT,
  RADIO_BUTTON_HTML,
  RADIO_BTN_SCSS_COMPONENT,
} from "@/code_examples/developers/css/CssRules";

export default defineComponent({
  name: "CssCodeStyle",
  components: {
    CodeBlock,
    HintMessage,
    ArticleNavigation,
  },
  setup() {
    const sections = getArticleNavSections();
    return { sections };
  },
  data() {
    return {
      structureCodeBad: STRUCTURE_NOK,
      structureCodeOk: STRUCTURE_OK,
      relationsSelectrosBad: RELATIONS_NOK,
      relationsSelectrosOk: RELATIONS_OK,
      nestingDotsOk: NESTING_DOTS_OK,
      componentModifierNok: COMPONENT_MODIFIER_NOK,
      componentModifierOk: COMPONENT_MODIFIER_OK,
      tablesNok: TABLES_NOK,
      tablesOk: TABLES_OK,
      svgOk: SVG_OK,
      declarationOrder: DECLARATION_ORDER,
      radioButtonComponent: RADIO_BUTTON_COMPONENT,
      radioButtonHMTL: RADIO_BUTTON_HTML,
      radioButtonScssComponent: RADIO_BTN_SCSS_COMPONENT,
    };
  },
});
</script>
