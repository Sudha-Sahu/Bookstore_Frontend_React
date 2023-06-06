import React from "react";
import "./userCss.css";
import BackgroundImage from "./commonPart";
import { useFormik } from 'formik';
import axios from "axios"

const UserSignUp = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            axios.post('http://localhost:5500/add_user', {
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
        <form onSubmit={formik.handleSubmit}>
            <div className="d-flex align-items-center parent">
                {/* part1 */}
                <BackgroundImage title={"Online Book Shopping"} />

                {/* part2 */}
                <div className="child2">
                    <div className="ms-5 subchild">
                        <span className="h1 fw-bold">Sign Up</span>
                        <h5 className="fw-normal" style={{ letterSpacing: "1px" }}>Register your account</h5>

                        <div className="form-outline mt-4">
                            <label className="form-label" for="">Username</label>
                            <input name="username" type="text" className="form-control" style={{ width: "24rem" }} onChange={formik.handleChange}
                                value={formik.values.username} />
                        </div>

                        <div className="form-outline mt-4">
                            <label className="form-label" for="">Email Id</label>
                            <input name="email" type="email" className="form-control" style={{ width: "24rem" }} onChange={formik.handleChange}
                                value={formik.values.email} />
                        </div>

                        <div className="form-outline mt-3">
                            <label className="form-label" for="">Password</label>
                            <input name="password" type="password" className="form-control" style={{ width: "24rem" }} onChange={formik.handleChange}
                                value={formik.values.password} />
                        </div>

                        <div className="mt-4 mb-2">
                            <button className="btn btn-lg btn-block btn-l" style={{ backgroundColor: "#A03037", color: "#fff", width: "24rem" }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UserSignUp;
