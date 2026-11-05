(function () {
  'use strict';
  function setPlayback(view, selected) {
    view.querySelectorAll('video').forEach(function (video) {
      if (!selected) video.pause();
      else {
        const playback = video.play();
        if (playback && typeof playback.catch === 'function') playback.catch(function () {});
      }
    });
  }
  document.querySelectorAll('.case-panel').forEach(function (panel) {
    const selectors = Array.from(panel.querySelectorAll('[data-case-target]'));
    selectors.forEach(function (selector) {
      selector.addEventListener('click', function () {
        selectors.forEach(function (item) {
          const selected = item === selector;
          item.setAttribute('aria-pressed', String(selected));
          const view = document.getElementById(item.dataset.caseTarget);
          view.hidden = !selected;
          setPlayback(view, selected);
        });
      });
    });
    panel.querySelectorAll('.case-view').forEach(function (view) { setPlayback(view, !view.hidden); });
  });
}());
