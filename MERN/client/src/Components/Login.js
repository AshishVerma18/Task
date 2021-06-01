import React,{useState}  from 'react';
import {Link,useHistory} from 'react-router-dom';


const Login = () => {
    const history=useHistory();
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("")

    const loginUser=async(e)=>{
        e.preventDefault();
        const res=await fetch('/signin',{
            method:"POST",
         
            headers:{    
                "Content-Type":"application/json",
            },
           
            body:JSON.stringify({
                email,
            password
            })
        })
        const data=await res.json();
        if(res.status===400||!data){
            window.alert("Invalid Credentials");
            console.log("invalid credentials");
        }else{
            window.alert("Iogin Successfull");
            history.push("/")
        }
    }
   
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-center">Login</div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                        <input type="email" className="form-control" name="email" placeholder="Enter Email" value={email} id="email" autoComplete="off" onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password"><i className="zmdi zmdi-key"></i></label>
                                        <input type="password" className="form-control" name="password" placeholder="Enter Password" value={password} id="email" autoComplete="off"onChange={(e)=>setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group form-button">
                                        <input type="submit" name="signin" id="signin" className="form-submit" value="Login" onClick={loginUser}/>

                                        
                                    </div>
                                </form>
                                <Link to="/signup" className="login-link">Create an Account</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>)
}
export default Login;