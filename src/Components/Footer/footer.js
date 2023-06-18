import React from "react";
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid footer">
                    <div className="row primary">
                        <div className="column about">
                            <h3>Creative Designers</h3>
                            <p>
                                Summer Fashion is place were anyone from anywere in this world buy any kind
                                of fashion products with ease.
                            </p>
                            <div className="social">
                                <img className="brands" src="./assets/instagram.png" alt="Instagram" width="25" height="25" />
                                <img className="brands" src="./assets/facebook.png" alt="Facebook" width="25" height="25" />
                                <img className="brands" src="./assets/twitter.png" alt="Twitter" width="25" height="25" />
                                <img className="brands" src="./assets/youtube.png" alt="Youtube" width="25" height="25" />
                                <img className="brands" src="./assets/pinterest.png" alt="Pinterest" width="25" height="25" />
                            </div>
                        </div>
                        <div className="column links">
                            <h3>Some Links</h3>
                            <ul>
                                <li>
                                    <a href="#faq">F.A.Q</a>
                                </li>
                                <li>
                                    <a href="#cookies-policy">Cookies Policy</a>
                                </li>
                                <li>
                                    <a href="#terms-of-services">Terms Of Service</a>
                                </li>
                                <li>
                                    <a href="#support">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row copyright">
                        <p>Copyright &copy; 2023 Creative Designers</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;