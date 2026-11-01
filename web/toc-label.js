const labels = require('./toc-labels.json');

// 正文标题和 anchors 保持原样，目录单独展示中英文。
module.exports = function tocLabel(heading) {
  const title = heading.textContent.replace(/^#/, '');
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
