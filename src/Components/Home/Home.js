import React from "react";
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="parent">
                {/* <section className="child1"> */}
                    
                    <div className="div_img1">
                        <img src="./assets/istockphoto-1149476539-1024x1024.jpg" alt="" className="banner_img1" />
                        <img src="./assets/istockphoto-1149476843-612x612.jpg" alt="" className="banner_img2" />
                    </div>
                    <div className="div_img2 d-flex justify-content-around">
                        <img src="./assets/istockphoto-1329658145-612x612.jpg" alt="" className="banner_img" />
                        <section className="text_div">
                            <h1>WHAT BOOK ARE YOU LOOKING FOR?</h1>
                            <p>Not sure what to read next? Explore our new products....</p>
                            <button type="button" class="btn btn-outline-primary">Explore Now</button>
                        </section>
                        
                    </div>
                    <div className="div_img3">
                    <img src="./assets/istockphoto-1362899701-1024x1024.jpg" alt="" className="banner_img3" />
                    <img src="./assets/istockphoto-1212591348-1024x1024.jpg" alt="" className="banner_img4" />
                    </div>
                    
                {/* </section> */}
            </div>
        )
    }
}

export default Home;