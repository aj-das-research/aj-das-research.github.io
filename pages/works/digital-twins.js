import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import thumb from '../../public/images/works/digitaltwins_eyecatch.png'

const Work = () => (
  <Layout title="Digital Twins">
    <Container>
      <Title>
        Digital Twins <Badge>Research</Badge>
      </Title>
      <P>Details coming soon.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Area</Meta>
          <span>Digital twins</span>
        </ListItem>
      </List>

      <WorkImage src={thumb.src} alt="Digital Twins" />
    </Container>
  </Layout>
)

export default Work
