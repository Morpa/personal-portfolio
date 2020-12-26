import Main, { MainProps } from 'components/Main'
import { getAllProjects } from 'libs/projects'
import { getAllSkills } from 'libs/skills'

export default function Home(props: MainProps) {
  return <Main {...props} />
}

export async function getStaticProps() {
  const skills = getAllSkills()

  const projects = getAllProjects()

  return {
    props: {
      skills: [...skills.skills],
      projects: [...projects.projects]
    }
  }
}
