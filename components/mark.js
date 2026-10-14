import { Box, useColorModeValue } from '@chakra-ui/react'

// Wavy underline for the phrases a reader should not miss.
const Mark = ({ children }) => (
  <Box
    as="span"
    textDecorationLine="underline"
    textDecorationStyle="wavy"
    textDecorationColor={useColorModeValue('teal.500', 'grassTeal')}
    textDecorationThickness="1.5px"
    textUnderlineOffset="5px"
    textDecorationSkipInk="none"
  >
    {children}
  </Box>
)

export default Mark
