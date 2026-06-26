<template>
  <Page>
    <ScrollView>
      <StackLayout class="login-page">
        <Label text="📚 Bibliothèque" class="login-title" />
        <Label text="Gestion de mes livres" class="login-subtitle" />

        <StackLayout class="login-card">
          <Label text="Connexion / Création du compte" class="section-title" />

          <TextField v-model="name" hint="Nom" class="input" />
          <TextField v-model="email" hint="Courriel" keyboardType="email" class="input" />
          <TextField v-model="password" hint="Mot de passe" class="input" />

          <Button text="Créer le compte et se connecter" class="btn-main" @tap="doRegisterLogin" />
          <Button text="Se connecter seulement" class="btn-secondary" @tap="doLogin" />

          <Label :text="message" class="error" textWrap="true" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import { login, registerThenLogin } from "../services/api";

export default {
  emits: ["logged-in"],
  data() {
    return {
      name: "Alice Tremblay",
      email: "alice@example.com",
      password: "secret123",
      message: ""
    };
  },
  methods: {
    async doRegisterLogin() {
      try {
        if (!this.name || !this.email || !this.password) {
          this.message = "Veuillez remplir tous les champs.";
          return;
        }

        this.message = "Création du compte...";
        await registerThenLogin(this.name, this.email, this.password);

        this.message = "";
        this.$emit("logged-in");
      } catch (e) {
        console.log("Erreur création/login:", e);
        this.message = "Impossible de créer ou connecter le compte.";
      }
    },

    async doLogin() {
      try {
        if (!this.email || !this.password) {
          this.message = "Veuillez remplir le courriel et le mot de passe.";
          return;
        }

        this.message = "Connexion en cours...";
        await login(this.email, this.password);

        this.message = "";
        this.$emit("logged-in");
      } catch (e) {
        console.log("Erreur login:", e);
        this.message = "Courriel ou mot de passe invalide.";
      }
    }
  }
};
</script>