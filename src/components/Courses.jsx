import React , {useState , useEffect } from "react";
import Api from "../helpers/Api";
import { useHistory } from "react-router-dom";
export default function(){
    const [Courses, UpdateCourses] = useState([]);
    let history = useHistory();
    useEffect(()=>{
        Api
        .getCourses()
        .then(res =>{
            console.log(res)
            UpdateCourses(res)
        })
        .catch(err=>{
            console.log(err)
        })
    } , [])
    return (
        <div>
                <div className="bounds">
                    {Courses.map(function(course , index){
                        return(
                            <div onClick={()=>history.push(`/courses/${course.id}`)} key={index} className="grid-33">
                                <div className="course--module course--link">
                                    <h4 className="course--label">{course.title}</h4>
                                    <h3 className="course--title">{course.description}</h3>
                                </div>
                            </div>
                        )   
                    })}
                </div>
            </div>
    )
}