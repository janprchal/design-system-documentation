export const HTML_COMPONENT_STRUCTURE_NOK = `
<div class="c-component">
  <div class="o-flex o-middle o-space-between">
    <div class="dib fwb">
      Username: <span class="tc-primary">Honza Prchal</span>
    </div>
    <div class="c-component__avatar o-flex o-end">
      <img src="./avatar.png" alt="User avatar" />
    </div>
  </div>
</div>`;

export const HTML_COMPONENT_STRUCTURE_OK = `
<div class="c-component">
  <div class="c-component__info">
    Username: <span class="tc-primary">Honza Prchal</span>
  </div>

  <div class="c-component__avatar">
    <img src="./avatar.png" alt="User avatar">
  </div>
</div>`;
