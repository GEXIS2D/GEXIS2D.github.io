(function () {
  'use strict';
  const list = document.querySelector('.case-tablist');
  if (!list) return;
  const tabs = Array.from(list.querySelectorAll('[role="tab"]'));
  const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));

  function activate(index, moveFocus) {
    tabs.forEach(function (tab, i) {
      const active = i === index;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[i].hidden = !active;
      panels[i].querySelectorAll('video').forEach(function (video) {
        if (!active || video.closest('.case-view[hidden]')) {
          video.pause();
        } else {
          const playback = video.play();
          if (playback && typeof playback.catch === 'function') playback.catch(function () {});
        }
      });
    });
    if (moveFocus) tabs[index].focus();
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { activate(index, false); });
    tab.addEventListener('keydown', function (event) {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(next, true);
    });
  });

  panels.forEach(function (panel) {
    const selectors = Array.from(panel.querySelectorAll('[data-case-target]'));
    selectors.forEach(function (selector) {
      selector.addEventListener('click', function () {
        selectors.forEach(function (item) {
          const selected = item === selector;
          item.setAttribute('aria-pressed', String(selected));
          const view = document.getElementById(item.dataset.caseTarget);
          view.hidden = !selected;
          view.querySelectorAll('video').forEach(function (video) {
            if (!selected) video.pause();
            else {
              const playback = video.play();
              if (playback && typeof playback.catch === 'function') playback.catch(function () {});
            }
          });
        });
      });
    });
  });

  const initial = tabs.findIndex(tab => tab.getAttribute('aria-selected') === 'true');
  activate(initial < 0 ? 0 : initial, false);
}());
