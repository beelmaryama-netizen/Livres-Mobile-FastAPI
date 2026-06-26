# 📚 Application Mobile de Gestion des Livres

Application mobile développée avec **NativeScript Vue**, connectée à une **API REST FastAPI** et utilisant une base de données **MySQL**.

Ce projet a été réalisé dans le cadre de l'**évaluation finale du cours de développement d'applications mobiles**.

---

# 👩‍💻 Auteur

**Maryem Belouaar**

---

# 🚀 Technologies utilisées

## Frontend
- NativeScript Vue
- TypeScript
- CSS

## Backend
- FastAPI
- Python
- Uvicorn

## Base de données
- MySQL
- phpMyAdmin

## Outils
- Visual Studio Code
- Git
- GitHub
- Android Emulator
- Swagger UI

---

# ✨ Fonctionnalités

- Authentification des utilisateurs
- Création d'un compte
- Connexion
- Consultation de la liste des livres
- Consultation des détails d'un livre
- Ajout d'un livre
- Modification d'un livre
- Suppression d'un livre
- Déconnexion
- Synchronisation avec la base de données MySQL

---

# 📂 Structure du projet

```
GestionLivres_NativeScript_FastAPI/

│
├── fastapi_livres_api/
│   ├── app/
│   ├── routers/
│   ├── main.py
│   └── requirements.txt
│
├── livres-frontend/
│   ├── app/
│   ├── services/
│   ├── views/
│   └── app.ts
│
├── Evaluation Finale Mobile – Application de Gestion des Livres.docx
│
└── video_demonstration.mp4
```

---

# ⚙️ Installation

## 1. Cloner le projet

```bash
git clone https://github.com/beelmaryama-netizen/Livres-Mobile-FastAPI.git
```

---

## 2. Backend FastAPI

Installer les dépendances

```bash
pip install -r requirements.txt
```

Lancer le serveur

```bash
uvicorn app.main:app --reload
```

API disponible sur

```
http://127.0.0.1:8000
```

Documentation Swagger

```
http://127.0.0.1:8000/docs
```

---

## 3. Frontend NativeScript

Installer les dépendances

```bash
npm install
```

Lancer l'application

```bash
ns run android
```

---

# 🗄️ Base de données

Le projet utilise **MySQL**.

Créer la base de données avec le fichier :

```
schema.sql
```

Puis importer le script dans **phpMyAdmin**.

---

# 📸 Démonstration

Le dépôt contient également :

- Rapport de l'évaluation (.docx)
- Vidéo de démonstration (.mp4)

---

# 📱 Aperçu

L'application permet de :

- Se connecter
- Créer un compte
- Ajouter des livres
- Modifier des livres
- Supprimer des livres
- Consulter les détails d'un livre
- Gérer sa bibliothèque personnelle

Toutes les données sont enregistrées dans une base de données MySQL via une API FastAPI.

---

# 📄 Licence

Projet réalisé uniquement dans le cadre d'un travail académique.
