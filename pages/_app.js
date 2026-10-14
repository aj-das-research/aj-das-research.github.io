import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import Script from 'next/script'
import { useEffect } from 'react'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

// GoatCounter counts the first page load itself; client-side navigation
// between pages is counted here. Dashboard: https://abhijit21.goatcounter.com
const useGoatCounter = router => {
  useEffect(() => {
    const count = url => window.goatcounter?.count?.({ path: url })
    router.events.on('routeChangeComplete', count)
    return () => router.events.off('routeChangeComplete', count)
  }, [router.events])
}

function Website({ Component, pageProps, router }) {
  useGoatCounter(router)
  return (
    <Chakra>
      <Script
        data-goatcounter="https://abhijit21.goatcounter.com/count"
        src="https://gc.zgo.at/count.js"
        strategy="afterInteractive"
      />
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
