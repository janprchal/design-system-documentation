<template>
  <article class="o-page">
    <header class="o-page__heading">
      <h1 class="mb-0">Design</h1>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="main-colors">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Main Colors</h2>
            </header>
            <p>
              We have some predefined colors in DS. We have 3
              <span class="c-important">design colors</span> (<span
                class="ff-mono"
                >primary</span
              >, <span class="ff-mono">secondary</span>,
              <span class="ff-mono">tertiary</span>) which you can combine to
              achieve design you want.
            </p>
            <p>
              We also have 3
              <span class="c-important">state colors</span> (<span
                class="ff-mono"
                >positive</span
              >, <span class="ff-mono">warning</span>,
              <span class="ff-mono">negative</span>) which are usually used in
              forms (to show messages, state of inputs, etc), but they can be
              used as any other color, to achieve preffered design.
            </p>

            <p>
              All colors settings can be found in
              <span class="c-important">01_settings/settings.colors.scss</span>.
            </p>

            <h5>All main colors shades:</h5>
            <div class="o-row example mb-lg">
              <div class="o-col-4 mb-md">
                <div class="c-color-sample bg-primary--lightest">
                  <span>$primary-c--lightest</span>
                  <span>#eae7fc</span>
                </div>
                <div class="c-color-sample bg-primary--light tc-white">
                  <span>$primary-c--light</span>
                  <span>#936cbf</span>
                </div>
                <div class="c-color-sample bg-primary--lighter tc-white">
                  <span>$primary-c--lighter</span>
                  <span>#7847af</span>
                </div>
                <div class="c-color-sample bg-primary tc-white">
                  <span>$primary-c</span>
                  <span>#5d2d93</span>
                </div>
                <div class="c-color-sample bg-primary--darker tc-white">
                  <span>$primary-c--darker</span>
                  <span>#491880</span>
                </div>
                <div class="c-color-sample bg-primary--dark tc-white">
                  <span>$primary-c--dark</span>
                  <span>#360a66</span>
                </div>
                <div class="c-color-sample bg-primary--darkest tc-white">
                  <span>$primary-c--darkest</span>
                  <span>#2b0d4c</span>
                </div>
              </div>
              <div class="o-col-4 mb-md">
                <div class="c-color-sample bg-secondary--lightest">
                  <span>$secondary-c--lightest</span>
                  <span>#b0cafe</span>
                </div>
                <div class="c-color-sample bg-secondary--light">
                  <span>$secondary-c--light</span>
                  <span>#68affd</span>
                </div>
                <div class="c-color-sample bg-secondary--lighter">
                  <span>$secondary-c--lighter</span>
                  <span>#56a6fe</span>
                </div>
                <div class="c-color-sample bg-secondary tc-white">
                  <span>$secondary-c</span>
                  <span>#1a86fd</span>
                </div>
                <div class="c-color-sample bg-secondary--darker tc-white">
                  <span>$secondary-c--darker</span>
                  <span>#1b72d2</span>
                </div>
                <div class="c-color-sample bg-secondary--dark tc-white">
                  <span>$secondary-c--dark</span>
                  <span>#0059bb</span>
                </div>
                <div class="c-color-sample bg-secondary--darkest tc-white">
                  <span>$secondary-c--darkest</span>
                  <span>#004592</span>
                </div>
              </div>
              <div class="o-col-4 mb-md">
                <div class="c-color-sample bg-tertiary--lightest">
                  <span>$tertiary-c--lightest</span>
                  <span>#f8ccbc</span>
                </div>
                <div class="c-color-sample bg-tertiary--light">
                  <span>$tertiary-c--light</span>
                  <span>#ff9d79</span>
                </div>
                <div class="c-color-sample bg-tertiary--lighter">
                  <span>$tertiary-c--lighter</span>
                  <span>#f8916b</span>
                </div>
                <div class="c-color-sample bg-tertiary tc-white">
                  <span>$tertiary-c</span>
                  <span>#fc8255</span>
                </div>
                <div class="c-color-sample bg-tertiary--darker tc-white">
                  <span>$tertiary-c--darker</span>
                  <span>#f77445</span>
                </div>
                <div class="c-color-sample bg-tertiary--dark tc-white">
                  <span>$tertiary-c--dark</span>
                  <span>#f46a38</span>
                </div>
                <div class="c-color-sample bg-tertiary--darkest tc-white">
                  <span>$tertiary-c--darkest</span>
                  <span>#ea3e00</span>
                </div>
              </div>
              <div class="o-col-4">
                <div class="c-color-sample bg-positive--lightest">
                  <span>$positive-c--lightest</span>
                  <span>#e9f4e8</span>
                </div>
                <div class="c-color-sample bg-positive--light">
                  <span>$positive-c--light</span>
                  <span>#9dd79b</span>
                </div>
                <div class="c-color-sample bg-positive--lighter">
                  <span>$positive-c--lighter</span>
                  <span>#6eca6c</span>
                </div>
                <div class="c-color-sample bg-positive">
                  <span>$positive-c</span>
                  <span>#55b852</span>
                </div>
                <div class="c-color-sample bg-positive--darker tc-white">
                  <span>$positive-c--darker</span>
                  <span>#278825</span>
                </div>
                <div class="c-color-sample bg-positive--dark tc-white">
                  <span>$positive-c--dark</span>
                  <span>#027500</span>
                </div>
                <div class="c-color-sample bg-positive--darkest tc-white">
                  <span>$positive-c--darkest</span>
                  <span>#024a01</span>
                </div>
              </div>
              <div class="o-col-4">
                <div class="c-color-sample bg-warning--lightest">
                  <span>$warning-c--lightest</span>
                  <span>#ffe694</span>
                </div>
                <div class="c-color-sample bg-warning--light">
                  <span>$warning-c--light</span>
                  <span>#ffdf78</span>
                </div>
                <div class="c-color-sample bg-warning--lighter">
                  <span>$warning-c--lighter</span>
                  <span>#ffd241</span>
                </div>
                <div class="c-color-sample bg-warning">
                  <span>$warning-c</span>
                  <span>#f9c008</span>
                </div>
                <div class="c-color-sample bg-warning--darker">
                  <span>$warning-c--darker</span>
                  <span>#d9a708</span>
                </div>
                <div class="c-color-sample bg-warning--dark tc-white">
                  <span>$warning-c--dark</span>
                  <span>#ca9a00</span>
                </div>
                <div class="c-color-sample bg-warning--darkest tc-white">
                  <span>$warning-c--darkest</span>
                  <span>#6d5300</span>
                </div>
              </div>
              <div class="o-col-4">
                <div class="c-color-sample bg-negative--lightest">
                  <span>$negative-c--lightest</span>
                  <span>#fef5f5</span>
                </div>
                <div class="c-color-sample bg-negative--light">
                  <span>$negative-c--light</span>
                  <span>#ffacac</span>
                </div>
                <div class="c-color-sample bg-negative--lighter">
                  <span>$negative-c--lighter</span>
                  <span>#f36d6d</span>
                </div>
                <div class="c-color-sample bg-negative tc-white">
                  <span>$negative-c</span>
                  <span>#ee3a3a</span>
                </div>
                <div class="c-color-sample bg-negative--darker tc-white">
                  <span>$negative-c--darker</span>
                  <span>#cd2c2c</span>
                </div>
                <div class="c-color-sample bg-negative--dark tc-white">
                  <span>$negative-c--dark</span>
                  <span>#a71111</span>
                </div>
                <div class="c-color-sample bg-negative--darkest tc-white">
                  <span>$negative-c--darkest</span>
                  <span>#830303</span>
                </div>
              </div>
            </div>

            <hint-message type="green" class="mb-lg">
              Every shade of each main color have utility class for
              <span class="ff-mono">background-color</span> attribute. You can
              find them (and more) in
              <router-link :to="{ name: COLORS_UTILITY_CLASSES_ROUTE_NAME }"
                >Colors utility classes</router-link
              >.
            </hint-message>
          </div>
        </section>
        <section class="o-page__section" id="complementary-colors">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Complementary Colors</h2>
            </header>
            <p>Usually used for borders, backgrounds, text colors etc.</p>

            <table class="o-color-table mb-lg">
              <thead>
                <tr>
                  <th>Example</th>
                  <!-- <th>Utility class</th> -->
                  <th>Color variable</th>
                  <th>Color HEX code</th>
                  <th>Used for</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-body c-color-sample"></div>
                  </td>
                  <!-- <td>
                    <span class="c-important">.bg-body</span>
                  </td> -->
                  <td>
                    <span class="c-important">$body-bg-c</span>
                  </td>
                  <td>
                    <span class="c-important">#edeff6</span>
                  </td>
                  <td><span class="ff-mono">background-color</span> of body</td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-block c-color-sample"></div>
                  </td>
                  <!-- <td>
                    <span class="c-important">.bg-block</span>
                  </td> -->
                  <td>
                    <span class="c-important">$block-bg-c</span>
                  </td>
                  <td>
                    <span class="c-important">#fdfdff</span>
                  </td>
                  <td>Background color of body</td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div
                      class="c-color-sample"
                      style="background-color: #635b68"
                    ></div>
                  </td>
                  <!-- <td></td> -->
                  <td>
                    <span class="c-important">$nav-link-c</span>
                  </td>
                  <td>
                    <span class="c-important">#fdfdff</span>
                  </td>
                  <td>Navigation element text color</td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div
                      class="c-color-sample"
                      style="background-color: #5b538e"
                    ></div>
                  </td>
                  <!-- <td></td> -->
                  <td>
                    <span class="c-important">$nav-link-c--hover</span>
                  </td>
                  <td>
                    <span class="c-important">#5b538e</span>
                  </td>
                  <td>Hovered navigation element text color</td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div class="bg-neutral c-color-sample"></div>
                  </td>
                  <!-- <td>
                    <span class="c-important">.bg-neutral</span>
                  </td> -->
                  <td>
                    <span class="c-important">$neutral-c</span>
                  </td>
                  <td>
                    <span class="c-important">#e9eaf2</span>
                  </td>
                  <td>
                    Often used for default/disabled
                    <span class="ff-mnoo">background-color</span>,
                    <span class="ff-mono">text-color</span>...
                  </td>
                </tr>
                <tr>
                  <td class="o-color-table__color example">
                    <div
                      class="c-color-sample"
                      style="background-color: #d3d4d9"
                    ></div>
                  </td>
                  <!-- <td></td> -->
                  <td>
                    <span class="c-important">$input-outline-c</span>
                  </td>
                  <td>
                    <span class="c-important">#d3d4d9</span>
                  </td>
                  <td>Inputs <span class="ff-mono">border-color</span></td>
                </tr>
              </tbody>
            </table>
            <hint-message type="warning">
              We have even more colors in DS, but those are not used often, or
              are shades colors we showned above. All colors can be found in
              <span class="c-important">01_settings/settings.colors.scss</span>.
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
import HintMessage from "@/components/common/HintMessage.vue";

// routes
import { COLORS_UTILITY_CLASSES_ROUTE_NAME } from "@/router/modules/utilities";

export default defineComponent({
  name: "DesignColors",
  components: {
    ArticleNavigation,
    HintMessage,
  },
  setup() {
    const sections = getArticleNavSections();
    return {
      sections,
      COLORS_UTILITY_CLASSES_ROUTE_NAME,
    };
  },
});
</script>
