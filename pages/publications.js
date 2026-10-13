import {
  Container,
  Heading,
  Box,
  Text,
  Link,
  HStack,
  Badge,
  Flex
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IoSchool } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Video from '../components/video'
import publications from '../lib/publications'
import site from '../lib/site'

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

const Publications = () => (
  <Layout title="Publications">
    <Container>
      <Flex align="baseline" wrap="wrap" columnGap={3} mb={4}>
        <Heading as="h3" fontSize={20}>
          Highlights
        </Heading>
        <Text fontSize="sm">
          (All publications:{' '}
          <Link
            href={site.links.scholar}
            target="_blank"
            display="inline-flex"
            alignItems="center"
            gap={1}
          >
            <IoSchool /> Google Scholar
          </Link>
          )
        </Text>
      </Flex>

      <Section delay={0.1}>
        <Box mt={6}>
          {publications.map(p => (
            <Box key={p.title} mb={6}>
              <Text fontWeight="bold">{p.title}</Text>
              <Text fontSize="sm">{p.authors}</Text>
              <HStack spacing={2} mt={1}>
                <Badge colorScheme="teal">{p.venue}</Badge>
                {p.status && <Badge>{p.status}</Badge>}
              </HStack>
              <LinkList links={p.links} />
              {p.video && <Video video={p.video} title={p.title} />}
            </Box>
          ))}
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Publications
