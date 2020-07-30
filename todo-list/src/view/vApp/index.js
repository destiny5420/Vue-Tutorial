export default {
  name: 'vApp',
  computed: {
    todoIndex: function() {
      return this.$store.getters['todoIndex'];
    },
  },
  mounted: function() {
    this.$store.dispatch('Init');
  },
};
