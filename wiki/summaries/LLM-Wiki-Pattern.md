# Summary: LLM Wiki Pattern

**Source:** [[raw/llm-wiki-idea.md]]
**Date:** 2026-05-19
**Key Idea:** Moving beyond retrieval-only systems (RAG) towards a persistent, LLM-maintained knowledge base (Wiki).

## Key Takeaways
- **Persistence:** Unlike standard RAG, the Wiki is a compiled, compounding artifact where knowledge is synthesized once and kept current.
- **LLM as Maintainer:** The human curates and questions; the LLM handles the "grunt work" of summarizing, cross-referencing, and bookkeeping.
- **Three-Layer Architecture:**
    1. **Raw Sources:** Immutable source of truth.
    2. **The Wiki:** LLM-generated interlinked markdown.
    3. **The Schema:** Configuration defining the Wiki's rules ([[GEMINI.md]]).
- **Core Operations:** Ingest (adding sources), Query (synthesizing answers), Lint (health-checks), and **Design (UX/UI refinement)**.

## Related Concepts
- [[RAG-vs-Wiki]]
- [[Wiki-Maintenance]]
- [[UX-UI-Expert-Skill]]
- [[Memex]]
