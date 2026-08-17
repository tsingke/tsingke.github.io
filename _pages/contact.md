---
layout: page
permalink: /contact/
title: "Contact"
subtitle: "Feel free to reach out for research collaboration, graduate recruitment, or academic exchanges."
---

{% include base_path %}

{% include contact-methods.html %}

<div style="height: var(--s-12);"></div>

{% if site.data.contact.office %}
<article class="contact-card" style="align-items: flex-start;">
  <div class="icon-tile"><svg class="icon"><use href="#i-{{ site.data.contact.office.icon }}"/></svg></div>
  <div>
    <div class="contact-card__label">{{ site.data.contact.office.label }}</div>
    <div class="contact-card__value">{{ site.data.contact.office.value }}</div>
  </div>
</article>
{% endif %}

<div style="height: var(--s-12);"></div>

<div class="cta-banner">
  <div class="dots"></div>
  <h2>Welcome to Write to Me</h2>
  <p>Whether you are a prospective student, a collaborator, or a peer scholar, your message is always welcome.</p>
  <a class="btn btn--light btn--lg" href="mailto:{{ site.author.email }}">
    <svg class="icon"><use href="#i-mail"/></svg> {{ site.author.email }}
  </a>
</div>
