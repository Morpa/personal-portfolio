import {
  Linkedin as LinkedInIcon,
  Github as GithubIcon
} from '@styled-icons/boxicons-logos'
import { Mail as MailIcon } from '@styled-icons/entypo'

import * as S from './styles'

const IntroCard = () => {
  return (
    <S.Wrapper>
      <S.SocialLinks>
        <S.IconWrapper>
          <LinkedInIcon aria-label="LinkedIn" />
        </S.IconWrapper>

        <S.IconWrapper>
          <GithubIcon aria-label="Github" />
        </S.IconWrapper>

        <S.IconWrapper>
          <MailIcon aria-label="Email" />
        </S.IconWrapper>
      </S.SocialLinks>

      <S.InfoWrapper>
        <S.Title>
          <img src="/img/logo.svg" alt="Morpa" />
        </S.Title>
        <S.Description>
          Hello, there! I{`'`}m Morpa. Front End Developer.
        </S.Description>
      </S.InfoWrapper>
    </S.Wrapper>
  )
}

export default IntroCard
