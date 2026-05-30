#!/usr/bin/env node

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const SKILL_NAME = "traditional-chinese-humanizer";
const REPO_ROOT = path.resolve(__dirname, "..");
const SOURCE_SKILL_DIR = path.join(REPO_ROOT, "skills", SKILL_NAME);

function defaultDestRoot(env = process.env) {
  const base = env.CODEX_HOME || path.join(env.HOME || os.homedir(), ".codex");
  return path.join(base, "skills");
}

function parseArgs(argv) {
  const parsed = {
    destRoot: defaultDestRoot(),
    dryRun: false,
    force: false,
    help: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--help" || arg === "-h") {
      parsed.help = true;
    } else if (arg === "--dry-run") {
      parsed.dryRun = true;
    } else if (arg === "--force") {
      parsed.force = true;
    } else if (arg === "--path") {
      const value = argv[index + 1];
      if (!value || value.startsWith("-")) {
        throw new Error("--path requires a destination directory");
      }
      parsed.destRoot = path.resolve(value);
      index += 1;
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  return parsed;
}

function installSkill(options = {}) {
  const destRoot = options.destRoot || defaultDestRoot();
  const sourceDir = options.sourceDir || SOURCE_SKILL_DIR;
  const targetDir = path.join(destRoot, SKILL_NAME);

  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Skill source not found: ${sourceDir}`);
  }

  if (options.dryRun) {
    return { installed: false, sourceDir, targetDir };
  }

  if (fs.existsSync(targetDir)) {
    if (!options.force) {
      throw new Error(`${targetDir} already exists. Re-run with --force to replace it.`);
    }
    fs.rmSync(targetDir, { recursive: true, force: true });
  }

  fs.mkdirSync(destRoot, { recursive: true });
  fs.cpSync(sourceDir, targetDir, { recursive: true });

  return { installed: true, sourceDir, targetDir };
}

function printHelp() {
  console.log(`Install the Traditional Chinese Humanizer Codex skill.

Usage:
  npx github:quan0715/traditional-chinese-humanizer-skill [options]

Options:
  --path <dir>   Install into a custom skills directory.
                 Default: \${CODEX_HOME:-$HOME/.codex}/skills
  --force        Replace an existing traditional-chinese-humanizer skill.
  --dry-run      Print the target path without writing files.
  -h, --help     Show this help.
`);
}

function main(argv = process.argv.slice(2)) {
  try {
    const parsed = parseArgs(argv);
    if (parsed.help) {
      printHelp();
      return;
    }

    const result = installSkill(parsed);
    if (result.installed) {
      console.log(`Installed ${SKILL_NAME} to ${result.targetDir}`);
    } else {
      console.log(`Would install ${SKILL_NAME} to ${result.targetDir}`);
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  defaultDestRoot,
  installSkill,
  parseArgs,
};
