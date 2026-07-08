<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">Pill</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>
              We can use this simple component to emphasis some value (e.g. in
              table), or can represent
              <span class="ff-mono">key</span>&nbsp;/&nbsp;<span class="ff-mono"
                >value</span
              >
              pair (e.g. filter).
            </p>
            <p>
              We can fid components code in
              <location-path
                name="SCSS file"
                path="06_components/components.pill.scss"
              />.
            </p>
            <component-example
              component-name="Pill Button"
              class="c-component-example--no-gaps mt-0 mb-0"
            >
              <div class="pt-20 pr-60 pb-20 pl-20">
                <div v-html="PILL_BUTTON_EXAMPLES"></div>
              </div>
            </component-example>
            <copy-button component-name="Pill Button" :code="PILL_BUTTON_CSS" />
          </div>
        </section>
        <section class="o-page__section" id="pill-structure">
          <header class="o-page__header">
            <h2>Pill Structure</h2>
          </header>
          <div class="o-page__inner">
            <p class="mb-sm">Component structure:</p>
            <code-block
              :code="PILL_BUTTON_STRUCTURE"
              :lang="`html`"
              class="mb-20"
            />
            <p>
              As we can see there is just one element into which we can put our
              text content. We can add some utility classes to main element if
              we need to (e.g. to move the element with margin).
            </p>
          </div>
        </section>
        <section class="o-page__section" id="pill-variations">
          <header class="o-page__header">
            <h2>Pill Variations</h2>
          </header>
          <div class="o-page__inner">
            <p class="mb-xs">
              Similary to many components we can use color variations to
              destinguis between pills. We can add color variant by adding
              <span class="fwm">modifier class</span>.
            </p>
            <!-- <code-block
              :code="PILL_BUTTON_STRUCTURE"
              :lang="`html`"
              class="mb-20"
            /> -->
            <table class="mb-lg">
              <thead>
                <tr>
                  <th>Modifier class</th>
                  <th>Pill example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <span class="c-important"></span>
                  </td>
                  <td class="example">
                    <div class="c-pill">Simple pill</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-pill--neutral</span>
                  </td>
                  <td class="example">
                    <div class="c-pill c-pill--neutral">Neutral pill</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-pill--positive</span>
                  </td>
                  <td class="example">
                    <div class="c-pill c-pill--positive">Positive pill</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-pill--warning</span>
                  </td>
                  <td class="example">
                    <div class="c-pill c-pill--warning">Warning pill</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-pill--negative</span>
                  </td>
                  <td class="example">
                    <div class="c-pill c-pill--negative">Negative pill</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="o-page__section" id="closable-pill">
          <header class="o-page__header">
            <h2>Closable Pill</h2>
          </header>
          <div class="o-page__inner">
            <p class="mb-xs">
              We can use pills to inform user which filters are active, this
              version of pill component have
              <span class="c-important">&times;</span> element which can remove
              filter.
            </p>
            <component-example
              component-name="Closable Pill Button"
              class="c-component-example--no-gaps mt-0"
            >
              <div class="pt-20 pr-60 pb-20 pl-20">
                <div v-html="PILL_BUTTON_CLOSABLE_EXAMPLES"></div>
              </div>
            </component-example>
            <p class="mb-xs">Component structure:</p>
            <code-block
              :code="PILL_BUTTON_CLOSABLE_STRUCTURE"
              :lang="`html`"
              class="mb-20"
            />
            <p>
              We need to add <span class="fwm">modifier class</span>
              <span class="c-important">.c-pill--closable</span> to prepare pill
              component for more elements.
            </p>
            <p>
              Ve can see some layout of this type of Pill button. We have tree
              elements in one row:
              <tag-name tag="div" class-name="c-pill__name" /> where we can
              place filter name,<br />
              <tag-name tag="div" class-name="c-pill__content" /> we can place
              value and <br />
              <tag-name tag="div" class-name="c-pill__close" /> where is close
              button.
            </p>
            <p>
              We can use all colors variations by
              <span class="fwm">adding modifier</span> class e.g.
              <tag-name
                tag="div"
                class-name="c-pill c-pill--closable c-pill--positive"
              />
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
import LocationPath from "@/components/common/LocationPath.vue";
import CopyButton from "@/components/common/CopyButton.vue";
import TagName from "@/components/common/TagName.vue";

// routes
// import { } from "@/router/modules/utilities";

// code examples
import {
  PILL_BUTTON_EXAMPLES,
  PILL_BUTTON_CSS,
  PILL_BUTTON_STRUCTURE,
  PILL_BUTTON_CLOSABLE_EXAMPLES,
  PILL_BUTTON_CLOSABLE_STRUCTURE,
} from "@/code_examples/components/PillButton";

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
      PILL_BUTTON_EXAMPLES,
      PILL_BUTTON_CSS,
      PILL_BUTTON_STRUCTURE,
      PILL_BUTTON_CLOSABLE_EXAMPLES,
      PILL_BUTTON_CLOSABLE_STRUCTURE,
    };
  },
});
</script>
