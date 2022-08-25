import NextLink from 'next/link'
import {
  Heading,
  Box,
  Image,
  Link,
  Badge,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Stack,
  Text,
  Center
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => {
  return (
    <Box>
    <NextLink href={'/projects'}>
      <Link>Projects</Link>
    </NextLink>

  <span>
    &nbsp;
    <ChevronRightIcon />
    &nbsp;
  </span>
  <Heading display={'inline-block'} as='h3' fontSize={20} mb={4}>
    {children}
  </Heading>
  </Box>
  )
}

export const ProjectImage = ({ src, alt, caption}) => {
  return(
    <Stack mb={6}>
      <Image borderRadius={'lg'} w='full' src={src} alt={alt}/>
      <Center><Text fontSize='xs' fontStyle={'italic'} opacity={0.6}>{caption ? caption : ''}</Text></Center>
    </Stack>
  )
}

export const Meta = ({ children }) => {
  return(
    <Badge colorScheme={'green'} mr={2}>
    {children}
  </Badge>
  )
}

export const CollapsibleSection = ({ title, children }) => {
  return(
    <AccordionItem>
        <h3>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
            <Heading display={'inline-block'} as='h3' variant={'collapsible-title'}>
              {title}
            </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h3>
        <AccordionPanel pb={4}>
          {children}
        </AccordionPanel>
      </AccordionItem>
  )
}