import Link from 'next/link'
import {
  Linkedin as LinkedInIcon,
  Github as GithubIcon
} from '@styled-icons/boxicons-logos'
import { Mail as MailIcon } from '@styled-icons/entypo'
import { Portfolio } from '@styled-icons/zondicons/Portfolio'

import Logo from 'components/Logo'
import Heading from 'components/Heading'
import Button from 'components/Button'

import * as S from './styles'

const IntroCard = () => {
  return (
    <S.Wrapper>
      <S.SocialLinks>
        <Link href="https://www.linkedin.com/in/andremorpanini/">
          <a>
            <S.IconWrapper>
              <LinkedInIcon aria-label="LinkedIn" />
            </S.IconWrapper>
          </a>
        </Link>

        <Link href="https://github.com/Morpa">
          <a>
            <S.IconWrapper>
              <GithubIcon aria-label="Github" />
            </S.IconWrapper>
          </a>
        </Link>

        <Link href="mailto: andremorpa@gmail.com">
          <a>
            <S.IconWrapper>
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
          Hello, there! I{`'`}m André.
        </Heading>
        <Heading color="white" lineLeft lineColor="secondary">
          Front End Developer.
        </Heading>
      </S.InfoWrapper>

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
    </S.Wrapper>
  )
}

export default IntroCard
