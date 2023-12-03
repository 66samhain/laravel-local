import '../../App.css';
import { Link } from "react-router-dom";

export default function Register() {

    return (
        <>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>Please fill in this form to create an account.</p>
                            <div className="my-5">
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    <div className="form-floating">
                                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label htmlFor="name">Name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" />
                                        <label htmlFor="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="password" type="password" placeholder="Enter your password..." data-sb-validations="required,password" />
                                        <label htmlFor="password">Password</label>
                                        <div className="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="password:password">password is not valid.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="password-confirm" type="password" placeholder="Confirm password..." data-sb-validations="required,password" />
                                        <label htmlFor="password-confirm">Confirm password</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A password is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="password:password">password is not valid.</div>
                                    </div>
                                    <br />
                                    <button className="btn btn-primary text-uppercase disabled" id="submitButton" type="submit">Register my account</button>
                                </form>
                            </div>
                            <p>Already have an account? <Link to={'/login'}>Log in!</Link></p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
