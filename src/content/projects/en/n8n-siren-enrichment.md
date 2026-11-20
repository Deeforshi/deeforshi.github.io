---
slug: n8n-siren-enrichment
locale: en
title: n8n Workflow — SIREN & LinkedIn Enrichment
summary: Self-hosted Docker n8n pipeline built by hand to verify French company SIREN numbers, addresses, and LinkedIn pages using Serper API and an LLM agent (OpenRouter / Qwen).
category: ai-agentic
categoryLabel: Agentic AI & Automation
year: '2026'
image: /images/projects/n8n-siren-enrichment.svg
stack:
  - n8n
  - Docker
  - JavaScript
  - Serper API
  - OpenRouter (Qwen)
highlights:
  - Built by hand on a local Docker n8n instance as a technical project before joining Prospilot.
  - JavaScript preprocessing (regex normalization of French departments) and batch iteration over company lists.
  - Dual web lookup via Serper API (SIREN search + LinkedIn company search) fed into an n8n AI Agent (Qwen via OpenRouter).
  - "Strict JSON-only output schema with anti-hallucination rules (trusted public registries required, returns found: false when ambiguous)."
featured: true
order: 1
---

## Context

Before starting my apprenticeship at **Prospilot**, I built an end-to-end automation workflow by hand using **n8n** running locally in **Docker**. Starting from a raw list of French companies (name + department), the workflow automates lookup and verification of each company's official **SIREN** number, address, and **LinkedIn** page.

## Pipeline Architecture

1. **Data normalization (JavaScript)**: strips French prepositions from department labels via regex (`"dans les Alpes-Maritimes"` → `"Alpes-Maritimes"`) to produce cleaner search queries.
2. **Batch iteration (`SplitInBatches`)**: processes companies sequentially to keep API requests and final aggregation predictable.
3. **Dual web search (Serper API)**:
   - first HTTP request targeting French business registries (`annuaire-entreprises.data.gouv.fr`, `societe.com`, `pappers.fr`, `infogreffe`) for the SIREN number;
   - second HTTP request targeting `site:linkedin.com/company` to find the official LinkedIn page.
4. **LLM verification (n8n AI Agent + OpenRouter `qwen3.6-flash`)**: cross-checks the company name, expected department, and search snippets under strict constraints:
   - **strict valid JSON output only** (`found`, `siren`, `address`, `aiJustification`, `linkedinFound`, `linkedinUrl`);
   - explicit anti-hallucination rule: if results are ambiguous or unverified, return `found: false` with a short justification rather than guessing a SIREN.
5. **Parsing, filtering & aggregation**: parses the agent's JSON output in JavaScript, filters processed records, and aggregates the enriched dataset.

## Key Takeaway

Building this workflow from scratch on **Docker** gave me practical experience chaining HTTP, JavaScript, and LangChain/AI Agent nodes in **n8n**, and constraining an LLM for reliable structured data verification.
