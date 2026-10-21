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
import { T, useTr } from '../../lib/i18n'
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
    name: { en: 'Prof. Pranav Rajpurkar', zh: 'Pranav Rajpurkar 教授' },
    href: 'https://www.pranavrajpurkar.com/',
    title: {
      en: 'Associate Professor of Biomedical Informatics, Harvard Medical School',
      zh: '哈佛医学院生物医学信息学副教授'
    },
    detail: {
      en: (
        <>
          <Link href="https://rajpurkarlab.hms.harvard.edu/" target="_blank">
            Rajpurkar Lab
          </Link>
          , Department of Biomedical Informatics: medical AI for complex
          clinical work
        </>
      ),
      zh: (
        <>
          生物医学信息学系{' '}
          <Link href="https://rajpurkarlab.hms.harvard.edu/" target="_blank">
            Rajpurkar 实验室
          </Link>
          ：面向复杂临床工作的医疗 AI
        </>
      )
    }
  },
  {
    logo: [jhuLogo, jhuLogoDark],
    logoAlt: 'Johns Hopkins University',
    logoHref: 'https://www.cs.jhu.edu/faculty/zongwei-zhou/',
    name: { en: 'Prof. Zongwei Zhou', zh: 'Zongwei Zhou 教授' },
    href: 'https://www.zongweiz.com/',
    title: {
      en: 'Assistant Professor of Computer Science, Johns Hopkins University',
      zh: '约翰斯·霍普金斯大学计算机科学助理教授'
    },
    detail: {
      en: 'Joint appointment in Oncology, Johns Hopkins School of Medicine',
      zh: '兼任约翰斯·霍普金斯大学医学院肿瘤学系职位'
    }
  }
]

const Collaboration = ({ c }) => {
  const tr = useTr()
  return (
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
          {tr(c.name)}
        </Link>
      </Text>
      <Text fontSize="sm">{tr(c.title)}</Text>
      <Text fontSize="sm">{tr(c.detail)}</Text>
    </Box>
  )
}

const questions = [
  {
    en: 'Where inside a vision-language model does visual evidence enter the answer, and where does it get lost?',
    zh: '在视觉-语言模型内部，视觉证据在哪里进入答案，又在哪里丢失？'
  },
  {
    en: "How can grounding in the image be interleaved with a model's free-text reasoning, so each reasoning step points to the evidence behind it?",
    zh: '如何将图像中的定位与模型的自由文本推理交织在一起，使每一步推理都指向其背后的证据？'
  },
  {
    en: 'Can a model tell, at test time and without labels, that an input lies outside what it can reason about?',
    zh: '模型能否在测试时、无需标注地判断某个输入超出了它能够推理的范围？'
  },
  {
    en: 'Can a deployed model adapt at test time to new visual features and previously unseen labels, without being taken out of service?',
    zh: '已部署的模型能否在不停止服务的情况下，在测试时适应新的视觉特征和此前未见过的标签？'
  }
]

const Work = () => {
  const tr = useTr()
  return (
    <Layout title={tr({ en: 'Grounding and Reasoning', zh: '定位与推理' })}>
      <Container>
        <Title>
          <T en="Grounding and Reasoning" zh="定位与推理" />{' '}
          <Badge>
            <T en="Research" zh="研究" />
          </Badge>
        </Title>
        <WorkImage
          src={thumb.src}
          alt={tr({
            en: 'A chest X-ray with three numbered evidence boxes beside a chat answer whose citations point to those boxes',
            zh: '一张胸部 X 光片上标有三个编号的证据框，旁边的对话回答通过引用指向这些框'
          })}
        />
        <P>
          <T
            en="Vision-language models answer questions about medical images in fluent, confident language. That confidence is the problem: a model sounds just as certain whether or not its answer rests on visual evidence it has actually seen and can handle. In medicine, a confident answer about an image the model does not understand is worse than no answer at all. This project asks how to make the answers of multimodal LLMs traceable to the evidence they were given. Four questions guide it:"
            zh="视觉-语言模型会用流畅而自信的语言回答关于医学影像的问题。问题恰恰出在这份自信上：无论答案是否建立在模型真正看到并能处理的视觉证据之上，模型听起来都同样笃定。在医学中，对一张模型并不理解的图像给出自信的回答，比不回答更糟。本项目研究如何让多模态大语言模型的回答可以追溯到其所依据的证据。四个问题指引着这项研究："
          />
        </P>
        <OrderedList spacing={0.5} my={3} pl={10}>
          {questions.map(q => (
            <ListItem key={q.en}>{tr(q)}</ListItem>
          ))}
        </OrderedList>
        <P style={{ textIndent: 0 }}>
          <T
            en="We are building towards the first co-working space for medical multimodal imaging, one place to analyse and automate more than 15 tasks across medical imaging and analysis, built on models whose answers can be traced to their evidence."
            zh="我们正在打造首个医学多模态影像协同工作空间：在一个平台上分析并自动化医学影像与分析中的 15 项以上任务，其底层模型的回答均可追溯到证据。"
          />
        </P>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            <T en="Collaborations" zh="合作" />
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={4}>
            {collaborations.map(c => (
              <Collaboration key={c.href} c={c} />
            ))}
          </SimpleGrid>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            <T en="Related Publications" zh="相关论文" />
          </Heading>
          {papers.map(p => (
            <Publication key={p.title} p={p} />
          ))}
        </Section>
      </Container>
    </Layout>
  )
}

export default Work
