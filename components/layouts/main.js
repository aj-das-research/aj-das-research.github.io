import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import site from '../../lib/site'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={`${site.name}, ${site.tagline}`} />
        <meta name="author" content={site.name} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site.name} />
        <meta name="twitter:image" content={`${site.url}/card.png`} />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:title" content={site.name} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${site.url}/card.png`} />
        <title>{`${site.name} - Homepage`}</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={24}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
