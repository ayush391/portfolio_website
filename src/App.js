import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <div class='banner'>
      </div>
      <div className='b'>
        <Header></Header>
        <Projects></Projects>
        <About></About>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
