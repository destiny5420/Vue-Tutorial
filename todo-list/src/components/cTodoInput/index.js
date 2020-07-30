export default {
  name: 'vTodoInput',
  components: {},
  data: function() {
    return {
      todo: '',
    };
  },
  methods: {
    submitHandler: function() {
      console.log('-- submitHandler / todo: ', this.todo);
      if (!this.todo) return;

      this.$store.commit('AddTodos', {
        content: this.todo,
        complete: false,
      });

      this.todo = '';
    },
  },
  computed: {},
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
