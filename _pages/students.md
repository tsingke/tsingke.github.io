---
layout: page
permalink: /students/
title: "Students"
subtitle: "Research training and achievement highlights for undergraduate and graduate students."
---

{% include base_path %}

<div class="grid grid--2" style="margin-bottom: var(--s-16);">
  <a class="card" href="{{ base_path }}/students/graduate/" style="text-decoration:none; display:block;">
    <div class="icon-tile"><svg class="icon"><use href="#i-graduation-cap"/></svg></div>
    <h3 data-i18n="students.graduate">Graduate Students</h3>
    <p style="margin-top: var(--s-2);" data-i18n="students.graduate_desc">Current master's students and recent graduates of the group.</p>
    <p style="margin-top: var(--s-4); color: var(--c-primary); font-weight: var(--fw-semi);">View &rarr;</p>
  </a>
  <a class="card" href="{{ base_path }}/students/undergraduate/" style="text-decoration:none; display:block;">
    <div class="icon-tile"><svg class="icon"><use href="#i-users"/></svg></div>
    <h3 data-i18n="students.undergraduate">Undergraduate Students</h3>
    <p style="margin-top: var(--s-2);" data-i18n="students.undergraduate_desc">Undergraduate students supervised for theses, competitions, and research.</p>
    <p style="margin-top: var(--s-4); color: var(--c-primary); font-weight: var(--fw-semi);">View &rarr;</p>
  </a>
</div>

<h2 class="pub-section-title">Student Achievements</h2>
<div class="grid grid--3" style="margin-bottom: var(--s-16);">
  {% for item in site.data.students.achievements limit:6 %}
    {% include card.html icon=item.icon title=item.title text=item.text %}
  {% endfor %}
</div>

<div class="cta-banner">
  <div class="dots"></div>
  <h2 data-i18n="recruiting.cta_title">Interested in Joining My Group?</h2>
  <p data-i18n="recruiting.cta_sub">I welcome motivated students in computer science, artificial intelligence, mathematics, and bioinformatics.</p>
  <a class="btn btn--light btn--lg" href="{{ base_path }}/recruiting/">
    <svg class="icon"><use href="#i-users"/></svg> <span data-i18n="nav.recruiting">Recruiting</span>
  </a>
</div>
