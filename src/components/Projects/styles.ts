import styled, { css } from 'styled-components'

import { Container } from 'components/Container'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    height: 100vh;
  `}
`

export const BackLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.xlarge};
    cursor: pointer;
  `}
`
export const TopContainer = styled(Container)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};

    > a {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`
