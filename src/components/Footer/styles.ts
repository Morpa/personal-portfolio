import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-bottom: 1rem;
    text-align: center;
    color: ${theme.colors.yellow};

    svg {
      width: 2.4rem;
      height: 2.4rem;
      margin-bottom: -0.15rem;
    }

    span {
      font-size: 1rem;
    }
  `}
`
