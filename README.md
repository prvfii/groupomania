# groupomania

Ce projet est le 7eme projet du parcours developpeur web d'openclassrooms.
Le but du projet était de créer un réseau social d’entreprise nommé Groupomania.

# Ce que j'ai utilisé pour ce projet

Alors le projet a été crée en **Node JS** et **Express** Pour le backend. 
Pour le front c'est **React**. 
Comme base de données, c'est une base de données NOSQL : **MongoDB**.

# COMMENT LANCER LE PROJET ?

Après avoir cloné le projet, installé toutes les dépendances et avec un accès aux variables d'environement, il faut vous créer un fichier .env dans le backend avec les noms de variables d'environement suivants : 

```
PORT = 
mongo_username =
mongo_password = 
mongo_cluster = 
TOKEN_SECRET = 
CLIENT_URL = 
```

Ensuite un fichier .env dans le dossier client avec la variable suivante : 

```
REACT_APP_API_URL =
```



vous pouvez maintenant exécuter les commandes ci-dessous.

> Backend
  
  ```
  cd back
  Nodemon server
  ```
  
  Normalement votre terminal affichera "Listening on port 5000" et connexion à mongoDB reussie !
  
> Frontend 

  ```
  cd client
  npm start
  ```
 
  Normalement le front s'ouvrira sur votre navigateur principal.# groupomania_p7


