import React from "react";
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid main_div">
                <div className="row">
                    <div>
                        <h3>BookStore - A world of books</h3>
                        <p>
                            A bookstore is a place to be able to buy and sell books quickly.
                            These stores also purchase and sell second hand or use books.
                            There are lots of books in a bookstore with different types of books such as literature, poetry, fiction, non-fiction and related to every specific topic.
                        </p>
                    </div>
                    <div className="col-2">
                        <h4 className="book_text">Get to Know Us:</h4>
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
                    <div className="col">
                        <h4 className="book_text">Get connected with us on social networks:</h4>
                        <div>
                            <img className="brand_icon" src="./assets/instagram.png" alt="Instagram" width="25" height="25" />
                            <img className="brand_icon" src="./assets/facebook.png" alt="Facebook" width="25" height="25" />
                            <img className="brand_icon" src="./assets/twitter.png" alt="Twitter" width="25" height="25" />
                            <img className="brand_icon" src="./assets/youtube.png" alt="Youtube" width="25" height="25" />
                            <img className="brand_icon" src="./assets/pinterest.png" alt="Pinterest" width="25" height="25" />
                        </div>
                    </div>
                    <div className="col">
                        <h4 className="book_text">Connect with Us:</h4>
                        <p>
                            Online Bookstore Private Limited,
                            Buildings Alyssa, Begonia &
                            Clove Embassy Tech Village,
                            Outer Ring Road, Devarabeesanahalli Village,
                            Bengaluru, 560103,
                            Karnataka, India
                        </p>
                    </div>
                    <div className="col">
                        <h4 className="book_text">Registered Office Address:</h4>
                        <p>
                            Online Bookstore Private Limited,
                            Buildings Alyssa, Begonia &
                            Clove Embassy Tech Village,
                            Outer Ring Road, Devarabeesanahalli Village,
                            Bengaluru, 560103,
                            Karnataka, India
                            CIN : U51109KA2012PTC066107
                            Telephone: 044-45614700
                        </p>
                    </div>
                    <div class="text-center row_copyright">
                        Copyright &copy; 2023 BookStore
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;