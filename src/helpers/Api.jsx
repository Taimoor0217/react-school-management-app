import Axios from "axios";

class Api {
    constructor(){
        this.url = "http://localhost:5000/api"
    }
    getCourses(){
        return new Promise(function(resolve , reject){
            Axios
            .get(`${this.url}/courses`)
            .then(res =>{
                resolve(res.data.courses)
                // console.log(res.data.courses)
            })
            .catch(err =>{
                reject(err)
            })
        }.bind(this))
    }
}
export default new Api();