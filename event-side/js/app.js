Vue.config.devtools = true;

var data = {
  obj: {
    num: 0,
  },
  objList: [{ num: 0 }, { num: 0 }, { num: 0 }],
  number: 0,
  numberList: [0, 0, 0],
};

let vm = new Vue({
  el: '.app',
  data: data,
  methods: {
    objListHandler: function (index) {
      this.objList[index].num++;
    },
    numListHandler: function (index) {
      this.$set(this.numberList, index, this.numberList[index] + 1);
    },
  },
  watch: {
    number: function (value, oldValue) {
      console.log('number / newValue', value, 'oldValue:', oldValue);
    },
    // ['obj.num']: function (value, oldValue) {
    //   console.log('objNumber / newValue', value, 'oldValue:', oldValue);
    // },
    obj: {
      handler: function (value, oldValue) {
        console.log('obj Deep / value: ' + value + ' / oldValue: ' + oldValue);
      },
      deep: true,
    },
    numberList: function (value, oldValue) {
      console.log('numberList / newValue', value, 'oldValue:', oldValue);
    },
    objList: {
      handler: function (value, oldValue) {
        console.log('objList Deep / value: ', value, ' / oldValue: ', oldValue);
      },
      deep: true,
    },
  },
});
