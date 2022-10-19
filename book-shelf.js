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
      // todo:request
      this.books = [
        {
          icon: "📖",
          group_name: "前端开发书籍",
          list: [
            {
              name: "css世界",
              cover: "https://www.czfq99.cn/img/cssweb.jpg",
              author: "小莫唐尼",
              publishTime: "2022年10月19日", 
              link: "https://cloudreve-file.obs.cn-north-1.myhuaweicloud.com/book/CSS%E4%B8%96%E7%95%8C.pdf?AccessKeyId=N46F5GCVJQYH7D2JAGEC&Expires=1693469814&Signature=Uk0DAlFbRmDgMAYu62EDn16as2Y%3D",
              readRecordText: "学习中",
              readRecordLink: "",
              recommended: 5,
            },
            {
              name: "跟我学Nginx+Lua开发",
              cover: "https://www.czfq99.cn/img/cssweb.jpg",
              author: "小莫唐尼",
              publishTime: "2022年10月19日",
              link: "https://cloudreve-file.obs.cn-north-1.myhuaweicloud.com/book/CSS%E4%B8%96%E7%95%8C.pdf?AccessKeyId=N46F5GCVJQYH7D2JAGEC&Expires=1693469814&Signature=Uk0DAlFbRmDgMAYu62EDn16as2Y%3D",
              readRecordText: "学习中",
              readRecordLink: "",
              recommended: 5,
            },
            {
              name: "精通CSS高级Web标准解决方案",
              cover: "https://www.czfq99.cn/img/cssweb.jpg",
              author: "小莫唐尼",
              publishTime: "2022年10月19日",
              link: "https://cloudreve-file.obs.cn-north-1.myhuaweicloud.com/book/CSS%E4%B8%96%E7%95%8C.pdf?AccessKeyId=N46F5GCVJQYH7D2JAGEC&Expires=1693469814&Signature=Uk0DAlFbRmDgMAYu62EDn16as2Y%3D",
              readRecordText: "学习中",
              readRecordLink: "",
              recommended: 5,
            },
          ],
        },
        {
          icon: "📖",
          group_name: "四大名著",
          list: [
            {
              name: "三国演义",
              cover: "https://www.czfq99.cn/img/sanguoyanyi.jpg",
              author: "小莫唐尼",
              publishTime: "2022年10月19日",
              link: "https://cloudreve-file.obs.cn-north-1.myhuaweicloud.com/book/CSS%E4%B8%96%E7%95%8C.pdf?AccessKeyId=N46F5GCVJQYH7D2JAGEC&Expires=1693469814&Signature=Uk0DAlFbRmDgMAYu62EDn16as2Y%3D",
              readRecordText: "暂无",
              readRecordLink: "",
              recommended: 5,
            },
            {
              name: "水浒传",
              cover: "https://www.czfq99.cn/img/sanguoyanyi.jpg",
              author: "小莫唐尼",
              publishTime: "2022年10月19日",
              link: "https://cloudreve-file.obs.cn-north-1.myhuaweicloud.com/book/CSS%E4%B8%96%E7%95%8C.pdf?AccessKeyId=N46F5GCVJQYH7D2JAGEC&Expires=1693469814&Signature=Uk0DAlFbRmDgMAYu62EDn16as2Y%3D",
              readRecordText: "学习中",
              readRecordLink: "",
              recommended: 5,
            },
            {
              name: "红楼梦",
              cover: "https://www.czfq99.cn/img/sanguoyanyi.jpg",
              author: "小莫唐尼",
              publishTime: "2022年10月19日",
              recommended: 5,
              link: "https://cloudreve-file.obs.cn-north-1.myhuaweicloud.com/book/CSS%E4%B8%96%E7%95%8C.pdf?AccessKeyId=N46F5GCVJQYH7D2JAGEC&Expires=1693469814&Signature=Uk0DAlFbRmDgMAYu62EDn16as2Y%3D",
              readRecordText: "暂无",
              readRecordLink: "",
              recommended: 5,
            },
          ],
        },
      ];
    },
  },
});
