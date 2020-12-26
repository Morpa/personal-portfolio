import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { PropfileProps } from '.'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`
  flex: initial;
`}
`
export const AnimationWave = styled(motion.div)`
  display: inline-block;
  transform-origin: 70% 70%;
`
export const Destaks = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.huge};
    margin: 0 0 2rem 0;
    line-height: ${theme.font.sizes.huge};
  `}
`

export const Section = styled.section`
  margin: 0 1rem;
  position: sticky;
  top: 0rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &:-webkit-scrollbar {
    display: none;
  }

  ${media.lessThan('medium')`
     padding-top: 6rem;
  `}

  ${media.greaterThan('medium')`
    height: 100vh;
  `}
`

export const Bio = styled.p`
  ${({ theme }) => css`
    margin: 0 2.5rem 2rem 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
    text-align: justify;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.medium};
  `}
`
export const IconWrapper = styled(motion.div)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    margin: 0 0.3rem;

    ${media.lessThan('medium')`
       margin-bottom: ${theme.spacings.medium};
    `}
  `}
`
export const Headings = styled.div<PropfileProps>`
  ${({ theme }) => css`
    margin-bottom: 1rem;
    font-size: ${theme.font.sizes.medium};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-items: flex-start;
      margin-bottom: 1rem;
      text-decoration: none;
      color: ${theme.colors.white};

      .divider {
        margin: 0 1rem;
        transition: width 300ms ease;
        border-bottom: 1px solid;
      }
    }
  `}

  ${media.lessThan('medium')`
    display: none;
  `}

  #link-skills {
    color: ${({ theme, visibility }) =>
      visibility.skills ? theme.colors.yellow : theme.colors.gray};
    .divider {
      width: ${({ visibility }) => (visibility.skills ? '3.5rem' : '2rem')};
    }
  }

  #link-projects {
    color: ${({ theme, visibility }) =>
      visibility.projects ? theme.colors.yellow : theme.colors.gray};

    .divider {
      width: ${({ visibility }) => (visibility.projects ? '3.5rem' : '2rem')};
    }
  }
`
export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2.75rem;
  margin-bottom: 1rem;
  text-decoration: none;
`
