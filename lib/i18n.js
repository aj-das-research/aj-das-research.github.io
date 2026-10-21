import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

// English and Simplified Chinese. Each text keeps both versions side by side:
//   <T en="Projects" zh="研究项目" />           inline text or JSX
//   tr({ en: 'Projects', zh: '研究项目' })      a string, e.g. for a title or alt text
// The language comes from ?lang=zh|en, then the visitor's last choice, then the browser.
export const LANGS = ['en', 'zh']

const LangContext = createContext({ lang: 'en', setLang: () => {} })

export const LangProvider = ({ children }) => {
  const [lang, setLangState] = useState('en')

  useEffect(() => {
    let l = null
    try {
      l = new URLSearchParams(window.location.search).get('lang')
    } catch (_) {}
    if (!LANGS.includes(l)) {
      try {
        l = window.localStorage.getItem('lang')
      } catch (_) {}
    }
    if (!LANGS.includes(l)) {
      l = (navigator.language || '').toLowerCase().startsWith('zh')
        ? 'zh'
        : 'en'
    }
    setLangState(l)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  const setLang = useCallback(l => {
    setLangState(l)
    try {
      window.localStorage.setItem('lang', l)
    } catch (_) {}
  }, [])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)

export const useTr = () => {
  const { lang } = useLang()
  return v =>
    v && typeof v === 'object' && 'en' in v
      ? lang === 'zh' && v.zh != null
        ? v.zh
        : v.en
      : v
}

export const T = ({ en, zh }) => {
  const { lang } = useLang()
  return lang === 'zh' && zh != null ? zh : en
}
