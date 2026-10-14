import { Box, Link } from '@chakra-ui/react'
import site from '../lib/site'

// Free page-view counter from visitorbadge.io; each page load counts once.
const viewsBadge =
  'https://api.visitorbadge.io/api/visitors?path=aj-das-research.github.io' +
  '&label=page%20views&labelColor=%2388ccca&countColor=%233d7aed&style=flat-square'

const Footer = () => {
  return (
    <Box align="center" fontSize="sm">
      <Box opacity={0.4}>
        &copy; {new Date().getFullYear()} {site.name}. Design based on{' '}
        <Link href="https://www.craftz.dog/" target="_blank">
          Takuya Matsuyama&apos;s homepage
        </Link>
        .
      </Box>
      <Box mt={2} opacity={0.8}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={viewsBadge} alt="Page views" height="20" />
      </Box>
    </Box>
  )
}

export default Footer
