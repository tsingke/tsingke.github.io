---
layout: page
permalink: /sitemap/
title: "Sitemap"
sitemap: false
---

{% include base_path %}

<h2 style="margin-bottom: var(--s-6);">Pages</h2>
<ul>
  {% for link in site.data.navigation.main %}
    <li><a href="{{ base_path }}{{ link.url }}">{{ link.title }}</a></li>
  {% endfor %}
</ul>

<h2 style="margin: var(--s-12) 0 var(--s-6);">Publications</h2>
<ul>
  {% for post in site.publications reversed %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<h2 style="margin: var(--s-12) 0 var(--s-6);">Teaching</h2>
<ul>
  {% for post in site.teaching %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
