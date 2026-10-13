import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import thumb from '../../public/images/works/medos_eyecatch.png'

const Work = () => (
  <Layout title="MedOS Limited">
    <Container>
      <Title>
        MedOS Limited <Badge>Co-founder and CTO</Badge>
      </Title>
      <P>
        A medical AI startup building clinical AI products, including agents
        that draft radiology reports and conversational avatars for
        patient-facing care.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Role</Meta>
          <span>Co-founder and CTO</span>
        </ListItem>
        <ListItem>
          <Meta>Products</Meta>
          <span>Radiology reporting agents, conversational avatars</span>
        </ListItem>
      </List>

      <WorkImage src={thumb.src} alt="MedOS Limited" />
    </Container>
  </Layout>
)

export default Work
