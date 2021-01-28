import React, {useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import api from '../../../services/api';
import cookie from '../../../services/cookie';

const fields = {
		email:"",
		password:"",
		password_confirmation:""
	};
const Reset = () =>{
	const [data, setData] = useState(fields);
	const {token} = useParams();
	const history = useHistory();
	const formData = new FormData();
	formData.append("email", data.email);
	formData.append("password", data.password);
	formData.append("password_confirmation", data.password_confirmation);
	formData.append("token", token);

	const handleReset = async(e)=>{
		try{
			e.preventDefault();
			await cookie();
			const {data:{success}} = await api().post('api/reset-password', formData);
			if(success){
				history.push('/login');
				setData(fields);
			}
		}catch(e){
			console.log(e);
		}
	}

    return(
			<div className="md:flex md:justify-center mt-6 mb-6">
			
				<form className="flex flex-col items-center bg-gray-200 shadow-md rounded" onSubmit={handleReset}>
					<div >
						<label htmlFor="email" className="block mb-2">E-Mail Address</label>
							<input id="email" type="email" name="email" required onChange={e=>setData({...data, email:e.target.value})} autoFocus />
					</div>

					<div >
						<label htmlFor="password" className="block mb-2">Password</label>
						<input id="password" type="password" name="password" onChange={e=>setData({...data, password:e.target.value})} required />
					</div>

					<div >
						<label htmlFor="password-confirm" className="block mb-2">Confirm Password</label>
							<input id="password-confirm" type="password" name="password_confirmation" onChange={e=>setData({...data, password_confirmation:e.target.value})} required />
					</div>
					<div >
							<button type="submit" className="font-bold text-sm text-blue-500 hover:text-blue-800">
								Reset Password
							</button>
					</div>
				</form>
			</div>
			)
}
export default Reset;