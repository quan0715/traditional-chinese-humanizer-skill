---
name: traditional-chinese-humanizer
description: Use when producing, editing, or reviewing Traditional Chinese content for Taiwan-facing professional, product, proposal, report, documentation, website, newsletter, or marketing contexts that may sound AI-generated, over-polished, slogan-heavy, generic, translated, Simplified Chinese-leaning, or mechanically structured.
---

# Traditional Chinese Humanizer

## Overview

Use this skill to turn Traditional Chinese drafts into natural, precise, Taiwan-facing writing without losing meaning. The goal is not to make text casual; it is to remove AI smell, empty polish, translationese, and unsupported claims while preserving the reader's task, evidence, and tone.

This skill is portable. It can be used by itself or loaded from OpenPress writing workflows.

## Workflow

1. Identify the text's job: decision memo, proposal, product copy, report, documentation, social post, email, or article.
2. Preserve facts, claims, constraints, numbers, named entities, source attributions, and required terminology.
3. Scan for AI-writing patterns. For long or high-risk drafts, read `references/ai-patterns.md`.
4. Rewrite in Traditional Chinese with Taiwan usage. Read `references/taiwan-style.md` when the draft contains Simplified Chinese, PRC phrasing, or awkward direct translation.
5. Check evidence strength. Downgrade or remove claims that cannot be supported by the provided material.
6. Deliver the revised text first. Add a short change note only when it helps the user understand editorial decisions.

## Core Rules

- Say the actual point directly. Do not use dramatic contrast to compensate for thin substance.
- Prefer concrete subjects, verbs, situations, numbers, limits, and outcomes over abstract nouns.
- Keep each paragraph responsible for one idea. A reader should know who did what, under what condition, and why it matters.
- Use active phrasing unless the actor is unknown or irrelevant.
- Avoid over-promising. Without evidence, do not write "最佳", "顛覆", "重新定義", "革命性", "前所未有", or equivalent claims.
- Trust the reader. Remove filler openings, excessive transitions, generic conclusions, and chatbot politeness.
- Vary sentence length. Use short sentences for judgments, longer sentences only when they carry real detail.
- Use Traditional Chinese and Taiwan common usage. Keep established technical terms in English when forced translation would be less clear.

## High-Risk Patterns

Treat these as review triggers:

| Pattern | Problem | Rewrite Direction |
| --- | --- | --- |
| `這不是 A，而是 B` | Delays the real point and often creates fake depth | State B's concrete capability or difference directly |
| `不只是 A，更是 B` | Stacks two vague claims | Split current capability from actual result |
| `讓 X 不再只是 Y` | Sounds like a slogan | Describe the new behavior, use case, or responsibility |
| `把每一次 A 都變成 B` | Turns process into vague aspiration | Say what is recorded, compared, produced, or changed each time |
| `透過 A，讓 B 更 C` | Hides the actor and action | Make A the subject and name the action |
| `X 可以被／能被 Y` | Passive packaging makes responsibility unclear | Say who uses X to do what |
| `在這個快速變動的時代` | Generic opening | Start with the reader's concrete problem |
| `打造有溫度的...` | Emotional but not operational | Name the interaction, support, or feedback that creates the difference |
| `業界專家指出` | Vague attribution | Provide a named source, or remove the claim |
| three-item rhythm everywhere | Feels mechanically comprehensive | Use two, four, or a sentence when that is more accurate |

## Editing Moves

1. Delete the formula: remove contrast scaffolding, generic trend openings, softening phrases, and decorative emphasis.
2. Recover the claim: identify whether the sentence is about a feature, result, risk, limitation, opinion, or next action.
3. Add missing specifics: actor, audience, scenario, data, timing, dependency, or tradeoff.
4. Match the tone: professional content can still have voice, but it should not sound like a speech, ad slogan, or chatbot reply.
5. Read aloud once. If every sentence has the same cadence, revise the rhythm.

## Tables and Structured Text

Tables should scan like tables, not paragraphs.

- If the column says "規模", the cell should usually be only a number and unit.
- If the column says "狀態", avoid repeating "目前", "已經", "已支援", or "完成".
- If the column says "能力", "功能", or "備註", prefer noun phrases or short clauses.
- Move causal explanations, caveats, and evidence to the paragraph before or after the table.

## Subject Continuity

Do not restart every sentence with the product, company, or founder name. Once the subject is established, continue with "產品", "平台", "團隊", "這項設計", or omit the subject when clear.

Keep the full name when:

- ambiguity would confuse the reader,
- the paragraph changes subject,
- the sentence is a conclusion that intentionally returns to the main actor.

## Output Format

Default:

```markdown
[revised Traditional Chinese text]
```

When useful:

```markdown
[revised Traditional Chinese text]

修改重點：
- [specific change]
- [specific change]
```

Avoid long diagnostic lists unless the user asks for review details.

## Final Check

- Are any slogan frames still present?
- Does each paragraph include a real subject and action?
- Are claims supported by supplied evidence?
- Is the language Traditional Chinese with Taiwan usage?
- Are English technical terms preserved when they are clearer than forced translation?
- Does the text sound like a competent person wrote it for a reader, not like a model performing polish?
