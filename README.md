# Game Days

Application web de vote pour la Journée du Jeu Vidéo de l'IUT de Meaux.

## Stack Technique

- **Frontend** : React 18 + TypeScript + Vite
- **Styling** : SCSS
- **Routing** : React Router DOM v7
- **Backend** : PHP (alwaysdata.net)

## Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── navbar/         # Navigation desktop
│   └── footer/         # Pied de page
├── context/            # Gestion d'état
│   └── VoteContext.tsx # Contexte des votes/sondages
├── pages/              # Pages desktop
│   ├── index/          # Page d'accueil
│   ├── login/          # Connexion/Inscription
│   └── votes/          # Pages de vote (8 étapes)
├── pages-mobile/       # Pages mobile
├── services/           # API services
│   └── authService.ts  # Auth + votes + sondages
└── styles/             # Variables SCSS
```

## Pages de Vote (8 étapes)

1. `/vote` - Introduction (protégé: connexion requise)
2. `/premiersondage` - Fréquence de jeu + Plateforme
3. `/secondsondage` - Type de jeu + Participation
4. `/troisiemesondage` - Rôle + Expérience tournoi
5. `/finsondage` - Envoi du sondage + Transition vers votes
6. `/premiervote` - Vote jeux "Casual" (Découverte)
7. `/secondvote` - Vote jeux "Compétitif" + Envoi final
8. `/finvote` - Remerciement + Redirection auto

## Commandes

```bash
npm install     # Installer les dépendances
npm run dev     # Mode développement
npm run build   # Build production
npm run lint   # Linting
```

## Backend (PHP)

Fichiers à déployer sur le serveur :

| Fichier | Description |
|---------|-------------|
| `db.php` | Connexion base de données |
| `login.php` | Authentification |
| `register.php` | Inscription utilisateurs |
| `sondage.php` | Enregistrement sondage |
| `vote.php` | Enregistrement votes |
| `jeu.php` | Liste des jeux (categorie: casual/competitif) |
| `checkvote.php` | Vérification si utilisateur a déjà voted |

## Base de Données

Tables principales :
- `UTILISATEUR` - Users connectés
- `SONDAGE` - Réponses aux 3 pages de questions
- `JEU` - Liste des jeux avec catégorie
- `VOTE` - Votes des utilisateurs (avec doublon check)

## Fonctionnalités

- ✅ Double version Desktop / Mobile (responsive < 768px)
- ✅ Protection: connexion requise pour voter
- ✅ Protection: un seul vote par utilisateur
- ✅ Sondages collectés sur 3 pages, envoyés en une fois
- ✅ Votes collectés sur 2 pages (Casual + Compétitif)
- ✅ Bouton déconnexion avec popup
- ✅ Redirection auto après vote (3s)

## Environment

API Base URL : `https://gameday.alwaysdata.net`