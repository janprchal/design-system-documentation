<template>
  <article class="o-page">
    <header class="o-page__heading">
      <div class="o-page__inner">
        <h1 class="mb-0">How to use Utility classes</h1>
      </div>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>
              Utility classes can be used to quickly and easily change
              appearance of the element. We can find utility classes in
              <span class="c-important">08_utilities</span>, we can find
              multiple files with different utility classes.
            </p>

            <p>
              Utility class have very high specificity, because most of them are
              using
              <span class="c-important">!important</span> declaration. Because
              we're using <span class="c-important">!important</span> in rule
              declaration, we can be sure, that the rule we defined in utility
              class will override all rules which was created in other classes
              that element might have.
            </p>

            <p class="mb-xs">Simple Utility class might look like this:</p>
            <code-block
              lang="css"
              :code="SIMPLE_UTILITY_CLASS_EXAMPLE"
              class="mb-nm"
            />
            <p>
              Utility class above add extra large
              <span class="ff-mono">font-size</span> to the element.<span
                class="ff-mono"
              ></span>
            </p>

            <p class="mb-xs">
              We can also add more utility & helper classes to one element f.e.:
            </p>
            <code-block
              lang="html"
              :code="MULTIPLE_UTILITY_CLASSES_EXAMPLE"
              class="mb-lg"
            />

            <hint-message type="purple" class="mb-0">
              We have 4 types of Utility classes:
              <router-link :to="{ name: COLORS_UTILITY_CLASSES_ROUTE_NAME }"
                >Colors</router-link
              >,
              <router-link :to="{ name: TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME }"
                >Typograpy</router-link
              >,
              <router-link :to="{ name: GAPS_UTILITY_CLASSES_ROUTE_NAME }"
                >Spacings</router-link
              >&nbsp;&amp;&nbsp;
              <router-link :to="{ name: LAYOUT_UTILITY_CLASSES_ROUTE_NAME }"
                >Layout</router-link
              >
            </hint-message>
          </div>
        </section>
      </div>
      <aside class="o-page__side o-page__side--last"></aside>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CodeBlock from "@/components/common/CodeBlock.vue";
import HintMessage from "@/components/common/HintMessage.vue";

// Routes
import {
  COLORS_UTILITY_CLASSES_ROUTE_NAME,
  TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME,
  GAPS_UTILITY_CLASSES_ROUTE_NAME,
  LAYOUT_UTILITY_CLASSES_ROUTE_NAME,
} from "@/router/modules/utilities";

// CSS Code Examples
import { SIMPLE_UTILITY_CLASS_EXAMPLE } from "@/code_examples/utilities/css/Examples";

// HTML Code Examples
import { MULTIPLE_UTILITY_CLASSES_EXAMPLE } from "@/code_examples/utilities/html/Examples";

export default defineComponent({
  name: "HowToUseUtilityClasses",
  components: {
    CodeBlock,
    HintMessage,
  },
  setup() {
    return {
      SIMPLE_UTILITY_CLASS_EXAMPLE,
      MULTIPLE_UTILITY_CLASSES_EXAMPLE,
      COLORS_UTILITY_CLASSES_ROUTE_NAME,
      TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME,
      GAPS_UTILITY_CLASSES_ROUTE_NAME,
      LAYOUT_UTILITY_CLASSES_ROUTE_NAME,
    };
  },
});
</script>
