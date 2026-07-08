export const USER_HINT_EXAMPLES = `
<div class="c-hint mb-20"> 
  <div class="c-hint__icon">
    <i class="far fa-lightbulb" aria-hidden="true"></i>
  </div>
  <div class="c-hint__text">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ipsum ut nulla aliquam, et feugiat leo venenatis.
  </div>
</div>
<div class="c-hint c-hint--neutral mb-20"> 
  <div class="c-hint__icon">
    <i class="far fa-lightbulb" aria-hidden="true"></i>
  </div>
  <div class="c-hint__text">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ipsum ut nulla aliquam, et feugiat leo venenatis.
  </div>
</div>
<div class="c-hint c-hint--positive mb-20"> 
  <div class="c-hint__icon">
    <i class="far fa-lightbulb" aria-hidden="true"></i>
  </div>
  <div class="c-hint__text">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ipsum ut nulla aliquam, et feugiat leo venenatis.
  </div>
</div>
<div class="c-hint c-hint--warning mb-20"> 
  <div class="c-hint__icon">
    <i class="far fa-lightbulb" aria-hidden="true"></i>
  </div>
  <div class="c-hint__text">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ipsum ut nulla aliquam, et feugiat leo venenatis.
  </div>
</div>
<div class="c-hint c-hint--negative"> 
  <div class="c-hint__icon">
    <i class="far fa-lightbulb" aria-hidden="true"></i>
  </div>
  <div class="c-hint__text">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ipsum ut nulla aliquam, et feugiat leo venenatis.
  </div>
</div>`;

export const USER_HINT_STRUCTURE = `
<div class="c-hint"> 
  <div class="c-hint__icon">
    <i class="far fa-lightbulb" aria-hidden="true"></i>
  </div>
  <div class="c-hint__text">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum ipsum ut nulla aliquam, et feugiat leo venenatis.
  </div>
</div>`;

export const USER_HINT_CSS = `
$hint: (
  "padding": $space-sm,
  "margin": $space-xs,
  "border-r": $border-r,
  "border-c": rgba(darken($secondary-c--darker, 20%), 0.23),
  "icon-c": rgba(darken($secondary-c--darker, 20%), 0.57),
  "bg-c": rgba($secondary-c--lightest, 0.8),
  "text-c": $text-c--darkest,
  "text-s": $text-sm,
);

$hint-neutral: (
  "bg-c": $neutral-c,
  "border-c": rgba($text-c, 0.16),
  "icon-c": $text-c--light,
  "text-c": $text-c,
);

$hint-positive: (
  "bg-c": $positive-c--light,
  "border-c": rgba($positive-c--dark, 0.23),
  "icon-c": rgba($positive-c--darker, 0.84),
  "text-c": $text-c--darkest,
);

$hint-warning: (
  "bg-c": $warning-c--lightest,
  "border-c": rgba($warning-c--dark, 0.53),
  "icon-c": $warning-c--dark,
  "text-c": darken($warning-c--darkest, 0.5),
);

$hint-negative: (
  "bg-c": $negative-c--light,
  "border-c": rgba($negative-c--dark, 0.23),
  "icon-c": rgba($negative-c--darker, 0.6),
  "text-c": darken($negative-c--darkest, 0.9),
);

.c-hint {
  display: flex;

  padding: map-get($hint, "padding");

  background-color: map-get($hint, "bg-c");
  border: 0.1rem solid map-get($hint, "border-c");
  border-radius: map-get($hint, "border-r");
}

.c-hint__icon {
  position: relative;
  top: -0.3rem;

  margin-right: map-get($hint, "margin");

  color: map-get($hint, "icon-c");
}

.c-hint__text {
  color: map-get($hint, "text-c");
  font-size: map-get($hint, "text-s");
}

.c-hint--neutral {
  background-color: map-get($hint-neutral, "bg-c");
  border-color: map-get($hint-neutral, "border-c");

  .c-hint__icon {
    color: map-get($hint-neutral, "icon-c");
  }

  .c-hint__text {
    color: map-get($hint-neutral, "text-c");
  }
}

.c-hint--positive {
  background-color: map-get($hint-positive, "bg-c");
  border-color: map-get($hint-positive, "border-c");

  .c-hint__icon {
    color: map-get($hint-positive, "icon-c");
  }

  .c-hint__text {
    color: map-get($hint-positive, "text-c");
  }
}

.c-hint--warning {
  background-color: map-get($hint-warning, "bg-c");
  border-color: map-get($hint-warning, "border-c");

  .c-hint__icon {
    color: map-get($hint-warning, "icon-c");
  }

  .c-hint__text {
    color: map-get($hint-warning, "text-c");
  }
}

.c-hint--negative {
  background-color: map-get($hint-negative, "bg-c");
  border-color: map-get($hint-negative, "border-c");

  .c-hint__icon {
    color: map-get($hint-negative, "icon-c");
  }

  .c-hint__text {
    color: map-get($hint-negative, "text-c");
  }
}`;
