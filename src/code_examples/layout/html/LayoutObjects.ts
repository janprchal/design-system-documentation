export const HEADER_BLOCK_DESKTOP_EXAMPLE = `
  <div class="o-row o-row--no-gaps o-middle" style="height: 60px;">
    <div class="o-col-2 full-h">
      <div class="c-layout-box">Logo</div>
    </div>
    <div class="o-col-7 o-flex o-end full-h">
      <div class="c-layout-box c-layout-box--no-left-b o-end pr-20">Navigation</div>
    </div>
    <div class="o-col-3 o-flex o-end full-h">
      <div class="c-layout-box c-layout-box--no-left-b o-end pr-20">User Menu</div>
    </div>
  </div>
`;

export const HEADER_BLOCK_TABLET_EXAMPLE = `
  <div class="o-row o-row--no-gaps o-middle" style="height: 60px;">
    <div class="o-col-3 full-h">
      <div class="c-layout-box o-start pl-20">Hamburger</div>
    </div>
    <div class="o-col-6 o-flex full-h">
      <div class="c-layout-box c-layout-box--no-left-b pr-20">Logo</div>
    </div>
    <div class="o-col-3 o-flex o-end full-h">
      <div class="c-layout-box c-layout-box--no-left-b o-end pr-20">User Menu</div>
    </div>
  </div>
`;

export const HEADER_BLOCK_MOBILE_EXAMPLE = `
  <div class="o-row o-row--no-gaps o-middle" style="height: 60px;">
    <div class="o-col-6 full-h">
      <div class="c-layout-box o-start pl-20">Hamburger</div>
    </div>
    <!-- <div class="o-col-6 full-h"></div> -->
    <div class="o-col-6 o-flex o-end full-h">
      <div class="c-layout-box o-end c-layout-box--no-left-b pr-20">User Menu</div>
    </div>
  </div>
`;

export const HEADER_BLOCK_CODE = `
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
`;

export const NAVIGATION_BLOCK_EXAMPLE = `
  <div class="o-row o-row--no-gaps o-middle" style="height: 460px; z-index: 2;">
    <div class="o-col-3 full-h pr" style="z-index: 2;">
      <div class="c-layout-box o-center o-middle" style="height: 80px">
        Logo
      </div>
      <div class="c-layout-box o-center o-middle" style="height: 380px">
        Navigation
      </div>
      <div 
        class="c-layout-box" 
        style="
          position: absolute; 
          z-index: -1;
          bottom: 0; 
          left: 200px;
          height: 
          60px; width: 60px;
      ">&larr;</div>
    </div>
  </div>
`;

export const NAVIGATION_BLOCK_CODE = `
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
      <!-- COLLAPSE -->
    </div>
  </div>
`;
