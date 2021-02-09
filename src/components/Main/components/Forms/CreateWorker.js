import React, {useState, useContext} from "react";
import api from '../../../../services/api';
import cookie from '../../../../services/cookie';
import {GlobalStateContext} from '../../../../state/Store';
import {GlobalDispatchContext} from '../../../../state/Store';


const fields = {
    name:"",
    email:"",
    phone:""
}
const CreateWorker = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(fields);
    const formData = new FormData();
    const {company} = useContext(GlobalStateContext);
    const {dispatchWorker} = useContext(GlobalDispatchContext);
    formData.set("company_name", company.company_name);
    Object.keys(data).forEach(k=>{
        formData.set(k, data[k]);
        });

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await cookie();
            const {data:{data:response}} = await api().post('api/worker', formData);
            if(response){
                dispatchWorker({type:'add', payload:response})
            }
        }catch{

        }
    }
    return(
        <div className="md:flex md:justify-center mt-6 mb-6">
        <div className="text-center mb-10 absolute">
                      
             <form className="flex flex-col items-center bg-gray-200 shadow-md rounded" onSubmit={handleSubmit}>
             <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" onChange={e=>setData({...data, name:e.target.value})} required /> 
                    {error.name && <p className="mb-2 text-red-600">{error.name}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Email</label>
                    <input  id="email" type="email" name="email" onChange={e=>setData({...data, email:e.target.value})} required/>
                    {error.email && <p className="mb-2 text-red-600">{error.email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Phone</label>
                    <input  id="phone" type="number" name="phone" onChange={e=>setData({...data, phone:e.target.value})} required/>
                    {error.phone && <p className="mb-2 text-red-600">{error.phone}</p>}
                </div>
                
                <div className="flex items-center justify-between mb-4 space-x-2">
                
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Add worker
                        </button>
                </div>
            </form>
    </div>
    </div>
    )
}

export default CreateWorker;