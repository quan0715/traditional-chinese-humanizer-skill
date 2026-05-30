const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const installer = require("../bin/install.js");

test("parseArgs reads custom path, dry-run, and force flags", () => {
  const parsed = installer.parseArgs([
    "--path",
    "/tmp/codex-skills",
    "--dry-run",
    "--force",
  ]);

  assert.equal(parsed.destRoot, "/tmp/codex-skills");
  assert.equal(parsed.dryRun, true);
  assert.equal(parsed.force, true);
});

test("installSkill copies the skill into the destination root", () => {
  const destRoot = fs.mkdtempSync(path.join(os.tmpdir(), "tch-skill-"));

  const result = installer.installSkill({ destRoot, force: false, dryRun: false });

  assert.equal(result.installed, true);
  assert.equal(result.targetDir, path.join(destRoot, "traditional-chinese-humanizer"));
  assert.equal(
    fs.existsSync(path.join(result.targetDir, "SKILL.md")),
    true,
  );
  assert.equal(
    fs.existsSync(path.join(result.targetDir, "references", "taiwan-style.md")),
    true,
  );
});

test("installSkill refuses to overwrite unless force is true", () => {
  const destRoot = fs.mkdtempSync(path.join(os.tmpdir(), "tch-skill-"));

  installer.installSkill({ destRoot, force: false, dryRun: false });

  assert.throws(
    () => installer.installSkill({ destRoot, force: false, dryRun: false }),
    /already exists/,
  );

  const result = installer.installSkill({ destRoot, force: true, dryRun: false });
  assert.equal(result.installed, true);
});

test("installSkill dry-run reports target without writing files", () => {
  const destRoot = fs.mkdtempSync(path.join(os.tmpdir(), "tch-skill-"));

  const result = installer.installSkill({ destRoot, force: false, dryRun: true });

  assert.equal(result.installed, false);
  assert.equal(fs.existsSync(result.targetDir), false);
});
