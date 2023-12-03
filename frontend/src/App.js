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
    const isLoading = useStore((state) => state.isLoading);
    const user = useStore((state) => state.user);
    const pages = useStore((state) => state.pages);
    const getPages = useStore((store) => store.getPages);

    useEffect(() => {
        getPages().then(() => {});
    }, []);

    return (
        <>
            { isLoading ? <div></div> :
                <>
                    <Router>
                        <div className="App">
                            <Navbar />

                            <Header />

                            <Routes>
                                <Route path="/" element={ <Home page={ pages[0] } /> } />

                                { user?.id ?
                                    <>
                                        <Route path="/services" element={ <Services page={ pages[1] } /> } />
                                        <Route path="/contact" element={ <Contact page={ pages[2] } /> } />
                                    </>
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
