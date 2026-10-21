import styled from '@emotion/styled'

const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
  hyphens: auto;

  :lang(zh-CN) & {
    text-indent: 2em;
  }
`

export default Paragraph
