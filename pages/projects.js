import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbQuizcord from '../public/images/projects/quiz-cord-2x.png'
import thumbDTP from '../public/images/projects/dtp-hires-2x.png'
import thumbWDIP from '../public/images/projects/wdip-2x.png'

const Projects = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <ProjectGridItem id='quiz-cord' title='Quiz-cord' thumbnail={thumbQuizcord}>
          A site for hosting quizzes or presentations without the need for screen sharing.
          <br/>
          Made with Flask and Bootstrap.
            </ProjectGridItem> 
        </Section>
        <Section>
          <ProjectGridItem id='dtp' title='Daily Trivia Party' thumbnail={thumbDTP}>
          A Wordle-inspired daily trivia game with questions from a wide range of topics.
          <br/>
          Made with ReactJS and ChakraUI
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id='wdip' title='What Do I Play?' thumbnail={thumbWDIP}>
            A videogame repository to find new games to play
            <br/>
            Made with ReactJS
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
