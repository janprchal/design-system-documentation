<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">Input with Icon & File Input</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section">
          <div class="o-page__inner">
            <p class="mb-0">
              Both of these inputs have more specific usage in projects, but
              they are based on default
              <router-link
                :to="{
                  name: INPUT_AND_VALIDATION_ROUTE_NAME,
                  hash: '#basic-input',
                }"
                >input</router-link
              >.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="input-with-icon">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Input with icon</h2>
            </header>
            <p>
              As name of the component suggest, this input can use icon (or
              special character) to help user work with form. Styles for this
              Component can be found in
              <span class="c-important"
                >06_components/components.icon-input.scss</span
              >.
            </p>
            <p class="mb-0">
              We can place the icon (or symbol) to the left or right side of the
              input. Since we're working with classic HTML Input element, we can
              use different input types like:
              <span class="ff-mono">text, number, password, email</span> and
              others.
              <!-- 
              On the other hand it's recommended to not use type which
              has special appearence like <span class="ff-mono">calendar</span>.
               -->
            </p>

            <component-example component-name="Input with icon">
              <div class="o-row">
                <div class="o-col-4">
                  <ds-icon-input
                    id="one-icon-right"
                    label="Icon on the right (default)"
                    :icons="['fa-lock']"
                  />
                </div>
                <div class="o-col-4">
                  <ds-icon-input
                    id="one-icon-left"
                    label="Icon on the left side"
                    :icons="['fa-lock']"
                    icon-position="left"
                  />
                </div>
                <div class="o-col-4">
                  <!-- 
                    Icons array represents icon / symbol
                    If we have 2 icons first in array in on left
                  -->
                  <ds-icon-input
                    id="one-icon-both"
                    label="Icon and Symbol on both sides"
                    :icons="['&euro;', '.00']"
                  />
                </div>
              </div>
            </component-example>

            <h5>HTML</h5>
            <code-block
              lang="html"
              :code="ICON_INPUT_HTML_STRUCTURE"
              class="mb-lg"
            />

            <p>
              In the example above we used only one icon, which will be aligned
              to the right side of input (that's default state). The icon itself
              is wrappen in
              <span class="c-important">&lt;label&gt;</span> element, therefore
              we can use <span class="c-important">for=""</span> attribute to
              target our <span class="c-important">&lt;input/&gt;</span>, so
              when we click on the icon, focus will jump into the input, and we
              user can type.
            </p>
            <p>
              If we want to move icon to left side, we need to add
              <span class="ff-mono">modifier class</span>
              <span class="c-important">.c-icon-input--icon-left</span>
              to the main element of the component
              <span class="c-important">&lt;div class="c-icon-input"&gt;</span>.
            </p>

            <p>
              As it's showned in the example, we can have icons on both sides,
              we can do this with (again) another
              <span class="ff-mono">modifier class</span>
              <span class="c-important">.c-icon-input--both-sides</span> which
              we need to add to the
              <span class="c-important">&lt;div class="c-icon-input"&gt;</span>.
            </p>

            <h5>HTML of Input with icons on both sides</h5>
            <code-block
              lang="html"
              :code="ICONS_ON_BOTH_SIDES_HTML_STRUCTURE"
              class="mb-lg"
            />
            <p>
              In example aboce we see HTML code of
              <span class="ff-mono">Input with Icon</span> with icons on both
              sides. First <span class="c-important">&lt;label&gt;</span> is
              left icon, second one is right icon.
            </p>

            <p>
              Same as all inputs also
              <span class="ff-mono">Input with Icon</span> have
              <span class="ff-mono">error</span> state. We can see it by adding
              <span class="c-important">.has-error</span>
              <span class="ff-mono">state class</span> to
              <span class="c-important">&lt;div class="c-icon-input"&gt;</span>.
            </p>
          </div>
        </section>

        <section class="o-page__section" id="file-input">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>File Input</h2>
            </header>

            <p>
              Custom input which serves for user to upload file. CSS code for
              this input can be found in
              <span class="c-important"
                >06_components/components.input-file.scss</span
              >,
            </p>

            <hint-message type="warning" class="mb-md">
              This Input needs Javascript to work properly. We can search for
              <span class="c-important">FileInputs</span> to find code for this
              input.
            </hint-message>
            <component-example component-name="Input with icon">
              <div class="o-row">
                <div class="o-col-6">
                  <ds-file-input
                    label="Select some file"
                    id="ds-file-input"
                    button-label="Choose file"
                  />
                </div>
                <div class="o-col-6">
                  <ds-file-input
                    label="Select some file"
                    id="ds-file-input-error"
                    button-label="Choose file"
                    :required="true"
                    special-class="has-error"
                    message-text="Please add attachment"
                    message-type="error"
                    :message-show="true"
                  />
                </div>
              </div>
            </component-example>

            <h5>HTML</h5>
            <code-block
              lang="html"
              :code="FILE_INPUT_HTML_STRUCTURE"
              class="mb-lg"
            />

            <p>
              We can see that File Input is also using
              <router-link :to="{ name: FORM_GROUP_OBJECT_ROUTE_NAME }"
                >form group object</router-link
              >
              as all input should. <span class="ff-mono">Input</span> itself is
              a simple Component which is composed of two elements
              <span class="c-important"
                >&lt;input class="c-file__input"&gt;</span
              >
              which is completely hidden &
              <span class="c-important"
                >&lt;label class="c-file__label"&gt;</span
              >
              which represents input (graphically).
            </p>

            <p>
              Thanks to <span class="c-important">for</span> attribute we can
              connect hidden input with <span class="ff-mono">labels</span>,
              when we click on <span class="ff-mono">label</span> or
              <span class="ff-mono">"input"</span> we will open dialog where we
              can choose file.
            </p>

            <p>
              We can change wording of the button which in placed on left side
              of input ("Choose file" by default), we have to only change the
              value of <span class="c-important">button-label</span>
              attribute.
            </p>

            <p>
              Error state can be set up by adding
              <span class="ff-mono">state class</span>
              <span class="c-important">.has-error</span> to components parent
              element
              <span class="c-important">&lt;div class="c-file"&gt;</span>.
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
import HintMessage from "@/components/common/HintMessage.vue";
import ComponentExample from "@/components/common/ComponentExample.vue";
// import CopyButton from "@/components/common/CopyButton.vue";

// Routes
import {
  INPUT_AND_VALIDATION_ROUTE_NAME,
  FORM_GROUP_OBJECT_ROUTE_NAME,
} from "@/router/modules/forms";

// DS Example Components
import DsIconInput from "@/components/design_system/forms/IconInput.vue";
import DsFileInput from "@/components/design_system/forms/FileInput.vue";

// Code Examples
import {
  ICON_INPUT_HTML_STRUCTURE,
  ICONS_ON_BOTH_SIDES_HTML_STRUCTURE,
} from "@/code_examples/forms/IconInput";

import { FILE_INPUT_HTML_STRUCTURE } from "@/code_examples/forms/FileInput";

export default defineComponent({
  name: "InputWithIcon",
  components: {
    ArticleNavigation,
    ComponentExample,
    DsIconInput,
    CodeBlock,
    HintMessage,
    DsFileInput,
  },
  setup() {
    const sections = getArticleNavSections();
    return {
      sections,
      INPUT_AND_VALIDATION_ROUTE_NAME,
      ICON_INPUT_HTML_STRUCTURE,
      ICONS_ON_BOTH_SIDES_HTML_STRUCTURE,
      FILE_INPUT_HTML_STRUCTURE,
      FORM_GROUP_OBJECT_ROUTE_NAME,
    };
  },
});
</script>
