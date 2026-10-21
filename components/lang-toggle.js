import { Button, ButtonGroup, useColorModeValue } from '@chakra-ui/react'
import { useLang } from '../lib/i18n'

const options = [
  { lang: 'en', label: 'EN', aria: 'English' },
  { lang: 'zh', label: '中文', aria: '切换到中文' }
]

const LangToggle = props => {
  const { lang, setLang } = useLang()
  const idle = useColorModeValue('gray.600', 'whiteAlpha.700')
  return (
    <ButtonGroup size="sm" isAttached variant="outline" {...props}>
      {options.map(o => (
        <Button
          key={o.lang}
          onClick={() => setLang(o.lang)}
          aria-label={o.aria}
          aria-pressed={lang === o.lang}
          colorScheme="teal"
          variant={lang === o.lang ? 'solid' : 'outline'}
          color={lang === o.lang ? undefined : idle}
          px={2.5}
          minW="40px"
        >
          {o.label}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default LangToggle
