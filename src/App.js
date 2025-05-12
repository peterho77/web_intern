import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MainMenu from './components/MainContent'
import Content from './components/Content'
import Navigation from './components/Navigation'
import Login from './components/Login'
import ProductList from './components/ProductList'

import Cart from './components/Cart'


function App() {
  return (
    <>
      <Login/>
      <Header/>
      <Navigation/>
      <div className="main">
        <Content text="content 1" number={7} active={true}/>
        <MainMenu/>
        <Content text="content 2" number={5} active={false}/>
      </div>
      <div className="box">
        <ProductList/>
      </div>
      <Footer/>
      <Cart/>
    </>
  );
}

export default App;
