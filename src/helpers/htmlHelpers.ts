/* eslint-disable */
import { ref, onMounted } from "vue";

export const getStyle = (el: Element, styleProp: string): string => {
  let value;
  const { defaultView } = el.ownerDocument;
  if (defaultView && defaultView.getComputedStyle) {
    styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    // @ts-ignore
  } else if (el.currentStyle) {
    styleProp = styleProp.replace(/\-(?:\w)/g, function (str, letter) {
      return letter.toUpperCase();
    });
    // @ts-ignore
    value = el.currentStyle[styleProp];
    return value;
  }
  return '';
};

export const getArticleNavSections = () => {
  const sections = ref<Array<string>>([]);
  
  onMounted(() => {
    const els = document.getElementsByClassName("o-page__section");

    for (let el of els) {
      let section = el.getAttribute("id") ?? false;
  
      if (section) {
        sections.value.push(section);
      }
    }
  });

  return sections;
}