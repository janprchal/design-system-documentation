export const SIMPLE_UTILITY_CLASS_EXAMPLE = `
.fs-xxxl {
  font-size: $text-xxxl !important;
}
`;

export const GENERATED_SPACING_CLASSES_EXAMPLE = `
.m-0 {
  margin: 0 !important;
}

.m-4 {
  margin: .4rem !important; // 4px
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-4 {
  margin-top: .4rem !important; // 4px
}

/* ... */

.mt-64 {
  margin-top: 6.4rem !important; // 64px
}
`;

export const CONTENT_RENDER_CLASS_EXAMPLE = `
.tablet-only {
  @include mappy-query(tablet-only) {
    display: block;
  }
  display: none;
}
`;
