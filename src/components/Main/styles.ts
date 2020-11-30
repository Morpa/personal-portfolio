import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  .particles {
    height: 100vh;
    width: 100vw;
  }
`

export const Card = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
