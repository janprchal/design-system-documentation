import { RouteRecordRaw } from "vue-router";

export const DESIGN_COLORS_ROUTE_NAME = "colors";
export const DESIGN_TYPOGRAPHY_ROUTE_NAME = "typography";

const DesignColors = () => import("@/views/design/DesignColors.vue");
const DesignTypography = () => import("@/views/design/DesignTypography.vue");

const designRoutes: RouteRecordRaw[] = [
  {
    path: "colors",
    component: DesignColors,
    name: DESIGN_COLORS_ROUTE_NAME,
  },
  {
    path: "typography",
    component: DesignTypography,
    name: DESIGN_TYPOGRAPHY_ROUTE_NAME,
  },
];

export default designRoutes;
