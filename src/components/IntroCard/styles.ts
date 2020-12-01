import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { motion } from 'framer-motion'

import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: ${theme.spacings.large};

    > a {
      margin: ${theme.spacings.small} 0;
    }

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xxlarge};
    `}

    ${ButtonStyles.Wrapper} {
      font-size: ${theme.font.sizes.xxlarge};

      svg {
        width: 2rem;
      }
    }
  `}
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
`
export const IconWrapper = styled(motion.div)`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    margin: 0 0.3rem;

    ${media.lessThan('medium')`
       margin-bottom: ${theme.spacings.medium};
    `}
  `}
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`

export const Title = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const ButtonWrapper = styled(motion.div)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`
