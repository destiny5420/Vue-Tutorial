import cTodoInput from '@/components/cTodoInput/index.vue';
import cTodoItem from '@/components/cTodoItem/index.vue';

export default {
  name: 'vApp',
  components: {
    cTodoInput,
    cTodoItem,
  },
  computed: {
    todoIndex: function() {
      console.log('-- computed / todoIndex');
      return this.$store.getters['todoIndex'];
    },
  },
  mounted: function() {
    this.$store.dispatch('Init');
  },
};
