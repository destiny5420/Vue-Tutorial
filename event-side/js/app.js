var data = {
  input: {
    name: '',
    sex: '男',
    phone: '',
  },
  menu: [
    {
      name: '蕭分維',
      sex: '男',
      phone: '0983580999',
      link: 'https://www.google.com/',
    },
    {
      name: '簡崇恨',
      sex: '男',
      phone: '0988765498',
      link: 'https://www.google.com/',
    },
    {
      name: '蔡減裕',
      sex: '男',
      phone: '0986554872',
      link: 'https://www.google.com/',
    },
    {
      name: '梁寧偉',
      sex: '男',
      phone: '0928862133',
      link: 'https://www.google.com/',
    },
    {
      name: '林宗佐',
      sex: '男',
      phone: '0932765998',
      link: 'https://www.google.com/',
    },
  ],
};

let vm = new Vue({
  el: '.app',
  methods: {
    confirm: function () {
      if (!this.input.phone) return;

      this.input.name = this.input.name || 'null';

      this.menu.push({
        name: this.input.name,
        sex: this.input.sex,
        phone: this.input.phone,
        link: '',
      });

      this.input.name = '';
      this.input.phone = '';
    },
  },
  data: data,
});
