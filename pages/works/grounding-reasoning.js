import {
  Container,
  Badge,
  Heading,
  Box,
  Image,
  Text,
  Link
} from '@chakra-ui/react'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import Publication from '../../components/publication'
import publications from '../../lib/publications'
import teaser from '../../public/images/works/grounding_teaser.svg'

const papers = publications.filter(p =>
  (p.projects || []).includes('grounding-reasoning')
)

const Work = () => (
  <Layout title="Grounding and Reasoning">
    <Container>
      <Title>
        Grounding and Reasoning <Badge>Research</Badge>
      </Title>
      <P>
        Vision-language models now answer questions about medical images in
        fluent, confident language. That confidence is the problem: a model
        gives the same certain-sounding answer whether or not it rests on visual
        evidence the model has actually seen and can handle. In medicine, a
        confident answer about an image the model does not understand is worse
        than no answer at all.
      </P>
      <P>
        This project asks how to make the answers of multimodal LLMs traceable
        to the evidence they were given. Three questions guide it. Where inside
        a vision-language model does visual evidence enter the answer, and where
        does it get lost? Can a model tell, at test time and without labels,
        that an input lies outside what it can reason about? And can its
        reasoning steps be tied to image regions that a clinician can check?
      </P>

      <Section delay={0.1}>
        <Box my={6}>
          <Link href={teaser.src} target="_blank">
            <Image
              src={teaser.src}
              alt="PROTON: covariate-shifted images get the same MCM score as in-distribution ones but separate in embedding space; PROTON raises AUROC across shift types and three medical VLMs."
              w="full"
              borderRadius="lg"
            />
          </Link>
          <Text fontSize="sm" mt={2} opacity={0.8}>
            <b>
              Reading the embedding space catches inputs the softmax misses.
            </b>{' '}
            (a) Covariate-shifted fundus images get the same MCM score as
            in-distribution ones (illustration) but sit apart in the VLM
            embedding. (b) PROTON builds class prototypes online from confident
            test predictions and mixes prototype distance with MCM. (c) It is
            the best zero-shot score needing no extra prompts or labels; MCM
            with hierarchical prompts stays ahead on semantic and covariate
            shift. (d) The gain carries to radiology and pathology VLMs. Numbers
            from the PROTON paper (MICCAI 2026).
          </Text>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Publications
        </Heading>
        {papers.map(p => (
          <Publication key={p.title} p={p} />
        ))}
      </Section>
    </Container>
  </Layout>
)

export default Work
