import React,{Fragment,useEffect} from 'react'
import {
    Carousel,
    Row,
    Col,
    Container,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Button

} from 'reactstrap'
import styles from './Header.module.css'
import Resume from '../../assets/resume/HarishResume.pdf'
import mypic from '../../assets/images/mypic.jpg'

function Header() {
    return (
        <Fragment>
            <Container id="about" fluid>
                <Row>
                    <Col md="12" lg='12' xl='12' xxl='6'>
                        <div className={`${styles.about_container} mt-4 d-flex justify-content-center flex-column p-5`}>
                            <Row>
                                <Col md='12'>
                                    <div>
                                        <span className='text-muted'>Hello,</span>
                                        <h2>I'M Harish Yerraguntla</h2>
                                        <span className='text-muted'>I am a Web Developer</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={`${styles.button_container} mt-5`}>
                                <Col md='6' >
                                    <div className='d-flex justify-content-end'>
                                        <a className='' href="#contact">
                                            <Button size="sm" color='primary'>Hire Me</Button>
                                        </a>
                                        <a className='ms-2' href={Resume} download={`Harish's Resume`}>
                                            <Button size="sm" color='secondary'>Download CV</Button>                                
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    {/* <Col md="6">
                        <div className={`${styles.image_wrapper} mt-4 d-flex align-items-center`}>
                            <div className={`${styles.image_container}`}>
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </Fragment>
    )
}

export default Header
