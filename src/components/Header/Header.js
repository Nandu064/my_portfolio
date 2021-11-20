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

function Header() {
    return (
        <Fragment>
            <Container id="about" fluid>
                <Row>
                    <Col md="6">
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
                                <Col sm='12' md='6'>
                                    <div className='d-flex justify-content-between'>
                                        <a className='ms-md-5' href="#contact">
                                            <Button size="sm" color='primary'>Hire Me</Button>
                                        </a>
                                        <a className='me-md-3' href={Resume} download={`Harish's Resume`}>
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
