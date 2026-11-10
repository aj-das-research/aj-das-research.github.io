// Open-source tools, newest first. One object per tool: name, a short
// tagline and a one-paragraph description in English (en) and Chinese (zh),
// meta badges (language, license, version) and links. Empty links are not
// rendered. The page is pages/tools.js.
const tools = [
  {
    id: 'segevalkit',
    name: 'SegEvalKit',
    tagline: {
      en: 'Evaluation of volumetric medical image segmentation',
      zh: '三维医学图像分割评估'
    },
    en: 'A Dice score alone does not say whether a model finds small tumours, breaks vessels, draws acceptable boundaries or really beats the baseline, and the tools that compute the other metrics disagree silently. SegEvalKit puts 56 metrics (overlap, volume, surface distance, topology, lesion-wise detection, calibration and agreement) behind one input/output interface for CT and MR NIfTI volumes, makes every convention explicit (empty-mask policies, directed vs pooled HD95, ASSD vs MASD), tests them against the MONAI, MedPy and DeepMind reference implementations, and adds bootstrap confidence intervals, paired tests, rankings, plots and a self-contained HTML report.',
    zh: '仅凭 Dice 分数无法说明模型是否能找到小肿瘤、是否截断血管、边界是否可接受，或是否真正优于基线；而计算其他指标的工具之间还会悄然不一致。SegEvalKit 将 56 个指标（重叠、体积、表面距离、拓扑、逐病灶检测、校准与一致性）统一在一套面向 CT/MR NIfTI 体数据的输入输出接口之后，明确每一种约定（空掩码策略、有向与合并 HD95、ASSD 与 MASD），对照 MONAI、MedPy 和 DeepMind 的参考实现进行测试，并提供自助法置信区间、配对检验、排名、图表和独立的 HTML 报告。',
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
      en: 'Structured extraction from scientific PDFs',
      zh: '科学 PDF 的结构化提取'
    },
    en: 'DocBerry extracts structured Markdown, tables, figures and equations from scientific PDFs in the correct reading order. It wraps Docling with a reading-order segmentation layer for two-column papers, exports tables (PNG and CSV), figures (PNG, PDF and SVG) and equations (images plus LaTeX), and offers pluggable equation-to-LaTeX backends (pix2tex, a Qwen vision-language model or Docling CodeFormula). Install with pip install docberry.',
    zh: 'DocBerry 按正确的阅读顺序从科学 PDF 中提取结构化 Markdown、表格、图片和公式。它在 Docling 之上加入了面向双栏论文的阅读顺序分割层，可导出表格（PNG 与 CSV）、图片（PNG、PDF、SVG）和公式（图片加 LaTeX），并提供可插拔的公式转 LaTeX 后端（pix2tex、Qwen 视觉语言模型或 Docling CodeFormula）。通过 pip install docberry 安装。',
    meta: ['Python', 'MIT', 'PyPI 0.1.2'],
    links: {
      code: 'https://github.com/aj-das-research/docberry',
      docs: 'https://aj-das-research.github.io/docberry/',
      PyPI: 'https://pypi.org/project/docberry/'
    }
  }
]

export default tools
