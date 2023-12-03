import axios from "axios";
import './App.css';
import Home from "./routes/Home";
import React from "react";
import Contact from "./routes/Contact";
import Services from "./routes/Services";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./partials/Navbar";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

function App() {
    const [pages, setPages] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
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
