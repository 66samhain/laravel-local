import { useStore } from "../../store/store";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    const doLogout = useStore((store) => store.doLogout);

    function logout() {
        doLogout().then(() => {
            navigate('/');
        });
    }

    return (
        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" style={{ cursor: 'pointer' }} onClick={ logout }>Log Out</a></li>
    );
}

export default Logout;
