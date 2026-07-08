import { RouteRecordRaw } from "vue-router";

export const CHECK_AND_RADIO_ROUTE_NAME = "check-radio-and-switch";
export const SELECT_AND_OPTION_ROUTE_NAME = "select-and-option";
export const INPUT_AND_VALIDATION_ROUTE_NAME = "inputs-and-validation";
export const INPUT_WITH_ICON_ROUTE_NAME = "input-with-icon";
export const FORM_GROUP_OBJECT_ROUTE_NAME = "form-group-object";

const CheckRadio = () => import("@/views/forms/CheckRadio.vue");
const SelectOption = () => import("@/views/forms/SelectOption.vue");
const InputValidation = () => import("@/views/forms/InputsValidations.vue");
const InputWithIcon = () => import("@/views/forms/InputWithIcon.vue");
const FormGroupObject = () => import("@/views/forms/FormGroupObject.vue");

const formsRoutes: RouteRecordRaw[] = [
  {
    path: "form-item-object",
    component: FormGroupObject,
    name: FORM_GROUP_OBJECT_ROUTE_NAME,
  },
  {
    path: "input-and-validation",
    component: InputValidation,
    name: INPUT_AND_VALIDATION_ROUTE_NAME,
  },
  {
    path: "input-with-icon",
    component: InputWithIcon,
    name: INPUT_WITH_ICON_ROUTE_NAME,
  },
  {
    path: "check-radio-and-switch",
    component: CheckRadio,
    name: CHECK_AND_RADIO_ROUTE_NAME,
  },
  {
    path: "select-and-option",
    component: SelectOption,
    name: SELECT_AND_OPTION_ROUTE_NAME,
  },
];

export default formsRoutes;
