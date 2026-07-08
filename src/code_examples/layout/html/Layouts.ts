export const FIXED_WIDTH_CODE = `
<body>
  <div class="o-header" id="js_header">
    <div class="o-header__inner">
      <div class="o-header__hamburger" id="js_navTrigger">
        <!-- HAMBURGER -->
      </div>
      <div class="o-header__logo">
        <!-- LOGO -->
      </div>
      <div class="o-header__nav" id="js_navBlock">
        <!-- NAVIGATION -->
      </div>
      <div class="o-header__user">
        <!-- USER -->
      </div>
    </div>
  </div>
  <div class="o-wrapper">
    <div class="o-wrapper__content">
      Content
    </div>
  </div>
</body>
`;

export const FIXED_WIDTH_EXAMPLE = `
<div
  style="
    height: 460px;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  "
>
  <div class="o-flex-col full-h">
    <div style="height: 60px">
      <div class="c-layout-box">Header</div>
    </div>
    <div class="o-flex o-center o-middle full-h">
      <div
        class="c-layout-box c-layout-box--transparent c-layout-box--no-top-b"
      >
        Content with maximum width<br />(based on size of column)
      </div>
    </div>
  </div>
</div>
`;

export const FULL_WIDTH_LAYOUT_CODE = `
<body class="full-width">
  <div class="o-header" id="js_header">
    <div class="o-header__inner">
      <div class="o-header__hamburger" id="js_navTrigger">
        <!-- HAMBURGER -->
      </div>
      <div class="o-header__logo">
        <!-- LOGO -->
      </div>
      <div class="o-header__nav" id="js_navBlock">
        <!-- NAVIGATION -->
      </div>
      <div class="o-header__user">
        <!-- USER -->
      </div>
    </div>
  </div>
  <div class="o-wrapper">
    <div class="o-wrapper__content">
      Content
    </div>
  </div>
</body>
`;

export const FULL_WIDTH_LAYOUT_EXAMPLE = `
<div style="height: 460px">
  <div class="o-flex-col full-h">
    <div style="height: 60px">
      <div class="c-layout-box">Header</div>
    </div>
    <div class="o-flex o-center o-middle full-h">
      <div
        class="c-layout-box c-layout-box--transparent c-layout-box--no-top-b"
      >
        Content 100% (of screen) wide
      </div>
    </div>
  </div>
</div>
`;

export const NAV_ON_LEFT_CODE = `
<body class="fluid-layout">
  <div class="o-header" id="js_header">
    <div class="o-header__inner">
      <div class="o-header__hamburger" id="js_navTrigger">
        <!-- HAMBURGER -->
      </div>
      <div class="o-header__logo">
        <!-- LOGO (mobile, tablet) -->
      </div>
      <div class="o-header__nav">
        <!-- NAVIGATION -->
      </div>
      <div class="o-header__user">
        <!-- USER -->
      </div>
    </div>
  </div>
  <div class="o-wrapper">
    <div class="o-wrapper__nav">
      <div class="o-nav" id="js_navBlock">
        <div class="o-nav__logo">
          <!-- LOGO -->
        </div>
        <div class="o-nav__list">
          <!-- NAVIGATION -->
        </div>
      </div>
      <div class="o-wrapper__nav__collapse" data-collapse="uncollapsed">
        <!-- COLLAPSE ICON -->
      </div>
    </div>
    <div class="o-wrapper__content">
      Content
    </div>
  </div>
</body>
`;

export const NAV_ON_LEFT_EXAMPLE = `
<div class="o-flex full-h">
  <div class="o-row o-row--no-gaps">
    <div class="o-col-3" style="height: 460px">
      <div class="c-layout-box">Navigation</div>
    </div>
    <div class="o-col-9">
      <div class="o-flex-col full-h">
        <div style="height: 60px">
          <div class="c-layout-box c-layout-box--no-left-b">
            Header
          </div>
        </div>
        <div class="o-flex o-center o-middle full-h">
          <div class="c-layout-box c-layout-box--blank">
            Content
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export const NO_HEADER_CODE = `
<body class="fluid-layout">
  <div class="o-wrapper">
    <div class="o-wrapper__nav">
      <div class="o-nav" id="js_navBlock">
        <div class="o-nav__logo">
          <!-- LOGO -->
        </div>
        <div class="o-nav__list">
          <!-- NAVIGATION -->
        </div>
      </div>
      <div class="o-wrapper__nav__collapse" data-collapse="uncollapsed">
        <!-- COLLAPSE ICON -->
      </div>
    </div>
    <div class="o-wrapper__content o-wrapper__content--without-header">
      Content
    </div>
  </div>
</body>`;

export const NO_HEADER_EXAMPLE = `
<div class="o-flex full-h">
  <div class="o-row o-row--no-gaps">
    <div class="o-col-3" style="height: 460px">
      <div class="c-layout-box">Navigation</div>
    </div>
    <div class="o-col-9">
      <div class="o-flex-col full-h">
        <div class="o-flex o-center o-middle full-h">
          <div class="c-layout-box c-layout-box--blank">
            Content
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
