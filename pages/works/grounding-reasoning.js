import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import thumb from '../../public/images/works/grounding_eyecatch.png'

const Work = () => (
  <Layout title="Grounding and Reasoning">
    <Container>
      <Title>
        Grounding and Reasoning <Badge>Research</Badge>
      </Title>
      <P>Details coming soon.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Area</Meta>
          <span>Grounding and reasoning in multimodal LLMs</span>
        </ListItem>
      </List>

      <WorkImage src={thumb.src} alt="Grounding and Reasoning" />
    </Container>
  </Layout>
)

export default Work
