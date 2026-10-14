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
import thumb from '../../public/images/works/digitaltwins_eyecatch.png'

const papers = publications.filter(p =>
  (p.projects || []).includes('digital-twins')
)

const Work = () => (
  <Layout title="Digital Twins">
    <Container pb={8}>
      <Title>
        Digital Twins <Badge>Research</Badge>
      </Title>
      <WorkImage
        src={thumb.src}
        alt="A patient's imaging, genomic and proteomic data flowing into a virtual human, which feeds tasks such as organ simulation, surgical planning, robot training and synthetic data"
      />
      <P>
        Medicine still learns mostly from real patients. Every new drug, device,
        surgical plan or AI model is tested on people, or on data collected from
        them one modality at a time: imaging shows anatomy, sequencing shows the
        genome, proteomics shows molecular state, and no single model ties them
        together into a patient we can safely run experiments on. This project
        asks how to build digital twins: computational models of a
        patient&apos;s organs and biology that can be simulated, queried and
        perturbed in place of the real person. Four questions guide it:
      </P>
      <OrderedList spacing={0.5} my={3} pl={10}>
        <ListItem>
          How can imaging, genomics and proteomics be fused into one model that
          stays consistent from molecules to cells to organs?
        </ListItem>
        <ListItem>
          Can a twin built from a patient&apos;s own scans predict how an organ
          responds to a drug, a device or a surgical intervention?
        </ListItem>
        <ListItem>
          Can a twin generate realistic, labelled synthetic data to train
          medical AI and surgical robots without exposing patient records?
        </ListItem>
        <ListItem>
          How do we validate a twin against the real patient, so a clinician
          knows when its predictions can be trusted?
        </ListItem>
      </OrderedList>
      <P style={{ textIndent: 0 }}>
        Our final goal is Virtual Humans: digital twins of the whole patient
        that can serve any task in healthcare, from imaging and multimodal
        genomics and proteomics to organ studies, surgical planning, training
        robotic models and generating synthetic data.
      </P>

      {papers.length > 0 && (
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Related Publications
          </Heading>
          {papers.map(p => (
            <Publication key={p.title} p={p} />
          ))}
        </Section>
      )}
    </Container>
  </Layout>
)

export default Work
