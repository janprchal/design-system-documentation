export const TABS_STRUCTURE = `
<div class="c-tabs" id="js_tabs">
  <div class="c-tabs__buttons" role="tablist">
    <a class="c-tabs__button" role="tab" data-target="chat">Chat</a>
    <a class="c-tabs__button" role="tab" data-target="admin">Admin</a>
  </div>
  <section class="c-tabs__tab" data-identifier="chat" data-title="Chat" role="tabpanel">
    <div class="c-tabs__container">
      <div class="c-tabs__content">
        First Tab content.
      </div>
    </div>
  </section>
  <section class="c-tabs__tab" data-identifier="admin" data-title="Admin" role="tabpanel">
    <div class="c-tabs__container">
      <div class="c-tabs__content">
        Second Tab content.
      </div>
    </div>
  </section>
</div>`;

export const TABS_JS_RUN = `
document.addEventListener('DOMContentLoaded', () => {
  new Tabs('js_tabs');
});
`;

export const TABS_SCSS_CODE = `
$tabs: (
  "bg-c": $block-bg-c,

  "button-gap": 0.6rem,
  "btn-bg-c": $secondary-c,
  "border-r": $border-r--bigger,

  "text-c": $light-c,
  "text-c-hover": $text-c--lighter,
  "text-s": $text-sm,

  "content-padding": $space-nm $space-lg $space-md,
  "content-border-r": $border-r,
);

$accordion: (
  "bg-c": $block-bg-c,
  "btn-bg-c": $neutral-c--light,
  "btn-bg-c-active": $secondary-c,
  "btn-text-c": $text-c,
  "btn-text-c-active": $light-c,
  "border-r": $border-r,
  "box-shadow": $block-box-shadow,
  "border-c": $outline-c,
);

.c-tabs {
  position: relative;
  overflow: hidden;

  background-color: map-get($accordion, "bg-c");
  border-radius: map-get($accordion, "border-r");
  box-shadow: map-get($accordion, "box-shadow");

  // Tabs version
  &.has-tabs {
    background-color: transparent;
    border-radius: 0 0 0 0;
    box-shadow: 0 0 0 0;

    .c-tabs__buttons {
      height: auto;

      opacity: 1;
      visibility: visible;
    }

    .c-tabs__tab {
      min-height: 0;

      background-color: map-get($tabs, "bg-c");

      &::before {
        display: none;
      }

      &:last-of-type {
        border-radius: 0 0 0 0;
      }

      &.is-active .c-tabs__content {
        opacity: 1;

        transition: opacity 0.4s ease-in-out;
      }

      .c-tabs__content {
        opacity: 0;

        transition: opacity 0.4s ease-in-out;
      }

      .c-tabs__container {
        border: 0 none;
      }
    }
  }
}

.c-tabs__buttons {
  position: relative;
  z-index: 1;
  display: flex;
  display: flex;
  flex-direction: row;
  flex-flow: nowrap;

  height: 0;
  margin-left: -#{map-get($tabs, "button-gap")};

  opacity: 0;
  visibility: hidden;

  transform: translateY(1rem);
}

.c-tabs__button {
  @include mappy-query(tablet-bigger) {
  }
  display: flex;
  justify-content: center;

  min-width: 12rem;
  margin-left: map-get($tabs, "button-gap");
  padding: 1.6rem 2.4rem;

  background-color: map-get($tabs, "btn-bg-c");
  border-radius: map-get($tabs, "border-r") map-get($tabs, "border-r") 0 0;

  color: map-get($tabs, "text-c");
  font-weight: 700;
  font-size: map-get($tabs, "text-s");

  cursor: pointer;

  transition: all 0.24s linear;

  &:hover,
  &:active,
  &:focus,
  &.is-active {
    background-color: map-get($tabs, "bg-c");

    color: map-get($tabs, "text-c-hover");
    text-decoration: none;

    transform: translateY(-0.9rem);
  }
}

.c-tabs__tab {
  position: relative;
  z-index: 10;
  overflow: hidden;

  // Accordion button
  &::before {
    content: attr(data-title);
    position: relative;
    z-index: 1;
    display: block;

    padding: 1.2rem 2rem;

    background-color: map-get($accordion, "btn-bg-c");
    border-bottom: 0.1rem solid map-get($accordion, "border-c");

    color: map-get($accordion, "btn-text-c");

    cursor: pointer;
  }

  &:hover,
  &:focus {
    outline: none;

    &::before {
      color: map-get($accordion, "text-c");
    }
  }

  &:first-of-type::before {
    border-radius: map-get($accordion, "border-r")
      map-get($accordion, "border-r") 0 0;
  }

  &:last-of-type::before {
    border-bottom: 0 none;
    border-radius: 0 0 map-get($accordion, "border-r")
      map-get($accordion, "border-r");
  }
}

.c-tabs__tab.is-active {
  .c-tabs__content {
    height: auto;
    margin-top: 0;

    opacity: 1;

    transition: margin 400ms ease-out -100ms;
  }

  &::before {
    background-color: map-get($accordion, "btn-bg-c-active");

    color: map-get($accordion, "btn-text-c-active");
  }

  &:last-of-type::before {
    border-radius: 0 0 0 0;
  }

  &:hover,
  &:focus {
    &::before {
      background-color: map-get($accordion, "btn-bg-c-active");
    }
  }
}

.c-tabs__content {
  position: relative;
  top: 0;

  height: 0;
  margin-top: -100%;
  padding: 1.6rem;

  opacity: 0;

  transition: margin 500ms ease-in;
}

.c-tabs__container {
  overflow: hidden;

  border-bottom: 0.1rem solid map-get($accordion, "border-c");
}
`;

export const TABS_JS_CODE = `
class Tabs {
  constructor(tabsBlockId) {
    this.tabsBlock = document.getElementById(tabsBlockId);
    this.selectedTab = null;
    this.selectedContent = null;
    this.tabs = this.tabsBlock.querySelectorAll("[data-target]");
    this.tabsContents = this.tabsBlock.querySelectorAll("[data-identifier]");
    this.ACTIVE_CLASS = "is-active";
    this.panels = this.tabsBlock.querySelectorAll('[role="tabpanel"]');
    this.hasTabs = true;

    this.modeSwitcher();
    this.showFirstTab();

    [].forEach.call(this.tabs, (tab) => {
      tab.addEventListener("click", (event) => {
        const tab = event.target;
        const tabContent = this.findTabContent(
          event.target.getAttribute("data-target")
        );

        this.activateTab(tab, tabContent);
      });
    });

    [].forEach.call(this.panels, (panel) => {
      panel.addEventListener("click", (event) => {
        if (!this.tabsActive) {
          const tabContent = event.target;
          const tab = this.findTab(
            event.target.getAttribute("data-identifier")
          );

          if (
            !tabContent.closest(".c-tabs__tab").classList.contains("is-active")
          ) {
            this.activateTab(tab, tabContent);
          }
        }
      });
    });

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.modeSwitcher(entry.contentRect.width);
      }
    });

    resizeObserver.observe(this.tabsBlock.querySelector(".c-tabs__buttons"));
  }

  showFirstTab() {
    const tab = [...this.tabs].shift();
    const tabContent = [...this.tabsContents].shift();

    this.activateTab(tab, tabContent);
  }

  findTab(tabIdentifier) {
    return [...this.tabs].find(
      (tab) => tab.getAttribute("data-target") === tabIdentifier
    );
  }

  findTabContent(tabContentCoordinates) {
    return [...this.tabsContents].find(
      (tabContent) =>
        tabContent.getAttribute("data-identifier") === tabContentCoordinates
    );
  }

  activateTab(tab, content) {
    if (this.activeTab) {
      this.deactivateTab();
    }

    tab.classList.add(this.ACTIVE_CLASS);
    content.classList.add(this.ACTIVE_CLASS);

    this.activeTab = tab;
    this.activeContent = content;
  }

  deactivateTab() {
    const tab = this.activeTab;
    const content = this.activeContent;

    tab.classList.remove(this.ACTIVE_CLASS);
    content.classList.remove(this.ACTIVE_CLASS);

    this.activeTab = null;
    this.activeContent = null;
  }

  // Switch between Tabs and Accordion mode based on width of
  // container and sum of tabs buttons widths
  modeSwitcher(containerWidth) {
    const container = this.tabsBlock;
    const accordeonBreakpoint = 540;
   
    if (containerWidth <= accordeonBreakpoint) {
      container.classList.remove("has-tabs");
    } else {
      container.classList.add("has-tabs");
    }

    this.tabsActive = container.classList.contains("has-tabs");
  }

  get tabsActive() {
    return this.hasTabs;
  }

  set tabsActive(isActive) {
    this.hasTabs = isActive;
  }

  get activeTab() {
    return this.selectedTab;
  }

  set activeTab(tab) {
    this.selectedTab = tab;
  }

  get activeContent() {
    return this.selectedContent;
  }

  set activeContent(activeContent) {
    this.selectedContent = activeContent;
  }
}`;
