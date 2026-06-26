<template>
  <Page>
    <ScrollView>
      <StackLayout class="page">
        <Label text="Ajouter un livre" class="title" />

        <TextField v-model="title" hint="Titre" class="input" />
        <TextField v-model="author" hint="Auteur" class="input" />
        <TextField v-model="year" hint="Année" keyboardType="number" class="input" />
        <TextField v-model="status" hint="Statut : À lire / En cours / Terminé" class="input" />
        <TextView v-model="comment" hint="Commentaire facultatif" class="input-area" />

        <Button text="Ajouter" class="btn" @tap="save" />
        <Button text="Retour" class="btn-secondary" @tap="$emit('back')" />

        <Label :text="message" class="info" textWrap="true" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import { addBook } from "../services/api";

export default {
  emits: ["back", "saved"],
  data() {
    return {
      title: "",
      author: "",
      year: "",
      status: "À lire",
      comment: "",
      message: ""
    };
  },
  methods: {
    async save() {
      try {
        if (!this.title || !this.author || !this.year || !this.status) {
          this.message = "Veuillez remplir tous les champs obligatoires.";
          return;
        }

        if (isNaN(Number(this.year))) {
          this.message = "L'année doit être numérique.";
          return;
        }

        await addBook({
          title: this.title,
          author: this.author,
          year: Number(this.year),
          status: this.status,
          comment: this.comment
        });

        alert("Le livre a été ajouté avec succès.").then(() => {
          this.$emit("saved");
        });
      } catch (e) {
        console.log("Erreur ajout:", e);
        this.message = "Une erreur est survenue. Veuillez réessayer.";
      }
    }
  }
};
</script>