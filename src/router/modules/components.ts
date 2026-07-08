import { RouteRecordRaw } from "vue-router";

export const USER_HINT_COMPONENT_ROUTE_NAME = "hint";
export const BUTTON_COMPONENT_ROUTE_NAME = "button";
export const BASIC_BOX_COMPONENT_ROUTE_NAME = "box";
export const PILL_BUTTON_COMPONENT_ROUTE_NAME = "pill";
export const DATA_TABLE_COMPONENT_ROUTE_NAME = "table";
export const TABS_COMPONENT_ROUTE_NAME = "tabs";

const UserHint = () => import("@/views/components/UserHint.vue");
const MainButton = () => import("@/views/components/MainButton.vue");
const BasicBox = () => import("@/views/components/BasicBox.vue");
const PillButton = () => import("@/views/components/PillButton.vue");
const DataTable = () => import("@/views/components/DataTable.vue");
const Tabs = () => import("@/views/components/TabsAndAccordion.vue");

const componentsRoutes: RouteRecordRaw[] = [
  {
    path: "button",
    component: MainButton,
    name: BUTTON_COMPONENT_ROUTE_NAME,
  },
  {
    path: "box",
    component: BasicBox,
    name: BASIC_BOX_COMPONENT_ROUTE_NAME,
  },
  {
    path: "hint",
    component: UserHint,
    name: USER_HINT_COMPONENT_ROUTE_NAME,
  },
  {
    path: "pill",
    component: PillButton,
    name: PILL_BUTTON_COMPONENT_ROUTE_NAME,
  },
  {
    path: "table",
    component: DataTable,
    name: DATA_TABLE_COMPONENT_ROUTE_NAME,
  },
  {
    path: "tabs",
    component: Tabs,
    name: TABS_COMPONENT_ROUTE_NAME,
  },
];

export default componentsRoutes;
