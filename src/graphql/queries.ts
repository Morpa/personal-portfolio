import { gql } from 'graphql-request'

export const GET_SKILLS = gql`
  query getSkills {
    skills {
      id
      name
      image
    }
  }
`

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      description
      platform
      stack
      source
      demo
    }
  }
`
