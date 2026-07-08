export const MULTIPLE_UTILITY_CLASSES_EXAMPLE = `
<div class="fs-xxxl tc-red mb-12">
  Extra large red text with 12px bottom gap.
</div>
`;

export const HEADINGS_EXAMPLE = `
<h1>Main Title</h1>
<h2>Subtitle</h2>
`;

export const SPACINGS_BASIC_EXAMPLE = `
<article class="p-20">
  <section class="o-flex-md">
    <div class="mr-20 mr-0--sm mb-20--sm pt-16 pr-24 pb-12 pl-24 full-w bg-primary tc-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
    <div class="pt-16 pr-24 pb-12 pl-24 full-w bg-secondary tc-white">
      Aliquam sollicitudin, urna vel dictum euismod, libero tellus laoreet felis.
    </div>
  </section>
</article>
`;

export const CONTENT_RENDER_REAL_LIFE_EXAMPLE = `
<div class="p-20">
  <div class="p-20 tablet-only bg-tertiary tc-white">
    <h2 class="tc-white">Tablet only</h2>
    <p class="mb-0">
      This block will be visible only on tablet resolution
      form 768px to 1160px. Won't be visible on mobile screen
      resolutions.
    </p> 
  </div>

  <div class="p-20 screen-and-more bg-secondary tc-white">
    <h2 class="tc-white">Screen and more</h2>
    <p class="mb-0">
      This block will be visible on screen with resolution
      at least 1161px and more.
    </p> 
  </div>
</div>
`;
