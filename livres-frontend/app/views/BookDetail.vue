<template>
  <Page>
    <ActionBar title="Détail du livre" />
    <ScrollView>
      <StackLayout class="page">
        <Label :text="message" class="info" textWrap="true" />

        <StackLayout v-if="book" class="card">
          <Label :text="book.title" class="title" />
          <Label :text="'Auteur : ' + book.author" class="card-text" />
          <Label :text="'Année : ' + book.year" class="card-text" />
          <Label :text="'Statut : ' + book.status" class="status" />
          <Label :text="'Commentaire : ' + (book.comment || 'Aucun')" class="card-text" textWrap="true" />

          <Button text="Modifier" class="btn" @tap="goEdit" />
          <Button text="Supprimer" class="btn-danger" @tap="remove" />
          <Button text="Retour à la liste" class="btn-secondary" @tap="goList" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import { getBook, deleteBook } from "../services/api";
import EditBook from "./EditBook.vue";
import BooksList from "./BooksList.vue";

export default {
  props: ["bookId"],
  data() {
    return {
      book: null as any,
      message: "Chargement..."
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      try {
        this.book = await getBook(Number(this.bookId));
        this.message = "";
      } catch (e) {
        this.message = "Livre introuvable.";
      }
    },
    goEdit() {
      this.$navigateTo(EditBook, { props: { bookId: this.book.id } });
    },
    goList() {
      this.$navigateTo(BooksList, { clearHistory: true });
    },
    async remove() {
      try {
        await deleteBook(this.book.id);
        alert("Le livre a été supprimé.");
        this.$navigateTo(BooksList, { clearHistory: true });
      } catch (e) {
        this.message = "Suppression impossible.";
      }
    }
  }
};
</script>