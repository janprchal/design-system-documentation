export const RADIO_BUTTON_COMPONENT = `
.c-radio {
  position: relative;
  -webkit-tap-highlight-color: transparent;
}

.c-radio__input {
  position: absolute;
  z-index: -1;

  width: 0;
  height: 0;

  opacity: 0;
}

.c-radio__label {
  display: flex;
  flex-flow: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;

  font-weight: 400;
  color: $text-c;

  cursor: pointer;
}

.c-radio__label--center {
  justify-content: center;
}

.c-radio__text {
  position: relative;

  padding-top: 1px;

  font-size: $text-nm;
  color: $text-c;
}

.c-radio__indicator {
  position: relative;
  top: 2px;

  flex: 0 0 $radio-w;
  max-width: $radio-w;
  height: $radio-h;
  margin-right: .675rem;

  background-color: transparent;
  border: 2px solid $input-outline-c;
  border-radius: 50%;

  transition: all .12s linear;

  &:before {
    content: "";
  
    position: absolute;
    top: 4px;
    left: 4px;
  
    width: $radio-icon-w;
    height: $radio-icon-h;
  
    border-radius: 50%;
    background-color: $input-outline-c;
  
    transition: background-color .12s linear;
  }
}

/*
  hover on label (radio)
  Focus on original input (through tabindex)
*/
.c-radio__label:hover .c-radio__indicator, 
.c-radio__input:focus + .c-radio__indicator { 
  border-color: $input-outline-c--hover;
}

.c-radio__label:hover .c-radio__indicator:before,
.c-radio__input:focus + .c-radio__indicator:before {
  background-color: $input-outline-c--hover;
} 

.c-radio__input:checked + .c-radio__indicator {
  border-color: $positive-c;
}

.c-radio__input:checked + .c-radio__indicator:before {
  background-color: $positive-c;
}

.c-radio--smaller {
  .c-radio__label {
    font-size: $text-sm;
  }

  .c-radio__indicator {
    flex-basis: $radio-w--smaller;
    max-width: $radio-w--smaller;

    border-width: 1px;

    &:before {
      width: $radio-icon-w--smaller;
      height: $radio-icon-h--smaller;
    }
  }
}`;

export const RADIO_BUTTON_HTML = `
<div class="c-radio">
  <label class="c-radio__label" for="radio_one_label">
    <div class="c-radio__text">Radio one label</div>
    <input class="c-radio__input" type="radio" name="radio_test" id="radio_one_label">
    <div class="c-radio__indicator"></div>
  </label>
</div>
`;

export const STRUCTURE_NOK = `
.c-component {
  background-color: red;

  .c-component__element {
    background-color: green;

    &--alternative {
      background-color: blue;
    }
  }
}`;

export const STRUCTURE_OK = `
.c-component {
  background-color: red;
}

.c-component__element {
  background-color: green;
}

.c-component__element--alternative {
  background-color: blue;
}`;

export const RELATIONS_NOK = `
.c-component {
  background-color: red;

  &__element {
    background-color: green;

    &.is-active {
      & + .c-component__second-element {
        background-color: yellow;
      }
    }
  }

  &__second-element {
    background-color: blue;
  }
}`;

export const RELATIONS_OK = `
.c-component {
  background-color: red;
}

.c-component__element {
  background-color: green;
}

.c-component__second-element {
  background-color: blue;
}

/**
  We can replace + selector with other 
  relationship selectors (>, ~)
*/
.c-component__element.is-active + .c-component__second-element {
  background-color: yellow;
}`;

export const COMPONENT_MODIFIER_NOK = `
.c-component {
  background-color: red;
}

.c-component__element {
  background-color: green;
}

/**
  No need to create modifier of whole component
  We can create modifier of element 
  .c-component__element--alternative
*/
.c-component--alt {
  .c-component__element {
    background-color: blue;
  }
}`;

export const COMPONENT_MODIFIER_OK = `
.c-component {
  background-color: red;
}

.c-component__element {
  background-color: green;
}

.c-component__element--alternative {
  background-color: blue;
}

.c-component__second-element {
  background-color: yellow;
}

/**
 Modifier of whole component which
 affects elements inside the component
*/
.c-component--greyscale {
  background-color: rgba(#000, .8);

  .c-component__element {
    background-color: rgba(#000, .5);
  }

  .c-component__second-element {
    background-color: rgba(#000, .35);
  }
}`;

export const NESTING_DOTS_NOK = `
`;

export const NESTING_DOTS_OK = `
.c-component {
  background-color: red;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    width: 200px;
    height: 200px;
  }
}

.c-component__element {
  margin-bottom: 20px;

  background-color: green;

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: yellow;
  }

  &:last-child {
    margin-bottom: 0;
  }
}`;

export const TABLES_NOK = `
.c-table {
  table-layout: fixed;
}

.c-table__row {
  border-bottom: 1px solid red;
}

/**
  BEM might be convenient if we have
  lots of table cell types and
  we need modifiers for them
  e.g. .c-table__cell--big, .c-table__cell--small 
* /
.c-table__cell {
  border: 1px solid green;
}

.c-table__cell--no-border-b {
  border-bottom: 0 none;
}`;

export const TABLES_OK = `
.c-table {
  table-layout: fixed;
}

.c-table__row {
  border-bottom: 1px solid red;

  td {
    border: 1px solid green;
  }
}`;

export const SVG_OK = `
.c-component {
  background-color: red;
}

.c-component__element {
  background-color: green;

  svg {
    fill: blue;
  }
}`;

export const DECLARATION_ORDER = `
.c-component {
  /* Position */
  position: absolute;
  /* 
    if we're not using shorthand we should 
    write declarations clockwise: Top, Right, Bottom, Left 
  */
  top: 0; 
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  /* Box Model / Display */
  display: block;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  /* Design */
  background-color: #eee;
  border: 1px solid #888;
  border-radius: 4px;
  opacity: 1;

  /* Typography */
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;

  /* Animations */
  transition: all 1s;

  /* Other */
  cursor: pointer;
}`;

export const RADIO_BTN_SCSS_COMPONENT = `
.c-component {
  background-color: red;
}

.c-component__element {
  background-color: green;

  /*
    :selector / element state selector
  */
  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: purple;
  }
}

/*
  Element modifier
*/
.c-component__element--alternative {
  background-color: blue;
}

/* Relationship selektor  */
.c-component__element.is-active + .c-component__second-element {
  background-color: magenta;
}

.c-component__second-element {
  background-color: yellow;
}

/*
  Component state class (.is-active, .has-error, ...)
  should be at the end of file
*/
.c-component.is-active {
  .c-component__element {
    background-color: aquamarine;
  }

  .c-component__second-element { 
    background-color: yellowgreen;
  }
}

/*
  Modifier of whole component
  should be at the end of file
*/
.c-component--greyscale {
  background-color: rgba(#000, .8);

  .c-component__element {
    background-color: rgba(#000, .5);
  }

  .c-component__second-element {
    background-color: rgba(#000, .35);
  }
}`;
