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
    // const tabs = this.tabsBlock.querySelectorAll(".c-tabs__button");
    const container = this.tabsBlock;
    const accordionBreakpoint = 540;
    // let totalW = 0;

    // for (const tab of tabs) {
    //   totalW += tab.offsetWidth;
    // }

    // if (totalW >= containerWidth) {
    if (containerWidth <= accordionBreakpoint) {
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
}

export { Tabs };
