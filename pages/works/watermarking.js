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
import { T, useTr } from '../../lib/i18n'
import thumb from '../../public/images/works/watermarking_eyecatch.png'

const papers = publications.filter(p =>
  (p.projects || []).includes('watermarking')
)

const questions = [
  {
    en: 'Can the artifacts alone, without logs a suspect could delete, name the agent that produced them?',
    zh: '能否仅凭产出物本身，而不依赖可能被嫌疑方删除的日志，指认出生成它的智能体？'
  },
  {
    en: 'How can many weak watermark signals be combined into one auditable decision that bounds the chance of ever blaming an innocent agent, even when a stolen watermark is used to frame someone else?',
    zh: '如何将许多微弱的水印信号合并为一个可审计的判定，并限定冤枉无辜智能体的概率，即使有人用窃取的水印来嫁祸他人？'
  },
  {
    en: "When agents rewrite each other's work, can provenance record the whole chain of hands instead of blaming the last editor?",
    zh: '当智能体相互改写彼此的工作时，溯源能否记录完整的经手链条，而不是归咎于最后一个编辑者？'
  },
  {
    en: 'Do watermarks survive realistic chains of agent edits, such as refactoring, reformatting and repair, and pipelines that carry content across modalities, without costing correctness?',
    zh: '水印能否在现实的智能体编辑链（如重构、重新格式化和修复）以及跨模态传递内容的流水线中保持有效，同时不影响正确性？'
  }
]

const Work = () => {
  const tr = useTr()
  return (
    <Layout title={tr({ en: 'Watermarking', zh: '水印' })}>
      <Container pb={8}>
        <Title>
          <T en="Watermarking" zh="水印" />{' '}
          <Badge>
            <T en="Research" zh="研究" />
          </Badge>
        </Title>
        <WorkImage
          src={thumb.src}
          alt={tr({
            en: 'Three AI agents, each with a secret key, write to a shared code file; an audit accumulates watermark evidence and names only the agent that planted a bug',
            zh: '三个各持密钥的 AI 智能体共同编写一个代码文件；审计过程积累水印证据，只指认植入漏洞的那个智能体'
          })}
        />
        <P>
          <T
            en="AI agents now write code, text and data together, often as swarms in a shared repository where one agent's output is rewritten by the next. When something goes wrong, such as a planted bug, a leaked secret or a false claim of authorship, the logs that could explain it can be edited or deleted by the agents themselves. Today's watermarks were built for a single model writing a single passage that a passive user later edits; they were not built for adversarial agents that rewrite, relay and imitate one another. This project asks how to keep AI-generated content attributable to the agent that produced it, from the content alone. Four questions guide it:"
            zh="如今，AI 智能体会共同编写代码、文本和数据，常常以集群形式在共享代码库中工作，一个智能体的输出会被下一个智能体改写。一旦出了问题，例如被植入漏洞、密钥泄露或虚假的署名，本可以解释问题的日志却可能被智能体自己篡改或删除。现有的水印是为单个模型生成单段文本、再由被动用户编辑的场景设计的，并不适用于相互改写、转述和模仿的对抗性智能体。本项目研究如何仅凭内容本身，就让 AI 生成的内容可追溯到生成它的智能体。四个问题指引着这项研究："
          />
        </P>
        <OrderedList spacing={0.5} my={3} pl={10}>
          {questions.map(q => (
            <ListItem key={q.en}>{tr(q)}</ListItem>
          ))}
        </OrderedList>
        <P style={{ textIndent: 0 }}>
          <T
            en="Our goal is accountable multi-agent AI: watermarks and audits that let anyone trace generated content back to the agent responsible, with guarantees against false accusation, so that teams of AI agents can be trusted to work on real codebases and data."
            zh="我们的目标是可问责的多智能体 AI：通过水印与审计，任何人都能将生成内容追溯到负责的智能体，并提供防止误判的保证，从而让 AI 智能体团队可以被信任地在真实的代码库和数据上工作。"
          />
        </P>

        {papers.length > 0 && (
          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              <T en="Related Publications" zh="相关论文" />
            </Heading>
            {papers.map(p => (
              <Publication key={p.title} p={p} />
            ))}
          </Section>
        )}
      </Container>
    </Layout>
  )
}

export default Work
