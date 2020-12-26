import { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import VisibilitySensor from 'react-visibility-sensor'
import { Flip as FlipReveal } from 'react-awesome-reveal'

import Footer from 'components/Footer'
import ProjectCard, { ProjectCardProps } from 'components/ProjectCard'
import Profile from 'components/Profile'
import SkillCard, { SkillsProps } from 'components/SkillCard'

import * as S from './styles'
import theme from 'styles/theme'

export type MainProps = {
  skills: SkillsProps[]
  projects: ProjectCardProps[]
}

const Main = ({ skills, projects }: MainProps) => {
  const [visible, setVisible] = useState({
    skills: false,
    projects: false
  })

  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    eval(
      `try {TagCanvas.Start('myCanvas', '', {textColour: '${theme.colors.white}',outlineColour: '#0000', imageMode: "both", imagePosition:"top", initial: [0.3,-0.1], fadeIn: 3000, wheelZoom: false, pinchZoom: true, shuffleTags: true, frontSelect: true, textHeight: 18, reverse: true, depth: 0.8,maxSpeed: 0.04, minSpeed: 0.02});} catch(e) {document.getElementById('myCanvasContainer').style.display = 'none';}`
    )
  }, [])

  return (
    <S.Page>
      <S.Main>
        <Profile visibility={visible} />

        <S.SkillsProjects>
          <S.Title id="skills">Skills</S.Title>
          <VisibilitySensor
            partialVisibility
            onChange={(isVisible) => {
              setVisible((visible) => {
                return { ...visible, skills: isVisible }
              })
            }}
            offset={{
              top: windowHeight / 3,
              bottom: windowHeight / 3
            }}
          >
            <S.Skills>
              <canvas width="720" height="720" id="myCanvas">
                <p>
                  Anything in here will be replaced on browsers that support the
                  canvas element
                </p>
                <ul>
                  {skills.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </ul>
              </canvas>
            </S.Skills>
          </VisibilitySensor>

          <S.Title id="projects">Projects</S.Title>
          <VisibilitySensor
            partialVisibility
            onChange={(isVisible) => {
              setVisible((visible) => {
                return { ...visible, projects: isVisible }
              })
            }}
            offset={{
              top: windowHeight / 3,
              bottom: windowHeight / 3
            }}
          >
            <Masonry
              breakpointCols={{ default: 2, 916: 1, 749: 2, 529: 1 }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {projects.map((project) => (
                <FlipReveal direction="horizontal" cascade key={project.name}>
                  <ProjectCard {...project} />
                </FlipReveal>
              ))}
            </Masonry>
          </VisibilitySensor>
        </S.SkillsProjects>
      </S.Main>
      <Footer />
    </S.Page>
  )
}

export default Main
