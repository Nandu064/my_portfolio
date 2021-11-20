import React, { Fragment,useEffect,useState } from 'react'
import { 
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    
} from 'reactstrap'
import styles from './footer.module.css'

import axios from 'axios'


function Footer(props) {
    const [contactInfo,setContactInfo] = useState([])

    useEffect(() => {
        axios.get('http://portfolio-api-v01.herokuapp.com/contact')
        .then((res)=>{
                setContactInfo(res.data[0])
            })
    }, [])
    const {mobile,optional_mobile,email,git_hub,linkedIn} = contactInfo
    return (
        <Fragment>
            <Card id="contact" className={` border-0 p-2 ${styles.footer_container}`}>
                <CardHeader className='bg-transparent border-0 pb-0'>
                    <h4>
                        Contact Me
                    </h4>
                </CardHeader>
                <CardBody className='pt-0'>
                    <ListGroup className="border-0 bg-transparent m-auto">
                        <Row>
                            <Col md='3'>
                                <ListGroupItem className="border-0 bg-transparent "><big>Mobile: </big><span className='text-muted'>{mobile}</span></ListGroupItem>
                                <ListGroupItem className="border-0 bg-transparent"><big>Alternate Mobile: </big><span className='text-muted'>{optional_mobile}</span></ListGroupItem>
                            </Col>
                            <Col md='4'>
                                <ListGroupItem className="border-0 bg-transparent"><big>Email: </big><a className='text-decoration-none' target='_blank' href={email}><span className='text-muted'>{email}</span></a> </ListGroupItem>
                                <ListGroupItem className="border-0 bg-transparent"><big>Git hub: </big> <a className='text-decoration-none' target='_blank' href={git_hub}><span className='text-muted'>{git_hub}</span></a> </ListGroupItem>
                            </Col>
                            <Col md='5'>
                                <ListGroupItem className="border-0 bg-transparent"><big>Linked In: </big><a className='text-decoration-none' target='_blank' href={linkedIn}><span className='text-muted'>{linkedIn}</span></a> </ListGroupItem>
                            </Col>
                        </Row>
                    </ListGroup>                      
                </CardBody>
                <CardFooter className='bg-transparent border-0'>
                    <span className="text-muted">Copyright &copy;2021-<a href="#" className='text-decoration-none'>Y.Harish</a> All rights reserved</span>
                </CardFooter>
            </Card>
        </Fragment>
    )
}

export default Footer
