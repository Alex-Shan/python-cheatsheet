#!/usr/bin/env node
// npm ci && npm run build
// README 是正文和代码注释的唯一来源，模板负责页面框架。
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');
const showdown = require('showdown');
const hljs = require('highlightjs');
const tocLabel = require('./web/toc-label');

const root = __dirname;
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const markdown = read('README.md').replace(/\(#([^)]+)\)/g, (_, anchor) => {
  // 保留原网站的无连字符 anchors，以及重复标题的数字 suffix。
  const [, name, suffix = ''] = anchor.match(/^(.*?)(-\d+)?$/);
  return `(#${name.replace(/-/g, '')}${suffix})`;
});
const content = new showdown.Converter().makeHtml(markdown);
const { window } = new JSDOM(content);
const doc = window.document;

// 目录由实际标题生成，不维护第二份章节列表。
const originalToc = [...doc.querySelectorAll('h2')].find((el) => el.textContent === '目录');
if (originalToc) {
  originalToc.nextElementSibling?.remove();
  originalToc.remove();
}
const title = doc.querySelector('h1');
title.id = 'comprehensivepythoncheatsheet';
// HTML 中保留英文 ID 的说明标题也参与编号，避免与 Markdown 标题冲突。
const headingCounts = new Map();
for (const heading of doc.querySelectorAll('h1,h2,h3,h4')) {
  const base = heading.id.replace(/-\d+$/, '');
  const count = headingCounts.get(base) || 0;
  heading.id = base + (count ? '-' + count : '');
  headingCounts.set(base, count + 1);
}
const banner = doc.querySelector('sup');
banner.innerHTML = '<a href="https://raw.githubusercontent.com/Alex-Shan/python-cheatsheet/lang/cn/README.md">下载文本文件</a>、<a href="https://github.com/gto76/python-cheatsheet">在 GitHub 上 Fork</a>、<a href="web/faq.html">查看 FAQ</a>，或<a href="?theme=dark3" data-theme-toggle>切换深色主题</a>。';
banner.parentElement.classList.add('banner');
const image = doc.querySelector('img');
image.parentElement.classList.add('banner');
image.style.width = '909px';
// README 中保留静态图表入口，网站显示已随仓库提供的交互图表。
doc.querySelectorAll('img[src="web/covid_deaths.png"], img[src="web/covid_cases.png"]').forEach((el) => el.remove());

const headings = [...doc.querySelectorAll('h2,h3')];
const toc = doc.createElement('details');
toc.className = 'site-toc';
toc.open = true;
const summary = doc.createElement('summary');
summary.textContent = '目录';
toc.append(summary);
const nav = doc.createElement('nav');
nav.setAttribute('aria-label', '章节目录');
const list = doc.createElement('ul');
let section;
for (const heading of headings) {
  const item = doc.createElement('li');
  const link = doc.createElement('a');
  link.href = '#' + heading.id;
  link.textContent = tocLabel(heading);
  item.append(link);
  if (heading.tagName === 'H2' || !section) {
    list.append(item);
    section = item;
  } else {
    let children = section.querySelector('ul');
    if (!children) { children = doc.createElement('ul'); section.append(children); }
    children.append(item);
  }
}
nav.append(list);
toc.append(nav);
image.parentElement.after(toc);

for (const heading of doc.querySelectorAll('h2')) {
  const link = doc.createElement('a');
  link.href = '#' + heading.id;
  link.className = 'heading-anchor';
  link.textContent = '#';
  link.setAttribute('aria-label', '链接到 ' + heading.textContent);
  heading.prepend(link);
}
for (const code of doc.querySelectorAll('pre > code')) {
  const lang = [...code.classList].find((name) => name.startsWith('language-'))?.slice(9) || 'python';
  if (lang !== 'text' && hljs.getLanguage(lang)) {
    code.innerHTML = hljs.highlight(lang, code.textContent, true).value;
    code.classList.add('hljs');
  }
}

const ids = new Set();
for (const el of doc.querySelectorAll('[id]')) {
  if (!el.id || ids.has(el.id)) throw new Error(`重复或空的 ID：${el.id}`);
  ids.add(el.id);
}
for (const link of doc.querySelectorAll('a[href^="#"]')) {
  const id = decodeURIComponent(link.getAttribute('href').slice(1));
  if (id && !ids.has(id)) throw new Error(`链接目标不存在：${id}`);
}
const date = new Date().toLocaleDateString('zh-CN', { timeZone: 'Asia/Shanghai', year: 'numeric', month: 'long', day: 'numeric' });
const template = read('web/template.html').replaceAll('May 20, 2021', date);
if (template.split('<div id=main_container></div>').length !== 2) throw new Error('模板必须包含一个正文占位符');
fs.writeFileSync(path.join(root, 'index.html'), template.replace('<div id=main_container></div>', () => doc.body.innerHTML));
console.log(`已生成中文首页：${headings.length} 个目录条目。`);
