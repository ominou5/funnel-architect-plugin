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
        // Skip external links (http, mailto, tel, javascript)
        if (href.match(/^(https?:|mailto:|tel:|javascript:|\/{2})/i)) continue;
        // Skip template placeholders — {{VAR}}, [VAR], and server-routed /paths
        if (/\{\{.*\}\}/.test(href) || /^\[.*\]$/.test(href) || href.startsWith('/')) continue;
        links.push(href);
    }
    return links;
}

function validate(dir) {
    const htmlFiles = findHTMLFiles(dir);
    const issues = [];
    const warnings = [];
    let totalLinks = 0;
    let brokenLinks = 0;

    for (const file of htmlFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const links = extractLinks(content);
        const fileDir = path.dirname(file);
        const isTemplate = file.split(path.sep).includes('templates');

        for (const link of links) {
            totalLinks++;
            const resolved = path.resolve(fileDir, link);
            if (!fs.existsSync(resolved)) {
                const relFile = path.relative(dir, file);
                if (isTemplate) {
                    // Template cross-references are expected — warn only
                    warnings.push(`${relFile} → ${link} (template cross-ref, resolved at build time)`);
                } else {
                    brokenLinks++;
                    issues.push(`${relFile} → ${link} (file not found)`);
                }
            }
        }
    }

    console.log('\n📋 Funnel Structure Validation');
    console.log('─'.repeat(40));
    console.log(`Pages found: ${htmlFiles.length}`);
    console.log(`Links checked: ${totalLinks}`);
    console.log(`Broken links: ${brokenLinks}`);

    if (warnings.length > 0) {
        console.log('\n⚠️  Template cross-references (not errors):');
        warnings.forEach(w => console.log(`  • ${w}`));
    }

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
