// scripts/check-placeholders.mjs
// Build-time check that validates that no placeholder strings matching /\{\{.*\}\}|TODO/
// appear in the rendered HTML output or production data files.

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

const PLACEHOLDER_REGEX = /\{\{.*?\}\}|\bTODO\b/;

function getAllFiles(dir, extensions, fileList = []) {
  if (!existsSync(dir)) return fileList;
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      if (entry !== 'node_modules' && entry !== '.git') {
        getAllFiles(fullPath, extensions, fileList);
      }
    } else if (extensions.some((ext) => entry.endsWith(ext))) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function checkRenderedContent() {
  console.log('\n======================================================');
  console.log('   BUILD-TIME PLACEHOLDER & TODO INTEGRITY AUDIT');
  console.log('======================================================\n');

  let violations = [];

  // 1. Audit Rendered HTML files in .next build output
  const nextServerAppDir = resolve(rootDir, '.next', 'server', 'app');
  if (existsSync(nextServerAppDir)) {
    const htmlFiles = getAllFiles(nextServerAppDir, ['.html']);
    console.log(`Inspecting ${htmlFiles.length} rendered HTML file(s) in .next build output...`);

    for (const filePath of htmlFiles) {
      const content = readFileSync(filePath, 'utf-8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (PLACEHOLDER_REGEX.test(line)) {
          // Verify it's not a dev script or framework bundle artifact
          const match = line.match(PLACEHOLDER_REGEX);
          violations.push({
            file: filePath.replace(rootDir, ''),
            line: idx + 1,
            match: match ? match[0] : 'MATCH',
            snippet: line.trim().substring(0, 120),
          });
        }
      });
    }
  } else {
    console.warn('Note: .next/server/app directory not found. Please run "npm run build" before this check.');
  }

  // 2. Audit Source Data Files (projects.ts, experience.ts, skills.ts)
  const dataDir = resolve(rootDir, 'src', 'data');
  const dataFiles = getAllFiles(dataDir, ['.ts', '.tsx']);
  console.log(`Inspecting ${dataFiles.length} source data file(s) in src/data/...`);

  for (const filePath of dataFiles) {
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      // Ignore comment-only references to CONTENT_TODO.md
      const trimmed = line.trim();
      if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
        return;
      }
      if (PLACEHOLDER_REGEX.test(line)) {
        const match = line.match(PLACEHOLDER_REGEX);
        violations.push({
          file: filePath.replace(rootDir, ''),
          line: idx + 1,
          match: match ? match[0] : 'MATCH',
          snippet: line.trim(),
        });
      }
    });
  }

  // 3. Audit User-Facing Section Components for live UI placeholder braces
  const componentsDir = resolve(rootDir, 'src', 'components');
  const componentFiles = getAllFiles(componentsDir, ['.tsx']);
  console.log(`Inspecting ${componentFiles.length} section component file(s) in src/components/...`);

  for (const filePath of componentFiles) {
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
        return;
      }
      // Check for literal placeholder expressions or braces in rendered JSX
      if (/&#123;&#123;TODO|&#123;&#123;.*&#125;&#125;|\{\{TODO|\{\{.*\}\}/.test(line)) {
        violations.push({
          file: filePath.replace(rootDir, ''),
          line: idx + 1,
          match: 'JSX Placeholder',
          snippet: line.trim(),
        });
      }
    });
  }

  console.log('------------------------------------------------------');

  if (violations.length === 0) {
    console.log('\x1b[32m✓ PASSED: No template placeholders or TODO markers found in rendered content or data.\x1b[0m\n');
    return 0;
  }

  console.error(`\x1b[31m✗ FAILED: Found ${violations.length} placeholder violation(s):\x1b[0m`);
  for (const v of violations) {
    console.error(`  - [${v.file}:${v.line}] Matched: "${v.match}" -> ${v.snippet}`);
  }
  console.error('\nPlease replace placeholders with verified factual data or neutral fallbacks.\n');
  return 1;
}

const exitCode = checkRenderedContent();
process.exit(exitCode);

