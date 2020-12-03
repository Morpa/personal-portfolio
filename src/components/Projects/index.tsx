import Link from 'next/link'
import { ArrowBack } from '@styled-icons/material-outlined'
import { MotionProps } from 'framer-motion'

import Heading from 'components/Heading'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import ProjectCard, { ProjectCardProps } from 'components/ProjectCard'

import * as S from './styles'
import Footer from 'components/Footer'

export type ProjectsProps = {
  projects: ProjectCardProps[]
}

const animationSpring: MotionProps = {
  whileHover: { x: 4 },
  whileTap: {
    x: 0
  },
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 14
  }
}

const initialAnimation: MotionProps = {
  initial: { transform: 'translateY(100%)' },
  animate: { transform: 'translateY(0px)' },
  exit: { transform: 'translateY(100%)' }
}

const Projects = ({ projects }: ProjectsProps) => (
  <S.Wrapper {...initialAnimation}>
    <S.TopContainer>
      <S.LinkButton {...animationSpring}>
        <Link href="/">
          <S.BackLink>
            <ArrowBack size={25} aria-label="back" />
            Back
          </S.BackLink>
        </Link>
      </S.LinkButton>
      <Heading size="huge" lineLeft lineColor="primary">
        Projects
      </Heading>
    </S.TopContainer>

    <Container>
      <Grid>
        {projects.map((item) => (
          <ProjectCard {...item} key={item.title} />
        ))}
      </Grid>
    </Container>
    <Footer />
  </S.Wrapper>
)

export default Projects
