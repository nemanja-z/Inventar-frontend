import React, {useState} from "react";
import api from '../../../../services/api';
import cookie from '../../../../services/cookie';


const fields={
    total_price:"",
    status:""
}
const Order = () => {
const [data, setData] = useState({});
    const [error, setError] = useState(fields);
    const formData = new FormData();
    Object.keys(data).forEach(k=>formData.append(k, data[k]));

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
          await cookie();
          const {data:{data:response}}= await api().post('api/order', formData);  
        }catch(e){
            console.log(e);
        }
    }
    return(
        <div className="md:flex md:justify-center mt-6 mb-6">
        <div className="text-center mb-10 absolute">
                      
             <form className="flex flex-col items-center bg-gray-200 shadow-md rounded" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">Price</label>
                    <input  id="total_price" type="number" name="total_price" onChange={e=>setData({...data, total_price:e.target.value})} required/>
                    {error.total_price && <p className="mb-2 text-red-600">{error.total_price}</p>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2" htmlFor="status" onChange={e=>setData({...data, status:e.target.value})} >Status</label>
                    <select name="status" id="status" required>
                    <option value="open">Open</option>
                    <option value="sent">Sent</option>
                    <option value="received">Received</option>
                    <option value="unknown">Unknown</option>
                    <option value="returned">Returned</option>
                    </select>
                    {error.status && <p className="mb-2 text-red-600">{error.status}</p>}
                </div>
                <div className="flex items-center justify-between mb-4 space-x-2">
                
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Create order
                        </button>
                </div>
            </form>
    </div>
    </div>
    )
}


export default Order;