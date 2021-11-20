import React,{ useEffect,useState,Fragment } from 'react'
import axios from 'axios'
function Experience () {
    const [experience, setExperience] = useState(null)
    useEffect(() => {
        axios.get('https://portfolio-api-v01.herokuapp.com/experience')
        .then((res)=>{
            setExperience(res.data)
    })
    }, [])
    const d1 = new Date('2020/12/14') 
    const d2 = new Date('2021/06/14') 
    const experienceCalculate = (d1, d2) => {
        let months ;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }
    console.log(`${experienceCalculate(d1,d2)} months`)
    console.log(experience)
    return (
        <Fragment>
            <h3>Experience</h3>
            {/* <div>
                {
                    experience && experience.map(item=>(
                        <div>{experienceCalculate(new Date(item.start_year),new Date(item.end_year))}</div>
                    ))
                }
            </div> */}
        </Fragment>
    )
}

export default Experience 
