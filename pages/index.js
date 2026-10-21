import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Wrap,
  WrapItem,
  Tag
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoSchool,
  IoMail,
  IoCube,
  IoDocumentText
} from 'react-icons/io5'
import Image from 'next/image'
import site from '../lib/site'
import news from '../lib/news'
import profileImage from '../public/images/profile.jpg'
import { T, useTr } from '../lib/i18n'

const interests = [
  {
    en: 'Grounding and Reasoning in Multimodal LLMs',
    zh: '多模态大语言模型中的定位与推理'
  },
  { en: 'Watermarking AI Generated Content', zh: 'AI 生成内容水印' },
  { en: 'Digital Twins', zh: '数字孪生' }
]

const A = ({ href, children }) => (
  <Link href={href} target="_blank">
    {children}
  </Link>
)
const razzak = 'https://scholar.google.com/citations?user=GlXI4N8AAAAJ&hl=en'
const lukas = 'https://scholar.google.com/citations?user=fmlEab4AAAAJ&hl=en'
const rajpurkar = 'https://www.pranavrajpurkar.com/'
const zhou = 'https://www.zongweiz.com/'
const MedOS = () => (
  <Link as={NextLink} href="/works/medos/" scroll={false}>
    MedOS Limited
  </Link>
)

const webLinks = [
  {
    href: site.links.cv,
    icon: <IoDocumentText />,
    label: { en: 'CV', zh: '简历' }
  },
  { href: site.links.github, icon: <IoLogoGithub />, label: 'GitHub' },
  { href: site.links.scholar, icon: <IoSchool />, label: 'Google Scholar' },
  { href: site.links.linkedin, icon: <IoLogoLinkedin />, label: 'LinkedIn' },
  { href: site.links.huggingface, icon: <IoCube />, label: 'Hugging Face' },
  { href: `mailto:${site.email}`, icon: <IoMail />, label: site.email }
].filter(l => l.href)

const Home = () => {
  const tr = useTr()
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {site.name}
            </Heading>
            <p>
              <T en={site.tagline} zh="MBZUAI 机器学习专业博士生" />
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src={profileImage}
                alt={tr({ en: 'Profile image', zh: '个人照片' })}
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            <T en="Work" zh="工作" />
          </Heading>
          <Paragraph>
            <T
              en={
                <>
                  Abhijit is a PhD student in Machine Learning at MBZUAI in Abu
                  Dhabi, supervised by <A href={razzak}>Prof. Imran Razzak</A>{' '}
                  and <A href={lukas}>Prof. Nils Lukas</A>, and co-founder and
                  CTO of <MedOS />. He also collaborates with{' '}
                  <A href={rajpurkar}>Prof. Pranav Rajpurkar</A> at Harvard
                  Medical School and <A href={zhou}>Prof. Zongwei Zhou</A> at
                  Johns Hopkins University. His research has three threads:
                  grounding and reasoning in multimodal LLMs, so that a
                  model&apos;s answers can be traced back to the evidence it was
                  given; watermarking AI-generated content; and digital twins.
                  Much of his published work applies these ideas to medical
                  imaging. Before the PhD he was an AI Researcher at GE
                  Healthcare India.
                </>
              }
              zh={
                <>
                  Abhijit
                  是阿布扎比穆罕默德·本·扎耶德人工智能大学（MBZUAI）机器学习专业的博士生，导师为{' '}
                  <A href={razzak}>Imran Razzak 教授</A>和{' '}
                  <A href={lukas}>Nils Lukas 教授</A>，同时是 <MedOS />{' '}
                  的联合创始人兼首席技术官（CTO）。他还与哈佛医学院的{' '}
                  <A href={rajpurkar}>Pranav Rajpurkar 教授</A>
                  和约翰斯·霍普金斯大学的 <A href={zhou}>Zongwei Zhou 教授</A>
                  开展合作研究。他的研究包括三个方向：多模态大语言模型中的视觉定位（grounding）与推理，使模型的回答能够追溯到其所依据的证据；AI
                  生成内容的水印技术；以及数字孪生。他已发表的工作大多将这些思路应用于医学影像。攻读博士之前，他曾在
                  GE 医疗印度担任 AI 研究员。
                </>
              }
            />
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/publications/"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              mr={3}
            >
              <T en="Publications" zh="论文" />
            </Button>
            <Button
              as={NextLink}
              href="/works/"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              variant="outline"
            >
              <T en="Projects" zh="研究项目" />
            </Button>
          </Box>
        </Section>

        <Section delay={0.15}>
          <Heading as="h3" variant="section-title">
            <T en="News" zh="最新动态" />
          </Heading>
          <List styleType="disc" pl={5} spacing={1}>
            {news.map(({ id, en, zh }) => (
              <ListItem key={id}>
                <T en={en} zh={zh} />
              </ListItem>
            ))}
          </List>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            <T en="Bio" zh="履历" />
          </Heading>
          <BioSection>
            <BioYear>
              <T en="2026 to 2029" zh="2026–2029" />
            </BioYear>
            <T en="PhD student, MBZUAI" zh="博士生，MBZUAI" />
          </BioSection>
          <BioSection>
            <BioYear>
              <T en="2026 to present" zh="2026 至今" />
            </BioYear>
            <T
              en={
                <>
                  Co-founder and CTO,{' '}
                  <A href="https://medos.tech/">MedOS Limited</A>, UAE
                </>
              }
              zh={
                <>
                  联合创始人兼 CTO，
                  <A href="https://medos.tech/">MedOS Limited</A>
                  ，阿联酋
                </>
              }
            />
          </BioSection>
          <BioSection>
            <BioYear>
              <T en="2026 to present" zh="2026 至今" />
            </BioYear>
            <T
              en={
                <>
                  Research collaboration with{' '}
                  <A href={rajpurkar}>Prof. Pranav Rajpurkar</A>, HMS
                </>
              }
              zh={
                <>
                  研究合作：<A href={rajpurkar}>Pranav Rajpurkar 教授</A>
                  ，哈佛医学院
                </>
              }
            />
          </BioSection>
          <BioSection>
            <BioYear>
              <T en="2026 to present" zh="2026 至今" />
            </BioYear>
            <T
              en={
                <>
                  Research collaboration with{' '}
                  <A href={zhou}>Prof. Zongwei Zhou</A>, JHU
                </>
              }
              zh={
                <>
                  研究合作：<A href={zhou}>Zongwei Zhou 教授</A>
                  ，约翰斯·霍普金斯大学
                </>
              }
            />
          </BioSection>
          <BioSection>
            <BioYear>
              <T en="Prior" zh="此前" />
            </BioYear>
            <T
              en="AI Researcher, GE Healthcare India"
              zh="AI 研究员，GE 医疗印度"
            />
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            <T en="Interests" zh="研究兴趣" />
          </Heading>
          <Wrap spacing={2}>
            {interests.map(topic => (
              <WrapItem key={topic.en}>
                <Tag size="md" variant="subtle" colorScheme="teal">
                  {tr(topic)}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            <T en="On the web" zh="相关链接" />
          </Heading>
          <List>
            {webLinks.map(({ href, icon, label }) => (
              <ListItem key={href}>
                <Link href={href} target="_blank">
                  <Button variant="ghost" colorScheme="teal" leftIcon={icon}>
                    {tr(label)}
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
