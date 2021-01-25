import React, {useState} from "react";
import api from '../../../services/api';
import getCookie from '../../../utils/cookie';

const Login = () =>{
    const [data, setData] = useState({email:"", password:""});
    const [rememberMe, setRememberMe] = useState(false);
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("remember", rememberMe);
    const handleSubmit = async(e) =>{
        try{
            e.preventDefault();
            await getCookie();
            await api().post('api/login', formData);
            await api().get("api/user");
        }catch(e){
            console.log(e)
        }
    }
    console.log(rememberMe)
    return(
    <div className="md:flex md:justify-center mt-6 mb-6">
        <form className="flex flex-col items-center bg-yellow-200 shadow-md rounded" onSubmit={handleSubmit}>
            <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-gray-900">LOGIN</h1>
            </div>
            <div className="mb-4 mx-5">
                    <label className="block mb-2" htmlFor="email">Email</label>
                    <input  id="email" type="email" name="email" onChange={(e)=>setData({...data, email:e.target.value})} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" required autoFocus />
                </div>
            <div className="mb-4 mx-5">
                    <label className="block mb-2" htmlFor="password">Password</label>
                    <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" id="password" type="password" name="password" onChange={(e)=>setData({...data, password:e.target.value})} required autoFocus />
            </div>
            <div>
                <label htmlFor="remember_me">Remember me</label>
                <input type="checkbox" id="remember_me" name="remember_me" onChange={((e)=>setRememberMe(!rememberMe))}/>
            </div>
            <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Login
                        </button>
            </div>
        
        </form>
    </div>
        
    )
}
export default Login;