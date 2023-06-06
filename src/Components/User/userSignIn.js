import React from "react";
// import axios from 'axios';
import "./userCss.css";
import BannerImage from "./CommonPart";

class UserSignIn extends React.Component {

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

    render() {
        return (
            <div className="d-flex justify-content-start parent">
                {/* {this.handleUserSignIn()}; */}
                {/* <div className="d-flex justify-content-center">
                    <div className="container"> */}
                      <BannerImage title={"Online Book Shopping"}/>
                        <div className="d-flex align-items-center child2">
                            <form className="ms-5">

                                {/* <div className="d-flex align-items-center"> */}
                                    <span className="h1 fw-bold">Sign In</span>
                                {/* </div> */}

                                <h5 className="fw-normal" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                <div className="form-outline mt-4">
                                    <label className="form-label" for="form2Example17">Email Id</label>
                                    <input type="email" id="form2Example17" className="form-control" style={{width:"24rem"}}/>
                                </div>

                                <div className="form-outline mt-3">
                                    <label className="form-label" for="form2Example27">Password</label>
                                    <input type="password" id="form2Example27" className="form-control" style={{width:"24rem"}}/>
                                </div>

                                <div className="mt-4 mb-2">
                                    <button className="btn btn-lg btn-block btn-l" type="button" style={{ backgroundColor: "#A03037",color:"#fff", width:"24rem" }}>Sign In</button>
                                </div>

                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mt-2 lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="#!"
                                    style={{ color: "#393f81" }}>Register here</a></p>
                                <a href="#!" className="small text-muted">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                            </form>
                        {/* </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default UserSignIn;