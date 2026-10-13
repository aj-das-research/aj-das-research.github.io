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
  IoCube
} from 'react-icons/io5'
import Image from 'next/image'
import site from '../lib/site'
import profileImage from '../public/images/profile.jpg'

const interests = [
  'Grounding and Reasoning in Multimodal LLMs',
  'Watermarking AI Generated Content',
  'Digital Twins'
]

const webLinks = [
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
          supervised by Prof. Imran Razzak and Prof. Nils Lukas. He works on
          making vision-language models trustworthy enough for medical imaging:
          reducing hallucinations, giving models honest uncertainty through
          conformal prediction, catching inputs they were never trained for, and
          looking inside them to understand how they reason. Before the PhD he
          spent three years in industry R&amp;D building healthcare technology
          and co-founded the medical AI startup{' '}
          <Link as={NextLink} href="/works/medos/" scroll={false}>
            MedOS Limited
          </Link>
          .
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
