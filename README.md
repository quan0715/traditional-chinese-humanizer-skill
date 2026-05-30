# Traditional Chinese Humanizer Skill

Independent repo for maintaining the `traditional-chinese-humanizer` Codex skill.

The skill lives at:

```text
skills/traditional-chinese-humanizer/SKILL.md
```

## Install

Install with the Vercel Labs `skills` CLI:

```bash
npx skills add quan0715/traditional-chinese-humanizer-skill --skill traditional-chinese-humanizer
```

For Codex global install:

```bash
npx skills add quan0715/traditional-chinese-humanizer-skill --skill traditional-chinese-humanizer -g -a codex -y
```

List available skills without installing:

```bash
npx skills add quan0715/traditional-chinese-humanizer-skill --list
```

The repo is public so `npx skills add` can clone it directly from GitHub.

Codex installs global skills to:

```text
~/.codex/skills/traditional-chinese-humanizer
```

## Validate

```bash
python3 /Users/quan/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/traditional-chinese-humanizer
```

## Sources

- Extracted from the OpenPress `chinese-ai-writing-polish` skill.
- Adapted with reference to `op7418/Humanizer-zh`, rewritten for Traditional Chinese and Taiwan-facing professional writing.
