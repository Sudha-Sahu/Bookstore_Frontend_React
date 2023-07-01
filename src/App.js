import './App.css';
import Signup from './Components/User/userSignUp'
import Signin from './Components/User/userSignIn'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import Routes from './Components/Route/route'

function App() {
  return (
    <div>
      {/* <Signup /> */}
      {/* <Signin /> */}
      <Header />
      <Routes /> 
      
      <Footer />
    </div>
  );
}

export default App;
