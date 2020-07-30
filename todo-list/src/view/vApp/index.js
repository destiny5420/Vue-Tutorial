import cTodoInput from '@/components/cTodoInput/index.vue';

export default {
  name: 'vApp',
  components: {
    cTodoInput,
  },
  computed: {
    todoIndex: function() {
      return this.$store.getters['todoIndex'];
    },
  },
  mounted: function() {
    this.$store.dispatch('Init');
  },
};
