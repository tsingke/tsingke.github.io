---
layout: page
permalink: /students/
title: "Students"
subtitle: "Research training and achievement highlights for undergraduate and graduate students."
---

{% include base_path %}

{% if site.data.students.stats %}
<div class="stats" style="margin-bottom: var(--s-16);">
  {% for stat in site.data.students.stats %}
  <div class="stat">
    <div class="stat__num">{{ stat.num }}</div>
    <div class="stat__label">{{ stat.label }}</div>
  </div>
  {% endfor %}
</div>
{% endif %}

<h2 style="margin-bottom: var(--s-6);">Graduate Students</h2>
<p style="color: var(--c-text-2); max-width: 720px; margin-bottom: var(--s-8);">
  I have supervised more than 20 master's students. My students have won national scholarships and thesis awards, published dozens of papers in top-tier CAS JCR Q1/Q2 journals, and many have continued to doctoral programs at 985/211 universities.
</p>

<div class="grid grid--2">
  {% for item in site.data.students.achievements limit:6 %}
  {% include card.html icon=item.icon title=item.title text=item.text %}
  {% endfor %}
</div>

<h2 style="margin: var(--s-16) 0 var(--s-6);">Undergraduate Students</h2>
<p style="color: var(--c-text-2); max-width: 720px; margin-bottom: var(--s-8);">
  I have guided undergraduate students to national innovation projects, excellence theses, and numerous competition awards.
</p>

<div class="grid grid--3">
  {% for item in site.data.students.achievements offset:6 %}
  {% include card.html icon=item.icon title=item.title text=item.text %}
  {% endfor %}
</div>

<div class="cta-banner" style="margin-top: var(--s-16);">
  <div class="dots"></div>
  <h2>Recruiting Graduate Students</h2>
  <p>
    I recruit {{ site.data.students.recruitment.annual }} master's students per year in Computer Science and Technology (academic track) and Computer Technology (professional track). Students with a solid foundation in computer science, artificial intelligence, mathematics, or bioinformatics are warmly welcome.
  </p>
  <a class="btn btn--light btn--lg" href="mailto:{{ site.data.students.recruitment.email }}">
    <svg class="icon"><use href="#i-mail"/></svg> Contact Me
  </a>
</div>
