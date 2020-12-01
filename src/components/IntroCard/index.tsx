import Link from 'next/link'
import {
  Linkedin as LinkedInIcon,
  Github as GithubIcon
} from '@styled-icons/boxicons-logos'
import { Mail as MailIcon } from '@styled-icons/entypo'
import { Portfolio } from '@styled-icons/zondicons/Portfolio'
import { MotionProps } from 'framer-motion'

import Logo from 'components/Logo'
import Heading from 'components/Heading'
import Button from 'components/Button'

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

const animationButton: MotionProps = {
  whileHover: { scale: 1.2 },
  transition: {
    duration: 0.3,
    yoyo: 3
  }
}

const IntroCard = () => (
  <S.Wrapper>
    <S.SocialLinks>
      <Link href="https://www.linkedin.com/in/andremorpanini/">
        <a>
          <S.IconWrapper {...animationSpring}>
            <LinkedInIcon aria-label="LinkedIn" />
          </S.IconWrapper>
        </a>
      </Link>

      <Link href="https://github.com/Morpa">
        <a>
          <S.IconWrapper {...animationSpring}>
            <GithubIcon aria-label="Github" />
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
    </S.SocialLinks>

    <S.InfoWrapper>
      <S.Title>
        <Logo size="large" color="yellow" />
      </S.Title>

      <Heading color="white" lineLeft lineColor="secondary" size="huge">
        Front End Developer.
      </Heading>
    </S.InfoWrapper>

    <S.ButtonWrapper {...animationButton}>
      <Button
        icon={<Portfolio />}
        size="large"
        as="a"
        href="/portfolio"
        minimal
        aria-label="portfolio"
      >
        Portfolio
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default IntroCard
