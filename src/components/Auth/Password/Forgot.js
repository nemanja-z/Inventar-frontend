import React from "react";


const Forgot = () => {


    return(
			<div>
				<Nav />
				<div className="container">
				    <div className="row">
				        <div className="col-md-8 col-md-offset-2">
				            <div className="panel panel-default">
				                <div className="panel-heading">Reset Password</div>
				                <div className="panel-body">
				                	<div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                    </div>  
				                    <form className="form-horizontal" role="form" method="POST">
				                        <div className="form-group">
				                            <label for="email" className="col-md-4 control-label">E-Mail Address</label>

				                            <div className="col-md-6">
				                                <input id="email" type="email" ref= "email" className="form-control" name="email"required />
				                            </div>
				                        </div>

				                        <div className="form-group">
				                            <div className="col-md-6 col-md-offset-4">
				                                <button type="submit" className="btn btn-primary">
				                                    Send Password Reset Link
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

export default Forgot;