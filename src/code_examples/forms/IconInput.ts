export const ICON_INPUT_HTML_STRUCTURE = `
<div class="o-form-group">
  <label class="o-form-group__title" for="one-icon-right">
    Icon on the right (default)
  </label>
  <div class="o-form-group__action">
    <div class="c-icon-input">
      <input id="icon-default" class="c-icon-input__input" placeholder="Placeholder">
      <label class="c-icon-input__icon" for="one-icon-right">
        <i class="fas fa-lock" aria-hidden="true"></i>
      </label>
    </div>
  </div>
</div>
`;

export const ICONS_ON_BOTH_SIDES_HTML_STRUCTURE = `
<div class="c-icon-input c-icon-input--both-sides">
  <input type="text" id="one-icon-both" class="c-icon-input__input" placeholder="Placeholder">
  <label class="c-icon-input__icon" for="one-icon-both">
    <span class="fs-nm">€</span>
  </label>
  <label class="c-icon-input__icon" for="one-icon-both">
    <span class="fs-nm">000</span>
  </label>
</div>
`;
