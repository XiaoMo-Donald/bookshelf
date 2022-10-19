const _bookShelfInstance = new Vue({
  el: "#BookShelfApp",
  data() {
    return {
      books: [],
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
  },
});
