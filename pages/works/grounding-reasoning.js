import {
  Container,
  Badge,
  Heading,
  OrderedList,
  ListItem,
  Link,
  Box,
  Image,
  Text,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import Publication from '../../components/publication'
import publications from '../../lib/publications'
import thumb from '../../public/images/works/grounding_eyecatch.png'
import hmsLogo from '../../public/images/logos/hms.svg'
import hmsLogoDark from '../../public/images/logos/hms-dark.svg'
import jhuLogo from '../../public/images/logos/jhu.svg'
import jhuLogoDark from '../../public/images/logos/jhu-dark.svg'

const papers = publications.filter(p =>
  (p.projects || []).includes('grounding-reasoning')
)

const collaborations = [
  {
    logo: [hmsLogo, hmsLogoDark],
    logoAlt: 'Harvard Medical School',
    logoHref: 'https://rajpurkarlab.hms.harvard.edu/',
    name: 'Prof. Pranav Rajpurkar',
    href: 'https://www.pranavrajpurkar.com/',
    title:
      'Associate Professor of Biomedical Informatics, Harvard Medical School',
    detail: (
      <>
        <Link href="https://rajpurkarlab.hms.harvard.edu/" target="_blank">
          Rajpurkar Lab
        </Link>
        , Department of Biomedical Informatics: medical AI for complex clinical
        work
      </>
    )
  },
  {
    logo: [jhuLogo, jhuLogoDark],
    logoAlt: 'Johns Hopkins University',
    logoHref: 'https://www.cs.jhu.edu/faculty/zongwei-zhou/',
    name: 'Prof. Zongwei Zhou',
    href: 'https://www.zongweiz.com/',
    title: 'Assistant Professor of Computer Science, Johns Hopkins University',
    detail: 'Joint appointment in Oncology, Johns Hopkins School of Medicine'
  }
]

const Collaboration = ({ c }) => (
  <Box
    p={4}
    borderRadius="lg"
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
  >
    <Link href={c.logoHref} target="_blank" display="block" mb={3}>
      <Image
        src={useColorModeValue(c.logo[0].src, c.logo[1].src)}
        alt={c.logoAlt}
        h="40px"
        w="auto"
      />
    </Link>
    <Text fontWeight="bold">
      <Link href={c.href} target="_blank">
        {c.name}
      </Link>
    </Text>
    <Text fontSize="sm">{c.title}</Text>
    <Text fontSize="sm">{c.detail}</Text>
  </Box>
)

const Work = () => (
  <Layout title="Grounding and Reasoning">
    <Container>
      <Title>
        Grounding and Reasoning <Badge>Research</Badge>
      </Title>
      <WorkImage
        src={thumb.src}
        alt="A chest X-ray with three numbered evidence boxes beside a chat answer whose citations point to those boxes"
      />
      <P>
        Vision-language models answer questions about medical images in fluent,
        confident language. That confidence is the problem: a model sounds just
        as certain whether or not its answer rests on visual evidence it has
        actually seen and can handle. In medicine, a confident answer about an
        image the model does not understand is worse than no answer at all. This
        project asks how to make the answers of multimodal LLMs traceable to the
        evidence they were given. Four questions guide it:
      </P>
      <OrderedList spacing={0.5} my={3} pl={10}>
        <ListItem>
          Where inside a vision-language model does visual evidence enter the
          answer, and where does it get lost?
        </ListItem>
        <ListItem>
          How can grounding in the image be interleaved with a model&apos;s
          free-text reasoning, so each reasoning step points to the evidence
          behind it?
        </ListItem>
        <ListItem>
          Can a model tell, at test time and without labels, that an input lies
          outside what it can reason about?
        </ListItem>
        <ListItem>
          Can a deployed model adapt at test time to new visual features and
          previously unseen labels, without being taken out of service?
        </ListItem>
      </OrderedList>
      <P style={{ textIndent: 0 }}>
        We are building towards the first co-working space for medical
        multimodal imaging, one place to analyse and automate more than 15 tasks
        across medical imaging and analysis, built on models whose answers can
        be traced to their evidence.
      </P>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Collaborations
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={4}>
          {collaborations.map(c => (
            <Collaboration key={c.name} c={c} />
          ))}
        </SimpleGrid>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Related Publications
        </Heading>
        {papers.map(p => (
          <Publication key={p.title} p={p} />
        ))}
      </Section>
    </Container>
  </Layout>
)

export default Work
