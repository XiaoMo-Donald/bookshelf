const _bookShelfInstance = new Vue({
  el: "#BookShelfApp",
  data() {
    return {
      books: [],
      dialog: {
        show: false,
        data: {},
      },
    };
  },
  created() {
    this.fnGetData();
  },
  methods: {
    fnGetData() {
      $.get("./data/books.json", (res) => {
        console.log(res);
        this.books = res;
      });
    },
    fnShowDialog(book) {
      this.dialog.data = book;
      this.dialog.show = true;
    },
    fnCloseDialog() {
      this.dialog.show = false;
      setTimeout(() => {
        this.dialog.data = {};
      }, 500);
    },
  },
});
