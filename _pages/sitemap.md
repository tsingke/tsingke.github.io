---
layout: page
permalink: /sitemap/
title: "Sitemap"
sitemap: false
---

{% include base_path %}

<h2 class="pub-section-title">Pages</h2>
<ul>
  {% for link in site.data.navigation.main %}
    <li><a href="{{ base_path }}{{ link.url }}">{{ link.title }}</a></li>
  {% endfor %}
  <li><a href="{{ base_path }}/students/graduate/">Graduate Students</a></li>
  <li><a href="{{ base_path }}/students/undergraduate/">Undergraduate Students</a></li>
</ul>

<h2 class="pub-section-title" style="margin-top: var(--s-12);">Publications</h2>
<ul>
  {% for post in site.publications reversed %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<h2 class="pub-section-title" style="margin-top: var(--s-12);">Teaching</h2>
<ul>
  {% for post in site.teaching %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
