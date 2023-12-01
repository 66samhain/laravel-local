import { useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    const path = location.pathname;

    function getProps() {
        let data;

        switch (path) {
            case '/services':
                data = {
                    background: null,
                    heading: null,
                    description: null
                };
                break;
            case '/contact':
                data = {
                    background: null,
                    heading: null,
                    description: null
                };
                break;
            default:
                data = {
                    background: null,
                    heading: 'Clean Blog',
                    description: 'A Blog Theme by Start Bootstrap'
                };
        }

        return data;
    }

    let props = getProps();

    console.log(props)

    console.log(props)

    return (
        <header className="masthead" style={{ backgroundImage: `url(${props.background})` }}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>{ props.heading }</h1>
                            <span className="subheading">{ props.description }</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
