<template>
  <nav class="c-article-nav" role="navigation" aria-label="Article Navigation">
    <ol class="c-article-nav__list">
      <li
        v-for="(section, index) in sections"
        :key="`section-${index}`"
        class="c-article-nav__item"
      >
        <router-link
          class="c-article-nav__link"
          :to="{ hash: `#${section.address}` }"
          >{{ section.name }}</router-link
        >
      </li>
    </ol>
  </nav>
</template>
<script lang="ts">
import { defineComponent, toRef, computed } from "vue";
import { ZERO, ONE } from "@/constants";

interface ArticleNavItem {
  name: string;
  address: string;
}

export default defineComponent({
  name: "ArticleNavigation",
  props: {
    articleSections: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const articleSections = toRef(props, "articleSections");

    function createName(id: string) {
      const nameParts = id.split("-");
      const nameUppercase = nameParts.map(
        (name) => name.charAt(ZERO).toUpperCase() + name.slice(ONE)
      );
      return nameUppercase.join(" ");
    }

    const sections = computed(() => {
      const res: Array<ArticleNavItem> = [];

      articleSections.value.forEach((item) => {
        res.push({
          name: createName(item as string),
          address: item as string,
        });
      });

      return res;
    });

    return { sections };
  },
});
</script>
