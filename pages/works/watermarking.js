import {
  Container,
  Badge,
  Heading,
  OrderedList,
  ListItem
} from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import Publication from '../../components/publication'
import publications from '../../lib/publications'
import thumb from '../../public/images/works/watermarking_eyecatch.png'

const papers = publications.filter(p =>
  (p.projects || []).includes('watermarking')
)

const Work = () => (
  <Layout title="Watermarking">
    <Container pb={8}>
      <Title>
        Watermarking <Badge>Research</Badge>
      </Title>
      <WorkImage
        src={thumb.src}
        alt="Three AI agents, each with a secret key, write to a shared code file; an audit accumulates watermark evidence and names only the agent that planted a bug"
      />
      <P>
        AI agents now write code, text and data together, often as swarms in a
        shared repository where one agent&apos;s output is rewritten by the
        next. When something goes wrong, such as a planted bug, a leaked secret
        or a false claim of authorship, the logs that could explain it can be
        edited or deleted by the agents themselves. Today&apos;s watermarks were
        built for a single model writing a single passage that a passive user
        later edits; they were not built for adversarial agents that rewrite,
        relay and imitate one another. This project asks how to keep
        AI-generated content attributable to the agent that produced it, from
        the content alone. Four questions guide it:
      </P>
      <OrderedList spacing={0.5} my={3} pl={10}>
        <ListItem>
          Can the artifacts alone, without logs a suspect could delete, name the
          agent that produced them?
        </ListItem>
        <ListItem>
          How can many weak watermark signals be combined into one auditable
          decision that bounds the chance of ever blaming an innocent agent,
          even when a stolen watermark is used to frame someone else?
        </ListItem>
        <ListItem>
          When agents rewrite each other&apos;s work, can provenance record the
          whole chain of hands instead of blaming the last editor?
        </ListItem>
        <ListItem>
          Do watermarks survive realistic chains of agent edits, such as
          refactoring, reformatting and repair, and pipelines that carry content
          across modalities, without costing correctness?
        </ListItem>
      </OrderedList>
      <P style={{ textIndent: 0 }}>
        Our goal is accountable multi-agent AI: watermarks and audits that let
        anyone trace generated content back to the agent responsible, with
        guarantees against false accusation, so that teams of AI agents can be
        trusted to work on real codebases and data.
      </P>

      {papers.length > 0 && (
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Related Publications
          </Heading>
          {papers.map(p => (
            <Publication key={p.title} p={p} />
          ))}
        </Section>
      )}
    </Container>
  </Layout>
)

export default Work
