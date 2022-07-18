import {
  Container,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { Title, ProjectImage, Meta } from '../../components/project-detail'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title={'Quiz-cord'}>
      <Container>
        <Title>
          Quiz-cord
        </Title>
        <P>
          A simple site for hosting quizzes or presentations without the need for
          screen sharing.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://quiz-cord.herokuapp.com'>
              Check it out <ExternalLinkIcon mx={'2px'}/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flask, Bootstrap</span>
          </ListItem>
        </List>
        <ProjectImage src='/images/projects/quiz-cord-2x.png' alt='quiz-cord' />
        <ProjectImage src='/images/projects/quiz-cord-screenshot.png' alt='quiz-cord' />
      </Container>
    </Layout>
  )
}

export default Project