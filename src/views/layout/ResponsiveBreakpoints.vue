<template>
  <article class="o-page">
    <header class="o-page__heading">
      <h1 class="mb-0">Responsive Breakpoints</h1>
    </header>
    <div class="o-page__wrapper">
      <div class="o-page__content">
        <section class="o-page__section" id="introduction">
          <div class="o-page__inner">
            <p>
              We use breakpoints as a conditions when we're building responsive
              design. Breakpoints can control how can certain area of content
              looks on different viewports or device sizes.
            </p>

            <p>
              DS was made as <strong>Mobile first</strong>. When we're building
              project we should start with design for smallest screens (mobile -
              starting point) and build up on this for other devices (tablet,
              screen & large screen).
            </p>

            <hint-message type="warning" class="mb-0">
              To understand how responsive breakpoints are made in CSS you
              should be familiar with concept of
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
                >CSS Media Queries</a
              >.
            </hint-message>
          </div>
        </section>
        <section class="o-page__section" id="breakpoints-in-design-system">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Breakpoints in Design System</h2>
            </header>

            <p>
              We use third party plugin to work with breakpoints in DS (this
              will probably change in near future), code of this plugin can be
              found in
              <span class="c-important"
                >01_settings/settings.breakpoints.scss</span
              >
              file, we don't need to do any changes in this plugin to affect
              breakpoints, more effective is to change settings for breakpoints
              in
              <span class="c-important"
                >01_settings/settings.responsive.scss</span
              >.
            </p>

            <h4>How breakpoints are made</h4>
            <p>
              In
              <span class="c-important"
                >01_settings/settings.responsive.scss</span
              >
              file we can find
            </p>
            <code-block
              lang="css"
              :code="MIN_MAX_VARIABLES"
              class="mb-nm"
              :copy="false"
            />
            <p>
              these variables which defines min & max screen widths for our
              breakpoints.
            </p>
            <hint-message type="purple" class="mb-lg">
              You can change values of these variables to change breakpoints
              based on what do you need on your project.
            </hint-message>
            <p>
              Next step will be to use devices widths variables we showned in
              previous step and use them to create media-queries which we will
              use in DS.
            </p>
            <code-block
              lang="css"
              :code="MAPPY_QUERIES"
              class="mb-nm"
              :copy="false"
            />
            <p></p>
            <p class="mb-xs">
              We're using variables from
              <span class="c-important">$breakpoints</span> map from previous
              example to define conditions, these variables are used in
              <span class="c-important">mappy-bp()</span> function. Arguments of
              this function are:
            </p>
            <ol class="mb-lg">
              <li>
                <span class="ff-mono">queries</span>: min-width, max-width,
                orientation
              </li>
              <li>
                <span class="ff-mono">type</span>: screen, print. If it's not
                defined <span class="ff-mono">all</span> will be used.
              </li>
            </ol>

            <h4>SCSS vs CSS</h4>
            <code-block
              lang="css"
              :code="BREAKPOINT_TO_QUERY"
              class="mb-nm"
              :copy="false"
            />
            <p>
              We can see how is SCSS breakpoint used and how is transpiled into
              CSS. If we go backwards, we can notice that we used
              <span class="c-important">tablet-landscape</span> breakpoint. If
              we look for this breakpoints in
              <span class="c-important">$mappy-queries</span> we can see that it
              uses
              <span class="c-important"
                >tablet-min, tablet-max, orientation landscape</span
              >
              as queries and <span class="c-important">screen</span> as (device)
              type.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="how-to-use-breakpoints">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>How to use breakpoints</h2>
            </header>
            <p>
              It was mentioned in introduction, we should follow procedure when
              we're working with breakpoints. Mobile first approach means that
              first we should define styles for mobile devices (and default
              style used on all screens and resolutions) first and then add
              specific styles for tablet, notebook screen & bigger screen
              resolutions.
            </p>

            <code-block
              lang="css"
              :code="BREAKPOINTS_EXAMPLE"
              class="mb-nm"
              :copy="false"
            />

            <p>
              In example above we defined simple component whith white
              background, green border around the components, box shadow, inner
              space on left & right side and default font-size. These are our
              mobile & default styles for component. Then we:
            </p>
            <ul>
              <li>
                <div>
                  On
                  <span class="c-important">
                    @include mappy-query(mobile-bigger)
                  </span>
                  breakpoint
                  <p>
                    We increased left & right inner space to
                    <span class="ff-mono">0.6rem</span>.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  On
                  <span class="c-important">
                    @include mappy-query(tablet)
                  </span>
                  breakpoint
                  <p>
                    We inceased font-size to
                    <span class="ff-mono">1.5rem</span>.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  On
                  <span class="c-important">
                    @include mappy-query(screen)
                  </span>
                  breakpoint
                  <p>
                    On notebook resolution breakpoint changed color of the
                    components border to red and again we added more inner space
                    to left & right.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  On
                  <span class="c-important">
                    @include mappy-query(largescreen)
                  </span>
                  breakpoint
                  <p>
                    For large resolutions we decided to remove the border around
                    component, inrease font-size and left & right inner space.
                  </p>
                </div>
              </li>
            </ul>
            <p>
              Through the breakpoints we used we can see lots of changes, but
              <span class="ff-mono">background-color</span>,
              <span class="ff-mono">border-radius</span> &
              <span class="ff-mono">box-shadow</span>.
            </p>
          </div>
        </section>
        <section class="o-page__section" id="predefined-breakpoints">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Predefined breakpoints</h2>
            </header>
            <table class="c-table">
              <thead>
                <tr>
                  <th>Breakpoint</th>
                  <th>Condition</th>
                  <th>Applied on</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">mobile</span>
                  </td>
                  <td class="ff-mono fs-nm" style="min-width: 176px">
                    min-width: 320px
                  </td>
                  <td>
                    This breakpoint is used to achieve
                    <span class="ff-mono">-sm</span> option in some layout
                    classes. It's not recommended to use it, because default
                    styles are for <span class="c-important">mobile</span>.
                    Check
                    <router-link to="#how-to-use-breakpoints"
                      >previous section</router-link
                    >.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">mobile-bigger</span>
                  </td>
                  <td class="ff-mono fs-nm">min-width:&nbsp;481px</td>
                  <td>
                    We can target mobile phones with bigger screen with this
                    breakpoint.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">mobile-only</span>
                  </td>
                  <td class="ff-mono fs-nm" style="min-width: 176px">
                    min-width:&nbsp;320px<br />max-width:&nbsp;767px
                  </td>
                  <td>
                    With this breakpoint we can target all mobile phone (and
                    only them).
                    <span class="fsi"
                      >This breakpoint is mostly used in DS functions.</span
                    >
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">tablet</span>
                  </td>
                  <td class="ff-mono fs-nm">min-width:&nbsp;768px</td>
                  <td>
                    This breakpoint will be appliend on screen which is at least
                    768px wide.
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="c-important">tablet-only</span>
                  </td>
                  <td class="ff-mono fs-nm">
                    min-width:&nbsp;768px<br />max-width:&nbsp;1160px
                  </td>
                  <td>
                    This breakpoint will target only tablet resolutions.
                    <span class="fsi"
                      >This breakpoint is mostly used in DS functions.</span
                    >
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">tablet-bigger</span>
                  </td>
                  <td class="ff-mono fs-nm">min-width:&nbsp;1024px</td>
                  <td>
                    We can target tablet devices with bigger screens with this
                    breakpoint.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">tablet-ladnscape</span>
                  </td>
                  <td class="ff-mono fs-nm">
                    min-width:&nbsp;768px<br />
                    orientation:&nbsp;landscape
                  </td>
                  <td>
                    Thes breakpoint will be applied only on tablet screen which
                    is rotated to landscape mode.
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">screen</span>
                  </td>
                  <td class="ff-mono fs-nm">min-width:&nbsp;1161px</td>
                  <td>Breakpoint for bigger screens.</td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">screen-only</span>
                  </td>
                  <td class="ff-mono fs-nm">
                    min-width:&nbsp;1161px<br />max-width:&nbsp;1680px
                  </td>
                  <td>
                    This breakpoint will target only notebook monitor screen
                    resolutions.
                    <span class="fsi"
                      >This breakpoint is mostly used in DS functions.</span
                    >
                  </td>
                </tr>
                <tr>
                  <td class="nowrap">
                    <span class="c-important">largescreen</span>
                  </td>
                  <td class="ff-mono fs-nm">min-width:&nbsp;1681px</td>
                  <td>Breakpoint for large resolutions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="o-page__section" id="responsive-classnames">
          <div class="o-page__inner">
            <header class="o-page__header">
              <h2>Responsive classnames</h2>
            </header>
            <p>
              In some classnames we're using certain identifiers which will tell
              us on which (basic) breakpoint will be class active. We can see
              this mostly on
              <router-link :to="{ name: FLEXBOX_GRID_ROUTE_NAME }"
                >grid system</router-link
              >
              &
              <router-link :to="{ name: LAYOUT_HELPERS_ROUTE_NAME }"
                >layout helpers</router-link
              >, but we might find this in some other classnames (in some
              helpers f.e.).
            </p>

            <p>
              In DS we're using 4 main responsive classname identifiers:
              <span class="c-important">-sm</span>,
              <span class="c-important">-md</span>,
              <span class="c-important">-lg</span>,
              <span class="c-important">-xl</span>
            </p>
            . This identifiers can be found in
            <span class="c-important"
              >01_settings/settings.responsive.scss</span
            >
            file.
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

import {
  FLEXBOX_GRID_ROUTE_NAME,
  LAYOUT_HELPERS_ROUTE_NAME,
} from "@/router/modules/layouts";

// Code Examples
import {
  MIN_MAX_VARIABLES,
  MAPPY_QUERIES,
  BREAKPOINT_TO_QUERY,
  BREAKPOINTS_EXAMPLE,
} from "@/code_examples/layout/css/Breakpoints";

export default defineComponent({
  name: "ResponsiveBreakpoints",
  components: {
    ArticleNavigation,
    HintMessage,
    CodeBlock,
  },
  setup() {
    const sections = getArticleNavSections();

    return {
      sections,
      MIN_MAX_VARIABLES,
      MAPPY_QUERIES,
      BREAKPOINT_TO_QUERY,
      BREAKPOINTS_EXAMPLE,
      FLEXBOX_GRID_ROUTE_NAME,
      LAYOUT_HELPERS_ROUTE_NAME,
    };
  },
});
</script>
