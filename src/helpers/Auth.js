import Axios from "axios";
class Auth{
    constructor(){
        this.url = "http://localhost:5000/api"
    }

    Login(data , url){
        return new Promise(function(resolve , reject){
            Axios({
                method: "post",
                url: `${url}/users/login` ,
                headers: {
                    "Content-Type": "application/json"
                },
                data
            })
            .then(res=>{
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
}
export default new Auth();