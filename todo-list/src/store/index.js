import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LS = {
  load: function() {
    return JSON.parse(localStorage.getItem('vue-todo') || '[]');
  },
  save: function(data) {
    localStorage.setItem('vue-todo', JSON.stringify(data));
  },
};

const filter = {
  all: function(data) {
    return data;
  },
  uncomplete: function(data) {
    return data.filter((data) => {
      return data.complete === false;
    });
  },
  complete: function(data) {
    return data.filter((data) => {
      return data.complete === true;
    });
  },
};

export default new Vuex.Store({
  strict: true,
  state: {
    todos: [
      { content: 'todo-content', complete: false },
      { content: 'todo-content', complete: true },
      { content: 'todo-content', complete: false },
    ],
  },
  getters: {
    todoIndex: function(state) {
      // return filter[state.route.name](state.todos).map((item) => {
      //   state.todos.indexOf(item);
      // });

      return filter[state.route.name](state.todos).map((item) =>
        state.todos.indexOf(item)
      );
    },
  },
  mutations: {
    SetTodos: function(state, data) {
      state.todos = data;

      // Save local storage.
      LS.save(state.todos);
    },
    AddTodos: function(state, data) {
      state.todos.push(data);

      // Save local storage.
      LS.save(state.todos);
    },
    UpdateTodos: function(state, data) {
      // this.$set(state.todos, index, data);
      state.todos[data.index] = data.content;

      // Save local storage.
      LS.save(state.todos);
    },
    DeleteTodos: function(state, index) {
      state.todos.splice(index, 1);

      // Save local storage.
      LS.save(state.todos);
    },
  },
  actions: {
    Init: function(context) {
      // Loading local storage.
      context.commit('SetTodos', LS.load());
    },
  },
  modules: {},
});
