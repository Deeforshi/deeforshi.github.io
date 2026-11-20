---
slug: game-launcher
locale: en
title: "Game Launcher"
summary: "Tauri/Rust desktop app to centralize and launch all PC games from one place, built end-to-end by driving Claude Code."
category: ai-agentic
categoryLabel: "Agentic AI & Automation"
year: "2026"
image: /images/projects/game-launcher.jpg
stack:
  - Tauri
  - Rust
  - SteamDB & Game APIs
  - Claude Code
highlights:
  - "Single library view to track and launch PC games from one place"
  - "Automatic cover art and metadata fetching via SteamDB and external game APIs"
  - "Tauri/Rust code generated with Claude Code while directing features, API integrations, and debugging"
featured: true
order: 2
---

## Context

I wanted a lightweight desktop app to bring together all my PC games scattered across launchers and local folders, keep track of my library, and launch games from a single place.

## What It Does

- **Unified game launching**: centralizes installed PC games in one interface and launches them directly.
- **Library tracking**: keeps an organized view of owned and installed titles.
- **Automatic cover art & metadata**: integrates with SteamDB and external game APIs to pull covers and game details automatically instead of managing them manually.

## How It Was Built with Claude Code

To be upfront, I did not hand-code the Tauri or Rust backend myself—I built the app end-to-end by directing **Claude Code**. My role was scoping the features, setting up and wiring the external APIs, testing everything on my machine, catching bugs, and iterating on the UI until the launcher worked reliably.
