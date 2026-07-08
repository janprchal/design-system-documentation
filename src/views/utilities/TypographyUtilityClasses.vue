<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">Typography Utility Classes</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p class="mb-0">
              Typography related utility classes can be used to change
              <span class="ff-mono">font-size</span>,
              <span class="ff-mono">font-weight</span>,
              <span class="ff-mono">color</span>,
              <span class="ff-mono">style</span>. All classes related with
              Typography can be found in
              <span class="c-important"
                >"08_utilities/utilities.typography.scss</span
              >.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="text-sizes">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Text Sizes</h2>
            </header>

            <p>
              We can find all <span class="ff-mono">font-size</span> variables
              in
              <span class="c-important"
                >01_settings/settings.typography.scss</span
              >.
            </p>

            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Font-size</th>
                  <th>Utility class</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="example">
                    <span class="fs-xxs">Super small text</span>
                  </td>
                  <td>1rem / 10px</td>
                  <td><span class="c-important">.fs-xxs</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fs-xs">Extra Small text</span>
                  </td>
                  <td>1.2rem / 12px</td>
                  <td><span class="c-important">.fs-xs</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fs-sm">Small text</span>
                  </td>
                  <td>1.4rem / 14px</td>
                  <td><span class="c-important">.fs-sm</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fs-nm">Normal text</span>
                  </td>
                  <td>1.6rem / 16px</td>
                  <td><span class="c-important">.fs-nm</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fs-md">Medium text</span>
                  </td>
                  <td>1.8rem / 18px</td>
                  <td><span class="c-important">.fs-md</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fs-lg">Large text</span>
                  </td>
                  <td>2rem / 20px</td>
                  <td><span class="c-important">.fs-lg</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fs-xl">Extra large text</span>
                  </td>
                  <td>2.4rem / 24px</td>
                  <td><span class="c-important">.fs-xl</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fs-xxl">Extra extra large text</span>
                  </td>
                  <td>2.8rem / 28px</td>
                  <td><span class="c-important">.fs-xxl</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fs-xxxl">Extra extra extra large text</span>
                  </td>
                  <td>3.2rem / 32px</td>
                  <td><span class="c-important">.fs-xxxl</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fs-xxxxl"
                      >Extra extra extra extra large text</span
                    >
                  </td>
                  <td>4rem / 40px</td>
                  <td><span class="c-important">.fs-xxxxl</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="o-page__section" id="text-colors">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Text Colors</h2>
            </header>

            <p>
              Utility classes for changing color of text, colors used in these
              classes can be found in
              <span class="c-important">01_settings/settings.colors.scss</span>
              and classes in
              <span class="c-important"
                >08_utilities/utilities.typography.scss</span
              >.
            </p>

            <table class="c-table">
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Color variable</th>
                  <th>Utility class</th>
                  <th>Color HEX code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="example">
                    <span class="tc-normal">Sample text</span>
                  </td>
                  <td><span class="c-important">$text-c</span></td>
                  <td><span class="c-important">.tc-normal</span></td>
                  <td><span class="c-important">#282828</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="tc-lighter">Sample text</span>
                  </td>
                  <td><span class="c-important">$text-c--lighter</span></td>
                  <td><span class="c-important">.tc-lighter</span></td>
                  <td><span class="c-important">#626262</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="tc-light">Sample text</span>
                  </td>
                  <td><span class="c-important">$text-c--light</span></td>
                  <td><span class="c-important">.tc-light</span></td>
                  <td><span class="c-important">#a0a0a0</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="tc-lightest">Sample text</span>
                  </td>
                  <td><span class="c-important">$text-c--lightest</span></td>
                  <td><span class="c-important">.tc-lightest</span></td>
                  <td><span class="c-important">#e0e0e0</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="tc-negative">Sample text</span>
                  </td>
                  <td><span class="c-important">$negative-c</span></td>
                  <td><span class="c-important">.tc-negative</span></td>
                  <td><span class="c-important">#ee3a3a</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="tc-positive">Sample text</span>
                  </td>
                  <td><span class="c-important">$negative-c</span></td>
                  <td><span class="c-important">.tc-positive</span></td>
                  <td><span class="c-important">#55b852</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="tc-white bg-primary">Sample text</span>
                  </td>
                  <td><span class="c-important">$light-c</span></td>
                  <td>
                    <span class="c-important">.tc-white (.bg-primary)</span>
                  </td>
                  <td><span class="c-important">#ffffff</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="tc-black">Sample text</span>
                  </td>
                  <td><span class="c-important">$dark-c</span></td>
                  <td><span class="c-important">.tc-black</span></td>
                  <td><span class="c-important">#000000</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="tc-primary">Sample text</span>
                  </td>
                  <td><span class="c-important">$primary-c</span></td>
                  <td><span class="c-important">.tc-primary</span></td>
                  <td><span class="c-important">#5d2d93</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="tc-secondary">Sample text</span>
                  </td>
                  <td><span class="c-important">$secondary-c</span></td>
                  <td><span class="c-important">.tc-secondary</span></td>
                  <td><span class="c-important">#1a86fd</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="tc-tertiary">Sample text</span>
                  </td>
                  <td><span class="c-important">$tertiary-c</span></td>
                  <td><span class="c-important">.tc-tertiary</span></td>
                  <td><span class="c-important">#fc8255</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="o-page__section" id="text-width-classes">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Text Width Classes</h2>
            </header>

            <p>
              We can use utility classes to set up multiple text attributes. All
              classes can be found in
              <span class="c-important"
                >08_utilities/utilities.typography.scss</span
              >
            </p>

            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Font-weight</th>
                  <th>Utility class</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="example">
                    <span class="fwet">Sample text</span>
                  </td>
                  <td>100</td>
                  <td>
                    <span class="c-important">.fwet</span>&nbsp;(font weight
                    extra thin)
                  </td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fwt">Sample text</span>
                  </td>
                  <td>200</td>
                  <td>
                    <span class="c-important">.fwt</span>&nbsp;(font weight
                    thin)
                  </td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fwl">Sample text</span>
                  </td>
                  <td>300</td>
                  <td>
                    <span class="c-important">.fwl</span>&nbsp;(font weight
                    light)
                  </td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fwn">Sample text</span>
                  </td>
                  <td>400</td>
                  <td>
                    <span class="c-important">.fwn</span>&nbsp;(font weight
                    normal)
                  </td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fwm">Sample text</span>
                  </td>
                  <td>500</td>
                  <td>
                    <span class="c-important">.fwm</span>&nbsp;(font weight
                    medium)
                  </td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fwsb">Sample text</span>
                  </td>
                  <td>600</td>
                  <td>
                    <span class="c-important">.fwsb</span>&nbsp;(font weight
                    semi bold)
                  </td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fwb">Sample text</span>
                  </td>
                  <td>700</td>
                  <td>
                    <span class="c-important">.fwb</span>&nbsp;(font weight
                    bold)
                  </td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fweb">Sample text</span>
                  </td>
                  <td>900</td>
                  <td>
                    <span class="c-important">.fweb</span>&nbsp;(font weight
                    extra bold)
                  </td>
                </tr>
              </tbody>
            </table>

            <hint-message type="warning" class="mb-lg">
              Some <span class="ff-mono">font-weight</span>(s) might not be
              supported by font we're using (Roboto), but classes are ready for
              all possible <span class="ff-mono">font-weight</span>(s).
            </hint-message>

            <h3 class="mb-sm">Text alignments</h3>
            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Text-align</th>
                  <th>Utility class</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="example tal">
                    <span> Sample text </span>
                  </td>
                  <td>left (default)</td>
                  <td>
                    <span class="c-important">.tal</span>&nbsp;(text align left)
                  </td>
                </tr>
                <tr>
                  <td class="example tac">
                    <span>Sample text</span>
                  </td>
                  <td>center</td>
                  <td>
                    <span class="c-important">.tac</span>&nbsp;(text align
                    center)
                  </td>
                </tr>
                <tr>
                  <td class="example tar">
                    <span>Sample text</span>
                  </td>
                  <td>right</td>
                  <td>
                    <span class="c-important">.tar</span>&nbsp;(text align
                    right)
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 class="mb-sm">Others</h3>
            <table class="c-table">
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Utility Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="example">
                    <span class="uppercase">Sample text</span>
                  </td>
                  <td>
                    <span class="c-important">.uppercase</span>
                  </td>
                  <td>Transforms all letters to capitals</td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="capitalize">Sample text</span>
                  </td>
                  <td>
                    <span class="c-important">.capitalize</span>
                  </td>
                  <td>Transforms first letter in each word to capital</td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="nowrap">Sample text</span>
                  </td>
                  <td>
                    <span class="c-important">.nowrap</span>
                  </td>
                  <td>
                    Prevents text to break a line (text can overflow parent)
                  </td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="underline">Sample text</span>
                  </td>
                  <td>
                    <span class="c-important">.underline</span>
                  </td>
                  <td>Text will be underlined</td>
                </tr>
                <tr>
                  <td class="example">
                    <span class="fsi">Sample text</span>
                  </td>
                  <td>
                    <span class="c-important">.fsi</span>
                  </td>
                  <td>Will add italic style to text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="o-page__section" id="headings">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Headings</h2>
            </header>

            <p>
              Headings are using same variables for setting up
              <span class="ff-mono">font-size</span> as we described in previous
              section. If we need to change CSS for headings we can start in
              <span class="c-important">04_elements/elements.headings.scss</span
              >.
            </p>

            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th>Example</th>
                  <th>Code</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="example">
                    <h1>H1 Heading</h1>
                  </td>
                  <td>
                    <span class="c-important"
                      >&lt;h1&gt;H1 Heading&lt;/h1&gt;</span
                    >
                  </td>
                  <td><span class="c-important">.h1</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <h2>H2 Heading</h2>
                  </td>
                  <td>
                    <span class="c-important"
                      >&lt;h2&gt;H2 Heading&lt;/h2&gt;</span
                    >
                  </td>
                  <td><span class="c-important">.h2</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <h3>H3 Heading</h3>
                  </td>
                  <td>
                    <span class="c-important"
                      >&lt;h3&gt;H3 Heading&lt;/h3&gt;</span
                    >
                  </td>
                  <td><span class="c-important">.h3</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <h4>H4 Heading</h4>
                  </td>
                  <td>
                    <span class="c-important"
                      >&lt;h4&gt;H4 Heading&lt;/h4&gt;</span
                    >
                  </td>
                  <td><span class="c-important">.h4</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <h5>H5 Heading</h5>
                  </td>
                  <td>
                    <span class="c-important"
                      >&lt;h5&gt;H5 Heading&lt;/h5&gt;</span
                    >
                  </td>
                  <td><span class="c-important">.h5</span></td>
                </tr>
                <tr>
                  <td class="example">
                    <h6>H6 Heading</h6>
                  </td>
                  <td>
                    <span class="c-important"
                      >&lt;h6&gt;H6 Heading&lt;/h6&gt;</span
                    >
                  </td>
                  <td><span class="c-important">.h6</span></td>
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
import HintMessage from "@/components/common/HintMessage.vue";

import { CHECK_AND_RADIO_ROUTE_NAME } from "@/router/modules/forms";

import {
  FORM_OBJECT_STRUCTURE,
  FORM_OBJECT_EXAMPLE,
  FORM_OBJECT_INLINE_STRUCTURE,
  FORM_OBJECT_INLINE_EXAMPLE,
} from "@/code_examples/forms/FormObject";

export default defineComponent({
  name: "TypographyUtilityClasses",
  components: {
    ArticleNavigation,
    HintMessage,
  },
  setup() {
    const sections = getArticleNavSections();
    return {
      sections,
      FORM_OBJECT_STRUCTURE,
      FORM_OBJECT_EXAMPLE,
      CHECK_AND_RADIO_ROUTE_NAME,
      FORM_OBJECT_INLINE_STRUCTURE,
      FORM_OBJECT_INLINE_EXAMPLE,
    };
  },
});
</script>
