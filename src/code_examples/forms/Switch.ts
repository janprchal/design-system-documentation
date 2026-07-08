export const SWITCH_HTML_STRUCTURE = `
<div class="c-switch" role="switch">
  <label class="c-switch__label">
    <input class="c-switch__input" id="gtm" type="checkbox" />
    <span class="c-switch__path">
      <span class="c-switch__toggle"></span>
    </span>
    <span class="c-switch__text">Switch</span>
  </label>
</div>`;

export const SWITCH_CSS = `
@use "sass:math";

$switch: (
  "text-s": $text-nm,
  "text-c": $text-c,

  "height": 2.4rem,
  "width": 4.8rem,

  "toggle-w": 2rem, // $swtich-h - 0.4rem
  "toggle-h": 2rem, // $swtich-h - 0.4rem
  "toggle-bg-c": $light-c,
  "path-bg-c-active": $positive-c,

  "bg-c": $input-outline-c,
  "bg-c-hover": $input-outline-c--hover,
);

.c-switch {
  position: relative;

  -webkit-tap-highlight-color: transparent;
}

.c-switch__label {
  display: inline-flex;
  align-items: center;

  position: relative;

  cursor: pointer;
  -webkit-tap-highht-color: transparent;
}

.c-switch__text {
  display: block;

  margin-bottom: 0;

  font-weight: 400;
  font-size: map-get($switch, "text-s");
  color: map-get($switch, "text-c");
}

.c-switch__input {
  width: 0;
  height: 0;
  opacity: 0;

  position: absolute;
  top: 0;
  left: 0;
}

.c-switch__path {
  position: relative;
  display: block;

  width: map-get($switch, "width");
  height: map-get($switch, "height");

  margin-right: 1.6rem;

  background-color: map-get($switch, "bg-c");

  border-radius: math.div(map-get($switch, "height"), 2);

  transition: all 0.2s linear;
}

.c-switch__toggle {
  display: block;

  position: absolute;
  top: 0.2rem;
  left: 0.2rem;

  width: map-get($switch, "toggle-w");
  height: map-get($switch, "toggle-h");

  background-color: map-get($switch, "toggle-bg-c");

  border-radius: 50%;

  transition: transform 0.24s ease-in;
}

.c-switch:hover .c-switch__path,
.c-switch__input:focus + .c-switch__path {
  background-color: map-get($switch, "bg-c-hover");
}

.c-switch__input:checked + .c-switch__path {
  background-color: map-get($switch, "path-bg-c-active");
}

.c-switch__input:checked + .c-switch__path .c-switch__toggle {
  transform: translateX(calc(100% + 0.4rem));
}

.c-switch--text-left {
  .c-switch__label {
    flex-flow: row-reverse;
  }
  
  .c-switch__path {
    margin-right: 0;
    margin-left: 1.6rem;
  }
}`;
