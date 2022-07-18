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
    <Layout title={'Daily Trivia Party'}>
      <Container>
        <Title>
          Daily Trivia Party
        </Title>
        <P>
          A Wordle-inspired daily trivia game with questions from a wide
          range of topics.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://dtparty.netlify.app/'>
              Check it out <ExternalLinkIcon mx={'2px'}/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, ChakraUI, AWS</span>
          </ListItem>
        </List>
        <ProjectImage src='/images/projects/dtp-hires-2x.png' alt='daily trivia party' />
        <ProjectImage src='/images/projects/dtp-phone.png' alt='daily trivia party' />
        <ProjectImage src='/images/projects/dtp-phone-stats.png' alt='daily trivia party' />
      </Container>
    </Layout>
  )
}

export default Project