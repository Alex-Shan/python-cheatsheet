// 目录在构建时生成；浏览器仅负责折叠状态和当前章节标记。
(() => {
  const toc = document.querySelector('.site-toc');
  if (toc) {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const setLayout = () => { toc.open = desktop.matches; };
    setLayout();
    desktop.addEventListener('change', setLayout);
    const links = [...toc.querySelectorAll('a[href^="#"]')];
    const nav = toc.querySelector('nav');
    const headings = links.map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))));
    let currentLink;
    const revealCurrent = () => {
      if (!toc.open || !currentLink) return;
      const bounds = nav.getBoundingClientRect();
      const item = currentLink.getBoundingClientRect();
      if (item.top < bounds.top || item.bottom > bounds.bottom) {
        // 只滚动目录内部，避免 scrollIntoView 连带移动正文。
        nav.scrollTop += item.top - bounds.top - (bounds.height - item.height) / 2;
      }
    };
    const mark = (id) => {
      const selected = links.find((link) => link.hash === '#' + id);
      if (!selected) return;
      if (selected !== currentLink) {
        currentLink?.removeAttribute('aria-current');
        selected.setAttribute('aria-current', 'location');
        currentLink = selected;
        revealCurrent();
      }
    };
    const syncToReadingPosition = () => {
      // 选择阅读线之前最近的标题，长章节和快速跨章节滚动时仍能正确定位。
      const readingLine = Math.min(80, window.innerHeight / 4);
      let low = 0;
      let high = headings.length;
      while (low < high) {
        const middle = (low + high) >> 1;
        if (headings[middle].getBoundingClientRect().top <= readingLine) low = middle + 1;
        else high = middle;
      }
      let index = Math.max(0, low - 1);
      const pageHeight = document.documentElement.scrollHeight;
      if (pageHeight > window.innerHeight && window.scrollY + window.innerHeight >= pageHeight - 2) {
        index = headings.length - 1;
      }
      if (headings[index]) mark(headings[index].id);
    };
    let pending = false;
    const scheduleSync = () => {
      if (pending) return;
      pending = true;
      const nextFrame = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 16));
      nextFrame(() => {
        pending = false;
        syncToReadingPosition();
      });
    };
    window.addEventListener('scroll', scheduleSync, { passive: true });
    window.addEventListener('resize', scheduleSync);
    window.addEventListener('hashchange', scheduleSync);
    window.addEventListener('load', scheduleSync);
    toc.addEventListener('toggle', revealCurrent);
    syncToReadingPosition();
    links.forEach((link) => link.addEventListener('click', () => {
      mark(decodeURIComponent(link.hash.slice(1)));
      if (!desktop.matches) toc.open = false;
      const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    }));
    if (window.location.hash) mark(decodeURIComponent(window.location.hash.slice(1)));
  }
  const topLink = document.getElementById('return-to-top');
  if (topLink) {
    const update = () => { topLink.style.display = window.scrollY > 480 ? 'block' : 'none'; };
    window.addEventListener('scroll', update, { passive: true });
    update();
    topLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    });
  }
})();
