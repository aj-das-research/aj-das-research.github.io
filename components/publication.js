import { Box, Text, Link, HStack, Badge } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Video from './video'

const LinkList = ({ links }) => (
  <HStack spacing={3} mt={1}>
    {Object.entries(links || {})
      .filter(([, href]) => href)
      .map(([label, href]) => (
        <Link key={label} href={href} target="_blank" fontSize="sm">
          {label} <ExternalLinkIcon mx="2px" />
        </Link>
      ))}
  </HStack>
)

const Publication = ({ p }) => (
  <Box mb={6}>
    <Text fontWeight="bold">{p.title}</Text>
    <Text fontSize="sm">{p.authors}</Text>
    <HStack spacing={2} mt={1}>
      <Badge colorScheme="teal">{p.venue}</Badge>
      {p.status && <Badge>{p.status}</Badge>}
    </HStack>
    <LinkList links={p.links} />
    {p.video && <Video video={p.video} title={p.title} />}
  </Box>
)

export default Publication
