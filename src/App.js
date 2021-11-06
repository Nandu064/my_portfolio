
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
function App() {
  return (
    <Fragment>
      <Navbar />
      <Container fluid style={{height:'1200px'}}>

      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
