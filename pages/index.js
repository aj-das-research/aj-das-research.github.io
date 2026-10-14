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

const interests = [
  'Grounding and Reasoning in Multimodal LLMs',
  'Watermarking AI Generated Content',
  'Digital Twins'
]

const webLinks = [
  { href: site.links.cv, icon: <IoDocumentText />, label: 'CV' },
  { href: site.links.github, icon: <IoLogoGithub />, label: 'GitHub' },
  { href: site.links.scholar, icon: <IoSchool />, label: 'Google Scholar' },
  { href: site.links.linkedin, icon: <IoLogoLinkedin />, label: 'LinkedIn' },
  { href: site.links.huggingface, icon: <IoCube />, label: 'Hugging Face' },
  { href: `mailto:${site.email}`, icon: <IoMail />, label: site.email }
].filter(l => l.href)

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            {site.name}
          </Heading>
          <p>{site.tagline}</p>
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
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Abhijit is a PhD student in Machine Learning at MBZUAI in Abu Dhabi,
          supervised by{' '}
          <Link
            href="https://scholar.google.com/citations?user=GlXI4N8AAAAJ&hl=en"
            target="_blank"
          >
            Prof. Imran Razzak
          </Link>{' '}
          and{' '}
          <Link
            href="https://scholar.google.com/citations?user=fmlEab4AAAAJ&hl=en"
            target="_blank"
          >
            Prof. Nils Lukas
          </Link>
          , and co-founder and CTO of{' '}
          <Link as={NextLink} href="/works/medos/" scroll={false}>
            MedOS Limited
          </Link>
          . His research has three threads: grounding and reasoning in
          multimodal LLMs, so that a model&apos;s answers can be traced back to
          the evidence it was given; watermarking AI-generated content; and
          digital twins. Much of his published work applies these ideas to
          medical imaging. Before the PhD he was an AI Researcher at GE
          Healthcare India.
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
            Publications
          </Button>
          <Button
            as={NextLink}
            href="/works/"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            variant="outline"
          >
            Projects
          </Button>
        </Box>
      </Section>

      <Section delay={0.15}>
        <Heading as="h3" variant="section-title">
          News
        </Heading>
        <List styleType="disc" pl={5} spacing={1}>
          {news.map(({ count, venue, href, place }) => (
            <ListItem key={venue}>
              {count} accepted at{' '}
              <Link href={href} target="_blank">
                {venue}
              </Link>
              , {place}
            </ListItem>
          ))}
        </List>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2026 to 2029</BioYear>
          PhD student, MBZUAI
        </BioSection>
        <BioSection>
          <BioYear>2026 to present</BioYear>
          Co-founder and CTO, MedOS Limited
        </BioSection>
        <BioSection>
          <BioYear>Prior</BioYear>
          AI Researcher, GE Healthcare India
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests
        </Heading>
        <Wrap spacing={2}>
          {interests.map(topic => (
            <WrapItem key={topic}>
              <Tag size="md" variant="subtle" colorScheme="teal">
                {topic}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          {webLinks.map(({ href, icon, label }) => (
            <ListItem key={label}>
              <Link href={href} target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={icon}>
                  {label}
                </Button>
              </Link>
            </ListItem>
          ))}
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
