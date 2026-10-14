import { Container, Badge, Heading } from '@chakra-ui/react'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import Mark from '../../components/mark'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import Publication from '../../components/publication'
import publications from '../../lib/publications'

const papers = publications.filter(p =>
  (p.projects || []).includes('grounding-reasoning')
)

const Work = () => (
  <Layout title="Grounding and Reasoning">
    <Container>
      <Title>
        Grounding and Reasoning <Badge>Research</Badge>
      </Title>
      <P>
        Vision-language models answer questions about medical images in fluent,
        confident language. That confidence is the problem: a model sounds just
        as certain whether or not its answer rests on visual evidence it has
        actually seen and can handle. In medicine, a confident answer about an
        image the model does not understand is{' '}
        <Mark>worse than no answer at all</Mark>.
      </P>
      <P>
        This project asks how to make the answers of multimodal LLMs{' '}
        <Mark>traceable to the evidence they were given</Mark>. Four questions
        guide it. Where inside a vision-language model does visual evidence
        enter the answer, and <Mark>where does it get lost</Mark>? How can
        grounding in the image be interleaved with a model&apos;s free-text
        reasoning, so that{' '}
        <Mark>each reasoning step points to the evidence behind it</Mark>? Can a
        model tell, at test time and without labels, that an input{' '}
        <Mark>lies outside what it can reason about</Mark>? And can a deployed
        model{' '}
        <Mark>
          adapt at test time to new visual features and previously unseen labels
        </Mark>
        , without being taken out of service?
      </P>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Publications
        </Heading>
        {papers.map(p => (
          <Publication key={p.title} p={p} />
        ))}
      </Section>
    </Container>
  </Layout>
)

export default Work
