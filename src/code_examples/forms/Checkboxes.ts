export const CHECKBOX_HTML_STRUCTURE = `
<div class="c-checkbox">
  <label class="c-checkbox__label" for="checkbox-label">
    <div class="c-checkbox__text">Checkbox label text</div>
    <input class="c-checkbox__input" type="checkbox" id="checkbox-label">
    <div class="c-checkbox__indicator"></div>
  </label>
</div>`;

export const CHECKBOX_CSS = `
$checkbox: (
  "height": 2.2rem,
  "width": 2.2rem,

  "border-w": 0.2rem,
  "border-r": $border-r,

  "checkbox-icon-w": 1.4rem,
  "checkbox-icon-h": 0.8rem,

  "color-outline": $input-outline-c,
  "color-hover": $input-outline-c--hover,

  "indicator-bg-active": $positive-c,
  "indicator-bg-disabled-active": $positive-c--light,
  "indicator-gap": 1.2rem,

  "text-c": $text-c,
  "text-nm": $text-nm,
);

.c-checkbox {
  position: relative;

  -webkit-tap-highlight-color: transparent;
}

.c-checkbox__input {
  position: absolute;
  z-index: -1;

  width: 0;
  height: 0;

  opacity: 0;
}

.c-checkbox__label {
  display: inline-flex;

  flex-flow: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;

  font-weight: 400;
  color: map-get($checkbox, "text-c");

  cursor: pointer;
}

.c-checkbox__text {
  flex: 1 0 auto;
  
  position: relative;

  padding-top: 0.1rem;

  font-size: map-get($checkbox, "text-nm");
  color: map-get($checkbox, "text-c");
  line-height: 1.58;
}

.c-checkbox__label--center {
  justify-content: center;
}

.c-checkbox__indicator {
  position: relative;
  top: map-get($checkbox, "border-w");

  width: map-get($checkbox, "width");
  height: map-get($checkbox, "height");

  margin-right: map-get($checkbox, "indicator-gap");

  background-color: map-get($checkbox, "color-outline");

  border: map-get($checkbox, "border-w") solid map-get($checkbox, "color-outline");
  border-radius: map-get($checkbox, "border-r");

  transition: all .12s linear;
}

.c-checkbox__indicator:before {
  content: "";

  display: none;

  position: absolute;

  top: 0.3rem;
  left: 0.2rem;

  width: map-get($checkbox, "checkbox-icon-w");
  height:  map-get($checkbox, "checkbox-icon-h");

  border-width: 0 0 map-get($checkbox, "border-w") map-get($checkbox, "border-w");
  border-style: solid;
  border-color: $light-c;

  transform: rotate(-50deg);
  
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

// hover on label (checkbox)
// Focus on original input (through tabindex)
.c-checkbox__label:hover .c-checkbox__indicator, 
.c-checkbox__input:focus + .c-checkbox__indicator { 
  border-color: map-get($checkbox, "color-hover");
  background-color: map-get($checkbox, "color-hover");
}
 
.c-checkbox__input:checked + .c-checkbox__indicator {
  background-color: map-get($checkbox, "indicator-bg-active");
  border-color: map-get($checkbox, "indicator-bg-active");
}

.c-checkbox__input:checked + .c-checkbox__indicator:before {
  display: block;
}

// Disabled state
.c-checkbox.is-disabled {
  .c-checkbox__label {
    cursor: not-allowed;
  }

  .c-checkbox__text {
    color: $text-c--light;
  }

  .c-checkbox__input + .c-checkbox__indicator {
    background-color: $neutral-c--light;
    border-color: $neutral-c--light;
  }

  // Checked state
  .c-checkbox__input:checked + .c-checkbox__indicator {
    background-color: map-get($checkbox, "indicator-bg-disabled-active");
    border-color: map-get($checkbox, "indicator-bg-disabled-active");
  }
}

.c-checkbox--text-left {
  .c-checkbox__label {
    flex-flow: row;
  }

  .c-checkbox__indicator {
    margin-right: 0;
    margin-left: map-get($checkbox , "indicator-gap");
  }
}`;
