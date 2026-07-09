# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A Vue 3 + TypeScript site that documents a CSS/HTML design system. It is a documentation *application* — every page both explains a design-system component/utility and renders a live, isolated example of it. There is no build output of the design system as a separate package; the design system's SCSS lives inside this same app under `src/styles/ds_scss`.

## Commands

```
yarn serve   # dev server with hot reload
yarn build   # production build (output: dist/)
yarn lint    # eslint --fix via vue-cli-service
```

There is no test suite in this repo. CI (`.gitlab-ci.yml`) runs `yarn install && yarn build` on `master` and rsyncs `dist/` to the server on deploy.

## Architecture

### Two separate SCSS trees — do not mix them up

- `src/styles/scss/` — styles for the **documentation site's own UI chrome** (nav, code blocks, page layout, article navigation, etc.). Entry point: `src/styles/scss/main.scss`.
- `src/styles/ds_scss/` — the **actual design system being documented** (buttons, pills, tabs, forms, etc.). Entry point: `src/styles/ds_scss/main.scss`.

Both follow ITCSS-style ordering: `01_settings → 02_tools → 03_generic → 04_elements → 05_objects → 06_components → 07_theme → 08_utilities`. New partials must be added to the corresponding `@import` list in the tree's `main.scss` or they won't compile in.

In `App.vue`, `ds_scss/main.scss` is imported scoped under a single `.example` class, so design-system styles only apply inside elements with that class (used by `ComponentExample.vue` and the raw `v-html` example blocks) and never leak into the site's own UI.

### Adding a new documented component (recurring task)

Look at an existing pair like Pill (`src/views/components/PillButton.vue` + `src/code_examples/components/PillButton.ts`) or Tabs as the reference. The pattern has these pieces, all of which must be kept in sync:

1. **Design-system SCSS** — add `src/styles/ds_scss/06_components/components.<name>.scss` and register it in `src/styles/ds_scss/main.scss`'s `06_components` import list.
2. **Code examples module** — `src/code_examples/components/<Name>.ts` exports plain template-literal strings: the raw SCSS (for display in a `code-block`), and one or more raw HTML snippets used both as a live `v-html` example and as the "structure" code block shown to the reader.
3. **View** — `src/views/components/<Name>.vue` follows the `o-page` layout (`o-page__heading` → `o-page__wrapper` → `o-page__content` sections with `id`s + `o-page__side` for an `article-navigation` built from those ids via `getArticleNavSections()` in `src/helpers/htmlHelpers.ts`). Reuses common components from `src/components/common/`: `ComponentExample` (browser-chrome preview frame), `CodeBlock` (Prism-highlighted, copyable), `CopyButton`, `LocationPath` (links to the SCSS source file), `TagName`, `HintMessage`.
4. **Route** — add a route name constant + entry in the relevant `src/router/modules/*.ts` file (e.g. `components.ts`, `forms.ts`, `layouts.ts`, `utilities.ts`, `design.ts`, `developers.ts`). Each top-level section (`/components`, `/forms`, etc.) is mounted via the shared `ChildrenRouter.vue` and lists its own children in that module.
5. **Navigation** — add a `router-link` under the matching subnav section in `src/components/MainNavigation.vue`, importing the new route name constant from its router module.

Missing any of these steps (e.g. forgetting the `main.scss` import or the nav link) leaves a page reachable-but-unstyled or built-but-unlinked, which is the most common way this kind of change goes wrong.

### Routing structure

`src/router/index.ts` defines top-level routes; most (`/design`, `/layouts`, `/forms`, `/components`, `/development`, `/utilities`) render `ChildrenRouter.vue` and delegate their child routes to a same-named file in `src/router/modules/`. Route names are exported as string constants from each module and imported by name elsewhere (never hardcode route name strings).

### Path alias

`@/` maps to `src/` (configured in `tsconfig.json`); use it instead of relative `../../` imports, matching existing code.
