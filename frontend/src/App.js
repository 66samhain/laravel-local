import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./partials/Navbar";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Register from "./routes/auth/Register";
import Login from "./routes/auth/Login";
import { useEffect } from "react";
import { useStore } from "./store/store";
import Page from "./partials/Page";

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
                                <Route path="/" element={ <Page page={ pages[0] } /> } />

                                { user?.id ?
                                    <>
                                        { pages.slice(1).map(page => {
                                            return <Route path={ '/' + page.name } element={ <Page page={ page } /> } />
                                        }) }
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
