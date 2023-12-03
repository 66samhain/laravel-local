import '../../App.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "../../store/store";

export default function Register() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const doRegister = useStore((store) => store.doRegister);
    const navigate = useNavigate();

    function register() {
        const userData = {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword
        }

        doRegister(userData).then(() => {
            navigate('/');
        });
    }

    return (
        <>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>Please fill in this form to create an account.</p>
                            <div className="my-5">
                                <div className="form-floating">
                                    <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required"
                                           onChange={ (event) => { setName(event.target.value) } }/>
                                    <label htmlFor="name">Name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
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
                                <div className="form-floating">
                                    <input className="form-control" id="password_confirmation" type="password" placeholder="Confirm password..." data-sb-validations="required,password"
                                           onChange={ (event) => { setConfirmPassword(event.target.value) } }/>
                                    <label htmlFor="password_confirmation">Confirm password</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A password is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="password:password">password is not valid.</div>
                                </div>
                                <br />
                                <button className="btn btn-primary text-uppercase" id="submitButton" onClick={ register }>Register my account</button>
                            </div>
                            <p>Already have an account? <Link to={'/login'}>Log in!</Link></p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
