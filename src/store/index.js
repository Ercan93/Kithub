import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      email: null,
      token: null,
    },
    bookApiInfo: [
      {
        title: "bookName",
        description: "Get book data with book name.",
        code: "https://kithub-books.herokuapp.com/api/books/{{Book_Name}}",
        exampleQuery:
          "https://kithub-books.herokuapp.com/api/books/Otomatik_Portakal",
        alert:
          "If the book title consists of more than one word, separate the words with _ .",
      },
      {
        title: "bookISBN",
        description: "Get book data with book ISBN number.",
        code:
          "https://kithub-books.herokuapp.com/api/books/ISBN/{{Book_ISBN_Number}}",
        exampleQuery:
          "https://kithub-books.herokuapp.com/api/books/ISBN/9786053606116",
      },
      {
        title: "categoryBook",
        description: "Get books data category name.",
        code:
          "https://kithub-books.herokuapp.com/api/categories/{{category_name}}",
        exampleQuery: "https://kithub-books.herokuapp.com/api/categories/Roman",
        alert:
          "If the category name consists of more than one word, separate the words with _.",
      },
      {
        title: "categoriesBooks",
        description: "Get books data categories name.",
        code:
          "https://kithub-books.herokuapp.com/api/categories/{{category_name}}&{{category_name}}",
        exampleQuery:
          "https://kithub-books.herokuapp.com/api/categories/Roman&Fantastik",
        alert:
          "If the category name consists of more than one word, separate the words with _.",
        alert2:
          "If the category names consists of more than one word, separate the category names with &.",
      },
      {
        title: "SortCategoriesBooks",
        description: "GET sorted books by parameter.",
        code:
          "https://kithub-books.herokuapp.com/api/categories/{{categories_name}}/sort/{{sort_param}}={{orderBy}}",
        exampleQuery:
          "https://kithub-books.herokuapp.com/api/categories/Roman&Fantastik/sort/readCount=asc",
        alert:
          "If the category name consists of more than one word, separate the words with _.",
        alert2:
          "If the category names consists of more than one word, separate the category names with &.",
        paramsDescription: [
          {
            paramTitle: "sort_param",
            values: ["readCount", "likeCount", "pageNum"],
          },
          { paramTitle: "orderBy", values: ["asc", "desc"] },
        ],
      },
      {
        title: "AuthorBooks",
        description: "Get author's book data with author name.",
        code: "https://kithub-books.herokuapp.com/api/author/{{Author_Name}}",
        exampleQuery:
          "https://kithub-books.herokuapp.com/api/author/Stefan_Zweig",
        alert:
          "If the author name consists of more than one word, separate the words with _ .",
      },
      {
        title: "SortAuthorsBook",
        description: "GET sorted author's book by parameter.",
        code:
          "https://kithub-books.herokuapp.com/api/author/{{Author_Name}}/sort/{{sort_param}}={{orderBy}}",
        exampleQuery:
          "https://kithub-books.herokuapp.com/api/author/Stefan_Zweig/sort/likeCount=desc",
        alert:
          "If the author name consists of more than one word, separate the words with _.",
        paramsDescription: [
          {
            paramTitle: "sort_param",
            values: ["readCount", "likeCount", "pageNum"],
          },
          { paramTitle: "orderBy", values: ["asc", "desc"] },
        ],
      },
    ],
  },
  getters: {
    userInfoGetters(state) {
      return state.userInfo;
    },
    bookApiInfoGetters(state) {
      return state.bookApiInfo;
    },
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    setUserInfo({ commit }, payload) {
      commit("SET_USER_INFO", payload);
    },
  },
  modules: {},
});
