import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbGrounding from '../public/images/works/grounding_eyecatch.png'
import thumbWatermarking from '../public/images/works/watermarking_eyecatch.png'
import thumbDigitalTwins from '../public/images/works/digitaltwins_eyecatch.png'
import thumbMedOS from '../public/images/works/medos_eyecatch.png'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="grounding-reasoning"
            title="Grounding and Reasoning"
            thumbnail={thumbGrounding}
          />
        </Section>
        <Section>
          <WorkGridItem
            id="watermarking"
            title="Watermarking"
            thumbnail={thumbWatermarking}
          />
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="digital-twins"
            title="Digital Twins"
            thumbnail={thumbDigitalTwins}
          />
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Venture
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="medos" title="MedOS Limited" thumbnail={thumbMedOS}>
            Medical agentic AI solutions
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
