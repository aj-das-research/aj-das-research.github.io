import { Link } from '@chakra-ui/react'

const A = ({ href, children }) => (
  <Link href={href} target="_blank">
    {children}
  </Link>
)

// Newest first. Add an item at the top to post news on the home page.
const news = [
  {
    id: 'collab-2026',
    body: (
      <>
        Started research collaborations with{' '}
        <A href="https://www.pranavrajpurkar.com/">Prof. Pranav Rajpurkar</A>{' '}
        (Harvard Medical School) and{' '}
        <A href="https://www.zongweiz.com/">Prof. Zongwei Zhou</A> (Johns
        Hopkins University)
      </>
    )
  },
  {
    id: 'miccai-2026',
    body: (
      <>
        4 papers accepted at{' '}
        <A href="https://conferences.miccai.org/2026/en/">MICCAI 2026</A>,
        Strasbourg, France
      </>
    )
  },
  {
    id: 'eccv-2026',
    body: (
      <>
        1 paper accepted at <A href="https://eccv.ecva.net/">ECCV 2026</A>,
        Malmö, Sweden
      </>
    )
  },
  {
    id: 'emnlp-2026',
    body: (
      <>
        1 paper accepted at{' '}
        <A href="https://2026.emnlp.org/">EMNLP 2026 (Main Conference)</A>,
        Budapest, Hungary
      </>
    )
  }
]

export default news
