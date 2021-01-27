import React from "react";

const Reset = () =>{


    return(
			<div>
			<div>Reset Password</div>
			
				<form>
					<div >
						<label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>
							<input id="email" type="email" ref="email" name="email" required autofocus />
					</div>

					<div >
						<label htmlFor="password" className="col-md-4 control-label">Password</label>
						<input id="password" type="password" ref="password" name="password"  required />
					</div>

					<div >
						<label htmlFor="password-confirm" className="col-md-4 control-label">Confirm Password</label>
							<input id="password-confirm" type="password" name="password_confirmation" required />
					</div>
					<div >
							<button type="submit" className="btn btn-primary">
								Reset Password
							</button>
					</div>
				</form>
			</div>
			)
}
export default Reset;