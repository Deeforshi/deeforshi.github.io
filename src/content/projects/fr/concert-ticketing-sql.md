---
slug: concert-ticketing-sql
locale: fr
title: "Base de Données Billetterie Concert — SQL Server"
summary: "Conception et implémentation d’une base de données relationnelle de billetterie de concerts sous Microsoft SQL Server."
category: data-sql
categoryLabel: "Data & SQL"
year: "2023"
image: /images/projects/mssql.png
stack:
  - Microsoft SQL Server
  - T-SQL
  - Modélisation MCD / MLD
  - Contraintes d’intégrité
  - Requêtes analytiques
highlights:
  - "Modélisation complète (MCD / MLD) : salles, concerts, tarifs, réservations et clients"
  - "Scripts DDL/DML avec contraintes d’intégrité référentielle et vérifications métier"
  - "Requêtes T-SQL complexes d’agrégation, suivi de remplissage et chiffre d’affaires"
featured: false
order: 9
---

## Contexte

Projet d’ingénierie de bases de données visant à modéliser et déployer une **billetterie de concerts** fiable sous **Microsoft SQL Server**.

## Conception & SQL

- **Modélisation relationnelle** : passage du besoin métier au MCD puis au MLD normalisé (gestion des artistes, scènes, catégories de places, commandes et billets).
- **Intégrité des données** : clés primaires et étrangères, contraintes `CHECK` (jauges, dates, montants) et indexation ciblée.
- **Exploitation T-SQL** : rédaction de requêtes d’analyse (taux de remplissage par salle, top des ventes, chiffre d’affaires par période).

## Apports

Une base solide en **modélisation relationnelle** et en **requêtage SQL Server**, directement transférable aux problématiques Data en entreprise.
