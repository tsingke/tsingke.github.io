# Qingke Zhang — Academic Homepage

Personal academic website of **Qingke Zhang** (张庆科), Associate Professor at the School of Computer Science and Artificial Intelligence, Shandong Normal University. Research on swarm intelligence, evolutionary computation, and parallel intelligent computing.

**URL:** https://tsingke.github.io

## Site Structure（站点结构）

The site follows a modular, data-driven organization. Each feature is one container; content updates never require touching layouts or styles.

| 目录 | 模块 | 说明 |
|---|---|---|
| `_pages/` | 页面 | `home.md` 首页 · `publications.html` · `teaching.html` · `students.md` · `lab.md` · `cv.md` · `contact.md` |
| `_publications/` | 论文 | 每篇一个 markdown，改论文只动这里 |
| `_teaching/` | 教学 | 每门课一个 markdown |
| `_data/` | 数据层 | `stats.yml` 统计 · `news.yml` 动态 · `students.yml` 学生 · `lab.yml` 实验室 · `contact.yml` 联系 · `cv.yml` CV 配置 |
| `_layouts/` | 布局 | `default` 基础壳 · `home` 首页 · `page` 内页 · `archive` 列表 · `single` 详情 |
| `_includes/` | 组件 | `nav` 导航 · `hero` 首屏 · `card` 卡片 · `icons` SVG 图标 · `footer` 页脚 等 |
| `assets/css/` | 样式 | `tokens.css` 设计变量 + `main.css` 组件样式（纯 CSS） |
| `files/` | 下载 | `main-en.pdf` / `main-zh.pdf`（CV 简历） |
| `images/` | 图片 | `profile.jpg` 头像 + favicon |

## How to Update（如何更新）

| 更新内容 | 操作 |
|---|---|
| 加一篇论文 | 在 `_publications/` 新建 markdown（照抄现有 frontmatter） |
| 加一门课程 | 在 `_teaching/` 新建 markdown |
| 加一条新闻 | 在 `_data/news.yml` 顶部追加一条 |
| 改统计数字 | 编辑 `_data/stats.yml` |
| 改研究方向/项目/专利 | 编辑 `_data/lab.yml` |
| 改联系方式 | 编辑 `_data/contact.yml` 或 `_config.yml` 的 `author` 块 |
| 换简历 PDF | 覆盖 `files/main-en.pdf` / `main-zh.pdf` |
| 改导航 | 编辑 `_data/navigation.yml` |

改完 `git add . && git commit -m "..." && git push` 即自动重新部署。

## Design

Blue-purple gradient (#2563EB → #7C3AED) tech style. Pure CSS (no SCSS compilation), inline SVG icon sprite, fully responsive. Design tokens in `assets/css/tokens.css`.

Built with Jekyll on GitHub Pages.
