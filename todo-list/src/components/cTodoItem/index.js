export default {
  name: 'cTodoItem',
  components: {},
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  data: function() {
    return {
      edit: null,
    };
  },
  methods: {
    deleteHandler: function() {
      console.log('-- deleteHandler');
      if (confirm(`是否確認刪除「${this.todoObj.content}」?`)) {
        this.$store.commit('DeleteTodos', this.index);
      }
    },
    editHandler: function() {
      this.edit = this.todoObj.content;
    },
    submitHandler: function() {
      if (!this.edit) {
        this.deleteHandler();
        return;
      }

      this.$store.commit('UpdateTodos', {
        index: this.index,
        data: {
          content: this.edit,
          complete: this.todoObj.complete,
        },
      });

      this.cancelHandler();
    },
    cancelHandler: function() {
      this.edit = null;
    },
  },
  computed: {
    todoObj: function() {
      return this.$store.state.todos[this.index];
    },

    complete: {
      get: function() {
        console.log(
          '-- [ todoItem.js / computer ] complete / get: ',
          this.todoObj.complete
        );
        return this.todoObj.complete;
      },
      set: function(value) {
        this.$store.commit('UpdateTodos', {
          index: this.index,
          data: {
            content: this.todoObj.content,
            complete: value,
          },
        });
      },
    },
  },
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {},
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {},
};
