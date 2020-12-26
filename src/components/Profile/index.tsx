import Link from 'next/link'
import { MotionProps } from 'framer-motion'
import {
  Linkedin as LinkedInIcon,
  Github as GithubIcon
} from '@styled-icons/boxicons-logos'
import { Mail as MailIcon } from '@styled-icons/entypo'

import * as S from './styles'

export type PropfileProps = {
  visibility: {
    skills: boolean
    projects: boolean
  }
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

const wavingSequence = [0.0, 18.0, -8.0, 18.0, -4.0, 10.0, 0, 0]

const animation: MotionProps = {
  transition: { delay: 0.8, duration: 1, type: 'tween' },
  animate: { rotate: wavingSequence }
}

const Profile = ({ visibility }: PropfileProps) => {
  return (
    <S.Wrapper>
      <S.Section>
        <S.Destaks>
          Hello, World! <S.AnimationWave {...animation}>👋</S.AnimationWave>
        </S.Destaks>
        <S.Destaks>{`I'm Morpa.`}</S.Destaks>
        <S.Bio>
          Currently learning the mysteries of Web Development. <br />I mainly
          use React and related frameworks.
        </S.Bio>

        <S.Headings visibility={visibility}>
          <Link href="#skills" passHref>
            <a id="link-skills">
              <span>01&nbsp;</span>
              <span className="divider"></span>
              <span>SKILLS</span>
            </a>
          </Link>

          <Link href="#projects" passHref>
            <a id="link-projects">
              <span>02&nbsp;</span>
              <span className="divider"></span>
              <span>PROJECTS</span>
            </a>
          </Link>
        </S.Headings>

        <S.Details>
          <Link href="https://github.com/morpa" passHref>
            <a target="_blank">
              <S.IconWrapper {...animationSpring}>
                <GithubIcon aria-label="Github" />
              </S.IconWrapper>
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/andremorpanini/" passHref>
            <a target="_blank">
              <S.IconWrapper {...animationSpring}>
                <LinkedInIcon aria-label="LinkedIn" />
              </S.IconWrapper>
            </a>
          </Link>

          <Link href="mailto: andremorpa@gmail.com">
            <a>
              <S.IconWrapper {...animationSpring}>
                <MailIcon aria-label="Email" />
              </S.IconWrapper>
            </a>
          </Link>
        </S.Details>
      </S.Section>
    </S.Wrapper>
  )
}

export default Profile
