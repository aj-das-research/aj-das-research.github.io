import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import site from '../../lib/site'
import thumb from '../../public/images/works/segevalkit_eyecatch.png'

const Work = () => (
  <Layout title="SegEvalKit">
    <Container>
      <Title>
        SegEvalKit <Badge>2026-</Badge>
      </Title>
      <P>
        An evaluation library for segmentation models on CT volumes. It takes a
        standard input format and produces the metrics, plots and visualisations
        needed to compare models fairly, and is being used to build a benchmark
        on the PanTS dataset. Detection metrics such as FROC and an interactive
        UI are in progress.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href={site.links.github} target="_blank">
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Domain</Meta>
          <span>Medical image segmentation, CT</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
      </List>

      <WorkImage src={thumb.src} alt="SegEvalKit" />
    </Container>
  </Layout>
)

export default Work
