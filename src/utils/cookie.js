import Cookie from "js-cookie";
import api from "../services/api";
import axios from "axios";

const getCookie = () => {

    let token = Cookie.get('XSRF-TOKEN');

    if(token){
        return new Promise(resolve=>resolve(token));
    }
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie");
}

export default getCookie;