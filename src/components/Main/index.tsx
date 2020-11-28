import Particles from 'react-particles-js'

import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <div className="scale-in-center" id="welcome">
      <img src="/img/logo.svg" alt="welcome cats" />
    </div>
    <Particles
      className="particles"
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 3000
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            speed: 1,
            out_mode: 'out'
          },
          shape: {
            type: ['image', 'circle'],
            image: [
              {
                src: '/img/tech/apollo.svg',
                height: 23,
                width: 23
              },
              {
                src: '/img/tech/cypress.svg',
                height: 23,
                width: 23
              },
              {
                src: '/img/tech/graphql.svg',
                height: 23,
                width: 23
              },
              {
                src: '/img/tech/jest.svg',
                height: 23,
                width: 23
              },
              {
                src: '/img/tech/next.svg',
                height: 23,
                width: 23
              },
              {
                src: '/img/tech/react.svg',
                height: 23,
                width: 23
              },
              {
                src: '/img/tech/rtl.svg',
                height: 23,
                width: 23
              },
              {
                src: '/img/tech/storybook.svg',
                height: 23,
                width: 23
              },
              {
                src: '/img/tech/strapi.svg',
                height: 23,
                width: 23
              },
              {
                src: '/img/tech/typescript.svg',
                height: 23,
                width: 23
              }
            ]
          },
          color: {
            value: '#CCC'
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false
            }
          }
        },
        retina_detect: false
      }}
    />
  </S.Wrapper>
)

export default Main
