import React, {useState} from "react";
import api from '../../../services/api';
import { useHistory } from "react-router-dom";
import cookie from '../../../services/cookie';


const Login = () =>{
    const [data, setData] = useState({email:"", password:""});
    const [rememberMe, setRememberMe] = useState(false);
    const history = useHistory();
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("remember", rememberMe);
    const handleSubmit = async(e) =>{
        try{
            e.preventDefault();
            await cookie();
            await api().post('api/login', formData);
            const {data} = await api().get("api/user");
            console.log(data)
            if(data){
                history.push("/");
                localStorage.setItem('loggedIn', true);
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