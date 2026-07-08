<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">Hint</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>
              It's a small static component which can contain some hint or
              message for user. It has 5 different apperance based on type of
              the hint (info, neutral, positive, warning, negative).
            </p>
            <!-- <p>
              As default Hint uses
              <span class="c-important">$space-sm</span> for
              <span class="ff-mono">padding</span>,
              <span class="c-important">$border-r</span> (global variable) for
              <span class="ff-mono">border-radius</span>.
            </p> -->
            <p>
              We can find components code in
              <location-path
                name="SCSS file"
                path="06_components/components.hint.scss"
              />
              where are all variables we need to change User hint apperance.
            </p>

            <component-example
              component-name="User Hint"
              class="c-component-example--no-gaps mt-0 mb-0"
            >
              <div class="pt-20 pr-60 pb-20 pl-60">
                <div v-html="USER_HINT_EXAMPLES"></div>
              </div>
            </component-example>
            <copy-button component-name="User Hint" :code="USER_HINT_CSS" />
          </div>
        </section>
        <section class="o-page__section" id="hint-structure">
          <header class="o-page__header">
            <h2>Hint structure</h2>
          </header>
          <div class="o-page__inner">
            <p class="mb-xs">Component stucture is very simple:</p>
            <code-block
              :code="USER_HINT_STRUCTURE"
              :lang="`html`"
              class="mb-20"
            />
            <p>
              As we can see except components parent element
              <tag-name tag="div" class-name="c-hint" />
              we have two main elements.
            </p>
            <p>
              <span class="c-important"
                >&lt;div class="c-hint__icon"&gt;&lt;/div&gt;</span
              >, where we can place icon to help us distinguish type of hint.
              We're using FontAwesome in DS, but this can be replaced with e.g.
              svg icon (or any image format). We can alse remove this part and
              do not use icon.
            </p>
            <p>
              <span class="c-important"
                >&lt;div class="c-hint__text"&gt;&lt;/div&gt;</span
              >, into this element we're placing text content (can use
              typography
              <router-link :to="{ name: TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME }"
                >utility classes</router-link
              >) with links etc.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="hint-variations">
          <header class="o-page__header">
            <h2>Hint variations</h2>
          </header>
          <div class="o-page__inner">
            <p>
              As we mentioned before, we have 5 types of hint. We have to just
              add proper <span class="fwm">modifier class</span> to component's
              wrapper
              <span class="c-important"
                >&lt;div class="c-hint"&gt;&lt;/div&gt;</span
              >
              to activate certain type.
            </p>

            <table class="mb-lg">
              <thead>
                <tr>
                  <th>Modifier class</th>
                  <th>Hint example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <span class="c-important"></span>
                  </td>
                  <td class="example">
                    <div class="c-hint">
                      <div class="c-hint__icon">
                        <i class="far fa-lightbulb" aria-hidden="true"></i>
                      </div>
                      <div class="c-hint__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elementum ipsum ut nulla aliquam, et feugiat leo
                        venenatis.
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">c-hint--neutral</span>
                  </td>
                  <td class="example">
                    <div class="c-hint c-hint--neutral">
                      <div class="c-hint__icon">
                        <i class="far fa-lightbulb" aria-hidden="true"></i>
                      </div>
                      <div class="c-hint__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elementum ipsum ut nulla aliquam, et feugiat leo
                        venenatis.
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">c-hint--positive</span>
                  </td>
                  <td class="example">
                    <div class="c-hint c-hint--positive">
                      <div class="c-hint__icon">
                        <i class="far fa-lightbulb" aria-hidden="true"></i>
                      </div>
                      <div class="c-hint__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elementum ipsum ut nulla aliquam, et feugiat leo
                        venenatis.
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">c-hint--warning</span>
                  </td>
                  <td class="example">
                    <div class="c-hint c-hint--warning">
                      <div class="c-hint__icon">
                        <i class="far fa-lightbulb" aria-hidden="true"></i>
                      </div>
                      <div class="c-hint__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elementum ipsum ut nulla aliquam, et feugiat leo
                        venenatis.
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">c-hint--negative</span>
                  </td>
                  <td class="example">
                    <div class="c-hint c-hint--negative">
                      <div class="c-hint__icon">
                        <i class="far fa-lightbulb" aria-hidden="true"></i>
                      </div>
                      <div class="c-hint__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elementum ipsum ut nulla aliquam, et feugiat leo
                        venenatis.
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
import { TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME } from "@/router/modules/utilities";

// code examples
import {
  USER_HINT_EXAMPLES,
  USER_HINT_STRUCTURE,
  USER_HINT_CSS,
} from "@/code_examples/components/UserHint";

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
      USER_HINT_EXAMPLES,
      USER_HINT_STRUCTURE,
      USER_HINT_CSS,
      TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME,
    };
  },
});
</script>
