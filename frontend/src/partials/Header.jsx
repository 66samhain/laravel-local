import background from '../img/home-bg.jpg';

export default function Header() {

    return (
        <header className="masthead" style={{ backgroundImage: `url(${background})` }}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>ITech</h1>
                            <span className="subheading">We offer solutions for your IT demands.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
