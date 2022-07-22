import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'


const Posts = () => {
  return (
    <Layout title='Posts'>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blog Posts
      </Heading>
      <Section delay={0.1}>
      </Section>
    </Container>
  </Layout>
  )
}

export default Posts