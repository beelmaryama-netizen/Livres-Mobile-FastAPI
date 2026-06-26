<template>
  <Page>
    <ActionBar title="Modifier un livre" />
    <ScrollView>
      <StackLayout class="page">
        <Label :text="message" class="info" textWrap="true" />

        <TextField v-model="title" hint="Titre" class="input" />
        <TextField v-model="author" hint="Auteur" class="input" />
        <TextField v-model="year" hint="Année" keyboardType="number" class="input" />
        <TextField v-model="status" hint="Statut" class="input" />
        <TextView v-model="comment" hint="Commentaire" class="input-area" />

        <Button text="Enregistrer les modifications" class="btn" @tap="save" />
        <Button text="Retour" class="btn-secondary" @tap="$navigateBack()" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import { getBook, updateBook } from "../services/api";
import BooksList from "./BooksList.vue";

export default {
  props: ["bookId"],
  data() {
    return {
      title: "",
      author: "",
      year: "",
      status: "",
      comment: "",
      message: "Chargement..."
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    async load() {
      try {
        const book = await getBook(Number(this.bookId));
        this.title = book.title;
        this.author = book.author;
        this.year = String(book.year);
        this.status = book.status;
        this.comment = book.comment || "";
        this.message = "";
      } catch (e) {
        this.message = "Impossible de charger le livre.";
      }
    },
    async save() {
      try {
        if (!this.title || !this.author || !this.year || !this.status) {
          this.message = "Veuillez remplir tous les champs obligatoires.";
          return;
        }

        await updateBook(Number(this.bookId), {
          title: this.title,
          author: this.author,
          year: Number(this.year),
          status: this.status,
          comment: this.comment
        });

        alert("Le livre a été modifié avec succès.");
        this.$navigateTo(BooksList, { clearHistory: true });
      } catch (e) {
        this.message = "Modification impossible.";
      }
    }
  }
};
</script>