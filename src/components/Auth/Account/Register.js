import React, {useState} from "react";
import api from '../../../services/api';
import getCookie from '../../../utils/cookie';
import { useHistory } from "react-router-dom";


const Register = () =>{
    const [data, setData] = useState({
        name:"",
        password:"",
        email:"",
        phone:""});
    const [file, setFile] = useState(null);
    const [confirm, setConfirm] = useState('');
    const history = useHistory();
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', +data.phone);
    formData.append('password', data.password);
    formData.append('profile', file);
    const handleSubmit = async(e) => {
                    try{
                        e.preventDefault();
                        await getCookie();
                        await api().post('api/register', formData);
                    }catch(e){
                        console.log(e);
                    }
                }
                 
            
    return(
    <div className="md:flex md:justify-center mt-6 mb-6">
                
            <form className="flex flex-col items-center bg-gray-200 shadow-md rounded" onSubmit={handleSubmit}>
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-500">REGISTER</h1>
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">Name</label>
                    <input  id="name" type="text" name="name" onChange={(e)=>setData({...data, name:e.target.value})} required/>
                </div>

                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Email</label>
                    <input id="email" type="email"  name="email" onChange={(e)=>setData({...data, email:e.target.value})} required /> 
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="password" >Password</label>
                    <input id="password" type="password"  name="password" onChange={(e)=>setData({...data, password:e.target.value})} required/> 
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="password-confirm" >Confirm Password</label>
                    <input id="password-confirm" type="password"  name="password_confirmation"  onChange={(e)=>setConfirm(e.target.value)} required/> 
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="phone" >Phone number</label>
                    <input id="phone" type="text"  name="phone" onChange={(e)=>setData({...data, phone:e.target.value})} required /> 
                </div>
                <div className="flex justify-between mb-4 space-x-8">
                    <label className="block mb-2" htmlFor="profile"></label>
                    <input className="ml-2" id="profile" type="file" name="profile"  onChange={({ target: { validity, files: [file] } })=>validity.valid && setFile(file)}/>
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
    </div>      
        )
}
export default Register;