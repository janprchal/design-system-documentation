<template>
  <div class="o-nav">
    <div class="o-nav__logo">
      <router-link class="c-logo" to="/">
        <img
          class="c-logo__img"
          src="@/assets/logo.svg"
          alt="Design System logo"
        />
        <span class="c-logo__name">Design System <br />Tutorial</span>
      </router-link>
    </div>
    <div class="o-nav__list">
      <nav class="c-nav" role="navigation" aria-label="Main Navigation">
        <ul class="c-nav__list">
          <li class="c-nav__item">
            <router-link
              :to="{ name: HOW_TO_USE_ROUTE_NAME }"
              class="c-nav__link"
            >
              <div class="c-nav__icon">
                <icon-how-to-use />
              </div>
              <div class="c-nav__name">How to use</div>
            </router-link>
          </li>
          <li class="c-nav__item">
            <div
              @click="designIsOpen = !designIsOpen"
              :class="{ 'is-open': designIsOpen }"
              class="c-nav__link has-subnav"
            >
              <div class="c-nav__icon">
                <icon-design />
              </div>
              <div class="c-nav__name">Design</div>
              <span class="c-nav__subnav-caret"></span>
            </div>
            <transition-expand>
              <ul v-if="designIsOpen" class="c-subnav">
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: DESIGN_COLORS_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Colors
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: DESIGN_TYPOGRAPHY_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Typography
                  </router-link>
                </li>
              </ul>
            </transition-expand>
          </li>
          <li class="c-nav__item">
            <div
              @click="layoutsIsOpen = !layoutsIsOpen"
              :class="{ 'is-open': layoutsIsOpen }"
              class="c-nav__link has-subnav"
            >
              <div class="c-nav__icon">
                <icon-layouts />
              </div>
              <div class="c-nav__name">Layouts</div>
              <span class="c-nav__subnav-caret"></span>
            </div>
            <transition-expand>
              <ul v-if="layoutsIsOpen" class="c-subnav">
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: RESPONSIVE_BREAKPOINTS_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Responsive Breakpoints
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: APP_LAYOUTS_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Application Layouts
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: LAYOUT_OBJECTS_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Layout Objects
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: FLEXBOX_GRID_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Grid System
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: LAYOUT_HELPERS_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Layout Helpers
                  </router-link>
                </li>
              </ul>
            </transition-expand>
          </li>
          <li class="c-nav__item">
            <div
              @click="formsIsOpen = !formsIsOpen"
              :class="{ 'is-open': formsIsOpen }"
              class="c-nav__link has-subnav"
            >
              <div class="c-nav__icon">
                <icon-forms />
              </div>
              <div class="c-nav__name">Forms</div>
              <span class="c-nav__subnav-caret"></span>
            </div>
            <transition-expand>
              <ul v-if="formsIsOpen" class="c-subnav">
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: FORM_GROUP_OBJECT_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Form Group Object
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: INPUT_AND_VALIDATION_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Basic Input & Form Messages
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: CHECK_AND_RADIO_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Checkbox, Radio & Switch
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: SELECT_AND_OPTION_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Select & Option
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: INPUT_WITH_ICON_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Input with Icon & File upload
                  </router-link>
                </li>
              </ul>
            </transition-expand>
          </li>
          <li class="c-nav__item">
            <div
              @click="componentsIsOpen = !componentsIsOpen"
              :class="{ 'is-open': componentsIsOpen }"
              class="c-nav__link has-subnav"
            >
              <div class="c-nav__icon">
                <icon-components />
              </div>
              <div class="c-nav__name">Components</div>
              <span class="c-nav__subnav-caret"></span>
            </div>
            <transition-expand>
              <ul v-if="componentsIsOpen" class="c-subnav">
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: BUTTON_COMPONENT_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Button
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: BASIC_BOX_COMPONENT_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Box
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: USER_HINT_COMPONENT_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Hint
                  </router-link>
                </li>
                <!-- <li class="c-subnav__item">
                  <router-link to="/css-code-style" class="c-subnav__link">
                    Messages
                  </router-link>
                </li> -->
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: PILL_BUTTON_COMPONENT_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Pill
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: DATA_TABLE_COMPONENT_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Table
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: TABS_COMPONENT_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Tabs
                  </router-link>
                </li>
                <!--
                <li class="c-subnav__item">
                  <router-link to="/css-code-style" class="c-subnav__link">
                    Dropdown
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link to="/css-code-style" class="c-subnav__link">
                    Breadcrumbs
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link to="/css-code-style" class="c-subnav__link">
                    Tabs
                  </router-link>
                </li> -->
              </ul>
            </transition-expand>
          </li>
          <li class="c-nav__item">
            <div
              @click="utilitiesIsOpen = !utilitiesIsOpen"
              :class="{ 'is-open': utilitiesIsOpen }"
              class="c-nav__link has-subnav"
            >
              <div class="c-nav__icon">
                <icon-utilities />
              </div>
              <div class="c-nav__name">Utility Classes</div>
              <span class="c-nav__subnav-caret"></span>
            </div>
            <transition-expand>
              <ul v-if="utilitiesIsOpen" class="c-subnav">
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: HOW_TO_USE_UTILITIES_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    How to use Utility classes
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: COLORS_UTILITY_CLASSES_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Colors
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Typography
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: GAPS_UTILITY_CLASSES_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Spacings
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: LAYOUT_UTILITY_CLASSES_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    Layout Helpers
                  </router-link>
                </li>
              </ul>
            </transition-expand>
          </li>
          <li class="c-nav__item">
            <div
              @click="devsIsOpen = !devsIsOpen"
              :class="{ 'is-open': devsIsOpen }"
              class="c-nav__link has-subnav"
            >
              <div class="c-nav__icon">
                <icon-devs />
              </div>
              <div class="c-nav__name">For Developers</div>
              <span class="c-nav__subnav-caret"></span>
            </div>
            <transition-expand>
              <ul v-if="devsIsOpen" class="c-subnav">
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: CSS_RULES_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    CSS Rules
                  </router-link>
                </li>
                <li class="c-subnav__item">
                  <router-link
                    :to="{ name: HTML_RULES_ROUTE_NAME }"
                    class="c-subnav__link"
                  >
                    HTML Rules
                  </router-link>
                </li>
              </ul>
            </transition-expand>
          </li>
          <li
            class="c-nav__item"
            style="visibility: hidden; height: 0; min-height: 0"
          >
            <div
              @click="hiddenSection = !hiddenSection"
              :class="{ 'is-open': hiddenSection }"
              class="c-nav__link has-subnav"
            >
              <div class="c-nav__icon"></div>
              <div class="c-nav__name">&nbsp;</div>
              <span class="c-nav__subnav-caret"></span>
            </div>
            <transition-expand>
              <ul v-if="hiddenSection" class="c-subnav">
                <li class="c-subnav__item">&nbsp;</li>
              </ul>
            </transition-expand>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import IconHowToUse from "@/assets/icons/IconHowToUse.vue";
import IconLayouts from "@/assets/icons/IconLayouts.vue";
import IconForms from "@/assets/icons/IconForms.vue";
import IconComponents from "@/assets/icons/IconComponents.vue";
import IconUtilities from "@/assets/icons/IconUtilities.vue";
import IconDevs from "@/assets/icons/IconDevs.vue";
import IconDesign from "@/assets/icons/IconDesign.vue";
import TransitionExpand from "@/components/common/TransitionExpand.vue";

import { HOW_TO_USE_ROUTE_NAME } from "@/router/index";

import {
  DESIGN_COLORS_ROUTE_NAME,
  DESIGN_TYPOGRAPHY_ROUTE_NAME,
} from "@/router/modules/design";

import {
  APP_LAYOUTS_ROUTE_NAME,
  FLEXBOX_GRID_ROUTE_NAME,
  LAYOUT_HELPERS_ROUTE_NAME,
  LAYOUT_OBJECTS_ROUTE_NAME,
  RESPONSIVE_BREAKPOINTS_ROUTE_NAME,
} from "@/router/modules/layouts";

import {
  CHECK_AND_RADIO_ROUTE_NAME,
  SELECT_AND_OPTION_ROUTE_NAME,
  INPUT_AND_VALIDATION_ROUTE_NAME,
  INPUT_WITH_ICON_ROUTE_NAME,
  FORM_GROUP_OBJECT_ROUTE_NAME,
} from "@/router/modules/forms";

import {
  HOW_TO_USE_UTILITIES_ROUTE_NAME,
  COLORS_UTILITY_CLASSES_ROUTE_NAME,
  TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME,
  GAPS_UTILITY_CLASSES_ROUTE_NAME,
  LAYOUT_UTILITY_CLASSES_ROUTE_NAME,
} from "@/router/modules/utilities";

import {
  USER_HINT_COMPONENT_ROUTE_NAME,
  BUTTON_COMPONENT_ROUTE_NAME,
  BASIC_BOX_COMPONENT_ROUTE_NAME,
  PILL_BUTTON_COMPONENT_ROUTE_NAME,
  DATA_TABLE_COMPONENT_ROUTE_NAME,
  TABS_COMPONENT_ROUTE_NAME,
} from "@/router/modules/components";

import {
  CSS_RULES_ROUTE_NAME,
  HTML_RULES_ROUTE_NAME,
} from "@/router/modules/developers";

export default {
  name: "MainNavigation",
  components: {
    IconHowToUse,
    IconLayouts,
    IconForms,
    IconComponents,
    IconUtilities,
    TransitionExpand,
    IconDevs,
    IconDesign,
  },

  data(): {
    layoutsIsOpen: boolean;
    formsIsOpen: boolean;
    componentsIsOpen: boolean;
    utilitiesIsOpen: boolean;
    devsIsOpen: boolean;
    designIsOpen: boolean;
    hiddenSection: boolean;
    HOW_TO_USE_ROUTE_NAME: string;
    APP_LAYOUTS_ROUTE_NAME: string;
    FLEXBOX_GRID_ROUTE_NAME: string;
    LAYOUT_HELPERS_ROUTE_NAME: string;
    CSS_RULES_ROUTE_NAME: string;
    HTML_RULES_ROUTE_NAME: string;
    CHECK_AND_RADIO_ROUTE_NAME: string;
    SELECT_AND_OPTION_ROUTE_NAME: string;
    INPUT_AND_VALIDATION_ROUTE_NAME: string;
    LAYOUT_OBJECTS_ROUTE_NAME: string;
    INPUT_WITH_ICON_ROUTE_NAME: string;
    RESPONSIVE_BREAKPOINTS_ROUTE_NAME: string;
    FORM_GROUP_OBJECT_ROUTE_NAME: string;
    USER_HINT_COMPONENT_ROUTE_NAME: string;
    HOW_TO_USE_UTILITIES_ROUTE_NAME: string;
    COLORS_UTILITY_CLASSES_ROUTE_NAME: string;
    DESIGN_COLORS_ROUTE_NAME: string;
    DESIGN_TYPOGRAPHY_ROUTE_NAME: string;
    TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME: string;
    GAPS_UTILITY_CLASSES_ROUTE_NAME: string;
    LAYOUT_UTILITY_CLASSES_ROUTE_NAME: string;
    BUTTON_COMPONENT_ROUTE_NAME: string;
    BASIC_BOX_COMPONENT_ROUTE_NAME: string;
    PILL_BUTTON_COMPONENT_ROUTE_NAME: string;
    DATA_TABLE_COMPONENT_ROUTE_NAME: string;
    TABS_COMPONENT_ROUTE_NAME: string;
  } {
    return {
      layoutsIsOpen: false,
      formsIsOpen: false,
      componentsIsOpen: false,
      utilitiesIsOpen: false,
      devsIsOpen: false,
      designIsOpen: false,
      hiddenSection: false,
      HOW_TO_USE_ROUTE_NAME,
      APP_LAYOUTS_ROUTE_NAME,
      FLEXBOX_GRID_ROUTE_NAME,
      LAYOUT_HELPERS_ROUTE_NAME,
      CSS_RULES_ROUTE_NAME,
      HTML_RULES_ROUTE_NAME,
      CHECK_AND_RADIO_ROUTE_NAME,
      SELECT_AND_OPTION_ROUTE_NAME,
      INPUT_AND_VALIDATION_ROUTE_NAME,
      LAYOUT_OBJECTS_ROUTE_NAME,
      INPUT_WITH_ICON_ROUTE_NAME,
      RESPONSIVE_BREAKPOINTS_ROUTE_NAME,
      FORM_GROUP_OBJECT_ROUTE_NAME,
      USER_HINT_COMPONENT_ROUTE_NAME,
      HOW_TO_USE_UTILITIES_ROUTE_NAME,
      COLORS_UTILITY_CLASSES_ROUTE_NAME,
      DESIGN_COLORS_ROUTE_NAME,
      DESIGN_TYPOGRAPHY_ROUTE_NAME,
      TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME,
      GAPS_UTILITY_CLASSES_ROUTE_NAME,
      LAYOUT_UTILITY_CLASSES_ROUTE_NAME,
      BUTTON_COMPONENT_ROUTE_NAME,
      BASIC_BOX_COMPONENT_ROUTE_NAME,
      PILL_BUTTON_COMPONENT_ROUTE_NAME,
      DATA_TABLE_COMPONENT_ROUTE_NAME,
      TABS_COMPONENT_ROUTE_NAME,
    };
  },
};
</script>
