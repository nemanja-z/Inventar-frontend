import React, {useState} from "react";
import api from '../../../../services/api';
import cookie from '../../../../services/cookie';


const fields = {
    address:"",
    email:"",
    phone:"",
    discount:""
};
const CreateCustomer = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(fields);
    const formData = new FormData();
    Object.keys(data).forEach(k=>formData.append(k, data[k]));

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
          await cookie();
          await api().post('api/customer', formData);  
        }catch(e){
            console.log(e);
        }
    }
    return(
        <div className="md:flex md:justify-center mt-6 mb-6">
        <div className="text-center mb-10 absolute">
                      
             <form className="flex flex-col items-center bg-gray-200 shadow-md rounded" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">Address</label>
                    <input  id="address" type="text" name="address" onChange={e=>setData({...data, address:e.target.value})} required/>
                    {error.address && <p className="mb-2 text-red-600">{error.address}</p>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" onChange={e=>setData({...data, email:e.target.value})} required /> 
                    {error.email && <p className="mb-2 text-red-600">{error.email}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="stock" >Phone</label>
                    <input id="phone" type="number"  name="phone" onChange={e=>setData({...data, phone:e.target.value})} required/> 
                    {error.phone && <p className="mb-2 text-red-600">{error.phone}</p>}
                </div>
                <div className="mb-4 flex-col">
                    <label className="block mb-2" htmlFor="discount" >Discount</label>
                    <input id="discount" type="number"  name="discount"  onChange={e=>setData({...data, discount:e.target.value})}/> 
                    {error.discount && <p className="mb-2 text-red-600">{error.discount}</p>}
                </div>
                <div className="flex items-center justify-between mb-4 space-x-2">
                
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Add Customer
                        </button>
                </div>
            </form>
    </div>
    </div>
    )
}

export default CreateCustomer;