import HomeTemplate, { HomeTemplateProps } from 'templates/Home'
import client from 'graphql/client'
import { GET_PROJECTS, GET_SKILLS } from 'graphql/queries'
import { GetProjectsQuery, GetSkillsQuery } from 'graphql/generated/graphql'

export default function Home({ skills, projects }: HomeTemplateProps) {
  return <HomeTemplate skills={skills} projects={projects} />
}

export async function getStaticProps() {
  const { skills } = await client.request<GetSkillsQuery>(GET_SKILLS)
  const { projects } = await client.request<GetProjectsQuery>(GET_PROJECTS)

  return {
    props: {
      skills,
      projects
    }
  }
}
