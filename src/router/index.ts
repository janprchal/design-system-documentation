import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const Tools = () => import("@/views/Tools.vue");
const HowToUse = () => import("@/views/HowToUse.vue");
const ChildrenRouter = () =>
  import("@/views/childrenRouter/ChildrenRouter.vue");

import LayoutsRoutes from "./modules/layouts";
import FormsRoutes from "./modules/forms";
import DevelopersRoutes from "./modules/developers";
import ComponentsRoutes from "./modules/components";
import UtilitiesRoutes from "./modules/utilities";
import DesignRoutes from "./modules/design";

export const HOW_TO_USE_ROUTE_NAME = "how-to-use";
export const LAYOUTS_ROUTE_NAME = "layouts";
export const FORMS_ROUTE_NAME = "forms";
export const COMPONENTS_ROUTE_NAME = "components";
export const DEVELOPMENT_ROUTE_NAME = "development";
export const UTILITIES_ROUTE_NAME = "utilities";
export const DESIGN_PAGE_ROUTE_NAME = "design";
export const TOOLS_ROUTE_NAME = "tools";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: HOW_TO_USE_ROUTE_NAME,
    component: HowToUse,
  },
  {
    path: "/design",
    name: DESIGN_PAGE_ROUTE_NAME,
    component: ChildrenRouter,
    children: DesignRoutes,
  },
  {
    path: "/layouts",
    name: LAYOUTS_ROUTE_NAME,
    component: ChildrenRouter,
    children: LayoutsRoutes,
  },
  {
    path: "/forms",
    name: FORMS_ROUTE_NAME,
    component: ChildrenRouter,
    children: FormsRoutes,
  },
  {
    path: "/components",
    name: COMPONENTS_ROUTE_NAME,
    component: ChildrenRouter,
    children: ComponentsRoutes,
  },
  {
    path: "/development",
    name: DEVELOPMENT_ROUTE_NAME,
    component: ChildrenRouter,
    children: DevelopersRoutes,
  },
  {
    path: "/utilities",
    name: UTILITIES_ROUTE_NAME,
    component: ChildrenRouter,
    children: UtilitiesRoutes,
  },
  {
    path: "/tools",
    name: TOOLS_ROUTE_NAME,
    component: Tools,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "is-active",
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
