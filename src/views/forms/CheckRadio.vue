<template>
  <article class="o-page">
    <header class="o-page__heading">
      <h1 class="mb-0">Checkbox, Radio & Switch</h1>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>
              In Design System we're using browser default checkboxes and radio
              buttons which are "re-styled" to cover our needs. To achieve this
              default <span class="c-important">&lt;input&gt;</span> is hidden
              via CSS, but the general functionality is presereved (input is
              getting into <strong class="ff-mono">checked</strong> state).
            </p>
            <p>
              Visual of Checkboxes, Radio buttons or Switches states is through
              <span class="c-important">:checked</span> or
              <span class="c-important">:disabled</span> pseudo-class together
              with adjacent sibling selector (<span class="c-important">+</span
              >).
            </p>
            <p>
              Since all Checkboxes, Radio buttons and Switch ale wrapped with
              <span class="c-important">&lt;label&gt;</span>, we don't have to
              use <span class="c-important">id</span>&
              <span class="c-important">for</span> attributes (but, it's
              recommened).
            </p>

            <component-example
              component-name="Checkbox, Radio, Switch - Example"
              class="mb-0"
            >
              <div class="o-row">
                <div class="o-col-4">
                  <ds-checkbox name="e-chcbx-1" />
                </div>
                <div class="o-col-4">
                  <ds-radio id="e-radio-1" name="e-radio-1" />
                </div>
                <div class="o-col-4">
                  <ds-switch id="e-switch-1" label="Switch" />
                </div>
              </div>
            </component-example>
          </div>
        </section>
        <section class="o-page__section" id="checkbox">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Checkbox</h2>
            </header>
            <p>
              As default the checkbox text is on the right side of checkbox
              indicator, this behavior can be overwriten by adding
              <span class="c-important">.c-checkbox--text-left</span> modifier
              class to
              <span class="c-important">&lt;div class="c-checkbox"&gt;</span>
              element.
            </p>
            <p>
              When we need <strong class="fwb">disable</strong> checkbox, we can
              add <span class="c-important">.is-disabled</span> state class to
              <span class="c-important">&lt;div class="c-checkbox"&gt;</span>
              element. Both, checkbox and label become lighter to demonstrate
              that this can't be checked / unchecked and also proper curson is
              shown when user hovers.
            </p>

            <component-example component-name="Checkbox - Example">
              <ds-checkbox id="ex-20" class="mb-10" />
              <ds-checkbox
                id="ex-21"
                class="mb-10"
                :checked="true"
                label="Checked checkbox"
              />
              <ds-checkbox
                id="ex-23"
                special-class="c-checkbox--text-left"
                label="Label text on the left"
                class="mb-20"
              />
              <ds-checkbox
                id="ex-22"
                :disabled="true"
                label="Disabled checkbox"
                class="mb-10"
              />
              <ds-checkbox
                id="ex-22"
                :disabled="true"
                :checked="true"
                label="Disabled & Checked checkbox"
                class="mb-10"
              />
            </component-example>

            <h5>HTML</h5>
            <code-block
              lang="html"
              :code="CHECKBOX_HTML_STRUCTURE"
              class="mb-lg"
            />

            <p class="mb-lg">
              Best way to change appearance of the checkbox is to change styles
              of
              <span class="c-important"
                >.c-checkbox__input&nbsp;+&nbsp;.c-checkbox__indicator&nbsp;{}</span
              >
              to change <strong>unchecked</strong> state of checkbox. And
              <span class="c-important"
                >.c-checkbox__input:checked&nbsp;+&nbsp;.c-checkbox__indicator&nbsp;{}</span
              >
              to change <strong>checked</strong> state.
            </p>
            <copy-button component-name="Checkbox" :code="CHECKBOX_CSS" />
          </div>
        </section>
        <section class="o-page__section" id="radio-button">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Radio Button</h2>
            </header>
            <p>
              Radio button might be similar to checkbox but it should be used
              for choosing from at least 2 options. Important attribute here is
              <span class="c-important">name</span>
              which identifies the group of options from which user is choosing.
            </p>

            <p>
              Similar to checkbox we can add some
              <span class="fwb">state</span>&nbsp;&amp;&nbsp;<span class="fwb"
                >modifier</span
              >
              class. <span class="c-important">.is-disabled</span> class to
              <span class="c-important">&lt;div class="c-radio"&gt;</span> will
              cause that radio button will get into
              <span class="fwb">disabled</span> state. And
              <span class="fwb">checked</span> state can be done by adding
              <span class="c-important">checked="true"</span> attribute to input
              element
              <span class="c-important"
                >&lt;input class="c-radio__input" type="radio"
                checked="true"/&gt;</span
              >
            </p>

            <p>
              Similar as on checkbox we can add
              <span class="c-important">.c-radio--text-left</span> modifier
              class to move text to left side and indicator to right side.
            </p>

            <component-example component-name="Radio button - Example">
              <ds-radio
                id="e-radio-2"
                name="e-radio-2_name"
                label="Basic Radio Button"
                class="mb-10"
              />
              <ds-radio
                id="e-radio-3"
                name="e-radio-2_name"
                :checked="true"
                label="Checked Radio Button"
                class="mb-10"
              />
              <ds-radio
                id="e-radio-6"
                name="e-radio-2_name"
                special-class="c-radio--text-left"
                label="Checked and Disabled Radio Button"
                class="mb-20"
              />
              <ds-radio
                id="e-radio-4"
                name="e-radio-2_name"
                :options="1"
                :disabled="true"
                label="Disabled Radio Button"
                class="mb-10"
              />
              <ds-radio
                id="e-radio-5"
                name="e-radio-3_name"
                :checked="true"
                :disabled="true"
                label="Checked and Disabled Radio Button"
              />
            </component-example>

            <h5>HTML</h5>
            <code-block
              lang="html"
              :code="RADIO_HTML_STRUCTURE"
              class="mb-lg"
            />

            <p>
              Similar to checkbox if we want to change apperance of radio button
              we wil be looking for
              <span class="c-important"
                >.c-radio__input&nbsp;+&nbsp;.c-radio__indicator&nbsp;{}</span
              >
              to change <strong>unchecked</strong> state of radio button. And
              <span class="c-important"
                >.c-radio__input:checked&nbsp;+&nbsp;.c-radio__indicator&nbsp;{}</span
              >
              to change <strong>checked</strong> state. But for radio button
              we're using
              <span class="c-important">::before</span> pseudolelement which
              creates the "dot" in middle.
            </p>

            <hint-message type="warning" class="mb-md"
              >Instead of field of Radio buttons you might consider using
              <router-link
                :to="{
                  name: SELECT_AND_OPTION_ROUTE_NAME,
                  hash: '#select',
                }"
                >Select input</router-link
              >
              or, if you have up to 5 options instead of create 5 radio buttons
              use
              <router-link
                :to="{
                  name: SELECT_AND_OPTION_ROUTE_NAME,
                  hash: '#option',
                }"
                >Options input</router-link
              >
              might be good choice.
            </hint-message>
            <copy-button component-name="Radio" :code="RADIO_CSS" />
          </div>
        </section>
        <section class="o-page__section" id="Switch">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Switch</h2>
            </header>
            <p>
              This component is designed for switching between two states
              (On/Off, True/False). As input is used checkbox. Same as for
              previous components we can switch text and indicator positions by
              adding
              <span class="c-important">.c-switch--text-left</span> modifier
              class to component parent element.
            </p>

            <component-example component-name="Switch - Example">
              <ds-switch id="e-switch-2" label="Default switch" class="mb-10" />
              <ds-switch
                id="e-switch-3"
                label="Prechecked switch"
                class="mb-10"
                :checked="true"
              />
              <ds-switch
                id="e-switch-4"
                label="Switch with text on left side"
                special-class="c-switch--text-left"
              />
            </component-example>

            <code-block
              lang="html"
              :code="SWITCH_HTML_STRUCTURE"
              class="mb-lg"
            />
            <p>
              Switch component uses its path as a main visual indicator wheater
              is on/off. To change how the path looks we have to look for this
              <span class="c-important"
                >.c-switch__input:checked + .c-switch__path</span
              >
              selector. Another visual indicator is positio of the knob, that
              can be affectec by changing style in this
              <span class="c-important"
                >.c-switch__input:checked + .c-switch__path
                .c-switch__toggle</span
              >
              selector.
            </p>
            <copy-button component-name="Switch" :code="SWITCH_CSS" />
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
import CopyButton from "@/components/common/CopyButton.vue";

// Routes
import { SELECT_AND_OPTION_ROUTE_NAME } from "@/router/modules/forms";

// DS Example Components
import DsCheckbox from "@/components/design_system/forms/Checkbox.vue";
import DsRadio from "@/components/design_system/forms/Radio.vue";
import DsSwitch from "@/components/design_system/forms/Switch.vue";

// Code Examples
import {
  CHECKBOX_HTML_STRUCTURE,
  CHECKBOX_CSS,
} from "@/code_examples/forms/Checkboxes";
import { RADIO_HTML_STRUCTURE, RADIO_CSS } from "@/code_examples/forms/Radios";
import {
  SWITCH_HTML_STRUCTURE,
  SWITCH_CSS,
} from "@/code_examples/forms/Switch";

export default defineComponent({
  name: "CheckRadio",
  components: {
    ArticleNavigation,
    CodeBlock,
    HintMessage,
    ComponentExample,
    DsCheckbox,
    DsRadio,
    DsSwitch,
    CopyButton,
  },
  setup() {
    const sections = getArticleNavSections();
    return {
      sections,
      CHECKBOX_HTML_STRUCTURE,
      CHECKBOX_CSS,
      RADIO_HTML_STRUCTURE,
      RADIO_CSS,
      SWITCH_HTML_STRUCTURE,
      SWITCH_CSS,
      SELECT_AND_OPTION_ROUTE_NAME,
    };
  },
});
</script>
