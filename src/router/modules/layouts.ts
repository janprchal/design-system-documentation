import { RouteRecordRaw } from "vue-router";

export const APP_LAYOUTS_ROUTE_NAME = "application-layouts";
export const FLEXBOX_GRID_ROUTE_NAME = "flexbox-grid-system";
export const LAYOUT_HELPERS_ROUTE_NAME = "layout-helpers";
export const LAYOUT_OBJECTS_ROUTE_NAME = "layout-objects";
export const RESPONSIVE_BREAKPOINTS_ROUTE_NAME = "responsive-breakpoints";

const ApplicationLayout = () => import("@/views/layout/ApplicationLayout.vue");
const FlexboxGridSystem = () => import("@/views/layout/FlexboxGridSystem.vue");
const LayoutHelpers = () => import("@/views/layout/LayoutHelpers.vue");
const LayoutObjects = () => import("@/views/layout/LayoutObjects.vue");
const ResponsiveBreakpoints = () =>
  import("@/views/layout/ResponsiveBreakpoints.vue");

const layoutsRoutes: RouteRecordRaw[] = [
  {
    path: "application-layouts",
    component: ApplicationLayout,
    name: APP_LAYOUTS_ROUTE_NAME,
  },
  {
    path: "layout-objetcs",
    component: LayoutObjects,
    name: LAYOUT_OBJECTS_ROUTE_NAME,
  },
  {
    path: "flexbox-grid-system",
    component: FlexboxGridSystem,
    name: FLEXBOX_GRID_ROUTE_NAME,
  },
  {
    path: "layout-helpers",
    component: LayoutHelpers,
    name: LAYOUT_HELPERS_ROUTE_NAME,
  },
  {
    path: "responsive-breakpoints",
    component: ResponsiveBreakpoints,
    name: RESPONSIVE_BREAKPOINTS_ROUTE_NAME,
  },
];

export default layoutsRoutes;
