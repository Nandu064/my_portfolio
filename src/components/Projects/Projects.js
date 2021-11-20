import React,{useState,useEffect,Fragment} from 'react'
import ReactSlick from '../../helpers/ReactSlick'
import axios from 'axios'
import { Card,CardHeader,CardBody } from 'reactstrap'
function Projects() {
    const [ data,setData ] = useState([])

    useEffect(() => {
        axios.get('http://portfolio-api-v01.herokuapp.com/projects')
            .then((res)=>{
                setData(res.data)
        })
    }, [])
    return (
        <Fragment>
            <Card id='projects' className='p-3 border-0'>
                <CardHeader className=' bg-transparent border-0'>
                    <h4>Projects</h4>
                </CardHeader>
                <CardBody>
                    <ReactSlick data={data} />
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default Projects
