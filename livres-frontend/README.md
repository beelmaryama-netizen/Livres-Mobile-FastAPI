# Application mobile - Gestion des livres

## Description

Cette application mobile a été développée avec NativeScript et Vue.  
Elle permet à un utilisateur de se connecter, de créer un compte, de consulter sa liste de livres, d’ajouter un livre, de consulter le détail d’un livre et de modifier ses informations.

L’application communique avec une API REST FastAPI fournie dans le cadre de l’évaluation.

## Technologies utilisées

- NativeScript
- Vue
- TypeScript
- FastAPI
- MySQL
- phpMyAdmin
- Android Emulator

## Installation de l’API

Ouvrir le dossier de l’API :

```bash
cd fastapi_livres_api
Installer les dépendances :

pip install -r requirements.txt

Lancer l’API :

uvicorn app.main:app --reload

L’API est disponible à l’adresse :

http://127.0.0.1:8000

Documentation Swagger :

http://127.0.0.1:8000/docs
Base de données

La base de données utilisée est :

books_api

Les tables créées sont :

users
books

Le fichier utilisé pour créer la base est :

schema.sql
URL utilisée dans l’application mobile

Dans l’émulateur Android, l’URL utilisée est :

http://10.0.2.2:8000

Cette adresse permet à l’émulateur Android de communiquer avec l’API lancée sur l’ordinateur.

Compte de test
Nom : Alice Tremblay
Courriel : alice@example.com
Mot de passe : secret123
Fonctionnalités réalisées
Création d’un utilisateur
Connexion
Gestion du jeton d’authentification
Affichage de la liste des livres
Ajout d’un livre
Détail d’un livre
Modification d’un livre
Déconnexion
Messages d’erreur
Interface claire et simple
Routes utilisées
Authentification
POST /auth/register
POST /auth/login
Livres
GET /books
GET /books/{book_id}
POST /books
PUT /books/{book_id}
DELETE /books/{book_id}
Lancement de l’application mobile

Dans le dossier du projet NativeScript :

npm install

Puis :

ns run android
