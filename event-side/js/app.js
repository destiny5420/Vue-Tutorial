var data = {
  name: 'Paper',
  sex: '男',
  age: '11-20歲',
  favor: ['coding', 'game', 'travel'],
  member: true,
};

let vm = new Vue({
  el: '.main',
  data: data,
  computed: {
    today: function () {
      return this.menu[this.index];
    },

    total: function () {
      return this.menu.length;
    },
  },
  methods: {
    changeIndex: function (index) {
      this.index = (this.index + index + this.total) % this.total;
    },
  },
});
