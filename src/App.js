
import React, { Fragment } from 'react'
import './App.css';
import {
  Button,
  Container,
  Row,
  Col
} from 'reactstrap'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
function App() {
  return (
    <Fragment>
      <Navbar />
      <Container fluid style={{height:'1200px'}}>
          <Header />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
