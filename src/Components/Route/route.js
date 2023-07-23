import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Cart from '../Cart/cart';
import Books from '../Books/book';
import Header from '../Header/header';
import Footer from '../Footer/footer'
import Signin from '../User/userSignIn';
import Signup from '../User/userSignUp';
import About from '../About/about';

const Router = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>           
                <Route path="/" element={<Home />} />
                <Route path="/about" exact component={About} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/books" element={<Books />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />          
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default Router;