import { Container, Badge, Heading, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
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

const Work = () => (
  <Layout title="MedOS Limited">
    <Container pb={8}>
      <Title>
        MedOS Limited <Badge>Co-founder and CTO</Badge>
      </Title>
      <WorkImage src={thumb.src} alt="MedOS Limited logo" />
      <P>
        MedOS Limited builds medical agentic AI solutions: AI systems that take
        on complete clinical workflows rather than single prediction tasks, with
        clinicians kept in control. It has two products.
      </P>

      <Product name="AI PACS" tagline="Radiology reporting">
        An AI-native picture archiving and communication system that reads
        imaging studies and drafts the radiology report automatically, end to
        end. An expert radiologist stays in the loop to review, correct and sign
        off every report before it reaches the patient&apos;s care team.
      </Product>

      <Product name="ANAMORA" tagline="Digital identity of human health">
        A conversational AI that talks with patients before their visit,
        collects their medical history and analyses it, so the doctor starts the
        consultation already informed. ANAMORA then keeps each person&apos;s
        health record in one place across modalities, from device readings to
        prescriptions, and links records across a family.
      </Product>

      <List ml={4} my={6}>
        <ListItem>
          <Meta>Role</Meta>
          <span>Co-founder and CTO</span>
        </ListItem>
        <ListItem>
          <Meta>Products</Meta>
          <span>AI PACS, ANAMORA</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
