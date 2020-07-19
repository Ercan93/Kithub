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
        code: "http://localhost:3030/api/books/{{Book_Name}}",
        exampleQuery: "http://localhost:3000/api/books/Otomatik_Portakal",
        alert:
          "If the book title consists of more than one word, separate the words with _ .",
      },
      {
        title: "bookISBN",
        description: "Get book data with book ISBN number.",
        code: "http://localhost:3030/api/books/ISBN/{{Book_ISBN_Number}}",
        exampleQuery: "http://localhost:3000/api/books/ISBN/9786053606116",
      },
      {
        title: "categoryBook",
        description: "Get books data category name.",
        code: "http://localhost:3030/api/categories/{{category_name}}",
        exampleQuery: "http://localhost:3000/api/categories/Roman",
        alert:
          "If the category name consists of more than one word, separate the words with _.",
      },
      {
        title: "categoriesBooks",
        description: "Get books data categories name.",
        code:
          "http://localhost:3030/api/categories/{{category_name}}&{{category_name}}",
        exampleQuery: "http://localhost:3000/api/categories/Roman&Fantastik",
        alert:
          "If the category name consists of more than one word, separate the words with _.",
        alert2:
          "If the category names consists of more than one word, separate the category names with &.",
      },
      {
        title: "SortCategoriesBooks",
        description: "GET sorted books by parameter.",
        code:
          "http://localhost:3030/api/categories/{{categories_name}}/{{sort_param}}={{orderBy}}",
        exampleQuery:
          "http://localhost:3000/api/categories/Roman&Fantastik/readCount=asc",
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
        code: "http://localhost:3030/api/author/{{Author_Name}}",
        exampleQuery: "http://localhost:3000/api/author/Stefan_Zweig",
        alert:
          "If the author name consists of more than one word, separate the words with _ .",
      },
      {
        title: "SortAuthorsBook",
        description: "GET sorted author's book by parameter.",
        code:
          "http://localhost:3030/api/author/{{Author_Name}}/{{sort_param}}={{orderBy}}",
        exampleQuery:
          "http://localhost:3000/api/author/Stefan_Zweig/likeCount=desc",
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
