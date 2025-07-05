import { ref,onMounted,onUnmounted, computed } from "vue";
import { filter } from "../utils/todoStorage";

const validHash = ['all','active','completed'];

export default function useFilter(todosRef) {
  const visibilityRef = ref("all");
  function onHashChange() {
    const hash = location.hash.replace(/#\/?/,'');
    if(validHash.includes(hash)) {
      // hash 有效
      visibilityRef.value = hash;
      location.hash = hash;
    }else {
      // hash 无效
      location.hash = '';
      visibilityRef.value = 'all';
    }
  }
  onMounted(() => {
    window.addEventListener('hashchange',onHashChange);
  })
  onUnmounted(() => {
    window.removeEventListener('hashchange',onHashChange);
  })
  const filteredTodosRef = computed(() => {
    return filter(todosRef.value,visibilityRef.value);
  })
  const remainingRef = computed(() => {
    return filter(todosRef.value,'active').length;
  })
  return {
    visibilityRef,
    filteredTodosRef,
    remainingRef
  }
}