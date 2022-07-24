import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Typewriter from 'typewriter-effect'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
    <Container>
      <Box
        borderRadius={'lg'}
        p={3}
        mb={6}
        align="center"
        fontSize={20}
      >Hello, I&apos;m 
        <Typewriter 
        options={{
          loop: true
        }}
        onInit={(typewriter) => {
          typewriter
            .changeDelay(45)
            .typeString("a full-stack developer")
            .pauseFor(1000)
            .deleteChars(22)
            .typeString("based in India")
            .pauseFor(1000)
            .start();
        }}
      />
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant={'page-title'}>
            Sandeepan Roy
          </Heading>
          <p>Developer / Designer / Writer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            alt="Hero Image"
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/square_pfp.png"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;ve worked in Microsoft India for many years and am very
          comfortable with working in large teams and codebases. Having worked
          on products like Windows and Office for Android, I have a great
          appreciation for developing scalable and maintainable solutions.
        </Paragraph>
        <Box align="center" my={4}>
        <NextLink href="/projects" passHref>
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            Projects
          </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2007-2011</BioYear>
          Graduated from Manipal Institute of Technology as a Bachelor of
          Engineering (Computer Science).
        </BioSection>
        <BioSection>
          <BioYear>2011-2016</BioYear>
          Worked at Microsoft India Development Center in the Windows SE and
          Office on Android teams.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests
        </Heading>
        <Paragraph>Reading, Writing, Football, Videogames</Paragraph>
      </Section>
    </Container>
    </Layout>
  )
}

export default Page
