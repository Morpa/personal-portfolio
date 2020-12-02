import Link from 'next/link'
import { ArrowBack } from '@styled-icons/material-outlined'

import Heading from 'components/Heading'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import ProjectCard, { ProjectCardProps } from 'components/ProjectCard'

import * as S from './styles'
import Footer from 'components/Footer'

export type ProjectsProps = {
  projects: ProjectCardProps[]
}

const Projects = ({ projects }: ProjectsProps) => (
  <S.Wrapper>
    <S.TopContainer>
      <Link href="/">
        <S.BackLink>
          <ArrowBack size={25} aria-label="back" />
          Back
        </S.BackLink>
      </Link>
      <Heading size="huge" lineLeft lineColor="primary">
        Projects
      </Heading>
    </S.TopContainer>

    <Container>
      <Grid>
        {projects.map((item) => (
          <ProjectCard key={item.title} {...item} />
        ))}
      </Grid>
    </Container>
    <Footer />
  </S.Wrapper>
)

export default Projects
