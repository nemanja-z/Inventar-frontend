import React from "react";

const Reset = () =>{


    return(
			<div className="md:flex md:justify-center mt-6 mb-6">
			
				<form className="flex flex-col items-center bg-gray-200 shadow-md rounded">
					<div >
						<label htmlFor="email" className="block mb-2">E-Mail Address</label>
							<input id="email" type="email" name="email" required autofocus />
					</div>

					<div >
						<label htmlFor="password" className="block mb-2">Password</label>
						<input id="password" type="password" name="password"  required />
					</div>

					<div >
						<label htmlFor="password-confirm" className="block mb-2">Confirm Password</label>
							<input id="password-confirm" type="password" name="password_confirmation" required />
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