---
layout: page
permalink: /recruiting/
title: "Join Our Group"
subtitle: "Recruiting graduate students in Computer Science and Technology and Computer Technology, as well as outstanding undergraduates."
---

{% include base_path %}

<div class="recruit-grid-bg" style="padding: var(--s-4) 0 var(--s-8); position:relative;">

  <div class="i18n-en" markdown="1" style="max-width:760px; position:relative;">
I recruit **3-4 master's students per year** in **Computer Science and Technology** (academic track) and **Computer Technology** (professional track). Outstanding undergraduates are also welcome. If you are interested in intelligent optimization and computational intelligence — with a solid foundation in computer science, artificial intelligence, mathematics, or bioinformatics — feel free to contact me by email.
  </div>
  <div class="i18n-zh" markdown="1" style="max-width:760px; position:relative;">
我每年计划招收**3-4 名硕士研究生**，专业涵盖**计算机科学与技术（学术型）**、**计算机技术（专业型）**，同时欢迎优秀本科生加入课题组。如果你对智能优化与智能计算感兴趣，且具备扎实的计算机、人工智能、数学或生物信息学基础，欢迎邮件联系。
  </div>

  <!-- 招生流程流线 -->
  <h2 class="pub-section-title" style="margin-top: var(--s-12);"><span class="i18n-en">How to Join</span><span class="i18n-zh">如何加入</span></h2>
  <div class="flow-steps">
    <div class="flow-step">
      <div class="flow-step__num">1</div>
      <h4><span class="i18n-en">Explore the Group</span><span class="i18n-zh">了解课题组</span></h4>
      <p><span class="i18n-en">Browse this site to learn about our research directions and achievements.</span><span class="i18n-zh">浏览本站了解课题组的研究方向与成果。</span></p>
    </div>
    <div class="flow-arrow"><svg class="icon"><use href="#i-external"/></svg></div>
    <div class="flow-step">
      <div class="flow-step__num">2</div>
      <h4><span class="i18n-en">Contact by Email</span><span class="i18n-zh">邮件联系</span></h4>
      <p><span class="i18n-en">Send your CV and research interests to tsingke@sdnu.edu.cn.</span><span class="i18n-zh">将个人简历与研究兴趣发送至 tsingke@sdnu.edu.cn。</span></p>
    </div>
    <div class="flow-arrow"><svg class="icon"><use href="#i-external"/></svg></div>
    <div class="flow-step">
      <div class="flow-step__num">3</div>
      <h4><span class="i18n-en">Interview &amp; Admission</span><span class="i18n-zh">复试录取</span></h4>
      <p><span class="i18n-en">Take part in the entrance interview for graduate admission.</span><span class="i18n-zh">参加硕士研究生入学复试。</span></p>
    </div>
    <div class="flow-arrow"><svg class="icon"><use href="#i-external"/></svg></div>
    <div class="flow-step">
      <div class="flow-step__num">4</div>
      <h4><span class="i18n-en">Join the Team</span><span class="i18n-zh">加入团队</span></h4>
      <p><span class="i18n-en">Begin your research journey in intelligent optimization.</span><span class="i18n-zh">开启智能优化方向的科研之旅。</span></p>
    </div>
  </div>

</div>

<!-- 培养理念 -->
<h2 class="pub-section-title" data-i18n="recruiting.philosophy">Our Philosophy</h2>
<div class="grid grid--2" style="margin-bottom: var(--s-12);">
  <div class="card">
    <div class="icon-tile"><svg class="icon"><use href="#i-sparkles"/></svg></div>
    <h3><span class="i18n-en">Tailor &amp; Practice</span><span class="i18n-zh">因材施教 · 知行合一</span></h3>
    <p style="margin-top: var(--s-2);"><span class="i18n-en">Tailoring teaching to each student and unifying knowledge with practice — deep integration of theory and application.</span><span class="i18n-zh">根据学生特点因材施教，注重知行合一——理论与实践深度融合。</span></p>
  </div>
  <div class="card">
    <div class="icon-tile"><svg class="icon"><use href="#i-lightbulb"/></svg></div>
    <h3><span class="i18n-en">Inquiry &amp; Innovation</span><span class="i18n-zh">格物致知 · 守正创新</span></h3>
    <p style="margin-top: var(--s-2);"><span class="i18n-en">Self-cultivation through inquiry and innovation — solid fundamentals with the courage to explore the frontier.</span><span class="i18n-zh">通过探究与创新自我修炼——夯实基础，勇于探索前沿。</span></p>
  </div>
</div>

<!-- 研究方向 -->
<h2 class="pub-section-title" data-i18n="recruiting.directions">Research Directions</h2>
<div class="grid grid--3" style="margin-bottom: var(--s-12);">
  {% for d in site.data.lab.directions %}
    {% include card.html icon=d.icon title=d.title title_zh=d.title_zh text=d.text text_zh=d.text_zh %}
  {% endfor %}
</div>

<!-- 学生发展 -->
<h2 class="pub-section-title" data-i18n="recruiting.future">What You Will Gain</h2>
<div class="grid grid--3" style="margin-bottom: var(--s-12);">
  {% for item in site.data.students.achievements limit:6 %}
    {% include card.html icon=item.icon title=item.title title_zh=item.title_zh text=item.text text_zh=item.text_zh %}
  {% endfor %}
</div>

<!-- 软硬件指导 -->
<h2 class="pub-section-title" data-i18n="recruiting.resources">Resources & Mentoring</h2>
<div class="grid grid--2" style="margin-bottom: var(--s-12);">
  <div class="card">
    <div class="icon-tile"><svg class="icon"><use href="#i-platform"/></svg></div>
    <h3><span class="i18n-en">PlatECO Platform</span><span class="i18n-zh">PlatECO 平台</span></h3>
    <p style="margin-top: var(--s-2);"><span class="i18n-en">Open-source intelligent-optimization platform for algorithm development, benchmarking, and visualization.</span><span class="i18n-zh">智能优化开源平台，支持算法开发、批量评测与可视化。</span></p>
  </div>
  <div class="card">
    <div class="icon-tile"><svg class="icon"><use href="#i-cpu"/></svg></div>
    <h3><span class="i18n-en">GPU / CUDA Computing</span><span class="i18n-zh">GPU/CUDA 计算</span></h3>
    <p style="margin-top: var(--s-2);"><span class="i18n-en">GPU-accelerated parallel computing resources for large-scale and high-dimensional optimization.</span><span class="i18n-zh">面向大规模、高维优化的 GPU 加速并行计算资源。</span></p>
  </div>
  <div class="card">
    <div class="icon-tile"><svg class="icon"><use href="#i-users"/></svg></div>
    <h3><span class="i18n-en">Weekly Seminars &amp; Writing</span><span class="i18n-zh">组会与论文写作</span></h3>
    <p style="margin-top: var(--s-2);"><span class="i18n-en">Regular group meetings, literature review, paper-writing and presentation coaching.</span><span class="i18n-zh">定期组会、文献阅读、论文写作与汇报指导。</span></p>
  </div>
  <div class="card">
    <div class="icon-tile"><svg class="icon"><use href="#i-network"/></svg></div>
    <h3><span class="i18n-en">Interdisciplinary Applications</span><span class="i18n-zh">跨学科应用</span></h3>
    <p style="margin-top: var(--s-2);"><span class="i18n-en">UAV path planning, gene sequence analysis, intelligent diagnosis, advanced manufacturing, and energy-system optimization.</span><span class="i18n-zh">无人机路径规划、基因序列分析、智能诊断、先进制造与能源系统优化。</span></p>
  </div>
</div>

<!-- 导师寄语 -->
<div class="cta-banner" style="margin-bottom: var(--s-12);">
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

<!-- 联系方式 -->
<h2 class="pub-section-title" data-i18n="recruiting.contact">Contact Us</h2>
<div class="grid grid--3" style="margin-bottom: var(--s-8);">
  <div class="contact-card">
    <div class="icon-tile" style="width:44px;height:44px;"><svg class="icon"><use href="#i-mail"/></svg></div>
    <div style="min-width:0;">
      <div class="contact-card__label"><span class="i18n-en">Email</span><span class="i18n-zh">邮箱</span></div>
      <div class="contact-card__value"><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></div>
    </div>
  </div>
  <div class="contact-card">
    <div class="icon-tile" style="width:44px;height:44px;"><svg class="icon"><use href="#i-phone"/></svg></div>
    <div style="min-width:0;">
      <div class="contact-card__label"><span class="i18n-en">Phone</span><span class="i18n-zh">电话</span></div>
      <div class="contact-card__value">+86 139 5312 8163</div>
    </div>
  </div>
  <div class="contact-card">
    <div class="icon-tile" style="width:44px;height:44px;"><svg class="icon"><use href="#i-wechat"/></svg></div>
    <div style="min-width:0;">
      <div class="contact-card__label"><span class="i18n-en">WeChat</span><span class="i18n-zh">微信</span></div>
      <div class="contact-card__value">13953128163</div>
    </div>
  </div>
</div>
<p style="text-align:center; margin-top: var(--s-8);">
  <a class="btn btn--lg" href="mailto:{{ site.author.email }}?subject=%5BWebsite%20Recruiting%5D%20Prospective%20Student">
    <svg class="icon"><use href="#i-mail"/></svg> <span class="i18n-en">Send Recruiting Inquiry</span><span class="i18n-zh">发送招生咨询</span>
  </a>
</p>
