import { useEffect, useState } from 'react'
import { Github } from '@styled-icons/boxicons-logos'
import { Computer, Add, Close } from '@styled-icons/material-outlined'
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
  techs?: string[]
  description?: string
  github: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const ProjectCard = ({
  title,
  img,
  url,
  techs,
  description,
  github,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
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
          <S.More {...animationSpring}>
            <Button
              icon={<Add />}
              size="small"
              aria-label="open modal"
              onClick={() => setIsOpen(true)}
            />
          </S.More>
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

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.ModalContent>
          {!!techs && (
            <>
              <Heading lineBottom lineColor="primary" size="huge">
                Techs
              </Heading>

              <S.TechsWrapper>
                {techs.map((tech, index) => (
                  <S.Tech key={`tech-${index}`}> {tech}</S.Tech>
                ))}
              </S.TechsWrapper>
            </>
          )}

          {!!description && (
            <>
              <Heading lineBottom lineColor="primary" size="huge">
                Description
              </Heading>
              <S.Description>{description}</S.Description>
            </>
          )}
        </S.ModalContent>
      </S.Modal>
    </S.Wrapper>
  )
}

export default ProjectCard
