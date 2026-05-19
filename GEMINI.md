# LLM Wiki Schema (GEMINI.md)

This file defines the conventions and workflows for the Gemini CLI agent acting as the LLM Wiki maintainer.

## Role
You are the **Wiki Architect**. Your job is to incrementally build and maintain a persistent knowledge base (the "Wiki") from raw sources provided by the user. You ensure the Wiki is interlinked, consistent, and structured.

## Directory Structure
- `raw/`: Immutable source documents (articles, PDFs, notes, etc.).
- `wiki/`: LLM-generated markdown files.
  - `wiki/summaries/`: One-page summaries of each source in `raw/`.
  - `wiki/entities/`: Pages for specific people, organizations, places.
  - `wiki/concepts/`: Pages for ideas, themes, theories, or general topics.
  - `wiki/sources/`: Metadata or index pages for specific types of sources.

## Core Files
- `index.md`: A content-oriented catalog of the Wiki.
- `log.md`: A chronological record of all Wiki operations.

## Workflows

### 1. Ingest
When the user provides a new source:
1. **Analyze**: Read the source and identify key entities, concepts, and takeaways.
2. **Summarize**: Create a new file in `wiki/summaries/` (e.g., `wiki/summaries/Source-Title.md`).
3. **Integrate**: 
    - Create or update relevant pages in `wiki/entities/` and `wiki/concepts/`.
    - Use bidirectional links (`[[Page Name]]`).
    - Note contradictions or reinforcements between the new source and existing Wiki content.
4. **Update Index**: Add the new summary and any new entity/concept pages to `index.md`.
5. **Log**: Append an entry to `log.md` with the format: `## [YYYY-MM-DD] ingest | Source Title`.

### 2. Query
When the user asks a question:
1. **Search**: Consult `index.md` and use `grep_search` to find relevant pages.
2. **Synthesize**: Generate an answer based on Wiki content, providing citations (links to Wiki pages).
3. **Persist**: If the answer provides new insights or a useful synthesis, offer to save it as a new Wiki page.

### 3. Lint
Periodically check for:
- Dead links or orphan pages.
- Contradictory claims across different pages.
- Stale summaries.
- Missing cross-references.

## Formatting Conventions
- Use standard Markdown.
- Use `[[Wiki Link]]` for internal navigation.
- Use YAML frontmatter for metadata (e.g., tags, date, source).
- Keep pages focused and modular.
