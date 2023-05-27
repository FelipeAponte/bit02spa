import "./App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";

export function App() {
  return (
    <>
      <Header />
      <Nav />
      <Container>
        <Row>
          <Main />
          <Aside />
        </Row>
      </Container>
      <Footer />
    </>
  );
}
