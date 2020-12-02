import Logo from 'components/Logo'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="yellow" />
    <S.Year>{new Date().getFullYear()}</S.Year>
  </S.Wrapper>
)

export default Footer
