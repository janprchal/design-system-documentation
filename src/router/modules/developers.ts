import { RouteRecordRaw } from "vue-router";

export const CSS_RULES_ROUTE_NAME = "css-rules";
export const HTML_RULES_ROUTE_NAME = "html-rules";

const CssRules = () => import("@/views/developers/CssRules.vue");
const HtmlRules = () => import("@/views/developers/HtmlRules.vue");

const developersRoutes: RouteRecordRaw[] = [
  {
    path: "css-rules",
    component: CssRules,
    name: CSS_RULES_ROUTE_NAME,
  },
  {
    path: "html-rules",
    component: HtmlRules,
    name: HTML_RULES_ROUTE_NAME,
  },
];

export default developersRoutes;
