<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">Form Group Object</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>Basic object we will need when building forms.</p>
            <hint-message type="purple" class="mb-md">
              Object should be used just to place components and content to the
              place where we want them to be and should have as less design
              properties as possible.
            </hint-message>
            <p>
              We should use this object to wrap all inputs except:
              <router-link :to="{ name: CHECK_AND_RADIO_ROUTE_NAME }"
                >Checkbox, Radio button & Switch component</router-link
              >, which have their own structure which allows them to be placed
              into forms, but we can always wrap them into
              <span class="c-important"
                >&lt;div class="o-form-group"&gt;&lt;/div&gt;</span
              >
              to add vertical space between form objects.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="basic-usage">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Basic use</h2>
            </header>

            <p class="mb-sm">
              Let's start with simple example of
              <span class="ff-mono">Form Object</span> code
            </p>
            <code-block
              lang="html"
              :code="FORM_OBJECT_STRUCTURE"
              class="mb-lg"
            />

            <p class="mb-sm">
              If we place two (and more)
              <span class="ff-mono">Form Object</span>(s) after each other to
              see that gap is automatically added between objects. Except the
              last one, this one doesn't have gap, because we usually place
              object in some container which might have some bottom padding or
              margin.
            </p>
            <component-example
              component-name="Basic Form Objects"
              class="c-component-example--no-gaps mt-0"
            >
              <div v-html="FORM_OBJECT_EXAMPLE"></div>
            </component-example>
          </div>
        </section>
        <section class="o-page__section" id="inline-version">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Inline version</h2>
            </header>
            <p>
              If we want to have <span class="ff-mono">label</span> &
              <span class="ff-mono">input</span> on one line, we can use
              <span class="c-important">.o-form-group--inline</span> modifier
              class.
            </p>

            <code-block
              lang="html"
              :code="FORM_OBJECT_INLINE_STRUCTURE"
              class="mb-lg"
            />
            <component-example
              component-name="Inline Form Object"
              class="c-component-example--no-gaps mt-0"
            >
              <div v-html="FORM_OBJECT_INLINE_EXAMPLE"></div>
            </component-example>
            <p>
              When we using <span class="ff-mono">inline</span> version of Form
              Object we should keep in mind, that we need more horizontal space
              for inputs title (label). By default
              <span class="c-important"
                >&lt;div class="o-form-group__title"&gt;&lt;/div&gt;</span
              >
              has 30% of container width (in example above we're using container
              which has 480px width).
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

import { CHECK_AND_RADIO_ROUTE_NAME } from "@/router/modules/forms";

import {
  FORM_OBJECT_STRUCTURE,
  FORM_OBJECT_EXAMPLE,
  FORM_OBJECT_INLINE_STRUCTURE,
  FORM_OBJECT_INLINE_EXAMPLE,
} from "@/code_examples/forms/FormObject";

export default defineComponent({
  name: "InputsValidations",
  components: {
    ArticleNavigation,
    HintMessage,
    CodeBlock,
    ComponentExample,
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
