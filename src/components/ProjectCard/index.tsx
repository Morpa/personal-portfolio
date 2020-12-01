import { Github } from '@styled-icons/boxicons-logos'
import { Computer } from '@styled-icons/material-outlined'
import { MotionProps } from 'framer-motion'

import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Button from 'components/Button'
import Heading from 'components/Heading'

import * as S from './styles'

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

export type ProjectCardProps = {
  title: string
  img: string
  url?: string
  github: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const ProjectCard = ({
  title,
  img,
  url,
  github,
  ribbon,
  ribbonColor,
  ribbonSize
}: ProjectCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <Heading lineLeft color="black" lineColor="secondary">
          {title}
        </Heading>
      </S.Info>

      <S.ButtonsWrapper>
        {!!url && (
          <S.Live {...animationSpring}>
            <Button
              icon={<Computer />}
              size="small"
              as="a"
              href={url}
              aria-label="live"
            >
              Live
            </Button>
          </S.Live>
        )}
        <S.Git {...animationSpring}>
          <Button
            icon={<Github />}
            size="small"
            as="a"
            href={github}
            aria-label="github"
          >
            Github
          </Button>
        </S.Git>
      </S.ButtonsWrapper>
    </S.Content>
  </S.Wrapper>
)

export default ProjectCard
