import { Link } from "react-router-dom";
import { useStore } from "../store/store";
import Logout from "../routes/auth/Logout";

export default function Navbar() {
    const user = useStore((state) => state.user);

    return (
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <Link to={'/'} className="navbar-brand">Start Bootstrap</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item"><Link to={'/'} className="nav-link px-lg-3 py-3 py-lg-4">Home</Link></li>


                            { user?.id ?
                                <>
                                    <li className="nav-item"><Link to={'/services'} className="nav-link px-lg-3 py-3 py-lg-4">Services</Link></li>
                                    <li className="nav-item"><Link to={'/contact'} className="nav-link px-lg-3 py-3 py-lg-4">Contact</Link></li>
                                    <Logout />
                                </>
                                :
                                <>
                                    <li className="nav-item"><Link to={'/login'} className="nav-link px-lg-3 py-3 py-lg-4">Log In</Link></li>
                                    <li className="nav-item"><Link to={'/register'} className="nav-link px-lg-3 py-3 py-lg-4">Register</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );
}
