import React from "react";
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-around">
                <img src="./assets/book_collage2.jpg" alt="" className="banner_img" />
                <div>
                    <img src="./assets/online-library-flat-composition-with-electronic-book-man-reading-book-tablet-home-illustration_1284-62006.jpg" alt="" className="banner_img1" />
                    <section className="text_section">
                        <h4 className="home_text">WHAT BOOK ARE YOU LOOKING FOR?</h4>
                        <p className="home_text">Not sure what to read next? Explore our new products</p>
                        <h6 className="home_text" href="">Explore Now.......</h6>
                    </section>
                </div>
            </div>
        )
    }
}

export default Home;