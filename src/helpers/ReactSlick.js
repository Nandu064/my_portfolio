import React, { Component, Fragment } from "react";
import Slider from "react-slick";
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
import styles from './reactslick.module.css'
export default class MultipleItems extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const { data }= this.props
    return (
      <div>
        <Slider {...settings}>
            {
                data && data.map(item=>(
                  <Fragment key={item._id}>
                    <Card key={item._id} className={`me-3 ${styles.card_container}`}>
                        <CardHeader className='bg-transparent border-0'>
                            {item.title},{" "}{item.start_date}-{item.end_date}
                        </CardHeader>
                        <CardBody>
                            <span>{item.description}</span>
                        </CardBody>
                        <div className={ `${styles.overlay} d-flex justify-content-center align-items-center`}>
                          <a className={` ${styles.url_container} text-decoration-none`} href={item?.demo_url || item.git_hub} target='_blank'>
                            <i className="ri-eye-line"></i>
                            <small>Preview</small>
                          </a>
                          <a className={` ${styles.url_container} text-decoration-none`} href={item.git_hub} target='_blank'>
                            <i className="ri-github-fill"></i>
                            <small>Git Hub</small>
                          </a>
                        </div>
                    </Card>
                  </Fragment>
                ))
            }
        </Slider>
      </div>
    );
  }
}