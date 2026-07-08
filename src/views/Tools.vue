<template>
  <article class="o-page">
    <header class="o-page__heading">
      <h1 class="mb-0">Components in Design System</h1>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="text-highlighters">
          <div class="o-page__inner">
            <header>
              <h2 class="mb-20">Text highlighters</h2>
            </header>
            <p>
              V nasich prikladech budeme pouzivat kratke ukazy HTML kodu:
              <span class="c-important"
                >&lt;div class="c-component"&gt;&lt;/div&gt;</span
              >
              Tyto ukazky pak mohou byt doplney napriklad o nazvy promennych
              <span class="c-important">$primary-c: #ffffff;</span>. od casu je
              potreba taky nejaky clanek prolinkovat, k tomu slouzi
              <a class="c-important" href="#">link na predchozi clanek</a> v
              nekterych clancich muze byt potreba se odkazat na dalsi zdroje, k
              tomu lze vyuzit link, ten by se mel otevirat na nove zalozce
              prohlizece, a byt lehce odlisny od klasickeho linku
              <a class="c-important" href="#" target="_blank">externi odkaz</a>.
              Samozrejme je mozne pouzivat i dalsi veci jako
              <span class="fwb ff-mono">Tucny mono text</span>.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="hint-messages">
          <div class="o-page__inner">
            <header>
              <h2 class="mb-20">Tip & Alert Messages</h2>
            </header>
            <hint-message class="mb-xl" type="green" heading="">
              <h4>Cus ja sem message</h4>
              V nasich prikladech budeme pouzivat kratke ukazy HTML:
              <span class="c-important"
                >&lt;div class="c-component"&gt;&lt;/div&gt;</span
              >
            </hint-message>
            <hint-message class="mb-xl" type="purple">
              Tyto ukazky pak mohou byt doplney napriklad o nazvy promennych
              <span class="c-important">$primary-c: #ffffff;</span>. od casu je
              potreba taky nejaky clanek prolinkovat, k tomu slouzi
              <a class="c-important" href="#">link na predchozi clanek</a>
            </hint-message>
            <hint-message class="mb-xl" type="alert">
              Tyto ukazky pak mohou byt doplney napriklad o nazvy promennych
              <span class="c-important">$primary-c: #ffffff;</span>. od casu je
              potreba taky nejaky clanek prolinkovat, k tomu slouzi
              <a class="c-important" href="#">link na predchozi clanek</a>
            </hint-message>
            <hint-message class="mb-xl" type="warning">
              Tyto ukazky pak mohou byt doplney napriklad o nazvy promennych
              <span class="c-important">$primary-c: #ffffff;</span>. od casu je
              potreba taky nejaky clanek prolinkovat, k tomu slouzi
              <a class="c-important" href="#">link na predchozi clanek</a>
            </hint-message>
            <hint-message>
              Tyto ukazky pak mohou byt doplney napriklad o nazvy promennych
              <span class="c-important">$primary-c: #ffffff;</span>. od casu je
              potreba taky nejaky clanek prolinkovat, k tomu slouzi
              <a class="c-important" href="#">link na predchozi clanek</a>
            </hint-message>
          </div>
        </section>
        <section class="o-page__section" id="component-demonstration">
          <div class="o-page__inner">
            <header>
              <h2 class="mb-20">Component Showcase</h2>
            </header>
            <!-- 
              Komponenta ktera se ma zobrazit je obalena .Example
              protoze tim se zvysi specificita selektoru a nemelo by to teda 
              ovlivnovat pokud budou v projektu Dokumentace a v samotnem
              Design Systemu komponenty se stejnym jmenem
            -->
            <component-example component-name="Switch Example">
              <div class="example">
                <ds-switch />
              </div>
            </component-example>
          </div>
        </section>
        <section class="o-page__section" id="code-example">
          <div class="o-page__inner">
            <header>
              <h2 class="mb-20">Code Example</h2>
            </header>
            <code-block lang="html" :code="code" />
          </div>
        </section>
        <section class="o-page__section" id="buttons">
          <div class="o-page__inner">
            <button class="c-btn mr-20">Default Button</button>
            <button class="c-btn c-btn--secondary mr-20">
              Secondary Button
            </button>
            <button class="c-btn c-btn--neutral mr-20">Neutral Button</button>
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

import CodeBlock from "@/components/common/CodeBlock.vue";
import HintMessage from "@/components/common/HintMessage.vue";
import ComponentExample from "@/components/common/ComponentExample.vue";
import ArticleNavigation from "@/components/common/ArticleNavigation.vue";

import { HOW_TO_USE_ROUTE_NAME } from "@/router/index";

import { getArticleNavSections } from "@/helpers/htmlHelpers";

// DS Example Components
import DsSwitch from "@/components/design_system/forms/Switch.vue";

export default defineComponent({
  name: "TestComponents",
  components: {
    CodeBlock,
    HintMessage,
    ComponentExample,
    DsSwitch,
    ArticleNavigation,
  },
  setup() {
    const sections = getArticleNavSections();

    const code = `
  <div class="c-test">
    <a href="#" target="_blank">asdaasd</a>
  </div>
    `;
    return {
      code,
      sections,
      HOW_TO_USE_ROUTE_NAME,
    };
  },
});
</script>
