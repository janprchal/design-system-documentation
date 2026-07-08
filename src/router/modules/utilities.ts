import { RouteRecordRaw } from "vue-router";

export const HOW_TO_USE_UTILITIES_ROUTE_NAME = "how-to-use-utilites";
export const COLORS_UTILITY_CLASSES_ROUTE_NAME = "colors-utility-classes";
export const TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME =
  "typography-utility-classes";
export const GAPS_UTILITY_CLASSES_ROUTE_NAME = "spacings-utility-classes";
export const LAYOUT_UTILITY_CLASSES_ROUTE_NAME = "layout-utility-classes";

const HowToUse = () => import("@/views/utilities/HowToUse.vue");
const ColorsUtilityClasses = () =>
  import("@/views/utilities/ColorsUtilityClasses.vue");
const TypographyUtilityClasses = () =>
  import("@/views/utilities/TypographyUtilityClasses.vue");
const GapsUtilityClasses = () =>
  import("@/views/utilities/GapsUtilityClasses.vue");
const LayoutUtilityClasses = () =>
  import("@/views/utilities/LayoutUtilityClasses.vue");

const utilitesRoutes: RouteRecordRaw[] = [
  {
    path: "how-to-use-utilities",
    component: HowToUse,
    name: HOW_TO_USE_UTILITIES_ROUTE_NAME,
  },
  {
    path: "colors-utility-classes",
    component: ColorsUtilityClasses,
    name: COLORS_UTILITY_CLASSES_ROUTE_NAME,
  },
  {
    path: "typography-utility-classes",
    component: TypographyUtilityClasses,
    name: TYPOGRAPHY_UTILITY_CLASSES_ROUTE_NAME,
  },
  {
    path: "spacings-utility-classes",
    component: GapsUtilityClasses,
    name: GAPS_UTILITY_CLASSES_ROUTE_NAME,
  },
  {
    path: "layout-utility-classes",
    component: LayoutUtilityClasses,
    name: LAYOUT_UTILITY_CLASSES_ROUTE_NAME,
  },
];

export default utilitesRoutes;
