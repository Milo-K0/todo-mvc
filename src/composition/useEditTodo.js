import { ref } from "vue";

export default function useEditTodo(todosRef) {
  const editingTodoRef = ref(null);
  let originTitle = null;
  function editTodo(todo) {
    originTitle = todo.title;
    editingTodoRef.value = todo;
  }
  function downEdit(todo) {
    // 防止重复调用
    if (!todosRef.value.includes(todo)) return;
    const title = todo.title.trim();
    if(title) {
      todo.title = title;
    }
    else {
      todosRef.value.splice(todosRef.value.indexOf(todo),1);
    }
    editingTodoRef.value = null;
  }
  function cancleEdit(todo) {
    editingTodoRef.value = null;
    todo.title = originTitle;
  }
  return {
    editingTodoRef,
    editTodo,
    downEdit,
    cancleEdit
  }
}