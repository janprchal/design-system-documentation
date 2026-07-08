<template>
  <div id="app" class="fluid-layout">
    <!-- <icons /> -->
    <div class="o-wrapper">
      <div class="o-wrapper__nav">
        <main-navigation />
      </div>
      <div class="o-wrapper__content o-wrapper__content--without-header">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavigation from "@/components/MainNavigation.vue";

export default defineComponent({
  name: "App",
  components: {
    MainNavigation,
  },
});
</script>

<style lang="scss">
@import "./styles/scss/main.scss";

.example {
  @import "./styles/ds_scss/main.scss";
}
</style>
