import {
  Container,
  Heading,
  Box,
  Text,
  Link,
  HStack,
  Badge,
  Divider,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import P from '../components/paragraph'
import { Meta } from '../components/work'
import tools from '../lib/tools'
import { T, useTr } from '../lib/i18n'

const linkLabels = { code: '代码', docs: '文档' }

const Tool = ({ t, tr }) => (
  <Box mb={8}>
    <Heading as="h4" fontSize={18} mb={1}>
      {t.name}{' '}
      <Badge colorScheme="teal" verticalAlign="middle">
        {tr(t.tagline)}
      </Badge>
    </Heading>
    <HStack spacing={2} mb={2}>
      {(t.meta || []).map(m => (
        <Badge key={m}>{m}</Badge>
      ))}
    </HStack>
    <P style={{ textIndent: 0 }}>{tr({ en: t.en, zh: t.zh })}</P>
    <List ml={0} my={3} spacing={1} fontSize="sm">
      <ListItem>
        <Meta>
          <T en="When to use" zh="适用场景" />
        </Meta>
        <span>{tr(t.use)}</span>
      </ListItem>
      <ListItem>
        <Meta>
          <T en="Who it's for" zh="适用人群" />
        </Meta>
        <span>{tr(t.who)}</span>
      </ListItem>
    </List>
    <HStack spacing={3} flexWrap="wrap" rowGap={1}>
      {Object.entries(t.links || {})
        .filter(([, href]) => href)
        .map(([label, href]) => (
          <Link key={label} href={href} target="_blank" fontSize="sm">
            {tr({ en: label, zh: linkLabels[label] || label })}{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        ))}
    </HStack>
  </Box>
)

const Tools = () => {
  const tr = useTr()
  return (
    <Layout title={tr({ en: 'Tools', zh: '工具' })}>
      <Container>
        <Heading as="h3" fontSize={20} mb={2}>
          <T en="Tools" zh="工具" />
        </Heading>
        <Text fontSize="sm" mb={4}>
          <T
            en="Open-source software I build and maintain for research. Each tool has documentation and installs from GitHub or PyPI."
            zh="我为研究开发并维护的开源软件。每个工具都配有文档，可从 GitHub 或 PyPI 安装。"
          />
        </Text>
        <Divider mb={6} />
        {tools.map((t, i) => (
          <Section key={t.id} delay={0.1 * i}>
            <Tool t={t} tr={tr} />
          </Section>
        ))}
      </Container>
    </Layout>
  )
}

export default Tools
