import React, {useState} from "react";
import api from '../../../services/api';
import getCookie from '../../../utils/cookie';

const Login = () =>{
    const [data, setData] = useState({email:"", password:""});
    const handleSubmit = async(e) =>{
        try{
            e.preventDefault();
            await getCookie();
            await api().post('api/login');
            await api().post("api/user");
        }catch(e){
            console.log(e)
        }
    }
    return(
        <div >
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Login</div>
                                <div className="panel-body">   
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                    
                                    </div>  
                                    <form className="form-horizontal" onSubmit={handleSubmit} method="POST">
                                        <div className="form-group">
                                            <label htmlFor="email" className="col-md-4 control-label">Email</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" className="form-control" name="email"   required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" className="col-md-4 control-label">Password</label>

                                            <div className="col-md-6">
                                                <input id="password" type="password" className="form-control" name="password" required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="remember" /> Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-8 col-md-offset-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Login
                                                </button>

                                                <li className="btn btn-link">
                                                    Forgot Your Password?
                                                </li>
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
export default Login;