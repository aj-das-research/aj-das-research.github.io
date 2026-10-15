import { Box } from '@chakra-ui/react'
import site from '../lib/site'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} {site.name}.
    </Box>
  )
}

export default Footer
