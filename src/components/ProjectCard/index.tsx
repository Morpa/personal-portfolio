import Link from 'next/link'
import { MotionProps } from 'framer-motion'
import { Globe } from '@styled-icons/fa-solid'
import { ExternalLink } from '@styled-icons/feather'

import * as S from './styles'

export type ProjectCardProps = {
  name: string
  description: string
  platform: string
  stack: string
  source: string
  demo: string
}

const animationSpring: MotionProps = {
  whileHover: { y: -4 },
  whileTap: {
    y: 0
  },
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 14
  }
}

const ProjectCard = ({
  platform,
  stack,
  description,
  demo,
  source,
  name
}: ProjectCardProps) => (
  <S.Wrapper>
    <div>
      {platform === 'web' && (
        <S.IconCardWrapper {...animationSpring}>
          <Globe aria-label="Globe" />
        </S.IconCardWrapper>
      )}
      <header className="stack">{stack}</header>
      <p>{description}</p>
      <div className="spacer" />
      <div className="links">
        <Link href={demo} passHref>
          <a target="_blank">
            Visit
            <ExternalLink aria-label="External Link" />
          </a>
        </Link>

        <Link href={source} passHref>
          <a target="_blank">
            Source
            <ExternalLink aria-label="External Link" />
          </a>
        </Link>
      </div>
      <div className="footer">{name}</div>
    </div>
  </S.Wrapper>
)

export default ProjectCard
