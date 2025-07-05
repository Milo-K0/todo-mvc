<template>
  <div id="app">
    <h1 class="title">TODOS</h1>
    <div class="content">
      <div class="search">
        <input type="text" class="search-bar" placeholder="What needs to be done?" v-model="newTodoRef" @keydown.enter="addTodo()">
      </div>
      
      <div class="list-content">
        <ul class="list">
          
        <li class="item" :class="{editing: editingTodoRef === todo}" v-for="todo in filteredTodosRef" :key="todo.id">
          <div class="view" @dblclick="editTodo(todo)">
            <i class="iconfont icon-wancheng" v-show="todo.completed" @click="todo.completed = !todo.completed"></i>
            <i class="iconfont icon-weiwancheng" v-show="!todo.completed" @click="todo.completed = !todo.completed"></i>
            <span :class="{completed:todo.completed}">{{ todo.title }}</span>
            <i @click="removeTodo(todo)" class="delete">×</i>
          </div>
          <input @blur="downEdit(todo)" @keyup.enter="downEdit(todo)" @keyup.escape="cancleEdit(todo)" v-model="todo.title" class="edit" type="text">
        </li>
      </ul>
      </div>
      <div class="footer">
        <div class="choose">
          <a href="#/all" :class="{choosed:visibilityRef === 'all'}">All</a>
          <a href="#/active" :class="{choosed:visibilityRef === 'active'}">Active</a>
          <a href="#/completed" :class="{choosed:visibilityRef === 'completed'}">Completed</a>
        </div>
        <span>{{ remainingRef }} item{{ remainingRef===1?'':'s' }} left</span>
      </div>
    </div>

  </div>
</template>

<script>
import useTodoList from './composition/useTodoList';
import useNewTodo from './composition/useNewTodo';
import useFilter from './composition/useFilter';
import useEditTodo from './composition/useEditTodo';
import useRemoveTodo from './composition/useRemoveTodo';
  export default {
    setup() {
      const todoList = useTodoList();
      return {
        todosRef: todoList.todosRef,
        ...useNewTodo(todosRef),
        ...useFilter(todosRef),
        ...useEditTodo(todosRef),
        ...useRemoveTodo(todosRef)
      }
    }
  }
</script>

<style>
  
</style>