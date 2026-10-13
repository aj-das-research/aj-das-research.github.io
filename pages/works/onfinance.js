import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import thumb from '../../public/images/works/onfinance_eyecatch.png'

const Work = () => (
  <Layout title="OnFinance AI">
    <Container>
      <Title>
        OnFinance AI <Badge>Founder</Badge>
      </Title>
      <P>
        An AI company for the financial sector, adopted by the National Stock
        Exchange of India (NSE).
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Role</Meta>
          <span>Founder</span>
        </ListItem>
        <ListItem>
          <Meta>Adopted by</Meta>
          <span>NSE India</span>
        </ListItem>
      </List>

      <WorkImage src={thumb.src} alt="OnFinance AI" />
    </Container>
  </Layout>
)

export default Work
