import React from "react";

const Reset = () =>{


    return(
			<div>
			    <div className="container">
			        <div className="row">
			            <div className="col-md-8 col-md-offset-2">
			                <div className="panel panel-default">
			                    <div className="panel-heading">Reset Password</div>
			                    <div className="panel-body">
			                    	<div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        
                                    </div>  
			                        <form className="form-horizontal" role="form">
			                            <div className="form-group">
			                                <label for="email" className="col-md-4 control-label">E-Mail Address</label>

			                                <div className="col-md-6">
			                                    <input id="email" type="email" className="form-control" ref="email" name="email" required autofocus />
			                                </div>
			                            </div>

			                            <div className="form-group">
			                                <label for="password" className="col-md-4 control-label">Password</label>

			                                <div className="col-md-6">
			                                    <input id="password" type="password" className="form-control" ref="password" name="password"  required />
			                                </div>
			                            </div>

			                            <div className="form-group">
			                                <label for="password-confirm" className="col-md-4 control-label">Confirm Password</label>
			                                <div className="col-md-6">
			                                    <input id="password-confirm" type="password" className="form-control" ref="confirm" name="password_confirmation" required />
			                                </div>
			                            </div>

			                            <div className="form-group">
			                                <div className="col-md-6 col-md-offset-4">
			                                    <button type="submit" className="btn btn-primary">
			                                        Reset Password
			                                    </button>
			                                </div>
			                            </div>
			                        </form>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>

			)
}
export default Reset;