export default function useRemoveTodo(todosRef) {
  const removeTodo = (todo) => {
    todosRef.value.splice(todosRef.value.indexOf(todo),1);
  }
  return {
    removeTodo
  }
}