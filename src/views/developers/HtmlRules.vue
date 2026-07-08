<template>
  <article class="o-page">
    <header class="o-page__heading">
      <h1 class="mb-0">Zakladni struktura komponenty</h1>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <div class="o-page__section">
          <section class="o-page__content">
            <div class="o-page__inner">
              <p>
                Ve spatnem prikladu je videt ze komponenta je psana zpola jako
                BEM a zpola pomoci OOCSS trid. To neni idealni reseni:
                <span class="fwsb">Horsi citelnost a pochopeni kodu</span>,
                <span class="fwsb">responsive verze bude problem</span>
              </p>
            </div>
            <div class="o-row mb-md">
              <div class="o-col-lg-12 o-col-xl-6 mb-md">
                <code-block
                  :code="htmlComponentStructureNok"
                  :lang="`html`"
                  :copy="false"
                  heading="Wrong"
                />
              </div>
              <div class="o-col-lg-12 o-col-xl-6">
                <code-block
                  :code="htmlComponentsStructureOk"
                  :lang="`html`"
                  :copy="false"
                  heading="Correct"
                />
              </div>
            </div>
          </section>
          <aside class="o-page__side"></aside>
        </div>
      </div>
      <aside class="o-page__side o-page__side--last"></aside>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeBlock from "@/components/common/CodeBlock.vue";

import {
  HTML_COMPONENT_STRUCTURE_NOK,
  HTML_COMPONENT_STRUCTURE_OK,
} from "@/code_examples/developers/html/HtmlRules";

export default defineComponent({
  name: "HTMLCodeStyle",
  components: {
    CodeBlock,
  },
  data() {
    return {
      someCode: `.text-class__element--modifier {
        display: block;
        width: 200px;
        height: 200px;
      }`,
      htmlComponentStructureNok: HTML_COMPONENT_STRUCTURE_NOK,
      htmlComponentsStructureOk: HTML_COMPONENT_STRUCTURE_OK,
      expanded: false,
    };
  },
});
</script>
