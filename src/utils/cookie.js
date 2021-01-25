import Cookie from "js-cookie";
import api from "../services/api";

const getCookie = () => {

    let token = Cookie.get('XSRF-TOKEN');

    if(token){
        return new Promise(resolve=>resolve(token));
    }
    api().get("sanctum/csrf-cookie");
}

export default getCookie;