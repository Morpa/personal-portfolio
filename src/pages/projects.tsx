import Projects, { ProjectsProps } from 'components/Projects'

import projectsMock from 'components/Projects/mock'

export default function Portfolio(props: ProjectsProps) {
  return <Projects {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      projects: projectsMock
    }
  }
}
