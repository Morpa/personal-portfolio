import Projects, { ProjectsProps } from 'components/Projects'

import projectsData from 'data/projects'

export default function Portfolio(props: ProjectsProps) {
  return <Projects {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      projects: projectsData
    }
  }
}
