/* ==========================================================================
   app.js — 站点交互
   i18n 切换 · 导航汉堡 · 论文排序 · BibTeX 弹窗 · 邮件表单 · 学生详情 · 滚动显现 · 复制
   ========================================================================== */
(function () {
  'use strict';

  var STORE_KEY = 'qk-lang';

  /* ---------- i18n 语言切换 ---------- */
  function getLang() {
    try {
      var saved = localStorage.getItem(STORE_KEY);
      if (saved === 'en' || saved === 'zh') return saved;
    } catch (e) {}
    var nav = (navigator.language || '').toLowerCase();
    return nav.indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function applyLang(lang) {
    if (window.I18N && window.I18N[lang]) {
      var dict = window.I18N[lang];
      var nodes = document.querySelectorAll('[data-i18n]');
      Array.prototype.forEach.call(nodes, function (node) {
        var key = node.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
          node.textContent = dict[key];
        } else if (window.console && window.console.warn) {
          window.console.warn('[i18n] missing key: ' + lang + '.' + key);
        }
      });
    }
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    // 切换按钮显示目标语言短标签
    var toggles = document.querySelectorAll('[data-lang-toggle]');
    Array.prototype.forEach.call(toggles, function (b) {
      b.textContent = lang === 'zh' ? 'EN' : '中文';
    });
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  /* ---------- 主题切换（黑白模式）---------- */
  function getTheme() {
    try {
      var saved = localStorage.getItem('qk-theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch (e) {}
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var toggles = document.querySelectorAll('[data-theme-toggle]');
    Array.prototype.forEach.call(toggles, function (b) {
      var use = b.querySelector('use');
      if (use) use.setAttribute('href', theme === 'dark' ? '#i-sun' : '#i-moon');
    });
    try { localStorage.setItem('qk-theme', theme); } catch (e) {}
  }

  function bindThemeToggle() {
    var toggles = document.querySelectorAll('[data-theme-toggle]');
    Array.prototype.forEach.call(toggles, function (b) {
      b.addEventListener('click', function () {
        var cur = document.documentElement.getAttribute('data-theme') || getTheme();
        applyTheme(cur === 'dark' ? 'light' : 'dark');
      });
    });
  }

  function bindLangToggle() {
    var toggles = document.querySelectorAll('[data-lang-toggle]');
    Array.prototype.forEach.call(toggles, function (b) {
      b.addEventListener('click', function () {
        var cur = document.documentElement.getAttribute('data-lang') || getLang();
        applyLang(cur === 'zh' ? 'en' : 'zh');
      });
    });
  }

  /* ---------- 导航汉堡菜单 ---------- */
  function bindNavToggle() {
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('site-nav-menu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // 点击菜单项后收起
    Array.prototype.forEach.call(menu.querySelectorAll('a'), function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Publications 排序 ---------- */
  function bindPubSort() {
    var list = document.getElementById('pub-list');
    var seg = document.getElementById('pub-sort');
    if (!list || !seg) return;
    var sortBtns = seg.querySelectorAll('button[data-sort]');

    function currentSort() {
      var active = seg.querySelector('button.active');
      return active ? active.getAttribute('data-sort') : 'date';
    }

    function renumber() {
      var items = list.querySelectorAll('.pub');
      Array.prototype.forEach.call(items, function (it, i) {
        var num = it.querySelector('.pub__num');
        if (num) num.textContent = i + 1;
      });
    }

    function renderDate() {
      var items = Array.prototype.slice.call(list.querySelectorAll('.pub'));
      items.sort(function (a, b) {
        return (b.getAttribute('data-date') || '0') - (a.getAttribute('data-date') || '0');
      });
      list.innerHTML = '';
      items.forEach(function (it) { list.appendChild(it); });
      renumber();
    }

    function renderType() {
      var items = Array.prototype.slice.call(list.querySelectorAll('.pub'));
      items.sort(function (a, b) {
        return (b.getAttribute('data-date') || '0') - (a.getAttribute('data-date') || '0');
      });
      var journal = items.filter(function (it) { return it.getAttribute('data-type') === 'journal'; });
      var conf = items.filter(function (it) { return it.getAttribute('data-type') === 'conf'; });
      list.innerHTML = '';
      if (journal.length) {
        list.appendChild(groupHead('pubs.journal'));
        journal.forEach(function (it) { list.appendChild(it); });
      }
      if (conf.length) {
        list.appendChild(groupHead('pubs.conference'));
        conf.forEach(function (it) { list.appendChild(it); });
      }
      renumber();
    }

    function groupHead(i18nKey) {
      var el = document.createElement('div');
      el.className = 'pub-group-head';
      el.setAttribute('data-i18n', i18nKey);
      if (window.I18N) {
        var lang = document.documentElement.getAttribute('data-lang') || getLang();
        el.textContent = (window.I18N[lang] && window.I18N[lang][i18nKey]) || '';
      }
      return el;
    }

    Array.prototype.forEach.call(sortBtns, function (btn) {
      btn.addEventListener('click', function () {
        Array.prototype.forEach.call(sortBtns, function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        if (btn.getAttribute('data-sort') === 'type') renderType();
        else renderDate();
      });
    });

    if (currentSort() === 'type') renderType();
  }

  /* ---------- 通用弹窗遮罩 ---------- */
  function ensureOverlay() {
    var ov = document.getElementById('modal-overlay');
    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'modal-overlay';
      ov.className = 'modal-overlay';
      ov.addEventListener('click', closeModals);
      document.body.appendChild(ov);
    }
    return ov;
  }

  function openModal(id) {
    var el = document.getElementById(id);
    if (!el) return;
    ensureOverlay();
    document.getElementById('modal-overlay').classList.add('visible');
    el.classList.add('open');
    document.body.classList.add('modal-open');
  }

  function closeModals() {
    var overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.remove('visible');
    var modals = document.querySelectorAll('.modal.open, .student-dialog.open');
    Array.prototype.forEach.call(modals, function (m) { m.classList.remove('open'); });
    document.body.classList.remove('modal-open');
  }

  function bindBibModals() {
    var triggers = document.querySelectorAll('[data-bib]');
    Array.prototype.forEach.call(triggers, function (btn) {
      btn.addEventListener('click', function () {
        var id = 'bib-' + btn.getAttribute('data-bib');
        openModal(id);
      });
    });
    var closes = document.querySelectorAll('.modal .modal-close');
    Array.prototype.forEach.call(closes, function (c) {
      c.addEventListener('click', closeModals);
    });
  }

  /* ---------- 复制工具 ---------- */
  function copyText(text, btn) {
    function done() {
      var label = btn && btn.querySelector('[data-i18n]');
      var original = label ? label.textContent : 'Copied';
      if (label && window.I18N) {
        var lang = document.documentElement.getAttribute('data-lang') || getLang();
        label.textContent = (window.I18N[lang] && window.I18N[lang]['common.copied']) || 'Copied';
      }
      setTimeout(function () { if (label) label.textContent = original; }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, cb) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    cb();
  }

  function bindCopyButtons() {
    var buttons = document.querySelectorAll('[data-copy]');
    Array.prototype.forEach.call(buttons, function (btn) {
      btn.addEventListener('click', function () {
        var target = document.querySelector(btn.getAttribute('data-copy-target')) ||
                     btn.getAttribute('data-copy-value');
        var text = typeof target === 'string' ? target : (target ? target.textContent : '');
        copyText(text.trim(), btn);
      });
    });
    // BibTeX 复制
    var bibCopies = document.querySelectorAll('[data-copy-bib]');
    Array.prototype.forEach.call(bibCopies, function (btn) {
      btn.addEventListener('click', function () {
        var pre = document.getElementById(btn.getAttribute('data-copy-bib'));
        copyText(pre ? pre.textContent : '', btn);
      });
    });
  }

  /* ---------- Contact 邮件表单 ---------- */
  function bindContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    var email = form.getAttribute('data-email') || '';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var type = form.querySelector('input[name="q_type"]:checked');
      var name = (form.querySelector('input[name="q_name"]').value || '').trim();
      var from = (form.querySelector('input[name="q_email"]').value || '').trim();
      var msg = (form.querySelector('textarea[name="q_msg"]').value || '').trim();
      if (!msg) {
        var msgEl = form.querySelector('textarea[name="q_msg"]');
        msgEl.focus();
        msgEl.setAttribute('aria-invalid', 'true');
        return;
      }
      var typeLabel = type ? type.value : 'General';
      var subject = '[Website ' + typeLabel + ']' + (name ? ' - ' + name : '');
      var body = 'Type: ' + typeLabel + '\nName: ' + name + '\nEmail: ' + from + '\n\n' + msg;
      window.location.href = 'mailto:' + email +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
      var hint = document.getElementById('form-hint');
      if (hint) hint.classList.remove('hidden');
    });
    var types = form.querySelectorAll('input[name="q_type"]');
    Array.prototype.forEach.call(types, function (t) {
      t.addEventListener('change', function () {
        form.querySelectorAll('.type-option').forEach(function (o) {
          var inp = o.querySelector('input');
          o.classList.toggle('active', inp.checked);
        });
      });
    });
  }

  /* ---------- Student 详情弹窗 ---------- */
  function bindStudentDialogs() {
    var triggers = document.querySelectorAll('[data-student]');
    Array.prototype.forEach.call(triggers, function (btn) {
      btn.addEventListener('click', function () {
        openModal('stu-' + btn.getAttribute('data-student'));
      });
    });
    var closes = document.querySelectorAll('.student-dialog .modal-close');
    Array.prototype.forEach.call(closes, function (c) {
      c.addEventListener('click', closeModals);
    });
  }

  /* ---------- 滚动显现 ---------- */
  function bindReveal() {
    if (!('IntersectionObserver' in window)) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    var targets = document.querySelectorAll('.section-head, .card, .pub-card, .stat, .teaching-card, .contact-card, .cv-block');
    if (!targets.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    Array.prototype.forEach.call(targets, function (t) { io.observe(t); });
  }

  /* ---------- 初始化 ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getTheme());
    bindThemeToggle();
    applyLang(getLang());
    bindLangToggle();
    bindNavToggle();
    bindPubSort();
    bindBibModals();
    bindCopyButtons();
    bindContactForm();
    bindStudentDialogs();
    bindReveal();
  });
})();
