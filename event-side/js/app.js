Vue.config.devtools = true;
var serverUrl = 'http://localhost:8888/contact';

(function (Vue) {
  new Vue({
    el: '.app',
    data: {
      loading: false,
      contents: [],
      input: {
        name: '',
        email: '',
      },
    },
    beforeCreate() {
      console.log('beforeCreate!');
    },
    created() {
      console.log('created!');
    },
    beforeMount() {
      console.log('beforeMount!');
    },
    mounted() {
      console.log('Mounted!');
      this.loading = true;
      axios({
        method: 'get',
        url: serverUrl,
      })
        .then((res) => {
          console.log(res);
          this.contents = res.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    methods: {
      confirm: function () {
        console.log('onClick confirm');
        this.loading = true;
        axios({
          method: 'post',
          url: serverUrl,
          data: {
            name: this.input.name,
            email: this.input.email,
          },
        })
          .then((res) => {
            console.log(res);
            this.loading = false;
            this.contents.push(res.data);
            this.cancel();
          })
          .catch((err) => {
            console.log(err);
          });
      },
      cancel: function () {
        console.log('onClick cancel');
        this.input.name = '';
        this.input.email = '';
      },
      modify: function (index) {
        console.log('onClick modify');
        axios({
          method: 'patch',
          url: serverUrl + '/' + this.contents[index].id,
          data: {
            name: this.input.name,
            email: this.input.email,
          },
        })
          .then((res) => {
            console.log('patch / ', res);
            // Type - 1
            this.$set(this.contents, index, res.data);

            // Type - 2
            // this.contents[index].name = res.data.name;
            // this.contents[index].email = res.data.email;

            // Type - 3 - this can't be watched.
            // this.contents[index] = res.data;
          })
          .catch((err) => {
            console.error('patch error / ', err);
          });
      },
      deleteData: function (index) {
        console.log('onClick delete');
        if (confirm(`你是否真的要刪除 ${this.contents[index].name}`)) {
          axios({
            method: 'delete',
            url: serverUrl + '/' + this.contents[index].id,
          }).then((res) => {
            console.log('delete: ', res);
            this.contents.splice(index, 1);
          });
        }
      },
    },
  });
})(Vue);
