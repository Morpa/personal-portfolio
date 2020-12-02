import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.small};
    background: ${theme.colors.mainBg};
    border-top: 1px solid ${theme.colors.yellow};
  `}
`
export const Year = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    margin-top: ${theme.spacings.xxsmall};
  `}
`
