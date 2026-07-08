export const OPTIONS_HTML_STRUCTURE = `
<div class="o-form-group">
  <label class="o-form-group__title" for="ds-option-default">Gearbox</label>
  <div class="o-form-group__action">
    <div class="c-options">
      <input type="radio" class="c-options__input" id="Automatic_id" name="OptionsList">
      <label class="c-options__label" for="Automatic_id">Automatic</label>

      <input type="radio" class="c-options__input" id="Manual_id" name="OptionsList">
      <label class="c-options__label" for="Manual_id">Manual</label>
    </div>
  </div>
</div>
`;

export const OPTIONS_CSS = `
$options: (
  "height": $input-h,
  "text-s": $text-sm,
  "text-c": $text-c,
  "text-c-active": $light-c,

  "border-r": $border-r,
  "border-c": $input-outline-c,
  "border-c-active": $positive-c--darker,
  "border-c-negative": $negative-c,

  "padding-x": $space-xs,
  "bg-c": $neutral-c,
  "bg-c-hover": $neutral-c--darker,
  "bg-c-active": $positive-c,
  
);

.c-options {
  display: flex;

  width: 100%;
  height: map-get($options, "height");
  margin-bottom: vr(1);

  border-radius: map-get($options, "border-r");
}

.c-options__label {
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  align-items: center;

  min-width: 8rem;
  padding: 0 map-get($options, "padding-x");

  background-color: map-get($options, "bg-c");
  border-width: 0.1rem;
  border-style: solid;
  border-color: map-get($options, "border-c");

  color: map-get($options, "text-c");
  font-weight: 500;
  font-size: map-get($options, "text-s");
  line-height: 1.24;

  transition: background-color 0.12s linear;

  &:first-of-type {
    border-left-width: 0.1rem;
    border-radius: map-get($options, "border-r") 0 0
      map-get($options, "border-r");
  }

  &:last-of-type {
    border-radius: 0 map-get($options, "border-r") map-get($options, "border-r")
      0;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: map-get($options, "bg-c-hover");
  }
}

.c-options__input {
  position: absolute;
  z-index: -1;

  width: 0;
  height: 0;

  opacity: 0;
}

.c-options__input:checked + .c-options__label {
  background-color: map-get($options, "bg-c-active");
  border-color: map-get($options, "border-c-active");

  color: map-get($options, "text-c-active");
}


.c-options.has-error {
  border: solid 2px map-get($options, "border-c-negative");
}`;
