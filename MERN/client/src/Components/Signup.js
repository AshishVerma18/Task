import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: "",
    });
    const handleInput = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })


    }
    const postData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;
        //calling the method defind in backend
        const res = await fetch("/register", {

            method: "POST",
            
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword

            })

        })

        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Registration unsuccessfull");
            console.log("Registration unsuccessfull");
        } else {
            window.alert(" Registration successfull");
            console.log("Registration successfull");
            //routing to login page if registration successfull
            history.push('/login');

        }

    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card ">
                            <div className="card-header text-center">SignUp</div>
                            <div className="Card-body mt-3">
                                <form className="register-form" id="register-form" method="post">
                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <i className="zmdi zmdi-account"></i>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter your name"
                                            autoComplete="off"
                                            value={user.name}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <i className="zmdi zmdi-email"></i>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter your email"
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">
                                            <i className="zmdi  zmdi-phone-in-talk material-icons-name"></i>
                                        </label>
                                        <input
                                            type="number"
                                            name="phone"
                                            className="form-control"
                                            id="phone"
                                            placeholder="Enter your mobile number"
                                            autoComplete="off"
                                            value={user.phone}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="work">
                                            <i className="zmdi zmdi-slideshow"></i>
                                        </label>
                                        <input
                                            type="text"
                                            name="work"
                                            className="form-control"
                                            id="work"
                                            placeholder="Enter your profession"
                                            autoComplete="off"
                                            value={user.work}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">
                                            <i className="zmdi zmdi-key"></i>
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter your password"
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cpassword">
                                            <i className="zmdi zmdi-key"></i>
                                        </label>
                                        <input
                                            type="password"
                                            name="cpassword"
                                            className="form-control"
                                            id="cpassword"
                                            placeholder="Confirm password"
                                            autoComplete="off"
                                            value={user.cpassword}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="form-group form-button">
                                        <input
                                            type="submit"
                                            className="form-submit"
                                            name="signup"
                                            id="signup"
                                            value="register"
                                            onClick={postData}
                                        />
                                    </div>
                                </form>
                            </div>
                            <Link to="/login" className="signup-link">
                                Regisreted Already.
              </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Signup;
