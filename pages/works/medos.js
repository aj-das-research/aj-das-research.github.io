import { Container, Badge, Heading, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { T, useTr } from '../../lib/i18n'
import thumb from '../../public/images/works/medos_eyecatch.png'

const Product = ({ name, tagline, children }) => (
  <>
    <Heading as="h4" fontSize={18} mt={6} mb={2}>
      {name}{' '}
      <Badge colorScheme="teal" verticalAlign="middle">
        {tagline}
      </Badge>
    </Heading>
    <P style={{ textIndent: 0 }}>{children}</P>
  </>
)

const Work = () => {
  const tr = useTr()
  return (
    <Layout title="MedOS Limited">
      <Container pb={8}>
        <Title>
          MedOS Limited{' '}
          <Badge>
            <T en="Co-founder and CTO" zh="联合创始人兼 CTO" />
          </Badge>
        </Title>
        <WorkImage
          src={thumb.src}
          alt={tr({ en: 'MedOS Limited logo', zh: 'MedOS Limited 标志' })}
        />
        <P>
          <T
            en="MedOS Limited builds medical agentic AI solutions: AI systems that take on complete clinical workflows rather than single prediction tasks, with clinicians kept in control. It is building two products, launching in January 2027."
            zh="MedOS Limited 致力于构建医疗智能体 AI 解决方案：由 AI 系统承担完整的临床工作流程，而非单一的预测任务，同时让临床医生始终掌握主导权。公司正在开发两款产品，将于 2027 年 1 月发布。"
          />
        </P>

        <Product
          name="AI PACS"
          tagline={tr({ en: 'Radiology reporting', zh: '放射学报告' })}
        >
          <T
            en="An AI-native picture archiving and communication system that reads imaging studies and drafts the radiology report automatically, end to end. An expert radiologist stays in the loop to review, correct and sign off every report before it reaches the patient's care team."
            zh="一款 AI 原生的影像归档与通信系统（PACS），可读取影像检查并端到端自动起草放射学报告。专业放射科医生全程参与，在每份报告送达患者的医疗团队之前进行审阅、修改和签发。"
          />
        </Product>

        <Product
          name="ANAMORA"
          tagline={tr({
            en: 'Digital identity of human health',
            zh: '人类健康的数字身份'
          })}
        >
          <T
            en="A conversational AI that talks with patients before their visit, collects their medical history and analyses it, so the doctor starts the consultation already informed. ANAMORA then keeps each person's health record in one place across modalities, from device readings to prescriptions, and links records across a family."
            zh="一款对话式 AI，在患者就诊前与其交流，收集并分析病史，让医生在问诊开始时就已掌握情况。ANAMORA 还将每个人跨模态的健康记录（从设备读数到处方）集中保存在一处，并关联家庭成员之间的记录。"
          />
        </Product>

        <List ml={4} my={6}>
          <ListItem>
            <Meta>
              <T en="Role" zh="职务" />
            </Meta>
            <span>
              <T en="Co-founder and CTO" zh="联合创始人兼首席技术官（CTO）" />
            </span>
          </ListItem>
          <ListItem>
            <Meta>
              <T en="Products" zh="产品" />
            </Meta>
            <span>
              <T
                en="AI PACS, ANAMORA (in development, launching January 2027)"
                zh="AI PACS、ANAMORA（开发中，将于 2027 年 1 月发布）"
              />
            </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
