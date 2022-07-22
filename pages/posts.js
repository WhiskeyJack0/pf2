import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


const Posts = () => {
  return (
    <Layout title='Posts'>
    <Container>
      <Heading as='h4' fontSize={28} mb={4}>
        Blog Posts
      </Heading>
      <Section delay={0.1}>
      </Section>
    </Container>
  </Layout>
  )
}

export default Posts