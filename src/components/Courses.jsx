import React , {useState , useEffect , useContext } from "react";
import { useHistory } from "react-router-dom";
import {UserContext} from "./UserContext";
import Api from "../helpers/Api";
export default function(){
    let history = useHistory();
    const [Courses, UpdateCourses] = useState([]);
    const user = useContext(UserContext);
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
        console.log(user)
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