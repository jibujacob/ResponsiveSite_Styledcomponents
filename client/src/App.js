import styled from "styled-components"
import { css } from "styled-components";


import { Feature } from "./components/Feature";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Price } from "./components/Price";
import { Service } from "./components/Service";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


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
const ServiceShape = styled.div`
  clip-path: polygon(0 0, 30% 0%, 30% 100%, 0 100%);
  background-color: #f88497;
  ${Shape}
`

const PriceShape = styled.div`
  clip-path: polygon(30% 0, 100% 0%, 100% 100%, 70% 100%);
  background-color: crimson;
  ${Shape}
`

function App() {
  const isMobile = window.screen.width <= 480 ? true : false;
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
      <Container>
        <Service/>
        {!isMobile && <ServiceShape/>}
      </Container>
      <Container>
        <Price/>
        <PriceShape/>
      </Container>
      <Container>
        <Contact/>
        <Footer/>
      </Container>
    </>
  );
}

export default App;
