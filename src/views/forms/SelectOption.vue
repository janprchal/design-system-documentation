<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">Select input & Options</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section">
          <div class="o-page__inner">
            <p class="mb-0">
              Both <span class="fwb">Select input</span> and
              <span class="fwb">Options component</span> are used for selecting
              one option from options list, but both have theirs specific use
              cases with pros and cons.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="select">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Select</h2>
            </header>
            <p>
              Classic well known native HTML element from which user can choose
              just <span class="fwsb">one</span> option. It is recommended to
              use this element if user should choose one item
              <span class="fwsb">from more than 5 options</span>.
            </p>

            <p>
              As we mentioned above, Select is native HTML element, styles for
              this element can be found in
              <span class="c-important">04_elements/elements.select.scss</span>
              file. Styles are pretty straightforward and are similar to default
              input. <span class="c-important">$input-h</span> (select height),
              <span class="c-important">$input-outline-c</span> (default border
              color),
              <span class="c-important">$input-outline-c--hover</span> (border
              color on hover),
              <span class="c-important">$secondary-c</span> (border color when
              select is open)
            </p>

            <p>
              Because we want our select to be the same across all browsers we
              replace the default selects caret with our. To achieve this we
              firstly had to remove the original one.
              <span class="c-important">-webkit-appearance: none;</span> &
              <span class="c-important">-moz-appearance: none;</span>, then we
              set our caret, we defined variable
              <span class="c-important">$select-arrow</span> which contains svg
              code, then we use this variable as select
              <span class="ff-mono">background</span> property.
            </p>

            <component-example component-name="Select">
              <div class="o-row">
                <div class="o-col-4">
                  <ds-select
                    id="ds-select-default"
                    label="Select label"
                    :options="['Please select...', 'Option 1']"
                  />
                </div>
                <div class="o-col-4">
                  <ds-select
                    id="ds-select-error"
                    label="Error state"
                    :options="['Please select...', 'Option 1']"
                    special-class="has-error"
                    :required="true"
                  />
                </div>
                <div class="o-col-4">
                  <ds-select
                    id="ds-select-disabled"
                    label="Disabled state"
                    :options="['Please select...', 'Option 1']"
                    :disabled="true"
                  />
                </div>
              </div>
            </component-example>

            <h5>HTML</h5>
            <code-block
              lang="html"
              :code="SELECT_HTML_STRUCTURE"
              class="mb-lg"
            />

            <p>
              In example we can see different states of select element. If we
              want to add <span class="fsi">error state</span> we can simply add
              <span class="c-important">.has-error</span> modifier class to
              element <tag-name tag="select" class-name="has-error" />.
            </p>

            <p>
              If our select should be for some reason in
              <span class="fsi">disabled state</span> we can add
              <span class="ff-mono">disabled</span> attribute directly to select
              element <span class="c-important">&lt;select disabled&gt;</span>.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="options-component">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Options component</h2>
            </header>
            <p>
              This form component should be used for selecting
              <span class="fwsb">one</span> value from up to
              <span class="fwsb">5 options</span> (ideally if the option name is
              shorter). Option component can replace
              <router-link
                :to="{
                  name: SELECT_AND_OPTION_ROUTE_NAME,
                  hash: '#select',
                }"
              >
                select
              </router-link>
              or list of
              <router-link
                :to="{
                  name: CHECK_AND_RADIO_ROUTE_NAME,
                  hash: '#radio-button',
                }"
                >radio</router-link
              >
              buttons. User can always select only one value from the options.
            </p>
            <component-example component-name="Select">
              <div class="o-row">
                <div class="o-col-4">
                  <ds-option
                    id="ds-option-default"
                    label="Gearbox"
                    :options="['Automatic', 'Manual']"
                  />
                </div>
                <div class="o-col-8">
                  <ds-option
                    id="ds-option-default"
                    label="How much cylinders do you want?"
                    :options="['4', '6', '8', '10', '12']"
                    options-list-name="cylinders"
                  />
                </div>
              </div>
            </component-example>

            <h5>HTML</h5>
            <code-block
              lang="html"
              :code="OPTIONS_HTML_STRUCTURE"
              class="mb-lg"
            />
            <p>
              We can see that under the hood, Option component is basically list
              of radio buttons (and it has same functionality) they're just
              "re-styled".
            </p>
            <p>This component can help us break the uniformity of forms.</p>
            <copy-button
              component-name="Option Component"
              :code="OPTIONS_CSS"
            />
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
import CopyButton from "@/components/common/CopyButton.vue";
import TagName from "@/components/common/TagName.vue";

// Routes
import {
  SELECT_AND_OPTION_ROUTE_NAME,
  CHECK_AND_RADIO_ROUTE_NAME,
} from "@/router/modules/forms";

// DS Example Components
import DsSelect from "@/components/design_system/forms/Select.vue";
import DsOption from "@/components/design_system/forms/Options.vue";

// Code Examples
import { SELECT_HTML_STRUCTURE } from "@/code_examples/forms/Selects";
import {
  OPTIONS_HTML_STRUCTURE,
  OPTIONS_CSS,
} from "@/code_examples/forms/Options";

export default defineComponent({
  name: "SelectOption",
  components: {
    ArticleNavigation,
    ComponentExample,
    DsSelect,
    CodeBlock,
    DsOption,
    CopyButton,
    TagName,
  },
  setup() {
    const sections = getArticleNavSections();
    return {
      sections,
      SELECT_HTML_STRUCTURE,
      SELECT_AND_OPTION_ROUTE_NAME,
      CHECK_AND_RADIO_ROUTE_NAME,
      OPTIONS_HTML_STRUCTURE,
      OPTIONS_CSS,
    };
  },
});
</script>
