// Open-source tools, newest first. One object per tool: name, a short
// tagline, a two-sentence description (en/zh), when to use it (use) and who
// it is for (who), meta badges (language, license, version) and links.
// Empty links are not rendered. The page is pages/tools.js.
const tools = [
  {
    id: 'segevalkit',
    name: 'SegEvalKit',
    tagline: {
      en: 'Evaluate medical image segmentation',
      zh: '医学图像分割评估'
    },
    en: 'Checks how good a medical image segmentation is. One command computes 56 metrics on CT or MR volumes, plus the statistics, plots and HTML report you need to compare models fairly.',
    zh: '用于检验医学图像分割结果的质量。一条命令即可在 CT 或 MR 体数据上计算 56 个指标，并生成公平比较模型所需的统计、图表和 HTML 报告。',
    use: {
      en: 'You have predicted masks and ground-truth masks and need to report or compare results, for a paper, a challenge submission or picking the best model.',
      zh: '当你已有预测掩码和真值掩码，需要为论文、挑战赛投稿或模型选择汇报或比较结果时。'
    },
    who: {
      en: 'Medical imaging researchers, students and challenge organisers who work with NIfTI segmentations in Python.',
      zh: '使用 Python 处理 NIfTI 分割结果的医学影像研究者、学生和挑战赛组织者。'
    },
    meta: ['Python', 'Apache-2.0', 'v0.1.0'],
    links: {
      code: 'https://github.com/aj-das-research/SegEvalKit',
      docs: 'https://aj-das-research.github.io/SegEvalKit/'
    }
  },
  {
    id: 'docberry',
    name: 'DocBerry',
    tagline: {
      en: 'Scientific PDF to Markdown',
      zh: '科学 PDF 转 Markdown'
    },
    en: 'Turns a scientific PDF into clean Markdown. It keeps the reading order of two-column papers and saves the tables, figures and equations as separate files, with equations also as LaTeX.',
    zh: '将科学 PDF 转换为整洁的 Markdown。它保留双栏论文的阅读顺序，并把表格、图片和公式分别保存为单独文件，公式同时输出为 LaTeX。',
    use: {
      en: 'You need the content of papers in a usable form: building a literature corpus, feeding papers to an LLM, or reusing a table, figure or equation.',
      zh: '当你需要以可用的形式获取论文内容时：构建文献语料库、把论文输入大语言模型，或复用其中的表格、图片和公式。'
    },
    who: {
      en: 'Anyone who works with scientific papers in Python, from students doing a literature review to developers building retrieval pipelines. Installs with pip.',
      zh: '所有用 Python 处理科学论文的人，从做文献综述的学生到构建检索流程的开发者。通过 pip 安装。'
    },
    meta: ['Python', 'MIT', 'PyPI 0.1.2'],
    links: {
      code: 'https://github.com/aj-das-research/docberry',
      docs: 'https://aj-das-research.github.io/docberry/',
      PyPI: 'https://pypi.org/project/docberry/'
    }
  }
]

export default tools
