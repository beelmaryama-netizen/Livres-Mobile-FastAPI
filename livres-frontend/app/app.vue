<template>
  <Login
    v-if="screen === 'login'"
    @logged-in="showBooks"
  />

  <BooksList
    v-else-if="screen === 'books'"
    @logout="showLogin"
    @add-book="showAdd"
    @book-detail="showDetail"
  />

  <AddBook
    v-else-if="screen === 'add'"
    @back="showBooks"
    @saved="showBooks"
  />

  <BookDetail
    v-else-if="screen === 'detail'"
    :bookId="selectedBookId"
    @back="showBooks"
    @edit-book="showEdit"
  />

  <EditBook
    v-else-if="screen === 'edit'"
    :bookId="selectedBookId"
    @back="showDetail(selectedBookId)"
    @saved="showBooks"
  />
</template>

<script lang="ts">
import Login from "./views/Login.vue";
import BooksList from "./views/BooksList.vue";
import AddBook from "./views/AddBook.vue";
import BookDetail from "./views/BookDetail.vue";
import EditBook from "./views/EditBook.vue";

export default {
  components: {
    Login,
    BooksList,
    AddBook,
    BookDetail,
    EditBook
  },
  data() {
    return {
      screen: "login",
      selectedBookId: 0
    };
  },
  methods: {
    showLogin() {
      this.screen = "login";
      this.selectedBookId = 0;
    },
    showBooks() {
      this.screen = "books";
      this.selectedBookId = 0;
    },
    showAdd() {
      this.screen = "add";
    },
    showDetail(bookId: number) {
      this.selectedBookId = bookId;
      this.screen = "detail";
    },
    showEdit(bookId: number) {
      this.selectedBookId = bookId;
      this.screen = "edit";
    }
  }
};
</script>