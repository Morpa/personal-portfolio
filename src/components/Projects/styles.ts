import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { Container } from 'components/Container'

export const Wrapper = styled(motion.main)`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    height: 100vh;
  `}
`

export const BackLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
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

export const LinkButton = styled(motion.div)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};

    > a {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`
