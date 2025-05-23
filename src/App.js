import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MainMenu from './components/MainContent'
import Content from './components/Content'
import Navigation from './components/Navigation'
import Login from './components/Login'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import UseEffect1 from './components/UseEffect1'
// import UseEffect2 from './components/UseEffect2'
import UseEffect3 from './components/UseEffect3'
import TabList from './components/TabList'
import UseRef from './components/UseRef'
import RandomGift from './components/UseRef2'
import UseRef3 from './components/UseRef3'
import UseReducer1 from './components/UseReducer'
import UseReducer2 from './components/UseReducer2'
import Todos from './components/Todos'


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
      <UseEffect1/>
      {/* <UseEffect2/> */}
      <UseEffect3/>
      <TabList/>
      <UseRef/>
      <RandomGift/>
      <UseRef3/>
      <UseReducer1/>
      <UseReducer2></UseReducer2>
      <Todos></Todos>
    </>
  );
}

export default App;
