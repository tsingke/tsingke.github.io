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

{% include cv-section.html icon="graduation-cap" title="Education" title_zh="教育经历" body='
<div class="cv-item"><h3><span class="i18n-en">Ph.D. in Computer Science and Technology</span><span class="i18n-zh">计算机科学与技术 工学博士</span></h3><div class="cv-item__meta"><span class="i18n-en">Shandong University · 2013&ndash;2017</span><span class="i18n-zh">山东大学 · 2013&ndash;2017</span></div><p><span class="i18n-en">Outstanding Graduate of Shandong University; Outstanding Graduate of Shandong Province.</span><span class="i18n-zh">山东大学优秀毕业生；山东省省级优秀毕业生。</span></p></div>
<div class="cv-item"><h3><span class="i18n-en">M.Eng. in Computer Application Technology</span><span class="i18n-zh">计算机应用技术 工学硕士</span></h3><div class="cv-item__meta"><span class="i18n-en">University of Jinan · 2010&ndash;2013</span><span class="i18n-zh">济南大学 · 2010&ndash;2013</span></div><p><span class="i18n-en">Outstanding Graduate; National Graduate Scholarship.</span><span class="i18n-zh">优秀毕业生；全国硕士研究生国家奖学金。</span></p></div>
<div class="cv-item"><h3><span class="i18n-en">B.Eng. in Computer Science and Technology</span><span class="i18n-zh">计算机科学与技术 工学学士</span></h3><div class="cv-item__meta"><span class="i18n-en">Qingdao Binhai University · 2006&ndash;2010</span><span class="i18n-zh">青岛滨海学院 · 2006&ndash;2010</span></div><p><span class="i18n-en">Outstanding Graduate; Inaugural Distinguished Alumni.</span><span class="i18n-zh">优秀毕业生；首届杰出校友。</span></p></div>
' %}

{% include cv-section.html icon="user" title="Work Experience" title_zh="工作经历" body='
<div class="cv-item"><h3><span class="i18n-en">Associate Professor &amp; Master&rsquo;s Supervisor</span><span class="i18n-zh">副教授 · 硕士生导师</span></h3><div class="cv-item__meta"><span class="i18n-en">School of Computer Science and Artificial Intelligence, Shandong Normal University · 2024&ndash;present</span><span class="i18n-zh">山东师范大学计算机与人工智能学院 · 2024 至今</span></div></div>
<div class="cv-item"><h3><span class="i18n-en">Lecturer</span><span class="i18n-zh">讲师</span></h3><div class="cv-item__meta"><span class="i18n-en">School of Computer Science and Artificial Intelligence, Shandong Normal University · 2017&ndash;2023</span><span class="i18n-zh">山东师范大学计算机与人工智能学院 · 2017&ndash;2023</span></div><p><span class="i18n-en">Outstanding Teaching Award of Shandong Normal University.</span><span class="i18n-zh">山东师范大学优秀教学奖。</span></p></div>
' %}

{% include cv-section.html icon="lightbulb" title="Research Interests" title_zh="研究方向" body='
<ul>
<li><span class="i18n-en">Swarm Intelligence</span><span class="i18n-zh">群体智能</span></li>
<li><span class="i18n-en">Evolutionary Computation</span><span class="i18n-zh">演化计算</span></li>
<li><span class="i18n-en">Learning-assisted / Deep-learning-assisted Optimization</span><span class="i18n-zh">学习型 / 深度学习辅助优化</span></li>
<li><span class="i18n-en">Large-scale Optimization</span><span class="i18n-zh">大规模优化</span></li>
<li><span class="i18n-en">GPU/CUDA Parallel Intelligent Computing</span><span class="i18n-zh">GPU/CUDA 并行智能计算</span></li>
<li><span class="i18n-en">Bioinformatics and Engineering Optimization</span><span class="i18n-zh">生物信息与工程优化</span></li>
</ul>
' %}

<div class="cv-block">
  <div class="cv-block__head">
    <div class="icon-tile"><svg class="icon"><use href="#i-book"/></svg></div>
    <h2><span class="i18n-en">Publications</span><span class="i18n-zh">发表论文</span></h2>
  </div>
  <div class="cv-block__body">
    <p style="color: var(--c-text-3); font-size: var(--fs-sm); margin-bottom: var(--s-4);">
      <span class="i18n-en">More than 40 SCI-indexed journal papers (2 ESI Highly Cited). Representative works:</span>
      <span class="i18n-zh">已发表 40 余篇 SCI 期刊论文（2 篇 ESI 高被引）。代表性工作：</span>
    </p>
    {% for post in site.publications reversed %}
    <div class="cv-item">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <div class="cv-item__meta">{{ post.venue }}</div>
    </div>
    {% endfor %}
  </div>
</div>

{% include cv-section.html icon="database" title="Projects" title_zh="科研项目" body='
<div class="cv-item"><h3><span class="i18n-en">NSFC Young Scientists Fund, No. 62006144</span><span class="i18n-zh">国家自然科学基金青年基金项目，No. 62006144</span></h3><div class="cv-item__meta"><span class="i18n-en">2021&ndash;2024 · PI</span><span class="i18n-zh">2021&ndash;2024 · 主持</span></div><p><span class="i18n-en">Large-scale global optimization for biological multiple sequence alignment. Completed.</span><span class="i18n-zh">面向生物多序列比对的大规模全局优化。已结题。</span></p></div>
<div class="cv-item"><h3><span class="i18n-en">Postdoctoral Research Project</span><span class="i18n-zh">博士后科研项目</span></h3><div class="cv-item__meta"><span class="i18n-en">Shandong Normal University · 2018&ndash;2021 · PI</span><span class="i18n-zh">山东师范大学 · 2018&ndash;2021 · 主持</span></div><p><span class="i18n-en">Optimization theory and methods for high-dimensional complex problems. Completed.</span><span class="i18n-zh">高维复杂问题优化理论与方法。已结题。</span></p></div>
<div class="cv-item"><h3><span class="i18n-en">MOE Industry-University Cooperation Project</span><span class="i18n-zh">教育部产学合作协同育人项目</span></h3><div class="cv-item__meta"><span class="i18n-en">2018&ndash;2020 · PI</span><span class="i18n-zh">2018&ndash;2020 · 主持</span></div><p><span class="i18n-en">Construction and reform of the Mobile Computing course. Completed.</span><span class="i18n-zh">《移动计算》课程建设与改革。已结题。</span></p></div>
<div class="cv-item"><h3><span class="i18n-en">University-level Young Faculty Project</span><span class="i18n-zh">校级青年教师科研项目</span></h3><div class="cv-item__meta"><span class="i18n-en">2018&ndash;2019 · PI</span><span class="i18n-zh">2018&ndash;2019 · 主持</span></div><p><span class="i18n-en">Convergence-divergence cooperative particle swarm optimization. Completed.</span><span class="i18n-zh">聚散协同粒子群优化。已结题。</span></p></div>
' %}

{% include cv-section.html icon="medal" title="Patents" title_zh="授权专利" body='
<p><span class="i18n-en">Granted 5 national invention patents (4 as the first inventor), covering parameter-adaptive Growth Optimizer, biological multiple sequence alignment, multi-level threshold image segmentation, and gene sequence alignment.</span><span class="i18n-zh">获授权国家发明专利 5 项（4 项第一发明人），覆盖参数自适应生长优化器、生物多序列比对、多级阈值图像分割与基因序列比对。</span></p>
' %}

{% include cv-section.html icon="award" title="Awards &amp; Honours" title_zh="荣誉奖励" body='
<ul>
<li><span class="i18n-en">CSC Visiting Scholar Fellowship, China Scholarship Council, 2025</span><span class="i18n-zh">国家留学基金委（CSC）公派访问学者，2025</span></li>
<li><span class="i18n-en">Excellent Teaching Award, Shandong Normal University</span><span class="i18n-zh">山东师范大学优秀教学奖</span></li>
<li><span class="i18n-en">Excellent Supervisor for Educational Practice</span><span class="i18n-zh">教育实习优秀指导教师</span></li>
<li><span class="i18n-en">Provincial Outstanding Trainee, Teaching Demonstration Training</span><span class="i18n-zh">省属高校青年教师教学示范省级优秀学员</span></li>
<li><span class="i18n-en">Excellent Award, 6th Chaoxing Cup Young Faculty Teaching Competition</span><span class="i18n-zh">第六届超星杯青年教师教学比赛优秀奖</span></li>
<li><span class="i18n-en">Outstanding Graduate of Shandong University and Shandong Province</span><span class="i18n-zh">山东大学、山东省优秀毕业生</span></li>
</ul>
' %}

<div class="cv-block">
  <div class="cv-block__head">
    <div class="icon-tile"><svg class="icon"><use href="#i-chalkboard"/></svg></div>
    <h2><span class="i18n-en">Teaching</span><span class="i18n-zh">教学工作</span></h2>
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

{% include cv-section.html icon="users" title="Academic Service" title_zh="学术服务" body='
<ul>
<li><span class="i18n-en">Council Member, Shandong Artificial Intelligence Association</span><span class="i18n-zh">山东省人工智能学会理事</span></li>
<li><span class="i18n-en">Deputy Secretary-General, Computational Intelligence Specialized Committee</span><span class="i18n-zh">山东省人工智能学会计算智能专委会副秘书长</span></li>
<li><span class="i18n-en">Committee Member, Optimization Scheduling and Decision Specialized Committee</span><span class="i18n-zh">山东省人工智能学会优化调度与决策专委会委员</span></li>
<li><span class="i18n-en">Member, China Computer Federation (CCF); Member, IEEE</span><span class="i18n-zh">CCF 会员；IEEE 会员</span></li>
<li><span class="i18n-en">Member, Operations Research Society of China</span><span class="i18n-zh">中国运筹学学会委员</span></li>
<li><span class="i18n-en">Reviewer for 20+ SCI journals and CCF conferences</span><span class="i18n-zh">20 余个 SCI 期刊与 CCF 会议审稿人</span></li>
</ul>
' %}

{% include cv-section.html icon="calendar" title="Visiting Plan" title_zh="访学计划" body='
<p><span class="i18n-en">CSC-funded Visiting Scholar, 12 months, expected to start in <strong>2027</strong>.</span><span class="i18n-zh">CSC 公派访问学者，时长 12 个月，预计 <strong>2027</strong> 年到岗。</span></p>
' %}

{% include cv-section.html icon="mail" title="Contact" title_zh="联系方式" body='
<ul>
<li><span class="i18n-en">Email</span><span class="i18n-zh">邮箱</span>: <strong>tsingke@sdnu.edu.cn</strong></li>
<li><span class="i18n-en">Office: Room 402/404, Wencong Building, Changqinghu Campus, Shandong Normal University</span><span class="i18n-zh">办公地点：山东师范大学长清湖校区文淙楼 402/404 室</span></li>
<li>ORCID: <a href="https://orcid.org/0000-0003-3960-172X">0000-0003-3960-172X</a></li>
<li>GitHub: <a href="https://github.com/tsingke">github.com/tsingke</a></li>
</ul>
' %}
