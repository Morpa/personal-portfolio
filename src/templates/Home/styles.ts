import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Page = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
export const Main = styled.main`
  display: flex;
  flex-direction: row;
  max-width: 100rem;
  margin: 0 auto 1.5rem auto;
  min-height: 100vh;
  padding: 0 1rem;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
    font-size: ${theme.font.sizes.huge};
    margin: 0 0 2rem 0;
    line-height: ${theme.font.sizes.huge};
  `}
`

export const SkillsProjects = styled.div`
  flex: 1;
  margin-top: 18rem;

  ${media.lessThan('medium')`
   flex: initial;
   margin-top: 1rem;
  `}

  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -0.5rem;
    width: auto;
  }

  .my-masonry-grid_column {
    padding-left: 0.5rem;
    background-clip: padding-box;

    &:nth-of-type(2) {
      margin-top: 3rem;
    }
  }
`

export const Skills = styled.section`
  position: relative;
  width: 100%;

  &:after {
    content: '';
    padding-bottom: 100%;
    display: block;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
