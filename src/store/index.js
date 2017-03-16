import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {text: '', completed: false },
      {text: 'test', completed: true }
    ]
  },

  mutations: {
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.completed);
    },
    clearEmpty(state) {
      state.todos = state.todos.filter(todo => todo.text);
    },
    add(state) {
      state.todos.push({
        text: '',
        completed: false
      });
    },
    toggleComplete(state, { todo }) {
      state.todos[state.todos.indexOf(todo)].completed = !todo.completed;
    },
    updateText(state, { todo, text }) {
      state.todos[state.todos.indexOf(todo)].text = text;
    },
    remove(state, { todo }) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    },
  },
});
