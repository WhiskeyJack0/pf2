import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../libs/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
