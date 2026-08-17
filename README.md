# Qingke Zhang — Academic Homepage

Personal academic website of **Qingke Zhang** (张庆科), Associate Professor at the School of Computer Science and Artificial Intelligence, Shandong Normal University.

**URL:** https://tsingke.github.io

## Site Structure（站点结构）

| 目录 | 模块 | 说明 |
|---|---|---|
| `_pages/` | 页面 | `home.md` 首页 · `publications.html` 论文 · `teaching.html` 教学 · `students.md` 学生总览 · `students-graduate.html` 在读研究生 · `students-undergraduate.html` 本科生 · `lab.md` CILab · `recruiting.md` 招生 · `cv.md` 简历 · `contact.html` 联系 |
| `_publications/` | 论文 | 每篇一个 markdown（含 abstract/bibtex/PDF/截图/标签） |
| `_teaching/` | 教学 | 每门课一个 markdown（含课程资料） |
| `_data/` | 数据层 | `i18n.yml` 中英文案 · `members.yml` 学生名单 · `lab.yml` 实验室 · `contact.yml` 联系 · `news.yml` 动态 · `students.yml` 培养成果 · `cv.yml` CV 配置 |
| `_layouts/` | 布局 | `default` · `home` · `page` · `archive` · `single` · `publication` 论文详情 · `course` 课程详情 |
| `_includes/` | 组件 | `nav` 导航 · `hero` 首屏 · `card` 卡片 · `icons` SVG 图标 · `contact-form` 邮件表单 · `pub-actions` 论文按钮 等 |
| `assets/css/` | 样式 | `tokens.css` 设计变量 + `main.css` 组件样式（纯 CSS） |
| `assets/js/app.js` | 交互 | 中英文切换 · 论文排序 · BibTeX 弹窗 · 邮件表单 · 学生详情 |
| `files/papers/` | 论文 PDF | 14 篇论文全文 |
| `files/` | 简历 | `main-en.pdf` / `main-zh.pdf` |
| `images/papers/` | 论文截图 | 14 张第一页截图 |

## How to Update（如何更新）

| 更新内容 | 操作 |
|---|---|
| 加一篇论文 | 在 `_publications/` 新建 md（照抄现有 frontmatter，含 pdf/screenshot/abstract/bibtex） |
| 加一门课程 | 在 `_teaching/` 新建 md（参考现有课程结构） |
| 加一条新闻 | 在 `_data/news.yml` 顶部追加一条 |
| 改学生名单 | 编辑 `_data/members.yml`（含在读/毕业生、本科生三组） |
| 改研究方向/项目/专利 | 编辑 `_data/lab.yml` |
| 改联系方式 | 编辑 `_data/contact.yml` |
| 换简历/论文 PDF | 覆盖 `files/` 下同名文件 |
| 改导航 | 编辑 `_data/navigation.yml` |
| 改界面中英文案 | 编辑 `_data/i18n.yml`（en/zh 两套） |

改完 `git add . && git commit -m "..." && git push` 即自动重新部署。

## Features

- **中英文切换**：导航栏按钮即时切换界面文案，记忆偏好（localStorage）
- **论文模块**：按时间/类型排序，PDF/源代码/在线阅读/引用四按钮，BibTeX 弹窗，详情页含摘要/关键词/截图
- **课程资料站**：每门课含课程介绍、教材、授课目录、章节课件、课程代码、视频、参考资料
- **留言与项目合作**：Contact 页邮件表单（mailto 方案，类型可选）
- **学生模块**：在读研究生（点击卡片看详情）、毕业生、本科生（毕业设计/竞赛/科研三组）
- **招生模块**：研究方向、培养理念、学生发展、软硬件资源、导师寄语
- **动画**：导航下划线、卡片 hover、滚动显现（尊重 prefers-reduced-motion）

## Design

Blue-purple gradient (#2563EB → #7C3AED) tech style. Pure CSS (no SCSS), inline SVG icon sprite, fully responsive.

Built with Jekyll on GitHub Pages.
