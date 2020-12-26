import styled, { css } from 'styled-components'

import * as ProfileStyles from 'components/Profile/styles'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    overflow: hidden;
    border-radius: 0.5rem;
    background: ${theme.colors.darkGray};
    margin-bottom: 0.5rem;
    padding: 1rem;
    position: relative;

    > div {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .stack {
        color: ${theme.colors.gray};
      }

      header {
        font-size: ${theme.font.sizes.large};
      }

      p {
        margin-top: 1rem;
        font-size: ${theme.font.sizes.large};
        padding-right: 3.5rem;
        display: initial;

        @media screen and (min-width: 529px) and (max-width: 749px) {
          display: none;
        }

        @media screen and (min-width: 916px) {
          display: none;
        }
      }

      .spacer {
        flex: 1;
      }

      .footer {
        font-size: ${theme.font.sizes.xlarge};
        line-height: ${theme.font.sizes.xlarge};
        padding-right: 2rem;
      }

      .links {
        font-size: ${theme.font.sizes.small};
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: absolute;
        transform: rotate(90deg);
        right: 0;
        bottom: 0;
        transform-origin: 95% -50%;

        a {
          text-decoration: none;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          color: ${theme.colors.gray};
          transition: color 300ms ease, transform 300ms ease;

          margin-left: 1.25rem;

          svg {
            margin-left: 0.5rem;
          }

          &:hover {
            color: ${theme.colors.white};
            transform: translateX(-8px);
          }
        }
      }
    }

    img {
      width: 100%;
    }

    &:before {
      display: block;
      content: '';
      padding: 50%;
    }
  `}
`

export const IconCardWrapper = styled(ProfileStyles.IconWrapper)`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    width: 2rem;
    height: 2rem;
    margin-bottom: 1rem;
  `}
`

export const ExternalLink = styled(ProfileStyles.IconWrapper)`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    width: 2rem;
    height: 2rem;
  `}
`
