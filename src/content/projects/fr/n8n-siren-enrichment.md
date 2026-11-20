---
slug: n8n-siren-enrichment
locale: fr
title: Workflow n8n — Enrichissement SIREN & LinkedIn
summary: Pipeline n8n auto-hébergé sur Docker pour vérifier automatiquement le numéro SIREN, l'adresse et la page LinkedIn d'entreprises françaises via Serper API et un agent LLM (OpenRouter / Qwen).
category: ai-agentic
categoryLabel: IA Agentique & Automatisation
year: '2026'
image: /images/projects/n8n-siren-enrichment.svg
stack:
  - n8n
  - Docker
  - JavaScript
  - Serper API
  - OpenRouter (Qwen)
highlights:
  - Construit entièrement à la main sur n8n déployé en local avec Docker (projet technique avant mon embauche chez Prospilot).
  - Normalisation des données en JavaScript (regex départements) et traitement par lots sur une liste d'entreprises.
  - Double enrichissement web via l'API Serper (recherche SIREN + recherche LinkedIn) puis arbitrage par un AI Agent (Qwen via OpenRouter).
  - Prompt strict avec sortie JSON imposée et règles anti-hallucination (sources officielles exigées, refus d'inventer un SIREN en cas de doute).
featured: true
order: 1
---

## Contexte

Avant d'intégrer **Prospilot** en alternance, j'ai conçu à la main un workflow d'automatisation complet sous **n8n** hébergé localement dans **Docker**. L'objectif était de partir d'une liste brute d'entreprises françaises (nom + département) et d'automatiser la recherche et la vérification de leur numéro **SIREN**, de leur adresse et de leur page **LinkedIn**.

## Architecture du pipeline

1. **Préparation & nettoyage (JavaScript)** : normalisation des noms de départements via expression régulière (`"dans les Alpes-Maritimes"` → `"Alpes-Maritimes"`) pour fiabiliser les requêtes.
2. **Traitement par lots (`SplitInBatches`)** : itération entreprise par entreprise pour maîtriser les appels API et l'agrégation finale.
3. **Double recherche web (API Serper)** :
   - première requête HTTP pour trouver les fiches officielles liées au SIREN (`annuaire-entreprises.data.gouv.fr`, `societe.com`, `pappers.fr`, `infogreffe`) ;
   - seconde requête ciblée `site:linkedin.com/company` pour identifier la page LinkedIn correspondante.
4. **Vérification par Agent IA (n8n AI Agent + OpenRouter `qwen3.6-flash`)** : croisement du nom de l'entreprise, du département attendu et des extraits de recherche avec des règles strictes :
   - sortie **JSON valide uniquement** (`found`, `siren`, `address`, `aiJustification`, `linkedinFound`, `linkedinUrl`) ;
   - obligation de renvoyer `found: false` avec une justification plutôt que d'inventer un SIREN en cas d'homonymie ou de résultat ambigu.
5. **Parsing, filtrage & agrégation** : parsing de la réponse JSON en JavaScript, filtrage des entrées traitées et regroupement final des données enrichies.

## Ce que ce projet m'a apporté

Ce cas pratique m'a permis de prendre en main **n8n sur Docker**, le chaînage de nœuds HTTP / JavaScript / LangChain, ainsi que le cadrage d'un LLM pour de la vérification de données fiabilisée plutôt que de la simple génération de texte.
