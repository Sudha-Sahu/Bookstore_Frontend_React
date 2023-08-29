import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./userCss.css";
import BackgroundImage from "./commonPart";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const UserSignIn = () => {
    // const url = "http://localhost:5500/user";
    // const [data, setData] = useState([]);
    // const fetchInfo = () => {
    //   return axios.get(url).then((res) => setData(res.data));
    // };

    // useEffect(() => {
    //   fetchInfo();
    // }, []);
    // console.log("data", data)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            axios.post('http://localhost:5500/auth/login', {
                ...values
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    });
    return (
        <div className="d-flex align-items-center parent">
            <BackgroundImage title={"Online Book Shopping"} />

            <div className="child2">
                <div className="ms-5 subchild">
                    <form onSubmit={formik.handleSubmit}>
                        <span className="h1 fw-bold">Sign In</span>

                        <h5 className="fw-normal" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                        <div className="form-outline mt-4">
                            <label className="form-label">Email Id</label>
                            <input name="email" type="email" className="form-control" style={{ width: "24rem" }} onChange={formik.handleChange}
                                value={formik.values.email} />
                        </div>

                        <div className="form-outline mt-3">
                            <label className="form-label">Password</label>
                            <input name="password" type="password" className="form-control" style={{ width: "24rem" }} onChange={formik.handleChange}
                                value={formik.values.password} />
                        </div>

                        <div className="mt-4 mb-2">
                            <button className="btn btn-lg btn-block btn-l" style={{ backgroundColor: "#A03037", color: "#fff", width: "24rem" }}>Sign In</button>
                        </div>
                    </form>
                    <Link className="small text-muted" href="#!">Forgot password?</Link>
                    <p className="mt-2 lg-2 register_text">Don't have an account?
                        <Link to="/signup">Register here</Link>
                    </p>
                    <Link href="#!" className="small text-muted">Terms of use.Privacy policy</Link>
                </div>
            </div>
        </div>
    )
}

export default UserSignIn;