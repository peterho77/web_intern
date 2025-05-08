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
        <Content/>
        <MainMenu/>
        <Content/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
