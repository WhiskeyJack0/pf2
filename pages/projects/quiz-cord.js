import {
  Container,
  Link,
  List,
  Accordion,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { Title, ProjectImage, Meta, CollapsibleSection } from '../../components/project-detail'
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
            <Link href='https://quiz-cord.up.railway.app'>
              Check it out <ExternalLinkIcon mx={'2px'}/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flask, Bootstrap, Redis, Socket.io, Heroku</span>
          </ListItem>
        </List>
        <Accordion defaultIndex={[3]} allowMultiple>
          <CollapsibleSection title={`Genesis`}>
            <P>As the covid-induced lockdown wore on, my college mates had started a bi-weekly quiz session as a way to keep in touch
            with each other. Initially, the method was to do it over a video call, with the quizmaster starting the slideshow and sharing their screen.
            This was servicable, but the experience was not good. The shared screen would take up most of the screen space, with the videos themselves being 
            shunted off to the side. A possible solution was to screen share from the phone, while conversing via the computer, but that meant the same person would have
            had to join the call twice, muting and deafening one device.</P>
            <P>I took this as an opportunity to re-use my long dormant web developer muscles, which hadn&apos;t really progressed past the basic html/css stuff I had done in college.
            I chose to use Flask as I had been making small personal projects in Python already, and bootstrap because I felt it had a better learning curve than tailwind.</P>
          </CollapsibleSection>
          <CollapsibleSection title={`Challenges`}>
            <P>
              The initial challenges were mainly in familiarising myself with Flask and bootstrap, as well as socket.io. I had some trouble with managing user state as I wanted
              a quick passwordless login experience. 
            </P>
            <P>An unexpected challenge was handling embedding Google Slides. Simply embedding the presentation in an iframe would allow all participants to control the presentation, 
              and there was no API available to have the participants be view-only. This was a major issue as the participants could easily look ahead to the answer slides and there
               was no longer any synchronization between participants of the slide being viewed. </P>
          </CollapsibleSection>
          <CollapsibleSection title={`Learnings`}>
            <P>
              This project greased the wheels of my journey into full stack web development. I learned the basic flow of a web app, user state management and managing rooms in socket.io.
              I was also familiarised with heroku and deployment (or the ease thereof) as my previous projects had mostly been python applications running locally.
            </P>
            <P>
              Solving the issue with the embedded slides was also quite interesting, as my initial research did not provide any meaningful solutions. I ended up creating and hosting an API on 
              the Google Cloud Platform (GCP), which would retrieve the slide-ids of any presentation whose shareable link was provided to it. 
              On my frontend, I embedded the presentation in a non-interactable element; and provided controls for the host, which would append the slide-id for the next slide in the 
              target url of the iframe and mimic moving forward in the slideshow.
            </P>
          </CollapsibleSection>
          <CollapsibleSection title={`Images`}>
            <ProjectImage src='/images/projects/quiz-cord-2x.png' alt='quiz-cord' caption='Viewing a presentation on desktop' />
            <ProjectImage src='/images/projects/quiz-cord-screenshot.png' alt='quiz-cord' caption='Creating a quiz on phone' />
          </CollapsibleSection>
        </Accordion>
        
      </Container>
    </Layout>
  )
}

export default Project