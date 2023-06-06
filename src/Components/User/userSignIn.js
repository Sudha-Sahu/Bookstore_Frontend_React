import React from "react";
// import axios from 'axios';
import "./userCss.css";
import BackgroundImage from "./commonPart";

const UserSignIn = () => {
    // handleUserSignIn = (e) => {
    //     const [post, setPost] = React.useState(null);


    //     axios({
    //         url: 'http://localhost:5500/user',
    //         method: 'Get',
    //         headers: { 'Content-Type': 'application/JSON' }
    //     })
    //         .then(res => {
    //             // this.setState({ user: res.data.restaurants })
    //             setPost(res.data);
    //             console.log(post);
    //         })
    //         .catch((err => console.log(err)))
    // }

    return (
        <div className="d-flex align-items-center parent">
            {/* {this.handleUserSignIn()}; */}
            <BackgroundImage title={"Online Book Shopping"} />

            <div className="child2">
                <div className="ms-5 subchild">
                    <span className="h1 fw-bold">Sign In</span>

                    <h5 className="fw-normal" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                    <div className="form-outline mt-4">
                        <label className="form-label" for="">Email Id</label>
                        <input type="email" className="form-control" style={{ width: "24rem" }} />
                    </div>

                    <div className="form-outline mt-3">
                        <label className="form-label" for="">Password</label>
                        <input type="password" className="form-control" style={{ width: "24rem" }} />
                    </div>

                    <div className="mt-4 mb-2">
                        <button className="btn btn-lg btn-block btn-l" type="button" style={{ backgroundColor: "#A03037", color: "#fff", width: "24rem" }}>Sign In</button>
                    </div>

                    <a className="small text-muted" href="#!">Forgot password?</a>
                    <p className="mt-2 lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="#!"
                        style={{ color: "#393f81" }}>Register here</a></p>
                    <a href="#!" className="small text-muted">Terms of use.</a>
                    <a href="#!" className="small text-muted">Privacy policy</a>
                </div>
            </div>
        </div>
    )
}

export default UserSignIn;