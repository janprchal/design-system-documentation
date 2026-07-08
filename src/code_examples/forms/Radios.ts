export const RADIO_HTML_STRUCTURE = `
<div class="c-radio">
  <label class="c-radio__label" for="radio_one_label">
    <div class="c-radio__text">Radio one label</div>
    <input class="c-radio__input" type="radio" name="radio_test" id="radio_one_label">
    <div class="c-radio__indicator"></div>
  </label>
</div>
`;

export const RADIO_CSS = `
$radio: (
  "width": 2.2rem,
  "height": 2.2rem,

  "dot-w": 1rem,
  "dot-h": 1rem,

  "dot-bg-c": $input-outline-c,
  "border-c": $input-outline-c,

  "dot-bg-c-hover": $input-outline-c--hover,
  "border-c-hover": $input-outline-c--hover,

  "indicator-gap": 1.2rem,

  "text-c": $text-c,
  "text-c-disabled": $text-c--light,
  "text-s": $text-nm,

  // Active state
  "dot-bg-c-active": $positive-c,
  "border-c-active": $positive-c,

  // Disabled state
  "dot-bg-c-disabled": $neutral-c--light,
  "border-c-disabled": $neutral-c--light,

  // Checked & Disabled state
  "dot-bg-disabled-active": $positive-c--light,
  "border-c-disabled-active": $positive-c--light,

  // Error state
  "dot-bg-c-error": $negative-c,
  "border-c-error": $negative-c,
  "text-c-error": $negative-c,
);

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
  display: inline-flex;
  flex-flow: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;

  cursor: pointer;
}

.c-radio__label--center {
  justify-content: center;
}

.c-radio__text {
  position: relative;
  flex: 1 0 auto;

  color: map-get($radio, "text-c");
  font-weight: 400;
  font-size: map-get($radio, "text-s");
}

.c-radio__indicator {
  position: relative;
  top: 0.1rem;

  width: map-get($radio, "width");
  height: map-get($radio, "height");
  margin-right: 1.08rem;

  background-color: transparent;
  border: 0.2rem solid map-get($radio, "border-c");
  border-radius: 50%;

  transition: all 0.12s linear;

  &:before {
    content: "";
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;

    width: map-get($radio, "dot-w");
    height: map-get($radio, "dot-h");

    background-color: map-get($radio, "dot-bg-c"); // todo
    border-radius: 50%;

    transition: background-color 0.12s linear;
  }
}

// hover on label (radio)
// Focus on original input (through tabindex)
.c-radio__label:hover .c-radio__indicator,
.c-radio__input:focus + .c-radio__indicator {
  border-color: map-get($radio, "border-c-hover");
}

.c-radio__label:hover .c-radio__indicator:before,
.c-radio__input:focus + .c-radio__indicator:before {
  background-color: map-get($radio, "dot-bg-c-hover");
}

.c-radio__input:checked + .c-radio__indicator {
  border-color: map-get($radio, "border-c-active");

  &::before {
    background-color: map-get($radio, "dot-bg-c-active");
  }
}

// Disabled state
.c-radio.is-disabled {
  .c-radio__label {
    cursor: not-allowed;
  }

  .c-radio__text {
    color: map-get($radio, "text-c-disabled");
  }

  .c-radio__input + .c-radio__indicator {
    border-color: map-get($radio, "border-c-disabled");

    &::before {
      background-color: map-get($radio, "dot-bg-c-disabled");
    }
  }

  // Checked state
  .c-radio__input:checked + .c-radio__indicator {
    border-color: map-get($radio, "border-c-disabled-active");

    &::before {
      background-color: map-get($radio, "dot-bg-disabled-active");
    }
  }
}

.c-radio--text-left {
  .c-radio__label {
    flex-flow: row;
  }

  .c-radio__indicator {
    margin-right: 0;
    margin-left: map-get($radio, "indicator-gap");
  }
}

.c-radio.has-error {
  .c-radio__input + .c-radio__indicator {
    border-color: map-get($radio, "border-c-error");

    &::before {
      background-color: map-get($radio, "dot-bg-c-error");
    }
  }
}
`;
