---
layout: page
permalink: /lab/
title: "CILab — Computational Intelligence Lab"
subtitle: "Research on intelligent optimization and computational intelligence at Shandong Normal University."
redirect_from:
  - /portfolio/
---

{% include base_path %}

<p class="prose" style="max-width: 760px; margin-bottom: var(--s-12);">
  The <strong>{{ site.data.lab.name }}</strong> (山师大智能计算研究课题组) focuses on the frontiers of intelligent optimization and computational intelligence. We adhere to the educational philosophy of <em>{{ site.data.lab.slogan }}</em>, emphasizing the deep integration of theory and practice.
</p>

<h2 style="margin-bottom: var(--s-6);">Research Directions</h2>
<div class="grid grid--3">
  {% for d in site.data.lab.directions %}
  {% include card.html icon=d.icon title=d.title text=d.text %}
  {% endfor %}
</div>

{% if site.data.lab.platform %}
<div style="height: var(--s-12);"></div>
<article class="card" style="display:flex; gap: var(--s-6); align-items:center; flex-wrap: wrap;">
  <div class="icon-tile" style="width:72px; height:72px; border-radius: var(--r-xl);">
    <svg class="icon" style="width:36px; height:36px;"><use href="#i-{{ site.data.lab.platform.icon }}"/></svg>
  </div>
  <div style="flex:1; min-width: 260px;">
    <h3>{{ site.data.lab.platform.name }}</h3>
    <p style="margin-top: var(--s-2);">{{ site.data.lab.platform.desc }}</p>
    {% if site.data.lab.platform.link %}
    <p style="margin-top: var(--s-3);"><a href="{{ site.data.lab.platform.link }}">{{ site.data.lab.platform.link }} <svg class="icon" style="width:14px; height:14px; display:inline-block; vertical-align: -2px;"><use href="#i-external"/></svg></a></p>
    {% endif %}
  </div>
</article>
{% endif %}

<h2 style="margin: var(--s-16) 0 var(--s-6);">Research Projects</h2>
<div class="grid grid--2">
  {% for p in site.data.lab.projects %}
  <article class="card">
    <div class="pub__tags" style="margin-bottom: var(--s-3);">
      <span class="tag">{{ p.period }}</span>
      {% if p.id %}<span class="tag tag--q2">{{ p.id }}</span>{% endif %}
      {% if p.highlight %}<span class="tag tag--esi">PI</span>{% endif %}
    </div>
    <h3>{{ p.title }}</h3>
    <p style="margin-top: var(--s-3);">{{ p.text }}</p>
  </article>
  {% endfor %}
</div>

<h2 style="margin: var(--s-16) 0 var(--s-6);">Granted Patents</h2>
<div class="grid grid--2">
  {% for pat in site.data.lab.patents %}
  {% include card.html icon="database" title=pat.title text=pat.text %}
  {% endfor %}
</div>
