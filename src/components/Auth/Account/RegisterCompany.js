import React, {useState, useEffect} from "react";
import api from '../../../services/api';
import { useHistory } from "react-router-dom";
import cookie from '../../../services/cookie';
import validation from '../../../utils/validation';

const fields = {company_name:"",
        headquarter:"",
        founded:"",
        owner:"",
        website:"",
        logo:""};
const RegisterCompany = ({name, setToVerify}) =>{
    const history = useHistory();
    const [data, setData] = useState({});

    const [error, setError] = useState(fields);

    let formData = new FormData();
    Object.keys(data).forEach(k=>formData.append(k, data[k]));
    formData.append("name", name);
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
                        await cookie();
                        const register = await api().post('api/company', formData);
                        console.log(register)
                        const {data:{success}} = register;
                        validation(setError, register);
                        if(success===true){
                            console.log(success)
                             setToVerify(true);
                             setTimeout(() => {
                                 history.push('/login');
                             }, 6000);
                        }     
                    }catch(e){
                        console.log(e);
                    }
                }


    
    return(<div className="md:flex md:justify-center mt-6 mb-6">
                

            <form className="flex flex-col items-center bg-gray-200 shadow-md rounded" onSubmit={handleSubmit}>
                <div className="text-center mb-10">
                    <h2 className="font-bold text-3xl text-gray-500">Register Company</h2>
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="company_name">Name</label>
                    <input  id="company_name" type="text" name="company_name" onChange={(e)=>setData({...data, company_name:e.target.value})} required/>
                    {error.company_name && <p className="mb-2 text-red-600">{error.company_name}</p>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2" htmlFor="headquarter">Headquarter</label>
                    <input id="headquarter" type="text" name="headquarter" onChange={(e)=>setData({...data, headquarter:e.target.value})} required /> 
                    {error.headquarter && <p className="mb-2 text-red-600">{error.headquarter}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="founded" >Founded</label>
                    <input id="founded" type="number"  name="founded" onChange={(e)=>setData({...data, founded:e.target.value})} required/> 
                    {error.founded && <p className="mb-2 text-red-600">{error.founded}</p>}
                </div>
                <div className="mb-4 flex-col">
                    <label className="block mb-2" htmlFor="owner" >Owner</label>
                    <input id="owner" type="text"  name="owner"  onChange={(e)=>setData({...data, owner:e.target.value})} required/> 
                    {error.owner && <p className="mb-2 text-red-600">{error.owner}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="website">Website</label>
                    <input id="website" type="text" name="website" onChange={(e)=>setData({...data, website:e.target.value})}/> 
                    {error.website && <p className="mb-2 text-red-600">{error.website}</p>}
                </div>
                <div className="flex justify-between mb-4 space-x-8">
                    <label className="block mb-2" htmlFor="logo"></label>
                    <input className="ml-2" id="logo" type="file" name="logo"  onChange={({ target: { validity, files: [file] } })=>validity.valid && setData({...data, logo:file})}/>
                    {error.logo && <p className="mb-2 text-red-600">{error.logo}</p>}
                </div>
                <div className="flex items-center justify-between mb-4 space-x-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register
                        </button>
                </div>
                </form>
    </div>)
}
export default RegisterCompany;