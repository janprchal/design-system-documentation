export const BUTTONS_EXAMPLES = `
<div class="o-flex mb-16">
  <button class="c-btn mr-8">Primary</button>
  <button class="c-btn c-btn--secondary mr-8">Secondary</button>
  <button class="c-btn c-btn--positive mr-8">Positive</button>
  <button class="c-btn c-btn--warning mr-8">Warning</button>
  <button class="c-btn c-btn--negative mr-8">Negative</button>
  <button class="c-btn c-btn--neutral mr-8">Neutral</button>
</div>
<div class="o-flex">
  <button class="c-btn-alt mr-8">Primary</button>
  <button class="c-btn-alt c-btn-alt--secondary mr-8">Secondary</button>
  <button class="c-btn-alt c-btn-alt--positive mr-8">Positive</button>
  <button class="c-btn-alt c-btn-alt--warning mr-8">Warning</button>
  <button class="c-btn-alt c-btn-alt--negative mr-8">Negative</button>
  <button class="c-btn-alt c-btn-alt--neutral mr-8">Neutral</button>
</div>`;

export const BUTTON_DEFAULT_ALT_HTML = `
<button class="c-btn">Primary button</button>
<button class="c-btn-alt">Alternative primary button</button>`;

export const BUTTON_WITH_ICON = `
<button class="c-btn c-btn--negative">
  <i class="fas fa-trash mr-8" aria-hidden="true"></i>
  Negative 
</button>`;

export const BUTTON_CSS = `
$btn: (
  "min-w": 14rem,
  "min-h": $input-h,
  "padding": calc($space-sm - 0.1rem) calc($space-lg - 0.1rem),
  "default-bg-c": $primary-c,
  "hover-bg-c": $primary-c--darker,

  "border-r": 0.3rem,
  "border-w": $border-w,

  "text-c": $light-c,
  "text-s": $text-sm,
);

$btn-secondary: (
  "default-bg-c": $secondary-c,
  "hover-bg-c": $secondary-c--darker,
);

$btn-negative: (
  "default-bg-c": $negative-c,
  "hover-bg-c": $negative-c--darker,
);

$btn-warning: (
  "default-bg-c": $warning-c,
  "hover-bg-c": $warning-c--darker,
  "text-c": $warning-c--darkest,
);

$btn-positive: (
  "default-bg-c": $positive-c,
  "hover-bg-c": $positive-c--darker,
  "text-c": $light-c,
);

$btn-neutral: (
  "default-bg-c": $neutral-c,
  "border-c": $neutral-c--darker,
  "hover-bg-c": $neutral-c--darker,
  "text-c": $text-c,
);

$btn-large: (
  "min-w": 20rem,
  "min-h": 6rem,
  "padding-x": calc($space-md - 0.1rem),
  "text-s": $text-md,
  "border-w": 0.2rem,
);

$btn-small: (
  "padding-x": calc($space-sm - 0.1rem),
  "text-s": $text-sm,
);

.c-btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: auto;
  min-width: map-get($btn, "min-w");
  min-height: map-get($btn, "min-h");
  padding: map-get($btn, "padding");

  background-color: map-get($btn, "default-bg-c");
  border: map-get($btn, "border-w") solid transparent;
  border-radius: map-get($btn, "border-r");

  color: map-get($btn, "text-c");
  font-weight: 400;
  font-size: map-get($btn, "text-s");
  line-height: 1.2;
  letter-spacing: 0.05rem;
  text-align: center;
  text-decoration: none;

  cursor: pointer;

  transition: all 0.3s ease;

  box-shadow: 0 0 0 0;

  appearance: none;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: map-get($btn, "hover-bg-c");
    border-color: transparent;

    text-decoration: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.c-btn--secondary {
  background-color: map-get($btn-secondary, "default-bg-c");

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: map-get($btn-secondary, "hover-bg-c");
  }
}

.c-btn--negative {
  background-color: map-get($btn-negative, "default-bg-c");

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: map-get($btn-negative, "hover-bg-c");
  }
}

.c-btn--warning {
  background-color: map-get($btn-warning, "default-bg-c");

  color: map-get($btn-warning, "text-c");

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: map-get($btn-warning, "hover-bg-c");
  }
}

.c-btn--positive {
  background-color: map-get($btn-positive, "default-bg-c");

  color: map-get($btn-positive, "text-c");

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: map-get($btn-positive, "hover-bg-c");
  }
}

.c-btn--neutral {
  background-color: map-get($btn-neutral, "default-bg-c");
  border-color: map-get($btn-neutral, "border-c");

  color: map-get($btn-neutral, "text-c");

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: map-get($btn-neutral, "hover-bg-c");
  }
}

.c-btn-alt {
  @extend .c-btn;
  background-color: transparent;
  border-color: map-get($btn, "default-bg-c");

  color: map-get($btn, "default-bg-c");

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: map-get($btn, "default-bg-c");
    border-color: map-get($btn, "hover-bg-c");

    color: map-get($btn, "text-c");
  }

  &:disabled {
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;

      color: inherit;
    }
  }
}

.c-btn-alt--secondary {
  border-color: map-get($btn-secondary, "default-bg-c");

  color: map-get($btn-secondary, "hover-bg-c");

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: map-get($btn-secondary, "default-bg-c");
    border-color: map-get($btn-secondary, "hover-bg-c");
  }
}

.c-btn-alt--warning {
  border-color: map-get($btn-warning, "default-bg-c");

  color: map-get($btn-warning, "text-c");

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: map-get($btn-warning, "default-bg-c");
    border-color: map-get($btn-warning, "hover-bg-c");
    color: map-get($btn-warning, "text-c");
  }
}

.c-btn-alt--negative {
  border-color: map-get($btn-negative, "default-bg-c");

  color: map-get($btn-negative, "hover-bg-c");

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: map-get($btn-negative, "default-bg-c");
    border-color: map-get($btn-negative, "hover-bg-c");
  }
}

.c-btn-alt--positive {
  border-color: map-get($btn-positive, "default-bg-c");

  color: map-get($btn-positive, "hover-bg-c");

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: map-get($btn-positive, "default-bg-c");
    border-color: map-get($btn-positive, "hover-bg-c");
  }
}

.c-btn-alt--neutral {
  background-color: transparent;
  border-color: map-get($btn-neutral, "border-c");

  color: map-get($btn-neutral, "text-c");

  &:hover,
  &:focus,
  &:active,
  &.is-active {
    background-color: map-get($btn-neutral, "default-bg-c");
    border-color: map-get($btn-neutral, "hover-bg-c");
    color: map-get($btn-neutral, "text-c");
  }
}

.c-btn--large {
  min-width: map-get($btn-large, "min-w");
  min-height: map-get($btn-large, "min-h");
  padding-right: map-get($btn-large, "padding-x");
  padding-left: map-get($btn-large, "padding-x");

  border-width: map-get($btn-large, "border-w");

  font-size: map-get($btn-large, "text-s");
}

.c-btn--small,
.c-btn--full-w {
  min-width: unset;
  padding-right: map-get($btn-small, "padding-x");
  padding-left: map-get($btn-small, "padding-x");

  font-size: map-get($btn-small, "text-s");
}

.c-btn--full-w {
  align-items: center;

  width: 100%;
  height: map-get($btn, "min-h");

  line-height: 1;
}`;
