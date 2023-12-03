import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../App.css';
import { useStore } from "../../store/store";

export default function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const doLogin = useStore((store) => store.doLogin);
    const navigate = useNavigate();

    function login() {
        const userData = {
            email: email,
            password: password
        }

        doLogin(userData).then(() => {
            navigate('/');
        });
    }

    return (
        <>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>Please fill out your credentials.</p>
                            <div className="my-5">
                                <div className="form-floating">
                                    <input className="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email"
                                           onChange={ (event) => { setEmail(event.target.value) } } />
                                    <label htmlFor="email">Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div className="form-floating">
                                    <input className="form-control" id="password" type="password" placeholder="Enter your password..." data-sb-validations="required,password"
                                           onChange={ (event) => { setPassword(event.target.value) } }/>
                                    <label htmlFor="password">Password</label>
                                    <div className="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="password:password">password is not valid.</div>
                                </div>
                                <br />
                                <button className="btn btn-primary text-uppercase" id="submitButton" onClick={ login }>Log In</button>
                            </div>
                            <p>Don't have an account? <Link to={'/register'}>Register here!</Link></p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
