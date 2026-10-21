import { Link } from '@chakra-ui/react'

const A = ({ href, children }) => (
  <Link href={href} target="_blank">
    {children}
  </Link>
)

// Newest first. Add an item at the top to post news on the home page;
// give the English text as en and the Chinese text as zh.
const news = [
  {
    id: 'miccai-2026',
    en: (
      <>
        4 papers accepted at{' '}
        <A href="https://conferences.miccai.org/2026/en/">MICCAI 2026</A>,
        Strasbourg, France
      </>
    ),
    zh: (
      <>
        4 篇论文被{' '}
        <A href="https://conferences.miccai.org/2026/en/">MICCAI 2026</A>{' '}
        接收（法国斯特拉斯堡）
      </>
    )
  },
  {
    id: 'eccv-2026',
    en: (
      <>
        1 paper accepted at <A href="https://eccv.ecva.net/">ECCV 2026</A>,
        Malmö, Sweden
      </>
    ),
    zh: (
      <>
        1 篇论文被 <A href="https://eccv.ecva.net/">ECCV 2026</A>{' '}
        接收（瑞典马尔默）
      </>
    )
  },
  {
    id: 'emnlp-2026',
    en: (
      <>
        1 paper accepted at{' '}
        <A href="https://2026.emnlp.org/">EMNLP 2026 (Main Conference)</A>,
        Budapest, Hungary
      </>
    ),
    zh: (
      <>
        1 篇论文被 <A href="https://2026.emnlp.org/">EMNLP 2026 主会</A>{' '}
        接收（匈牙利布达佩斯）
      </>
    )
  }
]

export default news
