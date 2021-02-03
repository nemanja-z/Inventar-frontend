import React, {useState, useEffect} from "react";
import api from '../../../services/api';
import { useHistory } from "react-router-dom";
import cookie from '../../../services/cookie';
import validation from '../../../utils/validation';
import RegisterCompany from './RegisterCompany';
import RegisterUser from './RegisterUser';


const Register = () =>{
    const [name, setName] = useState('');
    const [step, setStep] = useState(1);
    const [toVerify, setToVerify] = useState(false);
    const history = useHistory();
    useEffect(()=>{
        if(toVerify){
             setTimeout(() => {
                setToVerify(false)
            }, 5000);
        }
    }, [toVerify])
    return(<>
    {!toVerify ? (
            <>
            {step===1 &&<RegisterUser setName={setName} setStep={setStep}/>}
            {step===2 &&<RegisterCompany name={name} setToVerify={setToVerify}/>}
            
    </>):(<h2>An email with the confirmation link has been sent to your personal email address. It may take up to a few minutes before you see it in your inbox. Follow the instructions within that email to confirm your password.</h2>)}     
    </>
    )
}
export default Register;