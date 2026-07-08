export const HORIZONTAL_POSITIONING_EXAMPLE = `
<div class="p-20">
  <div class="mb-20">
    <div class="c-layout-box c-layout-box--block">
      <div class="o-flex o-start" style="height: 30px;">
        <div class="c-layout-box c-layout-box--auto c-layout-box--nested">.o-start</div>
      </div>
    </div>
  </div>
  <div class="mb-20">
    <div class="c-layout-box c-layout-box--block">
      <div class="o-flex o-center" style="height: 30px;">
        <div class="c-layout-box c-layout-box--auto c-layout-box--nested">.o-center</div>
      </div>
    </div>
  </div>

  <div class="mb-20">
    <div class="c-layout-box c-layout-box--block">
      <div class="o-flex o-end" style="height: 30px;">
        <div class="c-layout-box c-layout-box--auto c-layout-box--nested">.o-end</div>
      </div>
    </div>
  </div>

  <div class="c-layout-box c-layout-box--block">
    <div class="o-flex o-between" style="height: 30px;">
      <div class="c-layout-box c-layout-box--auto c-layout-box--nested">.o-between</div>
      <div class="c-layout-box c-layout-box--auto c-layout-box--nested">.o-between</div>
      <div class="c-layout-box c-layout-box--auto c-layout-box--nested">.o-between</div>
    </div>
  </div>
</div>`;

export const HORIZONTAL_POSITIONING_BASIC_CODE = `
<div class="o-flex o-start">
  <div>start</div>
</div>
<div class="o-flex o-center">
  <div>center</div>
</div>
<div class="o-flex o-end">
  <div>end</div>
</div>
<div class="o-flex o-between">
  <div>space-between</div>
  <div>space-between</div>
  <div>space-between</div>
</div>`;

export const VERTICAL_POSITIONING_EXAMPLE = `
<div class="o-row" style="height: 120px; padding: 20px;">
  <div class="o-col-4">
    <div class="c-layout-box c-layout-box--block">    
      <div class="o-flex o-top full-h">
        <div class="c-layout-box c-layout-box--auto c-layout-box--nested">.o-top</div>
      </div>
    </div>
  </div>
  <div class="o-col-4">
    <div class="c-layout-box c-layout-box--block">    
      <div class="o-flex o-middle full-h">
        <div class="c-layout-box c-layout-box--auto c-layout-box--nested">.o-middle</div>
      </div>
    </div>
  </div>
  <div class="o-col-4">
    <div class="c-layout-box c-layout-box--block">    
      <div class="o-flex o-bottom full-h">
        <div class="c-layout-box c-layout-box--auto c-layout-box--nested">.o-bottom</div>
      </div>
    </div>
  </div>
</div>`;

export const VERTICAL_POSITIONING_BASIC_CODE = `
<div class="o-flex o-top">
  <div>top</div>
</div>
<div class="o-flex o-middle">
  <div>middle</div>
</div>
<div class="o-flex o-bottom">
  <div>bottom</div>
</div>`;

export const BOTH_POSITIONING_EXAMPLE = `
<div class="o-row" style="height: 120px; padding: 20px;">
  <div class="o-col-4">
    <div class="c-layout-box c-layout-box--block">    
      <div class="o-flex o-top o-end full-h">
        <div class="c-layout-box c-layout-box--auto c-layout-box--nested">X: right; Y: top</div>
      </div>
    </div>
  </div>
  <div class="o-col-4">
    <div class="c-layout-box c-layout-box--block">    
      <div class="o-flex o-middle o-center full-h">
        <div class="c-layout-box c-layout-box--auto c-layout-box--nested">X: center; Y: middle</div>
      </div>
    </div>
  </div>
  <div class="o-col-4">
    <div class="c-layout-box c-layout-box--block">    
      <div class="o-flex o-bottom o-start full-h">
        <div class="c-layout-box c-layout-box--auto c-layout-box--nested">X: left; Y: bottom</div>
      </div>
    </div>
  </div>
</div>`;

export const BOTH_POSITIONING_BASIC_CODE = `
<div class="o-flex o-end o-start">
  <div>start</div>
</div>
<div class="o-flex o-center o-middle">
  <div>center</div>
</div>
<div class="o-flex o-start o-bottom">
  <div>end</div>
</div>`;

export const RESPONSIVE_POSITIONING_EXAMPLE = `
<div class="p-20">
  <div class="mb-20">
    <div class="c-layout-box c-layout-box--block">
      <div class="o-flex o-start-sm o-center-md o-end-lg" style="height: 30px;">
        <div class="c-layout-box c-layout-box--auto c-layout-box--nested">SM: end | MD: center | LG: start</div>
      </div>
    </div>
  </div>
</div>`;

export const RESPONSIVE_POSITIONING_BASIC_CODE = `
<!-- 
  element(s) in this container will be aligned: 
    - to right on mobile
    - to center on tablet
    - to left on desktop
 -->
<div class="o-flex o-start-sm o-center-md o-end-lg">
  <div>SM: end | MD: center | LG: start</div>
</div>`;
