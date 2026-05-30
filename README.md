# Traditional Chinese Humanizer Skill

Independent repo for maintaining the `traditional-chinese-humanizer` Codex skill.

The skill lives at:

```text
skills/traditional-chinese-humanizer/SKILL.md
```

## Install

Install from npm with `npx`:

```bash
npx traditional-chinese-humanizer-skill
```

Or install directly from GitHub:

```bash
npx github:quan0715/traditional-chinese-humanizer-skill
```

This copies the skill to:

```text
${CODEX_HOME:-$HOME/.codex}/skills/traditional-chinese-humanizer
```

Options:

```bash
npx github:quan0715/traditional-chinese-humanizer-skill -- --path ~/.codex/skills --force
npx github:quan0715/traditional-chinese-humanizer-skill -- --dry-run
```

## Validate

```bash
npm test
npm run validate:skill
```

## Sources

- Extracted from the OpenPress `chinese-ai-writing-polish` skill.
- Adapted with reference to `op7418/Humanizer-zh`, rewritten for Traditional Chinese and Taiwan-facing professional writing.
