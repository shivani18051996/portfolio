
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import MyTimeLine from "./components/MyTimeLine";
import Skills from "./components/Skills";
import MyProject from "./components/MyProject";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4">
      <Header />
      <Home />
      <About/>
      <MyTimeLine/>
      <Skills/>
      <MyProject/>
      <Contact/> 
      </div>
    </div>
  );
}

export default App;
