import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.yellow};
    width: 100%;
    height: 100%;

    .particles {
      background: radial-gradient(
        circle,
        rgba(193, 196, 209, 1) 0%,
        rgba(3, 3, 29, 1) 100%
      );
    }
  `}
`
