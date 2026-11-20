---
slug: music-player
locale: fr
title: "Lecteur de Musique Desktop"
summary: "Lecteur audio desktop connecté à une application développeur Spotify dédiée, prototypé et itéré avec Claude Code."
category: ai-agentic
categoryLabel: "IA Agentique & Automatisation"
year: "2026"
image: /images/projects/agentic-music-player.jpg
stack:
  - Tauri
  - Rust
  - Spotify API
  - Claude Code
highlights:
  - "Application desktop Tauri/Rust branchée sur une app développeur Spotify dédiée"
  - "Contrôles de lecture et navigation musicale via l'API Spotify"
  - "Prototypage, spécification de l'interface et résolution de bugs pilotés avec Claude Code"
featured: true
order: 3
---

## Contexte

Je voulais un lecteur de musique desktop dédié pour mes écoutes quotidiennes, sans passer par le client complet ni par un onglet de navigateur. Le projet s'appuie sur une application développeur Spotify configurée spécialement pour alimenter l'interface.

## Ce que fait l'application

- **Connexion à l'API Spotify** : authentification via une application développeur Spotify dédiée et récupération des données de lecture et de bibliothèque.
- **Contrôle de lecture desktop** : gestion de la lecture, des pistes et de la file d'attente dans une fenêtre légère sous Tauri.

## Approche avec Claude Code

Comme pour le Game Launcher, le code Tauri et Rust a été généré en travaillant avec **Claude Code**. J'ai géré la création de l'application Spotify et le flux d'API, défini les fonctionnalités et l'interface souhaitées, puis testé et corrigé les problèmes d'intégration au fil des itérations.
