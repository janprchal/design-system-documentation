<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">Inputs & Validations</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>
              To define form input, we can write simple HTML code like this:
              <span class="c-important">&lt;input type="text" /&gt;</span>, we
              didn't add any class to the element, that's because basic input is
              styled via element selector, we can find CSS for
              <span class="ff-mono">input</span> and
              <span class="ff-mono">textarea</span>
              in
              <span class="c-important">04_elements/elements.input.scss</span>.
            </p>

            <hint-message type="green" class="mb-md">
              Fact, that Input, Textarea & Select are styled via element
              selector opens for us possibility to create component when we need
              more specific input (<router-link
                :to="{ name: INPUT_WITH_ICON_ROUTE_NAME }"
                >Input with icon & File upload</router-link
              >). We don't have to worry about selectors specificity, component
              will have always higher specificity because is based on class
              selector.
            </hint-message>

            <p class="mb-xs">
              When we want to change how the input looks we should look for:
            </p>

            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th>Variable</th>
                  <th class="nowrap">Applied</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">$input-h</span>
                  </td>
                  <td class="ff-mono fs-nm">Always</td>
                  <td>
                    This variable will directly affect height of all inputs
                    (select, options but also buttons).
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">$input-outline-c</span>
                  </td>
                  <td class="ff-mono fs-nm">always</td>
                  <td>
                    We can change default color of inputs border by changing
                    this variable.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">$input-outline-c--hover</span>
                  </td>
                  <td class="ff-mono fs-nm">:hover&nbsp;{}</td>
                  <td>
                    If we want to change color of inputs border when user hovers
                    mouse over the input.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">$secondary-c</span>
                  </td>
                  <td class="ff-mono fs-nm">:focus&nbsp;{}</td>
                  <td>
                    This variable is used when user focuses the input (when
                    input is active).
                    <span class="fsi fwl"
                      ><span class="fwsb">This is global variable</span>. By
                      changing this variable value, you might affect lots of
                      elements.</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              Another element which is strongly tied to
              <span class="ff-mono">input</span> is
              <span class="c-important"
                >&lt;label for="input_id"&gt;Label text&lt;/label&gt;</span
              >. CSS code of label can be found in
              <span class="c-important">04_elements/elements.label.scss</span>.
            </p>

            <p>
              In <span class="c-important">label</span> CSS file we can change
              <span class="ff-mono">font-size</span>,
              <span class="ff-mono">color</span> and
              <span class="ff-mono">weight</span>.
            </p>

            <p>
              We might want to tell the user, that this field in mandatory to
              fill, one of the ways might be add
              <span class="tc-negative">*</span> to
              <span class="ff-mono">label</span> element. We can do this by add
              <span class="c-important">.is-required</span> class to label
              element.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="basic-input">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Basic Input</h2>
            </header>

            <p class="mb-xs">HTML Code</p>
            <code-block lang="html" :code="BASIC_INPUT_CODE" class="mb-lg" />
            <p>
              In code block above, we're using
              <router-link :to="{ name: FORM_GROUP_OBJECT_ROUTE_NAME }"
                >Form Object</router-link
              >
              as a object into which we're placing
              <span class="c-important">&lt;label&gt;&lt;/label&gt;</span> and
              <span class="c-important">&lt;input /&gt;</span>
            </p>

            <p class="mb-xs">
              Example of some of the most used input types (text, date,
              password).
            </p>
            <component-example
              component-name="Basic Inputs"
              class="c-component-example--no-gaps mt-0"
            >
              <div class="o-row p-20">
                <div class="o-col-4">
                  <ds-input
                    id="default-state"
                    label="Default Input"
                    placeholder="Inputs placeholder..."
                    :required="true"
                  />
                </div>
                <div class="o-col-4">
                  <ds-input
                    id="type-date"
                    label="Type Date"
                    placeholder="Date Input"
                    :required="true"
                    type="date"
                  />
                </div>
                <div class="o-col-4">
                  <ds-input
                    id="type-password"
                    label="Type Password"
                    placeholder="Password"
                    type="password"
                  />
                </div>
              </div>
            </component-example>
            <h4>Inputs state</h4>
            <p>
              If we want to show that <span class="ff-mono">Input</span> is in
              certain state we have to add CSS class which represents state. We
              can find these classes directly in
              <span class="c-important">04_elements/elements.input.scss</span>
              file.
            </p>

            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th>Class</th>
                  <th class="nowrap">Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">has-error</span>
                  </td>
                  <td class="ff-mono fs-nm">Error</td>
                  <td>
                    Used mostly if input didn't pass throught validation (input
                    is required and no value was added or value is invalid).
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">has-success</span>
                  </td>
                  <td class="ff-mono fs-nm">Success</td>
                  <td>
                    This can be used if we want to check input when user clicked
                    outside input (we can validate input and show that
                    everything is ok).
                  </td>
                </tr>
              </tbody>
            </table>
            <code-block
              lang="html"
              :copy="false"
              :code="INPUT_STATE_CODE"
              class="mb-lg"
            />
            <component-example
              component-name="Input states"
              class="c-component-example--no-gaps mt-0"
            >
              <div class="o-row p-20">
                <div class="o-col-4">
                  <ds-input
                    id="has-error"
                    label="Error State"
                    placeholder="Inputs placeholder..."
                    :required="true"
                    special-class="has-error"
                  />
                </div>
                <div class="o-col-4">
                  <ds-input
                    id="has-success"
                    label="Success State"
                    placeholder="Inputs placeholder..."
                    :required="true"
                    special-class="has-success"
                  />
                </div>
              </div>
            </component-example>
          </div>
        </section>
        <section class="o-page__section" id="form-messages">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Form Messages</h2>
            </header>
            <p>
              In DS form messages are standalone component and are not affected
              directly by inputs state. We can use this messages not just with
              <span class="ff-mono">Input</span> but also with
              <span class="ff-mono"
                >Checkbox, Radio, Select, Textarea & others</span
              >, we can also use this message in form just to give user info how
              to fill field (but we can use
              <router-link :to="{ name: USER_HINT_COMPONENT_ROUTE_NAME }"
                >Hint</router-link
              >
              component aswell).
            </p>

            <code-block
              lang="html"
              :code="BASIC_FORM_MESSAGE_CODE"
              class="mb-lg"
            />

            <component-example
              component-name="Form Messages"
              class="c-component-example--no-gaps mt-0"
            >
              <div class="o-row p-20">
                <div class="o-col-4">
                  <form-message
                    text="Password should be at least 5 characters long"
                    type="info"
                  />
                </div>
                <div class="o-col-4">
                  <form-message
                    text="You have to fill your password"
                    type="error"
                  />
                </div>
                <div class="o-col-4">
                  <form-message text="Everything looks good" type="success" />
                </div>
              </div>
            </component-example>

            <p>
              In example above, we declared
              <span class="ff-mono">form message</span>. We're using
              <span class="c-important">c-</span> prefix in HTML
              structure&nbsp;&ndash;&nbsp;as we mentioned at the start,
              <span class="ff-mono">Form Messages</span> are standalone
              component, that means we can find CSS code in
              <span class="c-important"
                >06_components/components.form-message.scss</span
              >.
            </p>

            <hint-message type="purple" class="mb-md mt-lg">
              To show icons (<span class="c-important"
                >&lt;i class="fas fa-info-circle"
                aria-hidden="true"&gt;&lt;/i&gt;</span
              >) in <span class="ff-mono">form messages</span> We're using
              <a href="" target="_blank">Font awesome</a>.
            </hint-message>

            <p>
              <span class="ff-mono">Form message types</span> (error, success)
              are similar as input states. We can add message type by adding
              <span class="ff-mono">state class</span> to
              <span class="c-important"
                >&lt;div class="c-form-message"&gt;&lt;/div&gt;</span
              >
              element. By adding one of these classes will change color of icon
              and text.
            </p>

            <table class="c-table mb-lg">
              <thead>
                <tr>
                  <th>Class</th>
                  <th class="nowrap">Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="nowrap">
                    <span class="c-important"></span>
                  </td>
                  <td class="ff-mono fs-nm">Info</td>
                  <td>
                    By default <span class="ff-mono">form message</span> can
                    just inform user how to properly fill input.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">has-error</span>
                  </td>
                  <td class="ff-mono fs-nm">Error</td>
                  <td>
                    This state can inform user about error he made when filling
                    the input.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">has-success</span>
                  </td>
                  <td class="ff-mono fs-nm">Success</td>
                  <td>
                    Using this <span class="ff-mono">form message</span> type we
                    inform user, that everything is OK.
                  </td>
                </tr>
              </tbody>
            </table>
            <copy-button
              component-name="Form Message"
              :code="FORM_MESSAGE_CSS_CODE"
            />
          </div>
        </section>
        <section class="o-page__section" id="input-with-message">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Input with Message</h2>
            </header>

            <p>
              Let's put all together and show some examples of
              <span class="ff-mono">Inputs & Form Messages</span>
            </p>

            <component-example
              component-name="Form Messages"
              class="c-component-example--no-gaps mt-0"
            >
              <div class="o-row p-20">
                <div class="o-col-4">
                  <ds-input
                    id="ex-3-default-input"
                    label="Default Input"
                    placeholder="Inputs placeholder..."
                    :required="true"
                    :message-show="true"
                    message-text="Password should be at least 5 characters long"
                    message-type="info"
                  />
                </div>
                <div class="o-col-4">
                  <ds-input
                    id="ex-3-error-input"
                    label="Type Date"
                    placeholder="Date Input"
                    :required="true"
                    type="date"
                    special-class="has-error"
                    :message-show="true"
                    message-text="Please fill right date"
                    message-type="error"
                  />
                </div>
                <div class="o-col-4">
                  <ds-input
                    id="ex-3-success-input"
                    label="Email"
                    placeholder="Add you email..."
                    type="email"
                    value="joey.ramone@example.com"
                    special-class="has-success"
                    :message-show="true"
                    message-text="Email looks good"
                    message-type="success"
                  />
                </div>
              </div>
            </component-example>

            <p class="mb-sm">Code for examples above would look like this:</p>
            <code-block
              lang="html"
              :code="INPUT_AND_FORM_MESSAGE_CODE"
              class="mb-lg"
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
import HintMessage from "@/components/common/HintMessage.vue";
import ComponentExample from "@/components/common/ComponentExample.vue";
import CopyButton from "@/components/common/CopyButton.vue";

import FormMessage from "@/components/design_system/components/FormMessage.vue";

// Routes
import {
  FORM_GROUP_OBJECT_ROUTE_NAME,
  INPUT_WITH_ICON_ROUTE_NAME,
} from "@/router/modules/forms";

import { USER_HINT_COMPONENT_ROUTE_NAME } from "@/router/modules/components";

// DS Example Components
import DsInput from "@/components/design_system/forms/Input.vue";

import {
  BASIC_INPUT_CODE,
  INPUT_STATE_CODE,
  BASIC_FORM_MESSAGE_CODE,
  INPUT_AND_FORM_MESSAGE_CODE,
  FORM_MESSAGE_CSS_CODE,
} from "@/code_examples/forms/InputsAndMessages";

export default defineComponent({
  name: "InputsValidations",
  components: {
    ArticleNavigation,
    ComponentExample,
    DsInput,
    CodeBlock,
    HintMessage,
    FormMessage,
    CopyButton,
  },
  setup() {
    const sections = getArticleNavSections();
    return {
      sections,
      BASIC_INPUT_CODE,
      FORM_GROUP_OBJECT_ROUTE_NAME,
      INPUT_WITH_ICON_ROUTE_NAME,
      INPUT_STATE_CODE,
      USER_HINT_COMPONENT_ROUTE_NAME,
      BASIC_FORM_MESSAGE_CODE,
      INPUT_AND_FORM_MESSAGE_CODE,
      FORM_MESSAGE_CSS_CODE,
    };
  },
});
</script>
