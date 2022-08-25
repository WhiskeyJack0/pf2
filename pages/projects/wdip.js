import {
  Container,
  Link,
  List,
  ListItem,
  Accordion
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { Title, ProjectImage, Meta, CollapsibleSection } from '../../components/project-detail'
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
        <Accordion defaultIndex={[3]} allowMultiple>
          <CollapsibleSection title={`Genesis`}>
            <P>This project was a simply born of a desire to implement a site which was interacting with a large dataset. One look at my ever-expanding game library provided 
              the theme for this project.
            </P>
            <P>One of the goals I kept for myself was to use pure CSS instead of a UI framework in order to polish my CSS basics.</P>
          </CollapsibleSection>
          <CollapsibleSection title={`Challenges`}>
            <P>
              Using just pure CSS took away some of the crutches I had been unknowingly relying on for making a reactive UI. This forced me to focus more on my basic CSS skills.
            </P>
            <P>Dealing with page routing as well as implementing pagination of the results also proved to be new challenges.</P>
          </CollapsibleSection>
          <CollapsibleSection title={`Learnings`}>
            <P>
              This project helped in furthering my React knowledge, and learning about routing and custom hooks.
            </P>
            <P>
              I also got the opportunity to improve my CSS skills.
            </P>
          </CollapsibleSection>
          <CollapsibleSection title={`Images`}>
            <ProjectImage src='/images/projects/wdip-2x.png' alt='What Do I Play' caption='Recent Games page (desktop)' />
            <ProjectImage src='/images/projects/wdip-detail.png' alt='What Do I Play' caption='Viewing a game (desktop)' />
            <ProjectImage src='/images/projects/wdip-phone.png' alt='What Do I Play' caption='Viewing a game (phone)' />
          </CollapsibleSection>
        </Accordion>
        
      </Container>
    </Layout>
  )
}

export default Project