import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.lightGray};
  `}
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
`
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    margin: 0 0.3rem;
  `}
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1``

export const Description = styled.div``
