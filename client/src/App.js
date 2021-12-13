import styled from "styled-components"
import { css } from "styled-components";

import { Feature } from "./components/Feature";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";


const Container = styled.div`
  height:100vh;
  overflow:hidden;
  position:relative; 
`

const Shape = css`
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
`

const IntroShape = styled.div`
  clip-path: polygon(70% 0, 100% 0%, 100% 100%, 49% 100%);
  background-color: crimson;
  ${Shape}
`
const FeatureShape = styled.div`
  clip-path: polygon(0 0, 49% 0%, 30% 100%, 0 100%);
  background-color: pink;
  ${Shape}
`

function App() {
  return (
    <>
      <Container>
        <Navbar/>
        <Intro/>
        <IntroShape/>
      </Container>
      <Container>
        <Feature/>
        <FeatureShape/>
      </Container>
    </>
  );
}

export default App;
