(function () {
  'use strict';
  function searchPages(pages, query) {
    const term = String(query || '').trim().toLocaleLowerCase();
    if (!term) return [];
    return pages.filter(page => [page.title, page.label, page.description].filter(Boolean).join(' ').toLocaleLowerCase().includes(term));
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { searchPages };
  if (typeof document === 'undefined') return;
  const input = document.getElementById('doc-search');
  if (!input) return;
  const pages = JSON.parse(document.getElementById('search-index').textContent);
  const results = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  input.addEventListener('input', function () {
    const matches = searchPages(pages, input.value);
    results.replaceChildren();
    status.textContent = input.value.trim() ? (matches.length ? '找到 ' + matches.length + ' 个栏目' : '没有匹配结果，请尝试其他关键词。') : '输入栏目名称或中文关键词，例如 Tutorials、入门、理论。';
    matches.forEach(function (page) {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = page.url;
      const title = document.createElement('strong');
      title.textContent = page.title;
      const description = document.createElement('p');
      description.textContent = page.description;
      link.append(title, description);
      li.append(link);
      results.append(li);
    });
  });
}());
