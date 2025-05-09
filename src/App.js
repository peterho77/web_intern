import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MainMenu from './components/MainContent'
import Content from './components/Content'

function App() {
  return (
    <>
      <Header/>
      <div className="main">
        <Content text="content 1" number={7} active={true}/>
        <MainMenu/>
        <Content text="content 2" number={5} active={false}/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
