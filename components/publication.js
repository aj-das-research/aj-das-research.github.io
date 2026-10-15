import { Box, Text, Link, HStack, Badge } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Video from './video'
import site from '../lib/site'

const LinkList = ({ links }) => (
  <HStack spacing={3} mt={1} flexWrap="wrap" rowGap={1}>
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
    <Text fontSize="sm">
      {p.authors.split(', ').map((name, i) => (
        <span key={name}>
          {i > 0 && ', '}
          {name === site.name ? <b>{name}</b> : name}
          {(p.equal || []).includes(name) && '*'}
        </span>
      ))}
      {p.equal && (
        <Text as="span" opacity={0.7}>
          {' '}
          (*equal contribution)
        </Text>
      )}
    </Text>
    <HStack spacing={2} mt={1}>
      <Badge colorScheme="teal">{p.venue}</Badge>
      {p.status && <Badge>{p.status}</Badge>}
    </HStack>
    <LinkList links={p.links} />
    {p.video && <Video video={p.video} title={p.title} />}
  </Box>
)

export default Publication
