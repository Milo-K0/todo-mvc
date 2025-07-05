import { ref } from "vue";
import { generateId } from "../utils/todoStorage";

export default function useNewTodo(todosRef) {
  const newTodoRef = ref(""); // 新任务的标题
  // 新增一个任务
  const addTodo = function() {
    const value = newTodoRef.value && newTodoRef.value.trim();
    const todo = {
      id: generateId(),
      title: value,
      completed: false
    }
    todosRef.value.push(todo);
    newTodoRef.value = "";
  }
  return {
    newTodoRef,
    addTodo
  }
}