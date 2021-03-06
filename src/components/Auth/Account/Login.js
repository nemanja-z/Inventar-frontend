import React, {useState, useContext} from "react";
import api from '../../../services/api';
import { useHistory } from "react-router-dom";
import cookie from '../../../services/cookie';
import {GlobalStateContext} from '../../../state/Store';
import {GlobalDispatchContext} from '../../../state/Store';


const fields={email:"", password:""};
const Login = () =>{
    
    const {user} = useContext(GlobalStateContext);
    const {dispatchUser} = useContext(GlobalDispatchContext);
    const [data, setData] = useState({});
    const [error, setError] = useState(fields)
    const [rememberMe, setRememberMe] = useState(false);
    const history = useHistory();
    const formData = new FormData();
    Object.keys(data).forEach(k=>formData.append(k, data[k]));

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await cookie();
            await api().post('api/login', formData);
            const {data} = await api().get("api/user");
            if(data){
                dispatchUser({type:'login', payload:data});
                history.push("/");
            }
        }catch(e){
            console.log(e)
        }
    }
    return(
    <div className="md:flex md:justify-center mt-6 mb-6">
        <form className="flex flex-col items-center bg-gray-200 shadow-md rounded px-6" onSubmit={handleSubmit}>
            <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-500">LOGIN</h1>
            </div>
            <div className="mb-4 mx-5">
                    <label className="block mb-2" htmlFor="email">Email</label>
                    <input  id="email" type="email" name="email" onChange={(e)=>setData({...data, email:e.target.value})} required/>
                </div>
            <div className="mb-4 mx-5">
                    <label className="block mb-2" htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" onChange={(e)=>setData({...data, password:e.target.value})} required/>
            </div>
            <div className="flex items-center">
                <label htmlFor="remember_me">Remember me</label>
                <input className="h-4 w-4 text-gray-700 border rounded ml-2" type="checkbox" id="remember_me" name="remember_me" onChange={((e)=>setRememberMe(!rememberMe))}/>
            </div>
            <div className="flex justify-between space-x-4 mt-3 mb-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit" >Login</button>
                <button className="text-blue-500 hover:text-blue-700" onClick={()=>history.push('/forgot-password')}>Forgot password?</button>
            </div>
            <button onClick={()=>history.push('/register')} className="text-blue-500 hover:text-blue-700">Need to create an account?</button>
        </form>
              
    </div>
        
    )
}
export default Login;