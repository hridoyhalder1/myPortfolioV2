import styled from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Project from "./components/Project"
import Who from "./components/Who"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("/public/img/bg.jpeg");
  color: white;
  &::-webkit-scrollbar{
    // display: none;
  }

`

function App() {

  return (
    <Container className="" >
      <Hero></Hero>
      <Who></Who>
      <Project></Project>
      <Contact></Contact>
    </Container>
  )
}

export default App
