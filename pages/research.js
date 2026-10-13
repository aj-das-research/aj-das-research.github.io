import {
  Container,
  Heading,
  Box,
  Text,
  Link,
  HStack,
  Badge,
  Divider,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import publications from '../lib/publications'
import site from '../lib/site'

const themes = [
  {
    title: 'Grounded reasoning for medical VLMs',
    body: 'Models that point to the image evidence behind each step of their reasoning, so a clinician can check the answer instead of trusting it.'
  },
  {
    title: 'Hallucination and uncertainty',
    body: 'Reducing statements that are not supported by the image, and using conformal prediction to attach honest, guaranteed uncertainty to model outputs.'
  },
  {
    title: 'Knowing what the model does not know',
    body: 'Out-of-distribution detection for scans, scanners and populations that a model never saw during training.'
  },
  {
    title: 'Interpretability',
    body: 'Mechanistic tools for looking inside vision-language models to see how visual evidence turns into a diagnosis.'
  },
  {
    title: 'Native 3D medical AI',
    body: 'A longer-term direction: models that reason over full CT and MRI volumes rather than 2D slices.'
  }
]

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

const Research = () => {
  const cardBg = useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')
  return (
    <Layout title="Research">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Research
        </Heading>
        <Paragraph>
          Medical imaging is a setting where a confident wrong answer is worse
          than no answer. My research asks how to make vision-language models
          reliable enough for that setting: grounded in the image, honest about
          uncertainty, and understandable from the inside.
        </Paragraph>

        <Section delay={0.1}>
          <Box mt={6}>
            {themes.map(({ title, body }) => (
              <Box key={title} p={4} mb={3} borderRadius="lg" bg={cardBg}>
                <Text fontWeight="bold">{title}</Text>
                <Text fontSize="sm" mt={1}>
                  {body}
                </Text>
              </Box>
            ))}
          </Box>
        </Section>

        <Section delay={0.2}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Publications
          </Heading>
          {publications.length === 0 ? (
            <Paragraph>
              Papers will be listed here. Meanwhile, see{' '}
              <Link href={site.links.scholar} target="_blank">
                Google Scholar
              </Link>
              .
            </Paragraph>
          ) : (
            publications.map(p => (
              <Box key={p.title} mb={5}>
                <Text fontWeight="bold">{p.title}</Text>
                <Text fontSize="sm">{p.authors}</Text>
                <HStack spacing={2} mt={1}>
                  <Badge colorScheme="teal">{p.venue}</Badge>
                  {p.status && <Badge>{p.status}</Badge>}
                </HStack>
                <LinkList links={p.links} />
              </Box>
            ))
          )}
        </Section>
      </Container>
    </Layout>
  )
}

export default Research
