import React, {useState, useEffect} from 'react';
import api from '../../../services/api';
import cookie from '../../../services/cookie';
import validation from '../../../utils/validation';


const fields = {
        name:"",
        password:"",
        password_confirmation:"",
        profile:"",
        email:"",
        phone:""};
const RegisterUser = ({setStep, setName}) => {
    const [data, setData] = useState({});

    const [error, setError] = useState(fields);

    let formData = new FormData();
    Object.keys(data).forEach(k=>formData.append(k, data[k]))

    useEffect(()=>{
        if(error){
             setTimeout(() => {
                setError(fields)
            }, 5000);
        }
    }, [error])
    const handleSubmit = async(e) => {
                    e.preventDefault();
                    try{
                        setName(data.name)
                        await cookie();
                        const register = await api().post('api/register', formData);
                        const {data:{success}} = register;
                        validation(setError, register);
                        if(success===true){
                             setStep(2);
                        }     
                    }catch(e){
                        console.log(e);
                    }
                }

    return(<div className="md:flex md:justify-center mt-6 mb-6">
                

            <form className="flex flex-col items-center bg-gray-200 shadow-md rounded" onSubmit={handleSubmit}>
                <div className="text-center mb-10">
                    <h2 className="font-bold text-3xl text-gray-500">REGISTER</h2>
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
                
                <div className="flex justify-between mb-4 space-x-8">
                    <label className="block mb-2" htmlFor="profile"></label>
                    <input className="ml-2" id="profile" type="file" name="profile"  onChange={({ target: { validity, files: [file] } })=>validity.valid && setData({...data, profile:file})}/>
                    {error.profile && <p className="mb-2 text-red-600">{error.profile}</p>}
                </div>
                <div className="flex items-center justify-between mb-4 space-x-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Next
                        </button>
                        <button className="font-bold text-sm text-blue-500 hover:text-blue-800">
                            Already have an account?
                        </button>
                </div>
                </form>
    </div>)
}

export default RegisterUser;