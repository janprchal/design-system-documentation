<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">Button</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>
              In DS we have several button <span class="fwsb">colors</span>,
              <span class="fwsb">sizes</span>,
              <span class="fwsb">alternative button style</span>
              &
              <span class="fwsb">disabled state</span>.
            </p>

            <p>
              To achieve button apperance we need to use class
              <span class="c-important">.c-btn</span> or
              <span class="c-important">.c-btn-alt</span>. We can use class on
              <tag-name tag="button" /> or <tag-name tag="input" /> HTML tag.
            </p>

            <p>
              We can find all settings for button in it's
              <location-path
                name="SCSS file"
                path="06_components/components.buttons.scss"
              />.

              <!-- <span class="c-important"
                >06_elements/components.buttons.scss</span
              >. -->
            </p>

            <!-- <p>
              Most important settings are:
              <span class="c-important">$input-h</span>
              sets inputs
              <span class="ff-mono">min-height</span> and
              <span class="ff-mono">border-radius</span>&nbsp;&ndash;&nbsp;<span
                class="c-important"
                >$border-r</span
              >
              these variables are
              <location-path
                name="Global variables"
                path="01_settings/settings.global.scss"
              />. Buttons <span class="ff-mono">font-size</span>
              can be  
             <span class="c-important">$text-sm</span> which sets
              button  to
              <span class="ff-mono">(1.4rem &ndash; 14px)</span> is
              <location-path
                name="Typography variables"
                path="01_settings/settings.typography.scss"
              />
            </p> -->
            <p>
              There is button for each main color of DS, you can find these
              colors in
              <location-path
                name="Colors variables"
                path="01_settings/settings.colors.scss"
              />.
              <!-- <span class="c-important">01_settings/settings.colors.scss</span>. -->
            </p>
            <component-example
              component-name="Basic buttons"
              class="c-component-example--no-gaps mt-0 mb-0"
            >
              <div class="p-20">
                <div v-html="BUTTONS_EXAMPLES"></div>
              </div>
            </component-example>
            <copy-button component-name="Button" :code="BUTTON_CSS" />
          </div>
        </section>
        <section class="o-page__section" id="default-and-alternative-style">
          <header class="o-page__header">
            <h2>Default & Alternative style</h2>
          </header>
          <div class="o-page__inner">
            <p>
              We have two main styles of buttons. Important is that,
              <span class="fwsb">alternative</span> style of button is
              <span class="fwsb">not achieved</span> with
              <span class="fwsb">modifier</span> class.
            </p>

            <code-block
              :code="BUTTON_DEFAULT_ALT_HTML"
              :lang="`html`"
              class="mb-20"
              :copy="false"
            />
            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th class="c-table__cell--w-50p">Class</th>
                  <th>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <span class="c-important">.c-btn</span>
                  </td>
                  <td class="example">
                    <button class="c-btn">Primary</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-btn-alt</span>
                  </td>
                  <td class="example">
                    <button class="c-btn-alt">Primary</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="o-page__section" id="button-colors-and-state">
          <header class="o-page__header">
            <h2>Button colors & state</h2>
          </header>
          <div class="o-page__inner">
            <p>
              Super simple to use, we just combine button type class with color
              modifier class e.g.:
              <tag-name
                tag="button"
                class-name="c-btn c-btn--secondary"
                content="Secondary"
              />.
            </p>
            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th class="c-table__cell--w-50p">Color modifier class</th>
                  <th>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <span class="c-important"></span>
                  </td>
                  <td class="example">
                    <button class="c-btn">Primary</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-btn--secondary</span>
                  </td>
                  <td class="example">
                    <button class="c-btn c-btn--secondary">Secondary</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-btn--positive</span>
                  </td>
                  <td class="example">
                    <button class="c-btn c-btn--positive">Positive</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-btn--warning</span>
                  </td>
                  <td class="example">
                    <button class="c-btn c-btn--warning">Warning</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-btn--negative</span>
                  </td>
                  <td class="example">
                    <button class="c-btn c-btn--negative">Negative</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-btn--neutral</span>
                  </td>
                  <td class="example">
                    <button class="c-btn c-btn--neutral">Neutral</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              Similar for <span class="fwsb">Alternative</span> version of
              button:
            </p>
            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th class="c-table__cell--w-50p">Color modifier class</th>
                  <th>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <span class="c-important"></span>
                  </td>
                  <td class="example">
                    <button class="c-btn-alt">Primary</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-btn-alt--secondary</span>
                  </td>
                  <td class="example">
                    <button class="c-btn-alt c-btn-alt--secondary">
                      Secondary
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-btn-alt--positive</span>
                  </td>
                  <td class="example">
                    <button class="c-btn-alt c-btn-alt--positive">
                      Positive
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-btn-alt--warning</span>
                  </td>
                  <td class="example">
                    <button class="c-btn-alt c-btn-alt--warning">
                      Warning
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-btn-alt--negative</span>
                  </td>
                  <td class="example">
                    <button class="c-btn-alt c-btn-alt--negative">
                      Negative
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-btn-alt--neutral</span>
                  </td>
                  <td class="example">
                    <button class="c-btn-alt c-btn-alt--neutral">
                      Neutral
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <hint-message type="warning">
              Please notice that modifier class which sets up button color
              scheme has for
              <span class="ff-mono fwm">Alternative button</span> different
              format then for deafult button, e.g.:
              <span class="c-important">.c-btn-alt--secondary</span>.
            </hint-message>
          </div>
        </section>
        <section class="o-page__section" id="buttons-sizes">
          <header class="o-page__header">
            <h2>Button sizes</h2>
          </header>
          <div class="o-page__inner">
            <p>
              By default we have 3 button sizes
              <span class="ff-mono">Small</span>,
              <span class="ff-mono">Large</span>,
              <span class="ff-mono">Full-width</span>. We can apply these styles
              by adding modifier class to button.
            </p>
            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th class="c-table__cell--w-50p">Size modifier class</th>
                  <th>Example</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <span class="c-important">.c-btn--small</span>
                  </td>
                  <td class="example">
                    <button class="c-btn c-btn--secondary c-btn--small">
                      Small
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-btn--large</span>
                  </td>
                  <td class="example">
                    <button class="c-btn-alt c-btn-alt--secondary c-btn--large">
                      Large
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">.c-btn--full-w</span>
                  </td>
                  <td class="example">
                    <button class="c-btn c-btn--secondary c-btn--full-w">
                      Full width
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <hint-message type="alert">
              Unlike color scheme classes sizing classes do not distinguish
              between default and alternative button type and they use
              <span class="c-important"
                >.c-btn(--small, --large, --full-w)</span
              >
              classname.
            </hint-message>
          </div>
        </section>
        <section class="o-page__section" id="icons-inside-buttons">
          <header class="o-page__header">
            <h2>Icon in button</h2>
          </header>
          <div class="o-page__inner">
            <p>
              There is no special class, or component to achive this, but since
              button is by default <span class="ff-mono">inline-flex</span> we
              can simply paste icon before buttons text.
            </p>
            <code-block
              :code="BUTTON_WITH_ICON"
              :lang="`html`"
              class="mb-20"
              :copy="false"
            />
            <component-example
              component-name="Button with icon"
              class="c-component-example--no-gaps mt-0 mb-0"
            >
              <div class="p-20">
                <div v-html="BUTTON_WITH_ICON"></div>
              </div>
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
// import HintMessage from "@/components/common/HintMessage.vue";
import ComponentExample from "@/components/common/ComponentExample.vue";
import LocationPath from "@/components/common/LocationPath.vue";
import CopyButton from "@/components/common/CopyButton.vue";
import TagName from "@/components/common/TagName.vue";

// routes
// import { } from "@/router/modules/utilities";

// code examples
import {
  BUTTONS_EXAMPLES,
  BUTTON_DEFAULT_ALT_HTML,
  BUTTON_WITH_ICON,
  BUTTON_CSS,
} from "@/code_examples/components/MainButton";

export default defineComponent({
  name: "MainButton",
  components: {
    ArticleNavigation,
    ComponentExample,
    CodeBlock,
    // HintMessage,
    LocationPath,
    CopyButton,
    TagName,
  },
  setup() {
    const sections = getArticleNavSections();
    return {
      sections,
      BUTTONS_EXAMPLES,
      BUTTON_DEFAULT_ALT_HTML,
      BUTTON_WITH_ICON,
      BUTTON_CSS,
    };
  },
});
</script>
