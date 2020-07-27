/*
 ** Note:
 ** This project need to use json-server plugin of npm, and the server port is setted 8888 in project,
 ** so you need setting port to 8888 or adjust another number you want when you configure json-server.
 */

Vue.config.devtools = true;
var serverUrl = 'http://localhost:8888/contact';

(function (Vue) {
  new Vue({
    el: '.app',
    data: {
      loading: false,
      contents: [],
      editIndex: null,
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

        if (this.editIndex === null) {
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
        } else {
          axios({
            method: 'patch',
            url: serverUrl + '/' + this.contents[this.editIndex].id,
            data: {
              name: this.input.name,
              email: this.input.email,
            },
          })
            .then((res) => {
              console.log('patch / ', res);
              this.loading = false;

              // Type - 1
              this.$set(this.contents, this.editIndex, res.data);

              // Type - 2
              // this.contents[index].name = res.data.name;
              // this.contents[index].email = res.data.email;

              // Type - 3 - this can't be watched.
              // this.contents[index] = res.data;

              this.editIndex = null;
            })
            .catch((err) => {
              console.error('patch error / ', err);
            });
        }
      },
      cancel: function () {
        console.log('onClick cancel');
        this.input.name = '';
        this.input.email = '';
        this.editIndex = null;
      },
      modify: function (index) {
        console.log('onClick modify');
        this.editIndex = index;
        this.input = {
          name: this.contents[index].name,
          email: this.contents[index].email,
        };
      },
      deleteData: function (index) {
        console.log('onClick delete');
        this.loading = true;
        if (confirm(`你是否真的要刪除 ${this.contents[index].name}`)) {
          axios({
            method: 'delete',
            url: serverUrl + '/' + this.contents[index].id,
          }).then((res) => {
            console.log('delete: ', res);
            this.loading = false;
            this.contents.splice(index, 1);
            this.cancel();
          });
        } else {
          this.loading = false;
        }
      },
    },
  });
})(Vue);
