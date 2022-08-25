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
    <Layout title={'Daily Trivia Party'}>
      <Container>
        <Title>
          Daily Trivia Party
        </Title>
        <P>
          A Wordle-inspired daily trivia game with questions from a wide
          range of topics. You have five multiple-choice questions to answer, 
          with the option to swap out any one for a different question.
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
        <Accordion defaultIndex={[3]} allowMultiple>
          <CollapsibleSection title={`Genesis`}>
            <P>Wordle had really taken the online world by storm. It was simple in its rules and format, while its design became instantly recognizable thanks to its popularity.
              It really provided the perfect inspiration for a project to learn ReactJS.
            </P>
            <P>I wanted maximize the learnings from each project, so I elected to use the ChakraUI framework over plain CSS. For a similar reason, I chose AWS as the backend, as I 
              had no prior experience with that.
            </P>
          </CollapsibleSection>
          <CollapsibleSection title={`Challenges`}>
            <P>
              The main challenge was grasping the basics of React and ChakraUI, as well as having to contend with the UI on different devices.
            </P>
            <P>An unexpected set of issues was to do with user experience. The constant iterations I had been doing during development had imprinted the flow of the game and its UI 
              which had led to some incorrect assumptions about a first-time users behaviour.</P>
            <P>The backend setup was also slower, as I was navigating the AWS waters for the first time.</P>
          </CollapsibleSection>
          <CollapsibleSection title={`Learnings`}>
            <P>
              I feel this project solidified the basics of React for me. It also emphasised the need to pay attention to the different UI experiences/expectations on mobile versus desktop. 
              For example, on desktop, the daily questions are shown all at once, along with the submit button below to check the score. On mobile, the questions are shown one at a time, 
              designed to be navigable by the user (like a carousel). The submit was present below the question card on mobile, which led to early users answering only the first question, 
              clicking submit and the game ending without them having seen the rest of the set. 
            </P>
            <P>
              I also learned to look at the user experience without my inherent biases. In addition, I realised I was rushing to implement fixes and changes after the initial feedback, without 
              adequate testing.
            </P>
          </CollapsibleSection>
          <CollapsibleSection title={`Images`}>
          <ProjectImage src='/images/projects/dtp-hires-2x.png' alt='daily trivia party' caption='A daily quiz on the desktop (light mode)' />
          <ProjectImage src='/images/projects/dtp-phone.png' alt='daily trivia party' caption='A completed quiz on the phone (dark mode)' />
          <ProjectImage src='/images/projects/dtp-phone-stats.png' alt='daily trivia party' caption='Stats page on the phone' />
          </CollapsibleSection>
        </Accordion>

      </Container>
    </Layout>
  )
}

export default Project