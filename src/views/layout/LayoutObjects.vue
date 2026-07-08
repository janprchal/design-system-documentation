<template>
  <article class="o-page">
    <header class="o-page__heading">
      <h1 class="mb-0">Layout Objects</h1>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>
              Both layout blocks (Header & Navigation Column), are essential for
              whole layout. We can find their
              <span class="ff-mono">scss</span> code in
              <span class="c-important">05_objects/objects.header.scss</span> &
              <span class="c-important">05_objects/objects.nav.scss</span>
              files. If we want to change
              <span class="ff-mono">width</span> (for Navigation Column) or
              <span class="ff-mono">height</span> (for Header Block) we can
              change variables in
              <span class="c-important">01_settings/settings.layout.scss</span>.
            </p>

            <hint-message type="warning">
              Both object
              <span class="fwm">Header Block</span>&nbsp;&amp;&nbsp;<span
                class="fwm"
                >Navigation Column</span
              >
              are affected by the type of layout we're using. More about
              <router-link :to="{ name: APP_LAYOUTS_ROUTE_NAME }"
                >Application Layouts</router-link
              >.
            </hint-message>
          </div>
        </section>
        <section class="o-page__section" id="header-block">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Header Block</h2>
            </header>
            <p>
              Header Block is by default fixed to the top border of browser
              window, it's stuck at the top of screen when user scrolls down or
              up.
            </p>

            <p class="mb-xs">
              By default Header contains 4 elements (but visible are max. 3 of
              them). The elements are:
            </p>

            <table class="c-table mb-md">
              <thead>
                <tr>
                  <th>Element</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="nowrap">
                    <span class="c-important"
                      >&lt;div class="o-header__logo"&gt;</span
                    >
                  </td>
                  <td>Object which holds project logo.</td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important"
                      >&lt;div class="o-header__hamburger"&gt;</span
                    >
                  </td>
                  <td>Holds hamburger icon to open nav on mobile & tablet.</td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important"
                      >&lt;div class="o-header__nav"&gt;</span
                    >
                  </td>
                  <td>Object where we can put navigation component.</td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important"
                      >&lt;div class="o-header__user"&gt;</span
                    >
                  </td>
                  <td>
                    This object can hold User Menu with profile picture etc.
                  </td>
                </tr>
              </tbody>
            </table>

            <component-example
              component-name="Desktop Header"
              class="c-component-example--no-gaps"
            >
              <div v-html="HEADER_BLOCK_DESKTOP_EXAMPLE"></div>
            </component-example>

            <hint-message type="green" class="mb-lg">
              When we use
              <router-link
                :to="{
                  name: APP_LAYOUTS_ROUTE_NAME,
                  hash: '#fluid-layout-with-navigation-column',
                }"
                >Fluid Layout</router-link
              >
              Header block will still have his own logo element (there will be 2
              logos, 1 in header and 1 in Naviagation Column), but it will be
              hidden and showned only on Tablet&nbsp;&amp;&nbsp;Mobile
              breakpoints.
            </hint-message>

            <component-example
              component-name="Tablet Header"
              class="c-component-example--no-gaps"
            >
              <div v-html="HEADER_BLOCK_TABLET_EXAMPLE"></div>
            </component-example>

            <component-example
              component-name="Mobile Header"
              class="c-component-example--no-gaps"
            >
              <div v-html="HEADER_BLOCK_MOBILE_EXAMPLE"></div>
            </component-example>

            <code-block lang="html" :code="HEADER_BLOCK_CODE" class="mb-lg" />
            <hint-message type="alert" class="mb-lg">
              In code above please notice two IDs
              <span class="c-important">id="js_navTrigger"</span> &
              <span class="c-important">id="js_navBlock"</span>. These two ids
              are used to open navigation block on Mobile & Tablet breakpoints,
              when Hamburger component is showned. We have to have
              <span class="c-important">www/js/nav.js</span> loaded.
            </hint-message>
          </div>
        </section>
        <section class="o-page__section" id="navigation-column">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Navigation Column</h2>
            </header>
            <p>
              SCSS code for this object can be found in
              <span class="c-important">05_objects/objects.nav.scss</span> file.
              Navigation column is made from 3 main elements.
            </p>

            <table class="c-table mb-md">
              <thead>
                <tr>
                  <th>Element</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="nowrap">
                    <span class="c-important"
                      >&lt;div class="o-nav__logo"&gt;</span
                    >
                  </td>
                  <td>Holds project logo.</td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important"
                      >&lt;div class="o-nav__list"&gt;</span
                    >
                  </td>
                  <td>Object where we can put navigation component.</td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important"
                      >&lt;div class="o-wrapper__nav__collapse"&gt;</span
                    >
                  </td>
                  <td>
                    This object is for button which can (un)collapse Navigation
                    Column (Javascript required for this funcionaliy).
                  </td>
                </tr>
              </tbody>
            </table>

            <component-example
              component-name="Mobile Header"
              class="c-component-example--no-gaps"
            >
              <div v-html="NAVIGATION_BLOCK_EXAMPLE"></div>
            </component-example>

            <code-block
              lang="html"
              :code="NAVIGATION_BLOCK_CODE"
              class="mb-lg"
            />
            <p>
              Navigation Block has feature which we can use to increase width of
              content block&nbsp;&ndash;&nbsp;we can collapse the navigation
              block from its original <span class="ff-mono">360px</span> to
              <span class="ff-mono">80px</span>. For this we can use prepared
              button
              <span class="c-important"
                >&lt;div class="o-wrapper__nav__collapse"&gt;</span
              >, this button will switch the nav between
              collapsed&nbsp;/&nbsp;uncollapsed state. We can read state of
              Navigation block from data attribute
              <span class="c-important">data-collapse</span>.
            </p>
            <hint-message type="alert" class="mb-lg">
              <span class="c-important"
                >&lt;div class="o-wrapper__nav__collapse"&gt;</span
              >
              is using JS from <span class="c-important">www/js/nav.js</span>,
              to achieve <span class="ff-mono fwb">collapsed</span> state of
              navigation block. If we want to use custom JS (VueJS or other) and
              want to have collapsible navigation block, we have to add this
              funcionality.
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
import ComponentExample from "@/components/common/ComponentExample.vue";

// Routes
import { APP_LAYOUTS_ROUTE_NAME } from "@/router/modules/layouts";

// Code Examples
import {
  HEADER_BLOCK_DESKTOP_EXAMPLE,
  HEADER_BLOCK_TABLET_EXAMPLE,
  HEADER_BLOCK_MOBILE_EXAMPLE,
  HEADER_BLOCK_CODE,
  NAVIGATION_BLOCK_EXAMPLE,
  NAVIGATION_BLOCK_CODE,
} from "@/code_examples/layout/html/LayoutObjects";

export default defineComponent({
  name: "LayoutObjects",
  components: {
    ArticleNavigation,
    HintMessage,
    ComponentExample,
    CodeBlock,
  },
  setup() {
    const sections = getArticleNavSections();

    return {
      sections,
      HEADER_BLOCK_DESKTOP_EXAMPLE,
      HEADER_BLOCK_TABLET_EXAMPLE,
      HEADER_BLOCK_MOBILE_EXAMPLE,
      HEADER_BLOCK_CODE,
      APP_LAYOUTS_ROUTE_NAME,
      NAVIGATION_BLOCK_EXAMPLE,
      NAVIGATION_BLOCK_CODE,
    };
  },
});
</script>
