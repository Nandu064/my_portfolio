import React, { Fragment,useState } from 'react'
import {
  Button,
  Container,
  Row,
  Col,
  Spinner
} from 'reactstrap'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import styles from './App.module.css'
import Experience from './components/Experience/Experience '
function App() {
  const [isLoading,setIsLoading] = useState(true)
  return (
    <Fragment>
      <Navbar />
          <Container className='mt-5' fluid>
            <div className={styles.page_content}>
              <Header/>
              <Education/>
              <Projects/>
              <Experience />
            </div>
          </Container>
          <Footer/>
    </Fragment>
  );
}

export default App;
