import { Container, Heading, Box, Text, Link, Flex } from '@chakra-ui/react'
import { IoSchool } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Publication from '../components/publication'
import publications from '../lib/publications'
import site from '../lib/site'

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
          {publications
            .filter(p => p.highlight !== false)
            .map(p => (
              <Publication key={p.title} p={p} />
            ))}
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Publications
