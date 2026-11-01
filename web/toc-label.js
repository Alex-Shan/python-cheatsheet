const labels = require('./toc-labels.json');

// 正文与目录共用双语名称，保留原有英文 anchors。
module.exports = function tocLabel(heading) {
  const title = heading.textContent.replace(/^#/, '');
  const bilingual = title.match(/^(.+)（([^（）]+)）$/);
  if (bilingual && labels[bilingual[2]] === bilingual[1]) return title;
  const translatedHeadings = {
    '示例': /^examples(?:-|$)/.test(heading.id) ? 'Examples' : 'Example',
    '选项': 'Options',
    'Mario Brothers 基础示例': 'Basic Mario Brothers Example',
    '附录': 'Appendix',
    '本地构建与发布': 'Local Build and Deployment'
  };
  const english = translatedHeadings[title] || title;
  const chinese = labels[english];
  if (!chinese) throw new Error(`目录缺少中文名称：${english}`);
  return `${chinese}（${english}）`;
};
