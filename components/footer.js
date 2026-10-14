import { Box, Link } from '@chakra-ui/react'
import site from '../lib/site'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} {site.name}. Design based on{' '}
      <Link href="https://www.craftz.dog/" target="_blank">
        Takuya Matsuyama&apos;s homepage
      </Link>
      .
    </Box>
  )
}

export default Footer
