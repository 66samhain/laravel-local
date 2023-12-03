import axios from "axios";
import './App.css';
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Services from "./routes/Services";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./partials/Navbar";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Register from "./routes/auth/Register";
import Login from "./routes/auth/Login";
import { useState,useEffect } from "react";
import { useStore } from "./store/store";

function App() {
    const [pages, setPages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const user = useStore((state) => state.user);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pages').then((response) => {
            setPages(response.data.data);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            {isLoading ? <div></div> :
                <>
                    <Router>
                        <div className="App">
                            <Navbar />

                            <Header />

                            <Routes>
                                <Route path="/" element={ <Home page={ pages[0] } /> } />
                                <Route path="/services" element={ <Services page={ pages[1] } /> } />
                                <Route path="/contact" element={ <Contact page={ pages[2] } /> } />

                                { user?.id ?
                                    null
                                    :
                                    <>
                                        <Route path="/login" element={ <Login /> } />
                                        <Route path="/register" element={ <Register /> } />
                                    </>
                                }

                            </Routes>
                        </div>

                        <Footer />
                    </Router>
                </>
            }
        </>
    );
}

export default App;
