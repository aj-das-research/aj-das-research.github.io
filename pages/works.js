import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSegEvalKit from '../public/images/works/segevalkit_eyecatch.png'
import thumbMedOS from '../public/images/works/medos_eyecatch.png'
import thumbOnFinance from '../public/images/works/onfinance_eyecatch.png'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Research software
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="segevalkit"
            title="SegEvalKit"
            thumbnail={thumbSegEvalKit}
          >
            An evaluation library for medical image segmentation models on CT
            volumes: metrics, plots and visualisations from one standard input
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Ventures
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="medos" title="MedOS" thumbnail={thumbMedOS}>
            Clinical AI products, including radiology reporting agents and
            conversational avatars
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="onfinance"
            title="OnFinance AI"
            thumbnail={thumbOnFinance}
          >
            Financial AI company, adopted by the National Stock Exchange of
            India
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
