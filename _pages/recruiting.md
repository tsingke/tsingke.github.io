---
layout: page
permalink: /recruiting/
title: "Join Our Group"
subtitle: "Recruiting graduate students in Computer Science and Technology and Computer Technology, as well as outstanding undergraduates."
---

{% include base_path %}

<p class="prose" style="max-width: 760px; margin-bottom: var(--s-12);">
  I recruit <strong>3-4 master's students per year</strong> in <strong>Computer Science and Technology</strong> (academic track) and <strong>Computer Technology</strong> (professional track). Outstanding undergraduates are also welcome to join our research team. If you are interested in intelligent optimization and computational intelligence — with a solid foundation in computer science, artificial intelligence, mathematics, or bioinformatics — feel free to contact me by email.
</p>

<div class="cta-banner" style="padding: var(--s-12) var(--s-8);">
  <div class="dots"></div>
  <div class="icon-tile" style="width:72px; height:72px; margin: 0 auto var(--s-6); background: rgba(255,255,255,.18); color:#fff; border-radius: var(--r-xl);">
    <svg class="icon" style="width:36px; height:36px;"><use href="#i-quote"/></svg>
  </div>
  <p style="font-size: var(--fs-lg); font-style: italic; max-width: 640px;">
    海阔凭鱼跃，天高任鸟飞，诚挚欢迎优秀学子加入"山师大智能计算研究课题组"！
  </p>
  <p style="color: rgba(255,255,255,.8); font-size: var(--fs-sm); margin-top: var(--s-4);">
    -- Mentor's Message · 导师寄语
  </p>
</div>

<div style="height: var(--s-12);"></div>

<h2 class="pub-section-title" data-i18n="recruiting.philosophy">Our Philosophy</h2>
<div class="grid grid--2" style="margin-bottom: var(--s-12);">
  <div class="card">
    <div class="icon-tile"><svg class="icon"><use href="#i-sparkles"/></svg></div>
    <h3>因材施教 · 知行合一</h3>
    <p style="margin-top: var(--s-2);">Tailoring teaching to each student and unifying knowledge with practice — deep integration of theory and application.</p>
  </div>
  <div class="card">
    <div class="icon-tile"><svg class="icon"><use href="#i-lightbulb"/></svg></div>
    <h3>格物致知 · 守正创新</h3>
    <p style="margin-top: var(--s-2);">Self-cultivation through inquiry and innovation — solid fundamentals with the courage to explore the frontier.</p>
  </div>
</div>

<h2 class="pub-section-title" data-i18n="recruiting.directions">Research Directions</h2>
<div class="grid grid--3" style="margin-bottom: var(--s-12);">
  {% for d in site.data.lab.directions %}
    {% include card.html icon=d.icon title=d.title text=d.text %}
  {% endfor %}
</div>

<h2 class="pub-section-title" data-i18n="recruiting.future">What You Will Gain</h2>
<div class="grid grid--3" style="margin-bottom: var(--s-12);">
  {% for item in site.data.students.achievements limit:6 %}
    {% include card.html icon=item.icon title=item.title text=item.text %}
  {% endfor %}
</div>

<h2 class="pub-section-title" data-i18n="recruiting.resources">Resources & Mentoring</h2>
<div class="grid grid--2" style="margin-bottom: var(--s-12);">
  <div class="card">
    <div class="icon-tile"><svg class="icon"><use href="#i-platform"/></svg></div>
    <h3>PlatECO Platform</h3>
    <p style="margin-top: var(--s-2);">Open-source intelligent-optimization platform for algorithm development, benchmarking, and visualization.</p>
  </div>
  <div class="card">
    <div class="icon-tile"><svg class="icon"><use href="#i-cpu"/></svg></div>
    <h3>GPU / CUDA Computing</h3>
    <p style="margin-top: var(--s-2);">GPU-accelerated parallel computing resources for large-scale and high-dimensional optimization.</p>
  </div>
  <div class="card">
    <div class="icon-tile"><svg class="icon"><use href="#i-users"/></svg></div>
    <h3>Weekly Seminars & Writing</h3>
    <p style="margin-top: var(--s-2);">Regular group meetings, literature review, paper-writing and presentation coaching.</p>
  </div>
  <div class="card">
    <div class="icon-tile"><svg class="icon"><use href="#i-network"/></svg></div>
    <h3>Interdisciplinary Applications</h3>
    <p style="margin-top: var(--s-2);">UAV path planning, gene sequence analysis, intelligent diagnosis, advanced manufacturing, and energy-system optimization.</p>
  </div>
</div>

<h2 class="pub-section-title" data-i18n="recruiting.contact">Contact Us</h2>
<div class="contact-layout">
  <div class="grid grid--2">
    <div class="contact-card">
      <div class="icon-tile" style="width:44px;height:44px;"><svg class="icon"><use href="#i-mail"/></svg></div>
      <div style="min-width:0;">
        <div class="contact-card__label">Email</div>
        <div class="contact-card__value"><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></div>
      </div>
    </div>
    <div class="contact-card">
      <div class="icon-tile" style="width:44px;height:44px;"><svg class="icon"><use href="#i-phone"/></svg></div>
      <div style="min-width:0;">
        <div class="contact-card__label">Phone</div>
        <div class="contact-card__value">+86 139 5312 8163</div>
      </div>
    </div>
    <div class="contact-card" style="grid-column: 1 / -1;">
      <div class="icon-tile" style="width:44px;height:44px;"><svg class="icon"><use href="#i-wechat"/></svg></div>
      <div style="min-width:0;">
        <div class="contact-card__label">WeChat</div>
        <div class="contact-card__value">13953128163</div>
      </div>
    </div>
  </div>
  <div style="display:flex; flex-direction:column; gap: var(--s-4); align-items:center; justify-content:center;">
    <p style="color: var(--c-text-2); text-align:center; max-width: 320px;">
      Interested? Send a recruiting inquiry and we will get back to you.
    </p>
    <a class="btn btn--lg" href="mailto:{{ site.author.email }}?subject=%5BWebsite%20Recruiting%5D%20Prospective%20Student">
      <svg class="icon"><use href="#i-mail"/></svg> Send Recruiting Inquiry
    </a>
  </div>
</div>
