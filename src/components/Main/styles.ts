import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  .particles {
    background: radial-gradient(
      circle,
      rgba(193, 196, 209, 1) 0%,
      rgba(3, 3, 29, 1) 100%
    );
    height: 100vh;
    width: 100vw;
  }

  #welcome {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  .scale-in-center {
    -webkit-animation: scale-in-center 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      1s both;
    animation: scale-in-center 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
  }

  @-webkit-keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
`
