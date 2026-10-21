import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import { T } from '../lib/i18n'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">
        <T en="Not found" zh="页面未找到" />
      </Heading>
      <Text>
        <T
          en="The page you're looking for was not found."
          zh="您要找的页面不存在。"
        />
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          <T en="Return to home" zh="返回首页" />
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
