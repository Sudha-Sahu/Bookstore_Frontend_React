import React from "react";
import './book.css';

class Book extends React.Component {

    render() {
        return (
            <div>
                {/* Book Part */}
                <div className="d-flex justify-content-center">
                    <div className="container ">
                        <div className="row pt-2">
                            <div className="col">
                                <h5 className="pt-3">Books</h5>
                            </div>
                            <div className="col text-end dropdown pe-5 drop">
                                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort by Relevance
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#!">Price: Low to High</a></li>
                                    <li><a className="dropdown-item" href="#!">Price: High to Low</a></li>
                                    <li><a className="dropdown-item" href="#!">Newest Arrivals</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="d-flex pt-1">
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 box">
                                <div className="t-box item">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 box">
                                <div className="t-box item">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 me-5 box">
                                <div className="t-box">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                            <div className="col-3 box">
                                <div className="t-box item">
                                    <img src="./assets/Image 11@2x.png" alt="" className="img-fluid mt-3 mb-3 img-b" />
                                </div>
                                <div className="b-box px-3 py-1">
                                    <h4 className="card-title">bookname</h4>
                                    <p className="card-content py-1">by author name</p>
                                    <div className="btn btn-success">4.6</div>
                                    <p className="py-2">Rs.1200</p>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="mt-5">
                            <ul className="pagination justify-content-center">
                                <li className="page-item me-5 arrow">
                                    <a className="page-link" href="#!">
                                        <span>{' < '}</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                <li className="page-item"><a className="page-link" href="#!">4</a></li>
                                <li className="page-item me-5"><a className="page-link" href="#!">5</a></li>
                                <li className="page-item arrow">
                                    <a className="page-link" href="#!">
                                        <span>{' > '}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;