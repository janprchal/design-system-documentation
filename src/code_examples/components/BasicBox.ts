export const DEFAULT_BOX_HTML = `
<div class="c-box"> 
  <div class="c-box__header"> 
    <div class="c-box__icon"><i class="fa fa-home"></i></div>
    <div class="c-box__heading">Heading with icon and menu</div>
    <div class="c-box__control">
      <div class="c-btn c-btn--small c-btn--neutral">Disable</div>
    </div>
  </div>
  <div class="c-box__content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla felis sit amet turpis posuere, id consequat ipsum ultricies. Suspendisse potenti.
  </div>
</div>
`;

export const NO_HEADER_BOX_HTML = `
<div class="c-box"> 
  <div class="c-box__content c-box__content--alone">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla felis sit amet turpis posuere, id consequat ipsum ultricies. Suspendisse potenti.
  </div>
</div>
`;

export const DEFAULT_BOX_CSS = `
$box: (
  "bg-c": $block-bg-c,
  "border-r": $border-r--bigger,
  "bg-shadow": $block-box-shadow,

  "header-padding": $space-nm $space-lg $space-nm $space-md,
  "header-border-c": $outline-c,
  "header-icon-w": 4.6rem,
  "header-icon-h": 4.6rem,
  "header-icon-bg-c": $neutral-c,
  "header-icon-mr": $space-sm,
  "header-heading-text-s": $text-md,

  "content-padding": $space-nm $space-md,
  "content-without-header-pt": $space-md,
);

.c-box {
  background-color: map-get($box, "bg-c");
  border-radius: map-get($box, "border-r");
  box-shadow: map-get($box, "bg-shadow");
}

.c-box__header {
  display: flex;
  align-items: center;

  padding: map-get($box, "header-padding");

  border-bottom: 0.1rem solid map-get($box, "header-border-c");
}

// 3 dots wrapper
.c-box__control {
  margin-right: 0;
  margin-left: auto;
}

.c-box__icon {
  display: flex;
  justify-content: center;
  align-items: center;

  width: map-get($box, "header-icon-w");
  height: map-get($box, "header-icon-h");
  margin-right: map-get($box, "header-icon-mr");

  background-color: map-get($box, "header-icon-bg-c");
  border-radius: 50%;
}

.c-box__heading {
  margin-bottom: 0;

  font-weight: 500;
  font-size: map-get($box, "header-heading-text-s");
}

.c-box__content {
  padding: map-get($box, "content-padding");
}

.c-box__content--alone {
  padding-top: map-get($box, "content-without-header-pt");
}

.c-box__content--overflowing {
  overflow-x: scroll;
}

.c-box__content--full-w-content {
  padding: 0;
}
`;
