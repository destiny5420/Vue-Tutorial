var data = {
  slogan: 'Welcome to transition animation of menu.',
  curIndex: 0,
  curSex: '男',
  curName: '蕭分維',
  curPhone: '0983580999',
  input: {
    name: '',
    sex: '男',
    phone: '',
  },
  filter: {
    sex: 'All',
    content: '',
  },
  menu: [
    {
      name: '蕭分維',
      sex: '男',
      phone: '0983580999',
      link: 'https://www.google.com/',
      classAtt: {
        boy: true,
        girl: false,
      },
    },
    {
      name: '蔡芬紅',
      sex: '女',
      phone: '0988787654',
      link: 'https://www.google.com/',
      classAtt: {
        boy: false,
        girl: true,
      },
    },
    {
      name: '簡崇恨',
      sex: '男',
      phone: '0988765498',
      link: 'https://www.google.com/',
      classAtt: {
        boy: true,
        girl: false,
      },
    },
    {
      name: '蔡減裕',
      sex: '男',
      phone: '0986554872',
      link: 'https://www.google.com/',
      classAtt: {
        boy: true,
        girl: false,
      },
    },
    {
      name: '梁寧偉',
      sex: '男',
      phone: '0928862133',
      link: 'https://www.google.com/',
      classAtt: {
        boy: true,
        girl: false,
      },
    },
    {
      name: '梁世襲',
      sex: '女',
      phone: '0928862133',
      link: 'https://www.google.com/',
      classAtt: {
        boy: false,
        girl: true,
      },
    },
    {
      name: '蔡玉如',
      sex: '女',
      phone: '0989754734',
      link: 'https://www.google.com/',
      classAtt: {
        boy: false,
        girl: true,
      },
    },
    {
      name: '蔡熟分',
      sex: '女',
      phone: '0988645338',
      link: 'https://www.google.com/',
      classAtt: {
        boy: false,
        girl: true,
      },
    },
    {
      name: '林宗佐',
      sex: '男',
      phone: '0932765998',
      link: 'https://www.google.com/',
      classAtt: {
        boy: true,
        girl: false,
      },
    },
  ],
};

let vm = new Vue({
  el: '.app',
  methods: {
    changeList: function (value) {
      this.curIndex =
        (this.curIndex + value + this.menu.length) % this.menu.length;

      this.curName = this.menu[this.curIndex].name;
      this.curSex = this.menu[this.curIndex].sex;
      this.curPhone = this.menu[this.curIndex].phone;
    },
    confirm: function () {
      if (!this.input.phone) return;

      this.input.name = this.input.name || 'null';
      this.menu.push({
        name: this.input.name,
        sex: this.input.sex,
        phone: this.input.phone,
        link: '',
        classAtt: {
          boy: this.input.sex === '男' ? true : false,
          girl: this.input.sex === '男' ? false : true,
        },
      });
    },
  },
  computed: {
    sexFilter: function () {
      if (this.filter.sex !== 'All') {
        return this.menu.filter((item) => {
          return item.sex === this.filter.sex;
        });
      } else return this.menu;
    },
    inputFilter: function () {
      if (this.filter.content) {
        return this.sexFilter.filter((item) => {
          let srcContent = item.name.toLowerCase();
          let filterContent = this.filter.content;
          return srcContent.indexOf(filterContent) !== -1;
        });
      } else {
        return this.sexFilter;
      }
    },
  },
  data: data,
});
