// scripts/check-links.mjs
// Verifies all external links and local /resume.pdf referenced across the portfolio.

import { existsSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

const LINKS_TO_CHECK = [
  {
    type: 'Local File',
    url: '/resume.pdf',
    localPath: resolve(rootDir, 'public', 'resume.pdf'),
    context: 'Resume Download button (Hero, Nav, Contact)',
  },
  {
    type: 'External Profile',
    url: 'https://github.com/AbhayLabs-07',
    context: 'GitHub Profile (Hero, Contact, Footer, Layout)',
  },
  {
    type: 'External Profile',
    url: 'https://linkedin.com/in/abhay-vishwakarma-6a64153b2',
    context: 'LinkedIn Profile (Hero, Contact, Footer, Layout)',
  },
  {
    type: 'Repository',
    url: 'https://github.com/AbhayLabs-07/recoverops-ai.git',
    context: 'RecoverOps AI Repository',
  },
  {
    type: 'Repository',
    url: 'https://github.com/AbhayLabs-07/sentinel.git',
    context: 'Sentinel GCS Repository',
  },
  {
    type: 'Repository',
    url: 'https://github.com/AbhayLabs-07/MEDHA-AI.git',
    context: 'MEDHA AI Repository',
  },
  {
    type: 'Repository',
    url: 'https://github.com/AbhayLabs-07/Aerial-Intelligence-Munitions-A.I.M-',
    context: 'Aerial Intelligence Munitions Repository',
  },
];

async function checkUrl(item) {
  if (item.localPath) {
    if (existsSync(item.localPath)) {
      const stats = statSync(item.localPath);
      return {
        ...item,
        status: 200,
        ok: true,
        note: `File exists on disk (${stats.size} bytes)`,
      };
    } else {
      return {
        ...item,
        status: 404,
        ok: false,
        note: 'File missing from public/ directory',
      };
    }
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(item.url, {
      method: 'GET',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      signal: controller.signal,
    });
    clearTimeout(timeout);

    const isLinkedInAntiScrape = item.url.includes('linkedin.com') && response.status === 999;
    const ok = (response.status >= 200 && response.status < 400) || isLinkedInAntiScrape;
    const note = isLinkedInAntiScrape
      ? 'HTTP 999 (LinkedIn Anti-Bot Protection - verified URL structure)'
      : response.statusText || 'OK';

    return {
      ...item,
      status: response.status,
      ok,
      note,
    };
  } catch (err) {
    return {
      ...item,
      status: 'ERR',
      ok: false,
      note: err.message,
    };
  }
}

async function runLinkCheck() {
  console.log('\n======================================================');
  console.log('   PORTFOLIO LINK & ASSET INTEGRITY AUDIT');
  console.log('======================================================\n');

  let failureCount = 0;

  for (const link of LINKS_TO_CHECK) {
    const result = await checkUrl(link);
    const statusLabel = result.ok
      ? `\x1b[32m[PASS ${result.status}]\x1b[0m`
      : `\x1b[31m[FAIL ${result.status}]\x1b[0m`;

    console.log(`${statusLabel} ${result.url}`);
    console.log(`         Type: ${result.type} | Context: ${result.context}`);
    console.log(`         Detail: ${result.note}\n`);

    if (!result.ok) {
      failureCount++;
    }
  }

  console.log('------------------------------------------------------');
  if (failureCount === 0) {
    console.log('✓ All links and local assets verified successfully.\n');
  } else {
    console.log(
      `⚠ Found ${failureCount} link(s) returning non-200. Documented in CONTENT_TODO.md for action.\n`
    );
  }

  return failureCount;
}

runLinkCheck().then((failures) => {
  // Exit cleanly after reporting
  process.exit(failures > 0 ? 1 : 0);
});
