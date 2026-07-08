export const BASIC_INPUT_CODE = `
<div class="o-form-group">
  <div class="o-form-group__title">
    <label class="is-required" for="basic-input">Default Input</label>
  </div>
  <div class="o-form-group__action">
    <input type="text" id="basic-input" placeholder="Inputs placeholder..." />
  </div>
</div>`;

export const INPUT_STATE_CODE = `
<!-- Error State -->
<input class="has-error" type="email" id="basic-input" placeholder="Inputs placeholder..." />

<!-- Success State -->
<input class="has-success" type="email" id="basic-input" placeholder="Inputs placeholder..." />
`;

export const BASIC_FORM_MESSAGE_CODE = `
<!-- 
  we can add .has-error or .has-success 
  to give message state styles
-->
<div class="c-form-message">
  <div class="c-form-message__icon">
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  </div>
  <div class="c-form-message__text">
    Password should be at least 5 characters long
  </div>
</div>`;

export const INPUT_AND_FORM_MESSAGE_CODE = `
<!-- First Input -->
<div class="o-form-group">
  <label class="o-form-group__title is-required" for="ex-3-default-input">
    Default Input
  </label>
  <div class="o-form-group__action">
    <input type="text" id="ex-3-default-input" class="" placeholder="Inputs placeholder...">
  </div>
  <div class="c-form-message">
    <div class="c-form-message__icon">
      <i class="fas fa-info-circle" aria-hidden="true"></i>
    </div>
    <div class="c-form-message__text">
      Password should be at least 5 characters long
    </div>
  </div>
</div>

<!-- Second Input -->
<div class="o-form-group">
  <label class="o-form-group__title is-required" for="ex-3-error-input">
    Type Date
  </label>
  <div class="o-form-group__action">
    <input type="date" id="ex-3-error-input" class="has-error">
  </div>
  <div class="c-form-message has-error">
    <div class="c-form-message__icon">
      <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
    </div>
    <div class="c-form-message__text">
      Please fill right date
    </div>
  </div>
</div>

<!-- Third Input -->
<div class="o-form-group">
  <label class="o-form-group__title" for="ex-3-success-input">
    Email
  </label>
  <div class="o-form-group__action">
    <input type="email" id="ex-3-success-input" class="has-success" placeholder="Add you email...">
  </div>
  <div class="c-form-message has-success">
    <div class="c-form-message__icon">
      <i class="fas fa-check-circle" aria-hidden="true"></i>
    </div>
    <div class="c-form-message__text">
      Email looks good
    </div>
  </div>
</div>`;

export const FORM_MESSAGE_CSS_CODE = `
$form-message: (
  "margin-x": $space-xxs,
  "margin-y": $space-xxs,

  "icon-s": $text-md,
  "icon-c": $secondary-c,

  "text-s": $text-sm,
  "text-c": $text-c--light,

  "error-c": $negative-c,
  "success-c": $positive-c,
);

.c-form-message {
  display: flex;

  margin-top: map-get($form-message, "margin-y");

  font-weight: 400;
  font-style: italic;
}

.c-form-message__icon {
  margin-right: map-get($form-message, "margin-x");

  color: map-get($form-message, "icon-c");
  font-size: map-get($form-message, "icon-s");
  line-height: 1;
}

.c-form-message__text {
  padding-top: 0.1rem;

  color: map-get($form-message, "text-c");
  font-weight: 400;
  font-size: map-get($form-message, "text-s");
  line-height: 1.28;
  letter-spacing: 0.08rem;
}

// Error state of validation message
.c-form-message.has-error {
  color: map-get($form-message, "error-c");

  .c-form-message__icon,
  .c-form-message__text {
    color: map-get($form-message, "error-c");
  }
}

// Valid state of validation message
.c-form-message.has-success {
  color: map-get($form-message, "success-c");
  
  .c-form-message__icon,
  .c-form-message__text {
    color: map-get($form-message, "success-c");
  }
}`;
