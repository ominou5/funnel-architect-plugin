#!/usr/bin/env node
/**
 * validate-funnel-structure.js — Validates multi-page funnel link integrity
 * Checks that all internal links between funnel pages resolve to real files.
 * Usage: node validate-funnel-structure.js [directory]
 */

const fs = require('fs');
const path = require('path');

function findHTMLFiles(dir) {
    const results = [];
    try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
                results.push(...findHTMLFiles(fullPath));
            } else if (entry.isFile() && entry.name.endsWith('.html')) {
                results.push(fullPath);
            }
        }
    } catch (err) { /* skip unreadable dirs */ }
    return results;
}

function extractLinks(content) {
    const links = [];
    const hrefRegex = /href=["']([^"'#][^"']*?)["']/gi;
    let match;
    while ((match = hrefRegex.exec(content)) !== null) {
        const href = match[1];
        // Only check relative links (not http, mailto, tel, javascript)
        if (!href.match(/^(https?:|mailto:|tel:|javascript:|\/{2})/i)) {
            links.push(href);
        }
    }
    return links;
}

function validate(dir) {
    const htmlFiles = findHTMLFiles(dir);
    const issues = [];
    let totalLinks = 0;
    let brokenLinks = 0;

    for (const file of htmlFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const links = extractLinks(content);
        const fileDir = path.dirname(file);

        for (const link of links) {
            totalLinks++;
            const resolved = path.resolve(fileDir, link);
            if (!fs.existsSync(resolved)) {
                brokenLinks++;
                const relFile = path.relative(dir, file);
                issues.push(`${relFile} → ${link} (file not found)`);
            }
        }
    }

    console.log('\n📋 Funnel Structure Validation');
    console.log('─'.repeat(40));
    console.log(`Pages found: ${htmlFiles.length}`);
    console.log(`Links checked: ${totalLinks}`);
    console.log(`Broken links: ${brokenLinks}`);

    if (issues.length > 0) {
        console.log('\n❌ Broken links:');
        issues.forEach(i => console.log(`  • ${i}`));
        process.exit(1);
    } else {
        console.log('\n✅ All internal links resolve correctly');
        process.exit(0);
    }
}

const targetDir = process.argv[2] || process.cwd();
validate(targetDir);
