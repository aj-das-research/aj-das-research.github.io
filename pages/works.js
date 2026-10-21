import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbGrounding from '../public/images/works/grounding_eyecatch.png'
import thumbWatermarking from '../public/images/works/watermarking_eyecatch.png'
import thumbDigitalTwins from '../public/images/works/digitaltwins_eyecatch.png'
import thumbMedOS from '../public/images/works/medos_eyecatch.png'
import { T, useTr } from '../lib/i18n'

const Works = () => {
  const tr = useTr()
  return (
    <Layout title={tr({ en: 'Projects', zh: '研究项目' })}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          <T en="Projects" zh="研究项目" />
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="grounding-reasoning"
              title={tr({
                en: 'Grounding and Reasoning in Multimodal LLMs',
                zh: '多模态大语言模型中的定位与推理'
              })}
              thumbnail={thumbGrounding}
            />
          </Section>
          <Section>
            <WorkGridItem
              id="watermarking"
              title={tr({
                en: 'Watermarking AI Generated Content',
                zh: 'AI 生成内容水印'
              })}
              thumbnail={thumbWatermarking}
            />
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="digital-twins"
              title={tr({ en: 'Digital Twins', zh: '数字孪生' })}
              thumbnail={thumbDigitalTwins}
            />
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            <T en="Venture" zh="创业" />
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="medos"
              title="MedOS Limited"
              thumbnail={thumbMedOS}
            >
              <T
                en="Medical agentic AI solutions"
                zh="医疗智能体 AI 解决方案"
              />
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
