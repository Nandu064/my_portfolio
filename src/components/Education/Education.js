import React,{useEffect,useState,Fragment} from 'react'
import { 
    Row,
    Col,
    Container,
    Card,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
    CardFooter
    
} from 'reactstrap'
import axios from 'axios'
import styles from'./education.module.css'

function Education(props) {
    const [educationInfo,setEducationInfo] = useState([])
    const{setIsLoading} = props

    useEffect(() => {
        axios.get('http://portfolio-api-v01.herokuapp.com/education')
            .then((res)=>{
                setEducationInfo(res.data)
        })
    }, [])
    return (
        <Fragment>
            <Card id='education' className='mt-3 border-0'>
                <CardHeader className=' bg-transparent border-0'>
                    <h4>Education Details</h4>
                </CardHeader>
                <CardBody className='pt-0'>
                    {
                        educationInfo&&educationInfo.map(item=>(
                            <ListGroup className='mt-1 mb-1' key={item._id}>
                                <ListGroupItem className=' border-0'>
                                    <h5>{item.title},{" "}{item.board}</h5>
                                    <div>
                                        <h6 className='text-muted'>{item.institute_name},{" "}{item.institute_location}</h6>
                                        <p className='text-muted'>{item.start_year}-{item.end_year}</p>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <span>Result :{item.percentage}%</span>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        ))
                    }
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default Education
