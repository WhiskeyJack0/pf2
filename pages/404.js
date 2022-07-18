import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  Text,
  useColorModeValue,
  Center
} from '@chakra-ui/react'

import NotFoundDark from '../public/images/lotr-404-dark.png'
import NotFoundLight from '../public/images/lotr-404-light.png'

const NotFound = () => {
  const NotFoundImage = `/images/lotr-404-`
  return(
    <Container h={'100vh'}>
      <Center h={'100%'} flexDirection={'column'}>
      <Image
          src={`${NotFoundImage}${useColorModeValue('dark','light')}.png`}
          width={400}
          height={141}
          alt={'Page not found'}
          loading="lazy"
        />
        <Divider my={6} />
      <Heading as='h1'>Not Found</Heading>
      <Text>Not all those who wander are lost, but you might just be.</Text>
      <Divider my={6} />
      <Box my={6} align='center'>
        <NextLink href='/'>
          <Button colorScheme='teal'>Return to home</Button>
        </NextLink>
      </Box>
      </Center>
    </Container>
  )
}

export default NotFound