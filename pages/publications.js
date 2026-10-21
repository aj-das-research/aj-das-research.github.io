import { Container, Heading, Box, Text, Link, Flex } from '@chakra-ui/react'
import { IoSchool } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Publication from '../components/publication'
import publications from '../lib/publications'
import site from '../lib/site'
import { T, useTr } from '../lib/i18n'

const Publications = () => {
  const tr = useTr()
  return (
    <Layout title={tr({ en: 'Publications', zh: '论文' })}>
      <Container>
        <Flex align="baseline" wrap="wrap" columnGap={3} mb={4}>
          <Heading as="h3" fontSize={20}>
            <T en="Highlights" zh="代表性论文" />
          </Heading>
          <Text fontSize="sm">
            <T en="(All publications: " zh="（全部论文：" />
            <Link
              href={site.links.scholar}
              target="_blank"
              display="inline-flex"
              alignItems="center"
              gap={1}
            >
              <IoSchool /> Google Scholar
            </Link>
            <T en=")" zh="）" />
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
}

export default Publications
