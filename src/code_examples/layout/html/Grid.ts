export const ALL_COLUMNS_CODE = `
  <div class="o-row">
    <div class="o-col-1">2</div>
    <div class="o-col-1">3</div>
    <div class="o-col-1">4</div>
    <div class="o-col-1">5</div>
    <div class="o-col-1">6</div>
    <div class="o-col-1">7</div>
    <div class="o-col-1">8</div>
    <div class="o-col-1">9</div>
    <div class="o-col-1">10</div>
    <div class="o-col-1">11</div>
    <div class="o-col-1">12</div>
  </div>
`;

export const ALL_COLUMNS_EXAMPLE = `
  <div class="o-row">
    <div class="o-col-1">
      <div class="c-layout-box">1.</div>
    </div>
    <div class="o-col-1">
      <div class="c-layout-box">2.</div>
    </div>
    <div class="o-col-1">
      <div class="c-layout-box">3.</div>
    </div>
    <div class="o-col-1">
      <div class="c-layout-box">4.</div>
    </div>
    <div class="o-col-1">
      <div class="c-layout-box">5.</div>
    </div>
    <div class="o-col-1">
      <div class="c-layout-box">6.</div>
    </div>
    <div class="o-col-1">
      <div class="c-layout-box">7.</div>
    </div>
    <div class="o-col-1">
      <div class="c-layout-box">8.</div>
    </div>
    <div class="o-col-1">
      <div class="c-layout-box">9.</div>
    </div>
    <div class="o-col-1">
      <div class="c-layout-box">10.</div>
    </div>
    <div class="o-col-1">
      <div class="c-layout-box">11.</div>
    </div>
    <div class="o-col-1">
      <div class="c-layout-box">12.</div>
    </div>
  </div>
`;

export const BASIC_COLUMNS_CODE = `
  <div class="o-row">
    <div class="o-col-sm-12 o-col-md-6 o-col-lg-3 o-col-xl-2">1</div>
    <div class="o-col-sm-12 o-col-md-6 o-col-lg-3 o-col-xl-2">2</div>
    <div class="o-col-sm-12 o-col-md-6 o-col-lg-3 o-col-xl-2">3</div>
    <div class="o-col-sm-12 o-col-md-6 o-col-lg-3 o-col-xl-2">4</div>
  </div>
`;

export const BASIC_COLUMNS_EXAMPLE = `
  <div class="o-row">
    <div class="o-col-sm-12 o-col-md-6 o-col-lg-3 o-col-xl-2">
      <div class="c-layout-box">1.</div>
    </div>
    <div class="o-col-sm-12 o-col-md-6 o-col-lg-3 o-col-xl-2">
      <div class="c-layout-box">2.</div>
    </div>
    <div class="o-col-sm-12 o-col-md-6 o-col-lg-3 o-col-xl-2">
      <div class="c-layout-box">3.</div>
    </div>
    <div class="o-col-sm-12 o-col-md-6 o-col-lg-3 o-col-xl-2">
      <div class="c-layout-box">4.</div>
    </div>
  </div>
`;

export const OFFSET_CODE = `
<div class="o-row">
  <div class="o-col-6 o-col-offset-6">Content</div>
</div>
`;

export const OFFSET_EXAMPLE = `
<div class="o-row o-row--no-gaps">
  <div class="o-col-3 o-col-offset-9">
    <div class="c-layout-box">Offset by 9 cols</div>
  </div>
</div>
<div class="o-row o-row--no-gaps">
  <div class="o-col-3 o-col-offset-6">
    <div class="c-layout-box">Offset by 6 cols</div>
  </div>
</div>
<div class="o-row o-row--no-gaps">
  <div class="o-col-3 o-col-offset-3">
    <div class="c-layout-box">Offset by 3 cols</div>
  </div>
</div>
<div class="o-row o-row--no-gaps">
  <div class="o-col-3">
    <div class="c-layout-box">No Offset</div>
  </div>
</div>
`;

export const OFFSET_RESPONSIVE_CODE = `
<div class="o-row">
  <div class="o-col-sm-12 o-col-md-6 o-col-md-offset-3">
    <div class="c-layout-box">Content</div>
  </div>
</div>
`;

export const OFFSET_RESPONSIVE_EXAMPLE = `
<div class="o-row">
  <div class="o-col-sm-12 o-col-md-6 o-col-md-offset-3">
    <div class="c-layout-box">Content</div>
  </div>
</div>
`;

export const NESTING_CODE = `
<div class="o-row">
  <div class="o-col-6 o-col-offset-3">
    <div class="tac">Two nested columns</div>
    <div class="o-row">
      <div class="o-col-6">1. Half</div>
      <div class="o-col-6">2. Half</div>
    </div>
  </div>
</div>
`;

export const NESTING_EXAMPLE = `
<div class="o-row">
  <div class="o-col-6 o-col-offset-3">
    <div class="c-layout-box c-layout-box--block pt-sm pb-sm">
      <div class="tac mb-10">Two nested columns</div>
      <div class="o-row">
        <div class="o-col-6">
          <div class="c-layout-box c-layout-box--nested pt-sm pb-sm">1. Half</div>
        </div>
        <div class="o-col-6">
          <div class="c-layout-box c-layout-box--nested pt-sm pb-sm">2. Half</div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export const COLS_IN_STYLES_CSS = `
.c-component {
  @include row();
}

.c-component__col {
  @include cols(12);
  @include md-cols(6);
  @include lg-cols(3);
  @include xl-cols(2);
}

/* 
  This part of code will just style 
  element inside columns to look like
   our examples
*/
.c-component__content {
  background-color: #EAE8FF;
  border: 1px solid #999999;

  font-family: $font-mono;
  font-weight: 400;
  font-size: $text-nm;
}
`;

export const COLS_IN_STYLES_HTML = `
<div class="c-component">
  <div class="c-component__col">
    <div class="c-component__content">Column 2</div>
  </div>
  <div class="c-component__col">
    <div class="c-component__content">Column 2</div>
  </div>
  <div class="c-component__col"> 
    <div class="c-component__content">Column 3</div>
  </div>
  <div class="c-component__col">
    <div class="c-component__content">Column 4</div>
  </div>
</div>
`;

export const COLS_IN_STYLES_EXAMPLE = `

`;
