export const MIN_MAX_VARIABLES = `
$breakpoints: (
  mobile-min: 320px,
  mobile-max: 480px,
  mobile-l-min: 481px,
  mobile-l-max: 767px,

  tablet-min: 768px,
  tablet-max: 1024px,
  tablet-l-min: 1025px,
  tablet-l-max: 1160px,

  screen-min: 1161px,
  screen-max: 1680px,

  largescreen-min: 1681px,
);`;

export const MAPPY_QUERIES = `
$mappy-queries: (
  mobile: mappy-bp(mobile-min),
  mobile-only: mappy-bp(mobile-min mobile-l-max),
  mobile-bigger: mappy-bp(mobile-l-min),
  mobile-landscape: mappy-bp(mobile-l-min orientation landscape),

  tablet: mappy-bp(tablet-min),
  tablet-only: mappy-bp(tablet-min tablet-l-max),
  tablet-bigger: mappy-bp(tablet-l-min),
  tablet-landscape: mappy-bp(tablet-min orientation landscape, $type: screen),

  screen: mappy-bp(screen-min),
  screen-only: mappy-bp(screen-min screen-min),
  largescreen: mappy-bp(largescreen-min),
);`;

export const BREAKPOINT_TO_QUERY = `
/* This SCSS code will be transpiled into */
@include mappy-query(tablet-landscape) {}

/* This CSS code */
@media screen and (min-width: 48em) and (max-width: 63.9375em) and (orientation: landscape) {}
`;

export const BREAKPOINTS_EXAMPLE = `
/* Let's have a test component */
.c-component {
  /*
    Here we want to define styles
    for mobile (and default) resolutions
  */
  padding-right: 0.4rem;
  padding-left: 0.4rem;

  background-color: white;
  border: 1px solid green;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0,0,0, 0.12);

  font-size: 1.4rem;

  /* styles for bigger mobile resolution and up */
  @include mappy-query(mobile-bigger) {
    padding-right: 0.6rem;
    padding-left: 0.6rem;
  }

  /* styles for tablet resolution and up */
  @include mappy-query(tablet) {
    font-size: 1.5rem;
  }

  /* styles for notebook screen resolution and up */
  @include mappy-query(screen) {
    padding-right: 0.8rem;
    padding-left: 0.8rem;

    border-color: red;
  }

  /* styles for bigger screen resolution */
  @include mappy-query(largescreen) {
    padding-right: 1rem;
    padding-left: 1rem;

    border: 0 none;

    font-size: 1.6rem;
  }
}`;
