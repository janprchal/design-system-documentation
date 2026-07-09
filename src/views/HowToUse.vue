<template>
  <article class="o-page">
    <header class="o-page__heading">
      <h1 class="mb-0">How to use Design System</h1>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="about-design-system">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>About Design System</h2>
            </header>
            <p>
              This project is here to help you work with our
              <span class="c-important">Design System</span>(DS) as we named it.
              DS should help you to build UIs on your projects. DS is written in
              CSS with
              <a href="https://sass-lang.com/" target="blank"
                >Sass preprocessor</a
              >, structure is based on
              <a
                href="https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528"
                target="blank"
                >ITCSS</a
              >
              and uses
              <a href="https://en.bem.info/methodology/css/" target="blank"
                >BEM</a
              >
              for class names (we modified all these concepts to fir our needs).
            </p>

            <p>
              Main building blocks of DS are
              <span class="c-important">Components</span>,
              <span class="c-important">Objects</span>,
              <span class="c-important">Layout</span>(parts) &
              <span class="c-important">Utility</span> classes. All these blocks
              are explained in this document (you might notice that these terms
              are headings for sections in the main navigation).
            </p>

            <hint-message type="purple" class="mb-lg">
              If you want to know more about how the DS is structured, naming
              conventions and how to contribute to DS, you can go to
              <span class="ff-mono">For Developers</span>
              section of this document.
            </hint-message>

            <p class="mb-0">
              There is few ways how you can start using / add DS into your
              project.
            </p>
            <!--             
              TODO move this to Devs section
              describe layers of DS
             -->
            <!-- <h4>Desingn System Layers</h4>
            <table class="c-table mb-md">
              <thead>
                <tr>
                  <th>Class Prefix</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">c-</span>
                  </td>
                  <td>
                   
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">o-</span>
                  </td>
                  <td>
                 
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">is-</span>,&nbsp;
                    <span class="c-important">has-</span>
                  </td>
                  <td>
                    This prefix is related to
                    <span class="ff-mono">state classes</span> f.e.:
                    <span class="c-important">.is-animating</span>,
                    <span class="c-important">.has-error</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <h4>Naming conventions</h4>
            <table class="c-table mb-md">
              <thead>
                <tr>
                  <th>Class Prefix</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">c-</span>
                  </td>
                  <td>
                    This prefix is used within
                    <span class="ff-mono">Components</span> code, so everytime
                    you see class name like this:
                    <span class="c-important">.c-component-name</span> it's
                    component.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">o-</span>
                  </td>
                  <td>
                    Prefix used in <span class="ff-mono">Objects</span> code.
                    Objects are used to build layouts and divide certain space
                    into parts, where we can then place components.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">is-</span>,&nbsp;
                    <span class="c-important">has-</span>
                  </td>
                  <td>
                    This prefix is related to
                    <span class="ff-mono">state classes</span> f.e.:
                    <span class="c-important">.is-animating</span>,
                    <span class="c-important">.has-error</span>
                  </td>
                </tr>
              </tbody>
            </table> -->
            <!-- <p class="fsi">
              More about naming convention can be found in
              <router-link :to="{}">For Developers</router-link> section.
            </p> -->
          </div>
        </section>
        <section class="o-page__section" id="use-source-files">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Use source SCSS & JS files (structure)</h2>
            </header>

            <p>
              If you're going to build project for a client or other app and you
              want to use DS, getting source SCSS (and maybe JS) will be best
              way for you.
            </p>

            <p>
              All the sections of this document are made mostly for using DS in
              it's original from&nbsp;&ndash;&nbsp;<span class="c-important"
                >SCSS</span
              >
              files. You will get all variables with:
              <span class="ff-mono">colors</span>,
              <span class="ff-mono">gaps</span>,
              <span class="ff-mono">font-sizes</span>,
              <span class="ff-mono">layout</span> options which you can change
              to fit needs of your project.<br />
              <a
                href="https://cdn.your-domain.com/design_system/scss.zip"
                download
                >Download SCSS
              </a>
            </p>

            <p>
              Some <span class="ff-mono">Components</span> needs Javascript to
              work properly. <br />
              <a
                href="https://cdn.your-domain.com/design_system/js.zip"
                download
                >Download JS
              </a>
            </p>

            <!-- It depends on type of your
              project&nbsp;&ndash;&nbsp;If your project will use Vue (React,
              ...) you'll propbably replace original (vanila) Javascript with
              your code. -->
          </div>
        </section>
        <section class="o-page__section" id="starting-kit">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Starting Kit</h2>
            </header>

            <p>
              If you want to start discover what can you do with DS, best way
              will be to download simple
              <a
                href="https://cdn.your-domain.com/design_system/ds-boilerplate.zip"
                download
                >Starting Kit</a
              >, just unzip this kit and open
              <span class="c-important">index.html</span>.
            </p>

            <p>
              In this kit you will find different layouts, so you can choose one
              and start testing features of DS.
            </p>

            <p>
              Since this is basic HTML and we do not use any local server some
              of the functionalities might be slightly limited (custom icons).
              This Starting Kit should be used to quickly prototype some UI or
              to test what can be done with DS.
            </p>

            <hint-message type="warning">
              In this scenario, we're using compiled CSS into one file, you
              won't have original DS file structure nor access to variables.
            </hint-message>
          </div>
        </section>
        <section class="o-page__section" id="link-css-and-js">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Link CSS & JS from CDN</h2>
            </header>

            <p>
              Add minified version of final (compiled) CSS & JS code yo your
              HTML page and start using all it's features. Add this line of code
              to the end of
              <span class="c-important">&lt;head&gt;&lt;/head&gt;</span>
              element.
              <code-block
                :code="MINIFIED_CSS_CDN_CODE"
                :lang="`html`"
                :copy="true"
                class="mb-nm mt-nm"
              />
              and this line of code right before
              <span class="ff-mono">body</span> closing tag
              <span class="c-important">&lt;/body&gt;</span> to add JS
              <code-block
                :code="MINIFIED_JS_CDN_CODE"
                :lang="`html`"
                :copy="true"
                class="mb-nm mt-nm"
              />

              Now you can start using features of DS, just go to f.e.
              components, choose component you want, copy HTML code and paste it
              into page where you placed link with minified CSS file.
            </p>

            <hint-message type="warning">
              In this scenario, we're using compiled CSS into one file, you
              won't have original DS file structure nor access to variables.
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
import CodeBlock from "@/components/common/CodeBlock.vue";
import HintMessage from "@/components/common/HintMessage.vue";

// Code Examples
import {
  MINIFIED_CSS_CDN_CODE,
  MINIFIED_JS_CDN_CODE,
} from "@/code_examples/how_to_use/Examples";

export default defineComponent({
  name: "HowToUse",
  components: {
    ArticleNavigation,
    CodeBlock,
    HintMessage,
  },
  setup() {
    const sections = getArticleNavSections();
    return {
      sections,
      MINIFIED_CSS_CDN_CODE,
      MINIFIED_JS_CDN_CODE,
    };
  },
});
</script>
