---
layout: page
permalink: /cv/
title: "Curriculum Vitae"
subtitle: "Academic background, research, teaching, and professional service."
redirect_from:
  - /resume
---

{% include base_path %}

<div style="display:flex; flex-wrap:wrap; gap: var(--s-4); margin-bottom: var(--s-16);">
  {% for pdf in site.data.cv.pdfs %}
  <a class="btn btn--lg" href="{{ base_path }}{{ pdf.file }}">
    <svg class="icon"><use href="#i-{{ pdf.icon | default: 'download' }}"/></svg> {{ pdf.label }}
  </a>
  {% endfor %}
</div>

{% include cv-section.html icon="graduation-cap" title="Education" body='
<div class="cv-item"><h3>Ph.D. in Computer Science and Technology</h3><div class="cv-item__meta">Shandong University &middot; 2013&ndash;2017</div><p>Outstanding Graduate of Shandong University; Outstanding Graduate of Shandong Province.</p></div>
<div class="cv-item"><h3>M.Eng. in Computer Application Technology</h3><div class="cv-item__meta">University of Jinan &middot; 2010&ndash;2013</div><p>Outstanding Graduate; National Graduate Scholarship.</p></div>
<div class="cv-item"><h3>B.Eng. in Computer Science and Technology</h3><div class="cv-item__meta">Qingdao Binhai University &middot; 2006&ndash;2010</div><p>Outstanding Graduate; Inaugural Distinguished Alumni.</p></div>
' %}

{% include cv-section.html icon="user" title="Work Experience" body='
<div class="cv-item"><h3>Associate Professor &amp; Master&rsquo;s Supervisor</h3><div class="cv-item__meta">School of Computer Science and Artificial Intelligence, Shandong Normal University &middot; 2024&ndash;present</div></div>
<div class="cv-item"><h3>Lecturer</h3><div class="cv-item__meta">School of Computer Science and Artificial Intelligence, Shandong Normal University &middot; 2017&ndash;2023</div><p>Outstanding Teaching Award of Shandong Normal University.</p></div>
' %}

{% include cv-section.html icon="lightbulb" title="Research Interests" body='
<ul>
<li>Swarm Intelligence</li>
<li>Evolutionary Computation</li>
<li>Learning-assisted / Deep-learning-assisted Optimization</li>
<li>Large-scale Optimization</li>
<li>GPU/CUDA Parallel Intelligent Computing</li>
<li>Bioinformatics and Engineering Optimization</li>
</ul>
' %}

<div class="cv-block">
  <div class="cv-block__head">
    <div class="icon-tile"><svg class="icon"><use href="#i-book"/></svg></div>
    <h2>Publications</h2>
  </div>
  <div class="cv-block__body">
    <p style="color: var(--c-text-3); font-size: var(--fs-sm); margin-bottom: var(--s-4);">
      More than 40 SCI-indexed journal papers (2 ESI Highly Cited). Representative works:
    </p>
    {% for post in site.publications reversed %}
    <div class="cv-item">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <div class="cv-item__meta">{{ post.venue }}</div>
    </div>
    {% endfor %}
  </div>
</div>

{% include cv-section.html icon="database" title="Projects" body='
<div class="cv-item"><h3>NSFC Young Scientists Fund, No. 62006144</h3><div class="cv-item__meta">2021&ndash;2024 &middot; PI</div><p>Large-scale global optimization for biological multiple sequence alignment. Completed.</p></div>
<div class="cv-item"><h3>Postdoctoral Research Project</h3><div class="cv-item__meta">Shandong Normal University &middot; 2018&ndash;2021 &middot; PI</div><p>Optimization theory and methods for high-dimensional complex problems. Completed.</p></div>
<div class="cv-item"><h3>MOE Industry-University Cooperation Project</h3><div class="cv-item__meta">2018&ndash;2020 &middot; PI</div><p>Construction and reform of the Mobile Computing course. Completed.</p></div>
<div class="cv-item"><h3>University-level Young Faculty Project</h3><div class="cv-item__meta">2018&ndash;2019 &middot; PI</div><p>Convergence-divergence cooperative particle swarm optimization. Completed.</p></div>
' %}

{% include cv-section.html icon="medal" title="Patents" body='
<p>Granted 5 national invention patents (4 as the first inventor), covering parameter-adaptive Growth Optimizer, biological multiple sequence alignment, multi-level threshold image segmentation, and gene sequence alignment.</p>
' %}

{% include cv-section.html icon="award" title="Awards &amp; Honours" body='
<ul>
<li>CSC Visiting Scholar Fellowship, China Scholarship Council, 2025</li>
<li>Excellent Teaching Award, Shandong Normal University</li>
<li>Excellent Supervisor for Educational Practice, Shandong Normal University</li>
<li>Provincial Outstanding Trainee, Teaching Demonstration Training for Young Faculty</li>
<li>Excellent Award, 6th Chaoxing Cup Young Faculty Teaching Competition, Shandong Province</li>
<li>Outstanding Graduate of Shandong University and Shandong Province</li>
</ul>
' %}

<div class="cv-block">
  <div class="cv-block__head">
    <div class="icon-tile"><svg class="icon"><use href="#i-chalkboard"/></svg></div>
    <h2>Teaching</h2>
  </div>
  <div class="cv-block__body">
    {% for post in site.teaching reversed %}
    <div class="cv-item">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <div class="cv-item__meta">{{ post.type }} &middot; {{ post.venue }}</div>
    </div>
    {% endfor %}
  </div>
</div>

{% include cv-section.html icon="users" title="Academic Service" body='
<ul>
<li>Council Member, Shandong Artificial Intelligence Association</li>
<li>Deputy Secretary-General, Computational Intelligence Specialized Committee, Shandong Artificial Intelligence Association</li>
<li>Committee Member, Optimization Scheduling and Decision Specialized Committee</li>
<li>Member, China Computer Federation (CCF); Member, IEEE</li>
<li>Member, Operations Research Society of China</li>
<li>Reviewer for 20+ SCI journals and CCF conferences</li>
</ul>
' %}

{% include cv-section.html icon="calendar" title="Visiting Plan" body='
<p>CSC-funded Visiting Scholar, 12 months, expected to start in <strong>2027</strong>.</p>
' %}

{% include cv-section.html icon="mail" title="Contact" body='
<ul>
<li>Email: <strong>tsingke@sdnu.edu.cn</strong></li>
<li>Office: Room 402/404, Wencong Building, Changqinghu Campus, Shandong Normal University</li>
<li>ORCID: <a href="https://orcid.org/0000-0003-3960-172X">0000-0003-3960-172X</a></li>
<li>GitHub: <a href="https://github.com/tsingke">github.com/tsingke</a></li>
</ul>
<p style="margin-top: var(--s-6); color: var(--c-text-3); font-size: var(--fs-sm);">中文简介：张庆科，山东师范大学计算机与人工智能学院副教授、硕士生导师，研究方向为群体智能、演化计算与并行分布式智能计算，长期从事智能优化与智能计算前沿领域的教学与科研工作。</p>
' %}
