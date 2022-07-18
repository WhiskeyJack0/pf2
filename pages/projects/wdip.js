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
    <Layout title={'What Do I Play'}>
      <Container>
        <Title>
         What Do I Play
        </Title>
        <P>
          A site for discovering new videogames to play, with options to view by popularity, ratings or filter
          by the platform of your choice.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://wdip.netlify.app/'>
              Check it out <ExternalLinkIcon mx={'2px'}/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS</span>
          </ListItem>
        </List>
        <ProjectImage src='/images/projects/wdip-2x.png' alt='What Do I Play' />
        <ProjectImage src='/images/projects/wdip-detail.png' alt='What Do I Play' />
        <ProjectImage src='/images/projects/wdip-phone.png' alt='What Do I Play' />
      </Container>
    </Layout>
  )
}

export default Project