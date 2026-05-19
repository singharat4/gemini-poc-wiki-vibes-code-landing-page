# Concept: RAG vs. Wiki

## Overview
Contrast between traditional Retrieval-Augmented Generation (RAG) and the LLM Wiki pattern.

## RAG (Retrieval-Augmented Generation)
- **Mechanism:** Retrieves relevant chunks at query time.
- **Problem:** "Rediscovering knowledge from scratch on every question." No accumulation of insights.
- **Efficiency:** Requires finding and piecing together fragments repeatedly.

## LLM Wiki Pattern
- **Mechanism:** Incrementally builds a persistent, interlinked collection of markdown files.
- **Benefit:** Knowledge is compiled once and kept current. Synthesis reflects the cumulative total of all ingested sources.
- **Efficiency:** Cross-references and contradictions are resolved at ingestion time, not query time.

## Sources
- [[LLM-Wiki-Pattern]]
