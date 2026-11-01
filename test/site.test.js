const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { JSDOM } = require('jsdom');
const showdown = require('showdown');
const tocLabel = require('../web/toc-label');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
execFileSync(process.execPath, ['parse.js'], { cwd: root });
const html = read('index.html');
const document = new JSDOM(html).window.document;

test('中文页面与本地资源完整，保留原作者署名', () => {
  assert.equal(document.documentElement.lang, 'zh-CN');
  assert.match(document.title, /中文版/);
  assert.match(document.querySelector('meta[name="description"]').content, /中文/);
  assert.match(document.body.textContent, /Jure Šorn/);
  assert.equal(document.querySelector('a[href="web/faq.html"]').textContent, '查看 FAQ');
  assert.ok(document.querySelector('a[href*="Alex-Shan/python-cheatsheet/lang/cn/README.md"]'));
  assert.doesNotMatch(html, /ZXQ\d+QXZ|Switch to (?:dark|light) theme|Download text file/);
  for (const element of document.querySelectorAll('[src],link[href]')) {
    const value = element.getAttribute('src') || element.getAttribute('href');
    if (!/^https?:/.test(value)) assert.ok(fs.existsSync(path.join(root, value)), value);
  }
  const faq = new JSDOM(read('web/faq.html')).window.document;
  assert.equal(faq.documentElement.lang, 'zh-CN');
  assert.equal(faq.querySelectorAll('details').length, 12);
  assert.ok(faq.querySelector('a[href="../index.html"]'));
});

test('目录覆盖所有二、三级标题，ID 唯一且内部链接均有效', () => {
  const ids = [...document.querySelectorAll('[id]')].map((el) => el.id);
  assert.equal(new Set(ids).size, ids.length);
  const headings = [...document.querySelectorAll('h2,h3')];
  const entries = [...document.querySelectorAll('.site-toc a')];
  assert.equal(entries.length, headings.length);
  assert.deepEqual(entries.map((el) => el.hash.slice(1)), headings.map((el) => el.id));
  for (const link of document.querySelectorAll('a[href^="#"]')) {
    if (link.hash) assert.ok(document.getElementById(decodeURIComponent(link.hash.slice(1))), link.hash);
  }
  for (const [index, heading] of headings.entries()) {
    assert.equal(entries[index].textContent, tocLabel(heading));
    assert.equal(entries[index].textContent, heading.textContent.replace(/^#/, ''));
    assert.match(entries[index].textContent, /[\u4e00-\u9fff].*（[A-Za-z].*）$/);
    if (heading.tagName === 'H3') assert.ok(entries[index].closest('ul').parentElement.matches('li'));
  }
  assert.ok(document.querySelector('.site-toc[open] summary'));
  assert.ok(document.getElementById('inline-1'));
  assert.ok(document.getElementById('inline-2'));
  assert.equal(document.querySelector('.site-toc a[href="#list"]').textContent, '列表（List）');
  assert.equal(document.querySelector('#list').textContent, '#列表（List）');
});

test('生成的每个代码块均与 README 完全一致，不用硬编码副本覆盖注释', () => {
  const source = new JSDOM(new showdown.Converter().makeHtml(read('README.md'))).window.document;
  const code = (doc) => [...doc.querySelectorAll('pre > code')].map((el) => el.textContent);
  assert.equal(code(document).length, 351);
  assert.deepEqual(code(document), code(source));
  assert.match(document.querySelector('#main').nextElementSibling.textContent, /文件被 import/);
  assert.equal(document.querySelectorAll('.plotly-graph-div').length, 2);
});

function browser({ desktop = false, theme = '', darkPreference = false } = {}) {
  const dom = new JSDOM(html, { url: 'https://alex-shan.github.io/python-cheatsheet/' + theme, runScripts: 'outside-only' });
  const media = new dom.window.EventTarget();
  media.matches = desktop;
  dom.window.matchMedia = (query) => query.includes('1280px') ? media : { matches: darkPreference };
  dom.window.eval(read('web/theme.js'));
  dom.window.eval(read('web/script_2.js'));
  return { ...dom, window: dom.window, media };
}

test('小屏目录可折叠，跳转后关闭并聚焦章节；宽屏保持展开', () => {
  for (const desktop of [false, true]) {
    const { window, media } = browser({ desktop });
    const doc = window.document;
    const toc = doc.querySelector('.site-toc');
    assert.equal(toc.open, desktop);
    toc.open = true;
    const link = toc.querySelector('a[href="#list"]');
    link.click();
    assert.equal(toc.open, desktop);
    assert.equal(doc.activeElement.id, 'list');
    assert.equal(link.getAttribute('aria-current'), 'location');
    media.matches = !desktop;
    media.dispatchEvent(new window.Event('change'));
    assert.equal(toc.open, !desktop);
    window.close();
  }
});

test('主题切换使用中文，并保留当前章节及显式浅色设置', () => {
  for (const [theme, preference, expected] of [
    ['?theme=dark3#list', false, 'light'],
    ['?theme=light#list', true, 'dark3'],
    ['#list', true, 'light'],
    ['#list', false, 'dark3']
  ]) {
    const { window } = browser({ theme, darkPreference: preference });
    const toggle = window.document.querySelector('[data-theme-toggle]');
    assert.equal(new URL(toggle.href).searchParams.get('theme'), expected);
    assert.equal(new URL(toggle.href).hash, '#list');
    assert.equal(toggle.textContent, expected === 'light' ? '切换浅色主题' : '切换深色主题');
    window.close();
  }
});

test('重复构建结果一致', () => {
  execFileSync(process.execPath, ['parse.js'], { cwd: root });
  assert.equal(read('index.html'), html);
});
