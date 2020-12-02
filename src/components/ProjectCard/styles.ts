import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { motion } from 'framer-motion'
import media from 'styled-media-query'

import * as ButtonStyles from 'components/Button/styles'
import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};

    ${media.lessThan('large')`
      ${RibbonStyles.Wrapper} {
        right: 0;
        &::before {
          display: none;
        }
      }
  `}
  `}
`

export const ImageBox = styled.div`
  height: 24rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.small};
  `}
`
export const Live = styled(motion.div)`
  ${({ theme }) => css`
    ${ButtonStyles.Wrapper} {
      background: ${theme.colors.mainBg};
      font-size: ${theme.font.sizes.xlarge};
      margin-right: ${theme.spacings.xxsmall};

      svg {
        width: 3rem;
      }

      &:hover {
        background: ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`
export const Git = styled(motion.div)`
  ${({ theme }) => css`
    ${ButtonStyles.Wrapper} {
      background: ${theme.colors.mainBg};
      font-size: ${theme.font.sizes.xlarge};

      svg {
        width: 3rem;
      }

      &:hover {
        background: ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`
