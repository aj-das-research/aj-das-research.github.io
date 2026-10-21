import {
  Container,
  Badge,
  Heading,
  OrderedList,
  ListItem
} from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import Publication from '../../components/publication'
import publications from '../../lib/publications'
import { T, useTr } from '../../lib/i18n'
import thumb from '../../public/images/works/digitaltwins_eyecatch.png'

const papers = publications.filter(p =>
  (p.projects || []).includes('digital-twins')
)

const questions = [
  {
    en: 'How can imaging, genomics and proteomics be fused into one model that stays consistent from molecules to cells to organs?',
    zh: '如何将影像、基因组学和蛋白质组学融合为一个从分子到细胞再到器官都保持一致的模型？'
  },
  {
    en: "Can a twin built from a patient's own scans predict how an organ responds to a drug, a device or a surgical intervention?",
    zh: '基于患者自身影像构建的孪生体，能否预测器官对药物、器械或手术干预的反应？'
  },
  {
    en: 'Can a twin generate realistic, labelled synthetic data to train medical AI and surgical robots without exposing patient records?',
    zh: '孪生体能否生成逼真且带标注的合成数据，用于训练医疗 AI 和手术机器人，而不暴露患者记录？'
  },
  {
    en: 'How do we validate a twin against the real patient, so a clinician knows when its predictions can be trusted?',
    zh: '如何用真实患者验证孪生体，让临床医生知道何时可以信任它的预测？'
  }
]

const Work = () => {
  const tr = useTr()
  return (
    <Layout title={tr({ en: 'Digital Twins', zh: '数字孪生' })}>
      <Container pb={8}>
        <Title>
          <T en="Digital Twins" zh="数字孪生" />{' '}
          <Badge>
            <T en="Research" zh="研究" />
          </Badge>
        </Title>
        <WorkImage
          src={thumb.src}
          alt={tr({
            en: "A patient's imaging, genomic and proteomic data flowing into a virtual human, which feeds tasks such as organ simulation, surgical planning, robot training and synthetic data",
            zh: '患者的影像、基因组和蛋白质组数据汇入一个虚拟人，进而支持器官模拟、手术规划、机器人训练和合成数据等任务'
          })}
        />
        <P>
          <T
            en="Medicine still learns mostly from real patients. Every new drug, device, surgical plan or AI model is tested on people, or on data collected from them one modality at a time: imaging shows anatomy, sequencing shows the genome, proteomics shows molecular state, and no single model ties them together into a patient we can safely run experiments on. This project asks how to build digital twins: computational models of a patient's organs and biology that can be simulated, queried and perturbed in place of the real person. Four questions guide it:"
            zh="医学至今主要仍从真实患者身上学习。每一种新药、新器械、新手术方案或新的 AI 模型，都要在人身上测试，或在从人身上逐一模态采集的数据上测试：影像显示解剖结构，测序揭示基因组，蛋白质组学反映分子状态，却没有任何单一模型能将它们整合成一个可以安全开展实验的“患者”。本项目研究如何构建数字孪生：对患者器官与生物学特征的计算模型，可以代替真实的人进行模拟、查询和干预。四个问题指引着这项研究："
          />
        </P>
        <OrderedList spacing={0.5} my={3} pl={10}>
          {questions.map(q => (
            <ListItem key={q.en}>{tr(q)}</ListItem>
          ))}
        </OrderedList>
        <P style={{ textIndent: 0 }}>
          <T
            en="Our final goal is Virtual Humans: digital twins of the whole patient that can serve any task in healthcare, from imaging and multimodal genomics and proteomics to organ studies, surgical planning, training robotic models and generating synthetic data."
            zh="我们的最终目标是“虚拟人”：覆盖整个患者的数字孪生，可服务于医疗健康中的任何任务，从影像与多模态基因组学、蛋白质组学，到器官研究、手术规划、机器人模型训练和合成数据生成。"
          />
        </P>

        {papers.length > 0 && (
          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              <T en="Related Publications" zh="相关论文" />
            </Heading>
            {papers.map(p => (
              <Publication key={p.title} p={p} />
            ))}
          </Section>
        )}
      </Container>
    </Layout>
  )
}

export default Work
