import React, { Fragment,useEffect } from 'react'
import { 
    Container,
    Row,
    Col,
} from 'reactstrap'
import styles from './footer.module.css'

import axios from 'axios'


function Footer() {
    // useEffect(() => {
    //     axios.get('https://portfolio-v01api.herokuapp.com/')
    //         .then((res)=>{
    //             console.log(res.data)
    //         })
    // }, [])
    return (
        <Fragment>
            <Container fluid className={styles.copyright_container}>
                <Row>
                    <Col md='6'>
                        <span className="text-muted">&copy;2021-<a href="#" className={styles.copyright_link}>Y.Harish</a> All rights reserved</span>
                    </Col>
                    <Col md='6'>
                        
                    </Col>
                </Row>
            </Container>

        </Fragment>
    )
}

export default Footer
