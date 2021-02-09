import React from "react";
import {useParams, useHistory} from "react-router-dom";
import api from '../../../services/api';
import cookie from '../../../services/cookie';


const Verify = () => {
    const {id} = useParams();
    const history=useHistory();
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await cookie();
            const {data} = await api().get('api/verify/'+id);
            console.log(data)
        }catch(e){
            console.log(e);
        }
    }
    return (
        <></>
    )

}

export default Verify;