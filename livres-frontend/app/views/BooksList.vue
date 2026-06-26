<template>
  <Page>
    <ActionBar title="Mes livres" />
    <ScrollView>
      <StackLayout class="page">
        <Button text="+ Ajouter un livre" class="btn" @tap="$emit('add-book')" />
        <Button text="Déconnexion" class="btn-secondary" @tap="doLogout" />

        <Label :text="message" class="info" textWrap="true" />

        <StackLayout
          v-for="book in books"
          :key="book.id"
          class="book-card"
          @tap="$emit('book-detail', book.id)"
        >
          <GridLayout columns="80, *">
            <StackLayout col="0" class="book-cover">
              <Label text="📘" class="book-icon" />
            </StackLayout>

            <StackLayout col="1" class="book-info">
              <Label :text="book.title" class="card-title" textWrap="true" />
              <Label :text="'Auteur : ' + book.author" class="card-text" textWrap="true" />
              <Label :text="'Année : ' + book.year" class="card-text" />
              <Label :text="'Statut : ' + book.status" class="status" />
            </StackLayout>
          </GridLayout>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import { getBooks, logout } from "../services/api";

export default {
  emits: ["logout", "add-book", "book-detail"],
  data() {
    return {
      books: [] as any[],
      message: "Chargement des livres..."
    };
  },
  mounted() {
    this.loadBooks();
  },
  methods: {
    async loadBooks() {
      try {
        this.message = "Chargement des livres...";
        this.books = await getBooks();
        this.message = this.books.length === 0 ? "Aucun livre à afficher." : "";
      } catch (e) {
        console.log("Erreur livres:", e);
        this.message = "Impossible de charger les livres.";
      }
    },
    doLogout() {
      logout();
      this.$emit("logout");
    }
  }
};
</script>