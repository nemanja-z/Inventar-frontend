import React, {useState, useEffect} from "react";
import api from '../../../services/api';
import { useHistory } from "react-router-dom";
import cookie from '../../../services/cookie';
import validation from '../../../utils/validation';

const fields = {name:"",
        password:"",
        password_confirmation:"",
        profile:"",
        email:"",
        phone:"",
        company_name:""}
const Register = () =>{
    const [data, setData] = useState(fields);
    const [error, setError] = useState(fields);
    const [toVerify, setToVerify] = useState(false);
    const history = useHistory();
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('password', data.password);
    formData.append('password_confirmation', data.password_confirmation)
    formData.append('profile', data.profile);
    formData.append('company_name', data.company_name);
    useEffect(()=>{
        if(error){
             setTimeout(() => {
                setError(fields)
            }, 5000);
        }
        if(toVerify){
             setTimeout(() => {
                setToVerify(false)
            }, 6000);
        }
    }, [error, toVerify])
    const handleSubmit = async(e) => {
                    e.preventDefault();
                    try{
                        await cookie();
                        const register = await api().post('api/register', formData);
                        const {data:{success}} = register;
                        validation(setError, register);
                        if(success===true){
                             setData(fields);
                             setToVerify(true);
                             setTimeout(() => {
                                 history.push('/login');
                             }, 6000);
                        }     
                    }catch(e){
                        console.log(e);
                    }
                }
                 
            
    return(<>
    {!toVerify && (<div className="md:flex md:justify-center mt-6 mb-6">
                
            <form className="flex flex-col items-center bg-gray-200 shadow-md rounded" onSubmit={handleSubmit}>
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-500">REGISTER</h1>
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">Name</label>
                    <input  id="name" type="text" name="name" onChange={(e)=>setData({...data, name:e.target.value})} required/>
                    {error.name && <p className="mb-2 text-red-600">{error.name}</p>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" onChange={(e)=>setData({...data, email:e.target.value})} required /> 
                    {error.email && <p className="mb-2 text-red-600">{error.email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="password" >Password</label>
                    <input id="password" type="password"  name="password" onChange={(e)=>setData({...data, password:e.target.value})} required/> 
                    {error.password && <p className="mb-2 text-red-600">{error.password}</p>}
                </div>
                <div className="mb-4 flex-col">
                    <label className="block mb-2" htmlFor="password-confirm" >Confirm Password</label>
                    <input id="password-confirm" type="password"  name="password_confirmation"  onChange={(e)=>setData({...data, password_confirmation:e.target.value})} required/> 
                    {error.password_confirmation && <p className="mb-2 text-red-600">{error.password_confirmation}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="phone">Phone number</label>
                    <input id="phone" type="text" name="phone" onChange={(e)=>setData({...data, phone:e.target.value})}/> 
                    {error.phone && <p className="mb-2 text-red-600">{error.phone}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="company_name">Company name</label>
                    <input id="company_name" type="text" name="company_name" onChange={(e)=>setData({...data, company_name:e.target.value})} required /> 
                    {error.company_name && <p className="mb-2 text-red-600">{error.company_name}</p>}
                </div>
                <div className="flex justify-between mb-4 space-x-8">
                    <label className="block mb-2" htmlFor="profile"></label>
                    <input className="ml-2" id="profile" type="file" name="profile"  onChange={({ target: { validity, files: [file] } })=>validity.valid && setData({...data, profile:file})}/>
                    {error.profile && <p className="mb-2 text-red-600">{error.profile}</p>}
                </div>
                <div className="flex items-center justify-between mb-4 space-x-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Register
                        </button>
                        <button className="font-bold text-sm text-blue-500 hover:text-blue-800" onClick={()=>history.push('/login')}>
                            Already have an account?
                        </button>
                </div>
            </form>
    </div>)}
    {toVerify && (<h2>An email with the confirmation link has been sent to your personal email address. It may take up to a few minutes before you see it in your inbox. Follow the instructions within that email to confirm your password.</h2>)}     
    </>
    )
}
export default Register;