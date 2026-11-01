// 目录在构建时生成；浏览器仅负责折叠状态和当前章节标记。
(() => {
  const toc = document.querySelector('.site-toc');
  if (toc) {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const setLayout = () => { toc.open = desktop.matches; };
    setLayout();
    desktop.addEventListener('change', setLayout);
    const links = [...toc.querySelectorAll('a[href^="#"]')];
    const mark = (id) => {
      links.forEach((link) => {
        if (link.hash === '#' + id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };
    links.forEach((link) => link.addEventListener('click', () => {
      mark(decodeURIComponent(link.hash.slice(1)));
      if (!desktop.matches) toc.open = false;
      const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    }));
    if ('IntersectionObserver' in window) {
      const visible = new Map();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => visible.set(entry.target, entry.isIntersecting));
        const first = [...visible].filter(([, shown]) => shown)
          .map(([heading]) => heading)
          .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];
        if (first) mark(first.id);
      }, { rootMargin: '0px 0px -65% 0px' });
      links.forEach((link) => {
        const heading = document.getElementById(decodeURIComponent(link.hash.slice(1)));
        if (heading) observer.observe(heading);
      });
    }
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
