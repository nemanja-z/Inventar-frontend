import React, {useState} from "react";
import api from '../../../services/api';
import cookie from '../../../services/cookie';


const Forgot = () => {
	const [email, setEmail] = useState("");

	const handleForgot =async(e)=>{
		try{
			e.preventDefault();
			await cookie();
			await api().post('api/forgot-password', {email});

		}catch(e){
			console.log(e);
		}
	}

    return(
			<div className="md:flex md:justify-center mt-6 mb-6">
				<form className="flex flex-col items-center bg-gray-200 shadow-md rounded" onSubmit={handleForgot}>
					<div className="mb-4">
						<label for="email" className="block mb-2">E-Mail Address</label>
						<input id="email" type="email" name="email" onChange={e=>setEmail(e.target.value)} required />
					</div>
					<div>
							<button type="submit" className="font-bold text-sm text-blue-500 hover:text-blue-800">
								Send Password Reset Link
							</button>
					</div>
				</form>
			</div>
			)
}

export default Forgot;