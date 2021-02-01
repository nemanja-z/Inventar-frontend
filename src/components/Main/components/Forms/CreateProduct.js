import React, {useState} from "react";
import api from '../../../../services/api';
import cookie from '../../../../services/cookie';


const fields={
    'name':"",
    'category':"",
    'stock':"",
    'min_stock':"",
    'max_stock':"",
    'price':"",
    'distributor':"",
    'manufacturer':"",
    'picture':""
}
const CreateProduct = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(fields);
    const formData = new FormData();
    
    Object.keys(data).forEach(k=>{
        console.log({[k]:data[k]})
        formData.append(k, data[k])
        });

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await cookie();
            const {data} = await api().post('api/product', formData);
            console.log(data)
        }catch{

        }
    }
    return(
        <div className="md:flex md:justify-center mt-6 mb-6">
        <div className="text-center mb-10 absolute">
                      
             <form className="flex flex-col items-center bg-gray-200 shadow-md rounded" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">Name</label>
                    <input  id="name" type="text" name="name" onChange={e=>setData({...data, name:e.target.value})} required/>
                    {error.name && <p className="mb-2 text-red-600">{error.name}</p>}
                </div>

                <div className="mb-4">
                    <label className="block mb-2" htmlFor="category">Category</label>
                    <input id="category" type="text" name="category" onChange={e=>setData({...data, category:e.target.value})} required /> 
                    {error.category && <p className="mb-2 text-red-600">{error.category}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="stock" >Stock</label>
                    <input id="stock" type="number"  name="stock" onChange={e=>setData({...data, stock:e.target.value})} required/> 
                    {error.stock && <p className="mb-2 text-red-600">{error.stock}</p>}
                </div>
                <div className="mb-4 flex-col">
                    <label className="block mb-2" htmlFor="min_stock" >Min_stock</label>
                    <input id="min_stock" type="number"  name="min_stock"  onChange={e=>setData({...data, min_stock:e.target.value})}/> 
                    {error.min_stock && <p className="mb-2 text-red-600">{error.min_stock}</p>}
                </div>
                <div className="mb-4 flex-col">
                    <label className="block mb-2" htmlFor="max_stock" >Max_stock</label>
                    <input id="max_stock" type="number"  name="max_stock"  onChange={e=>setData({...data, max_stock:e.target.value})}/> 
                    {error.max_stock && <p className="mb-2 text-red-600">{error.max_stock}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="phone">Price</label>
                    <input id="price" type="number" name="price" onChange={e=>setData({...data, price:e.target.value})}/> 
                    {error.price && <p className="mb-2 text-red-600">{error.price}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="distributor">Distributor</label>
                    <input id="distributor" type="text" name="distributor" onChange={e=>setData({...data, distributor:e.target.value})}/> 
                    {error.distributor && <p className="mb-2 text-red-600">{error.distributor}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="manufacturer">Manufacturer</label>
                    <input id="manufacturer" type="text" name="manufacturer" onChange={e=>setData({...data, manufacturer:e.target.value})}/> 
                    {error.manufacturer && <p className="mb-2 text-red-600">{error.manufacturer}</p>}
                </div>
                <div className="flex justify-between mb-4 space-x-8">
                    <label className="block mb-2" htmlFor="picture"></label>
                    <input className="ml-2" id="picture" type="file" name="picture"  onChange={({ target: { validity, files: [file] } })=>validity.valid && setData({...data, picture:file})}/>
                    {error.picture && <p className="mb-2 text-red-600">{error.picture}</p>}
                </div>
                <div className="flex items-center justify-between mb-4 space-x-2">
                
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Add product
                        </button>
                </div>
            </form>
    </div>
    </div>
    )
}

export default CreateProduct;