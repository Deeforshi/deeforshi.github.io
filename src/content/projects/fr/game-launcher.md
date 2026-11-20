---
slug: game-launcher
locale: fr
title: "Game Launcher"
summary: "Application desktop Tauri/Rust pour centraliser et lancer tous ses jeux PC depuis un seul endroit, pilotée de bout en bout avec Claude Code."
category: ai-agentic
categoryLabel: "IA Agentique & Automatisation"
year: "2026"
image: /images/projects/game-launcher.jpg
stack:
  - Tauri
  - Rust
  - SteamDB & Game APIs
  - Claude Code
highlights:
  - "Bibliothèque unifiée pour suivre et lancer ses jeux PC depuis une seule interface"
  - "Récupération automatique des jaquettes et métadonnées via SteamDB et des APIs externes"
  - "Code Tauri/Rust généré via Claude Code, avec pilotage produit, intégrations et debug réalisés à la main"
featured: true
order: 2
---

## Contexte

Je voulais une application desktop légère pour regrouper tous mes jeux PC dispersés entre plusieurs boutiques et exécutables locaux, suivre ma bibliothèque et éviter d'ouvrir plusieurs lanceurs au quotidien.

## Ce que fait l'application

- **Centralisation et lancement** : regroupement des jeux installés dans une vue unique avec lancement direct des exécutables.
- **Suivi de bibliothèque** : organisation des titres et suivi des jeux disponibles sur le poste.
- **Jaquettes et métadonnées automatiques** : connexion à SteamDB et à d'autres APIs de jeux pour récupérer automatiquement les visuels, titres et informations associées sans saisie manuelle.

## Approche avec Claude Code

Pour être totalement transparent, je n'ai pas écrit le code Rust ou Tauri à la main : j'ai construit ce projet de bout en bout en pilotant **Claude Code**. Mon travail a consisté à cadrer les fonctionnalités, connecter et tester les APIs externes, vérifier le comportement réel sur la machine, remonter les bugs et itérer sur l'interface jusqu'à obtenir un outil utilisable au quotidien.
