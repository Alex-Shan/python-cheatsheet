(() => {
  const chosen = new URLSearchParams(window.location.search).get('theme');
  const dark = chosen ? chosen.startsWith('dark') : window.matchMedia('(prefers-color-scheme: dark)').matches;
  const toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    const url = new URL(window.location.href);
    url.searchParams.set('theme', dark ? 'light' : 'dark3');
    toggle.href = url.pathname + url.search + url.hash;
    toggle.textContent = dark ? '切换浅色主题' : '切换深色主题';
  }
})();
