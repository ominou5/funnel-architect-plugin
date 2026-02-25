#!/usr/bin/env node
/**
 * lighthouse-audit.js — Async PostToolUse hook
 * Runs a lightweight performance check on edited HTML files.
 * Reports results via systemMessage for async hook delivery.
 *
 * For full Lighthouse audits, install: npm i -g lighthouse
 * This script does a fast static analysis when Lighthouse is unavailable.
 */

const fs = require('fs');
const path = require('path');

// Read hook JSON input from stdin
let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => { input += chunk; });
process.stdin.on('end', () => {
    try {
        const data = JSON.parse(input);
        const filePath = data.tool_input?.file_path || data.tool_input?.TargetFile || '';

        // Only audit HTML files
        if (!filePath || !filePath.endsWith('.html')) {
            process.exit(0);
        }

        if (!fs.existsSync(filePath)) {
            process.exit(0);
        }

        const content = fs.readFileSync(filePath, 'utf8');
        const issues = [];
        let score = 100;

        // Check: Images without dimensions (causes CLS)
        const imgWithoutDims = (content.match(/<img(?![^>]*width)[^>]*>/gi) || []).length;
        if (imgWithoutDims > 0) {
            issues.push(`${imgWithoutDims} image(s) missing width/height attributes (CLS risk)`);
            score -= imgWithoutDims * 5;
        }

        // Check: Images without lazy loading (below fold)
        const imgsTotal = (content.match(/<img/gi) || []).length;
        const imgsLazy = (content.match(/loading=["']lazy["']/gi) || []).length;
        if (imgsTotal > 1 && imgsLazy === 0) {
            issues.push(`No lazy-loaded images — add loading="lazy" to below-fold images`);
            score -= 10;
        }

        // Check: Render-blocking stylesheets
        const blockingCSS = (content.match(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi) || [])
            .filter(tag => !tag.includes('media=') && !tag.includes('preload')).length;
        if (blockingCSS > 2) {
            issues.push(`${blockingCSS} render-blocking stylesheets — consider inlining critical CSS`);
            score -= blockingCSS * 3;
        }

        // Check: Synchronous scripts in head
        const headMatch = content.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
        if (headMatch) {
            const headScripts = (headMatch[1].match(/<script(?![^>]*(async|defer))[^>]*src=/gi) || []).length;
            if (headScripts > 0) {
                issues.push(`${headScripts} render-blocking script(s) in <head> — add defer or async`);
                score -= headScripts * 5;
            }
        }

        // Check: Missing font-display
        if (content.includes('@font-face') && !content.includes('font-display')) {
            issues.push('@font-face without font-display: swap — causes FOIT');
            score -= 5;
        }

        // Check: Inline styles over 10KB (should be external)
        const inlineStyles = content.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
        const totalInlineCSS = inlineStyles.reduce((sum, s) => sum + s.length, 0);
        if (totalInlineCSS > 10000) {
            issues.push(`${Math.round(totalInlineCSS / 1024)}KB of inline CSS — consider extracting to external stylesheet`);
            score -= 5;
        }

        // Check: Missing meta description (SEO)
        if (!content.includes('name="description"') && !content.includes("name='description'")) {
            issues.push('Missing <meta name="description"> — important for SEO');
            score -= 3;
        }

        // Check: Missing lang attribute
        if (!/<html[^>]*lang=/i.test(content)) {
            issues.push('Missing lang attribute on <html> — important for accessibility');
            score -= 2;
        }

        // Clamp score
        score = Math.max(0, Math.min(100, score));

        // Report
        const fileName = path.basename(filePath);
        if (issues.length === 0) {
            console.log(JSON.stringify({
                systemMessage: `⚡ Lighthouse estimate: ${score}/100 for ${fileName} — all checks passed`
            }));
        } else {
            const issueList = issues.map(i => `• ${i}`).join('\\n');
            console.log(JSON.stringify({
                systemMessage: `⚡ Lighthouse estimate: ${score}/100 for ${fileName}\\n${issueList}`
            }));
        }
    } catch (err) {
        // Silent failure — don't block the build
        process.exit(0);
    }
});
