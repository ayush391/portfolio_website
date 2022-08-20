import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
