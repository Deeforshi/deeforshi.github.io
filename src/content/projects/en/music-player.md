---
slug: music-player
locale: en
title: "Desktop Music Player"
summary: "Desktop music player built around a dedicated Spotify developer app and API integration, prototyped and iterated with Claude Code."
category: ai-agentic
categoryLabel: "Agentic AI & Automation"
year: "2026"
image: /images/projects/agentic-music-player.jpg
stack:
  - Tauri
  - Rust
  - Spotify API
  - Claude Code
highlights:
  - "Tauri/Rust desktop app wired to a dedicated Spotify developer application"
  - "Playback controls and library browsing powered by the Spotify API"
  - "Prototyped, specified, tested, and debugged by driving Claude Code"
featured: true
order: 3
---

## Context

I wanted a lightweight desktop music player for daily listening without keeping a browser tab or full client open. The app is built around a dedicated Spotify developer application and API integration.

## What It Does

- **Spotify API integration**: authenticates through a custom Spotify developer app to pull library data and track state.
- **Desktop playback controls**: straightforward player controls and queue handling wrapped in a Tauri window.

## How It Was Built with Claude Code

I prototyped and iterated on this project with **Claude Code**, which generated the Tauri and Rust code. I handled setting up the Spotify developer app and API flow, specifying the player features and UI layout, testing playback behavior, and working through issues until everything held together.
