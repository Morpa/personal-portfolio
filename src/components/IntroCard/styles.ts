import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.mainBg};
    padding: ${theme.spacings.large};

    > a {
      margin: ${theme.spacings.small} 0;
    }
  `}
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
`
export const IconWrapper = styled.div`
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
